export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink: string;
  sourceLink: string;
  featured: boolean;
  status: 'completed' | 'in-progress';
  progress?: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Inventory Management System",
    description: "A full-featured e-commerce platform with product listings, user authentication. Includes an admin dashboard for product and order management.",
    technologies: ["Python", "Mysql", "RestAPI"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    demoLink: "//",
    sourceLink: "https://github.com/GooonsG/IMPIT",
    featured: false,
    status: "completed"
  },
  {
    id: 2,
    title: "USTP Trail System",
    description: "ustp marketplace is a platform for students to buy and sell items. It features user authentication, product listings, and a chat system for buyers and sellers.",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    image: "src\\img\\123.jpg",
    demoLink: "//",
    sourceLink: "https://github.com/GooonsG/Group-PIT",
    featured: true,
    status: "completed"
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and experiences. Features include a blog section, contact form, and responsive design.",
    technologies: ["React", "Node.js", "Supabase","Tailwind CSS"],
    image: "src\\img\\12.PNG",
    demoLink: "//",
    sourceLink: "https://github.com/GooonsG/SIA-PIT",
    featured: true,
    status: "in-progress",
    progress: 69
  },
];