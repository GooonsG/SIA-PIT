export interface Interest {
  id: number;
  title: string;
  description: string;
  icon: string;
  images: string[];
}

export const interests: Interest[] = [
  {
    id: 1,
    title: "Photography",
    description: "I've been passionate about photography for over 7 years, focusing primarily on street photography and landscapes. I love capturing moments that tell stories and evoke emotions. My photography has been featured in local exhibitions and online platforms.",
    icon: "camera",
    images: [
      "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]
  },
  {
    id: 2,
    title: "Hiking",
    description: "I enjoy exploring nature trails and challenging myself with various terrains. Hiking helps me clear my mind and find inspiration for my creative work. I've completed several notable trails across the country and hope to tackle international routes in the future.",
    icon: "mountain",
    images: [
      "https://images.pexels.com/photos/2755022/pexels-photo-2755022.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]
  },
  {
    id: 3,
    title: "Cooking",
    description: "I find cooking to be a perfect blend of creativity and precision - much like coding. I enjoy experimenting with different cuisines and techniques, particularly Italian and Asian fusion dishes. I host dinner parties regularly to share my culinary experiments with friends.",
    icon: "utensils",
    images: [
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]
  },
  {
    id: 4,
    title: "Learning Languages",
    description: "I'm fascinated by languages and how they shape our thinking. Currently, I'm learning Spanish and Japanese. I practice through language exchange meetups, online courses, and by watching films in their original languages with subtitles.",
    icon: "languages",
    images: [
      "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6953896/pexels-photo-6953896.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]
  }
];