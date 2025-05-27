import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera, Mountain, Languages, Utensils, Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ImageGallery from '../components/ImageGallery';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

const iconMap = {
  camera: Camera,
  mountain: Mountain,
  languages: Languages,
  utensils: Utensils
};

interface Interest {
  id: string;
  title: string;
  description: string;
  icon: string;
  images: string[];
}

const Interests: React.FC = () => {
  const [interests, setInterests] = useState<Interest[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingInterest, setEditingInterest] = useState<Interest | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchInterests();
  }, []);

  const fetchInterests = async () => {
    try {
      const { data, error } = await supabase
        .from('interests')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;
      setInterests(data || []);
    } catch (error) {
      console.error('Error fetching interests:', error);
      toast.error('Failed to load interests');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingInterest({
      id: '',
      title: '',
      description: '',
      icon: 'camera',
      images: []
    });
    setIsEditing(true);
  };

  const handleEdit = (interest: Interest) => {
    setEditingInterest(interest);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('interests')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setInterests(interests.filter(interest => interest.id !== id));
      toast.success('Interest deleted successfully');
    } catch (error) {
      console.error('Error deleting interest:', error);
      toast.error('Failed to delete interest');
    }
  };

  const handleSave = async () => {
    if (!editingInterest) return;

    try {
      if (editingInterest.id) {
        // Update
        const { error } = await supabase
          .from('interests')
          .update({
            title: editingInterest.title,
            description: editingInterest.description,
            icon: editingInterest.icon,
            images: editingInterest.images
          })
          .eq('id', editingInterest.id);

        if (error) throw error;

        setInterests(interests.map(interest => 
          interest.id === editingInterest.id ? editingInterest : interest
        ));
        toast.success('Interest updated successfully');
      } else {
        // Create
        const { data, error } = await supabase
          .from('interests')
          .insert([{
            title: editingInterest.title,
            description: editingInterest.description,
            icon: editingInterest.icon,
            images: editingInterest.images
          }])
          .select();

        if (error) throw error;
        if (data) {
          setInterests([...interests, data[0]]);
          toast.success('Interest created successfully');
        }
      }

      setIsEditing(false);
      setEditingInterest(null);
    } catch (error) {
      console.error('Error saving interest:', error);
      toast.error('Failed to save interest');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section id="interests" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="flex justify-between items-center mb-16">
          <SectionHeading 
            title="Personal Interests" 
            subtitle="Explore the hobbies and activities that inspire my creativity outside of work"
          />
          <motion.button
            onClick={handleCreate}
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus size={20} className="mr-2" />
            Add Interest
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {interests.map((interest, index) => {
            const IconComponent = iconMap[interest.icon as keyof typeof iconMap];
            
            return (
              <motion.div 
                key={interest.id}
                className="card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                      {IconComponent && <IconComponent size={24} />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {interest.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(interest)}
                      className="p-2 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(interest.id)}
                      className="p-2 text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    Gallery
                  </h4>
                  <ImageGallery 
                    images={interest.images} 
                    alt={`${interest.title} photos`} 
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {isEditing && editingInterest && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {editingInterest.id ? 'Edit Interest' : 'Add Interest'}
                </h3>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setEditingInterest(null);
                  }}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={editingInterest.title}
                    onChange={(e) => setEditingInterest({
                      ...editingInterest,
                      title: e.target.value
                    })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description
                  </label>
                  <textarea
                    value={editingInterest.description}
                    onChange={(e) => setEditingInterest({
                      ...editingInterest,
                      description: e.target.value
                    })}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Icon
                  </label>
                  <select
                    value={editingInterest.icon}
                    onChange={(e) => setEditingInterest({
                      ...editingInterest,
                      icon: e.target.value
                    })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700"
                  >
                    <option value="camera">Camera</option>
                    <option value="mountain">Mountain</option>
                    <option value="languages">Languages</option>
                    <option value="utensils">Utensils</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Image URLs (one per line)
                  </label>
                  <textarea
                    value={editingInterest.images.join('\n')}
                    onChange={(e) => setEditingInterest({
                      ...editingInterest,
                      images: e.target.value.split('\n').filter(url => url.trim())
                    })}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700"
                    placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
                  />
                </div>

                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setEditingInterest(null);
                    }}
                    className="btn btn-outline"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="btn btn-primary"
                  >
                    <Save size={20} className="mr-2" />
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Interests;