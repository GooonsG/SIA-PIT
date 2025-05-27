export interface FamilyMember {
  name: string;
  relation: string;
  age: number;
  occupation: string;
  description: string;
  image: string;
}

export const familyMembers: FamilyMember[] = [
  {
    name: "Cathyrine Gonos",
    relation: "Mother",
    age: 45,
    occupation: "Food Production",
    description: "mother who has always been my biggest supporter. Her dedication to her work and family has taught me the value of hard work and perseverance. She is a source of inspiration in my life.",
    image: "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/487996080_9346483188781030_7061881075320657618_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFh3R3A--JgNWjW-NguK62zmKpd_wM6p72Yql3_AzqnvQRST8ugolCKyOdn-xqhBGiYSyqeh9qJC6JZFkhEmJq4&_nc_ohc=ZW7JpIwaknEQ7kNvwE_lR6l&_nc_oc=Adluhk_TkxkiHrGyhWnNSe6pfRtU8aTQ5PMAr0thM_VBxQFPSnnIuBYLkh3tScs3fHY&_nc_zt=23&_nc_ht=scontent-mnl1-2.xx&_nc_gid=0STTBnzE9k63-kJRY30xpg&oh=00_AfK7HcNHjQN8aLqYBB5_tSE1Qxzfk5RcDn65fTayauGMhw&oe=683BC673"
  },
  {
    name: "Manuel Gonos",
    relation: "Father",
    age: 50,
    occupation: "Work Gang",
    description: "work gang who has instilled in me the importance of discipline and responsibility. His work ethic and commitment to his family have shaped my values and aspirations.",
    image: "src\\img\\Capture.PNG"
  },
  {
    name: "Emma Doe",
    relation: "Brother",
    age: 25,
    occupation: "LPT (Teacher)",
    description: "my older brother who is a licensed professional teacher. His passion for education and dedication to his students inspire me to value knowledge and lifelong learning.",
    image: "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/488004374_9566715756781885_1386691154883005742_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGFqcwRXPqvR1YYoYys0wIr2LOa2SZKWHXYs5rZJkpYdW_cAb1yAJnz6A5KR_nznnPCbj2fIwt5qNBwRZmrsopx&_nc_ohc=hhP-y-iy2fkQ7kNvwHNNlun&_nc_oc=AdnGAabSevlIcxNBp-M97X_nh-xvUdmR9zH8671zHe4_f7DOAU9E-1i99ZDd2WusbZ8&_nc_zt=23&_nc_ht=scontent-mnl1-2.xx&_nc_gid=X3C4EnKwWKszRS65OTXB-Q&oh=00_AfIC5_shhQ5mSB__oGKCDRDjQtWcaZQS70GUImDnZoEj6w&oe=683BB868"
  }
];