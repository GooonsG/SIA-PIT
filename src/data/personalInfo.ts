export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  age: number;
  location: string;
  bio: string;
  social: {
    github: string;
    facebook: string;
    instagram: string;
  };
  skills: string[];
  education: Education[];
  avatar: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export const personalInfo: PersonalInfo = {
  name: "Gon Villebes Gonos",
  title: "Ustp IT Student",
  email: "gonos.gon14@gmail.com",
  phone: "09753256369",
  age: 20,
  location: "Piaping Puti, Macabalan, Cagayan de Oro City",
  bio: "I'm an IT student passionate about frontend development. I have a solid foundation in modern web technologies and enjoy creating responsive and user-friendly interfaces. I aim to combine good design with smooth functionality for the best user experience.",
  social: {
    github: "https://github.com/GooonsG",
    facebook: "https://www.facebook.com/IIGONII",
    instagram: "https://www.instagram.com/gooonsg/"
  },
  skills: [
    "React", "JavaScript", "HTML", "CSS", 
    "Tailwind CSS", "PHP", "UI/UX Design", "Responsive Web Design"
  ],
  education: [
    {
      degree: "Bachelor of Science in Infomation Technology",
      institution: "University of Science and Technology of Southern Philippines",
      year: "2023-2025",
      description: "Focused on web development, user interface design, and software engineering principles."
    },
  ],
  avatar: "https://scontent-mnl3-2.xx.fbcdn.net/v/t39.30808-6/493574956_3886690188212558_1681306149668584015_n.jpg?stp=cp6_dst-jpg_s1080x2048_tt6&_nc_cat=107&ccb=1-7&_nc_sid=669761&_nc_eui2=AeFh9zKQfXPwktG-4hrirp_4JA2_hVoFVzEkDb-FWgVXMQOrPWxxO2Z6XUXCEMtk1C-qDn2CxoffGnk3F27h7QtI&_nc_ohc=aLH6_Flw4oEQ7kNvwGsQ9_W&_nc_oc=AdnsURZntccNqRZmRT-PcwS3_0U5DdpX2sGwqceG0Ka9Iny9GbIbhqc9tXb7-kvKNDM&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&_nc_gid=RMmy-qATSgdSoQMZotemlA&oh=00_AfJt2WmwUNo0xZ2J8egiU-0jl0nymibH3ffETOzVpHnTJA&oe=683BA5D2"
};