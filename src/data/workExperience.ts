export interface WorkExperience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
  {
    id: 1,
    company: "McDonald’s Philippines",
    position: "Service Crew",
    duration: "2022 - 2024",
    location: "Infront of Xavier U, CDO",
    description: "Provided excellent customer service in a fast-paced environment, handling food preparation, order taking, and maintaining cleanliness standards.",
    responsibilities: [
      "Prepared and cooked food following McDonald’s standards",
      "Worked efficiently under pressure during peak hours",
      "Ensured cleanliness of kitchen and food prep areas",
      "Practiced food safety, hygiene"
    ],
    technologies: ["LOve"],
    logo: "https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    company: "Remotask",
    position: "Freelance Annotator",
    duration: "2023 - 2024",
    location: "Pabayo St., Cagayan de Oro City",
    description: "Worked on multiple client projects developing responsive web applications and e-commerce solutions.",
    responsibilities: [
      "Ensure accuracy and consistency in tasks",
      "Labeled and annotated images, texts, and 3D data for AI training"
    ],
    technologies: ["Annotator", "Tasker", "Reviewer"],
    logo: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    company: "Freelance",
    position: "Web Developer",
    duration: "2018 - 2020",
    location: "Remote",
    description: "Provided web development services to small businesses and startups, focusing on creating custom websites and web applications.",
    responsibilities: [
      "Designed and developed custom WordPress themes",
      "Created e-commerce solutions for small businesses",
      "Implemented SEO best practices",
      "Provided maintenance and support for client websites"
    ],
    technologies: ["React", "WordPress", "HTML", "CSS", "JavaScript"],
    logo: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];