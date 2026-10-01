export type College = {
  id: string;
  name: string;
  location: string;
  type: "Autonomous" | "Affiliated" | "Deemed" | "Government";
  university: string;
  naac: string;
  courses: string[];
  streams: ("Engineering" | "Medical" | "Commerce" | "Arts" | "Science")[];
  feesPerYear: number;
  hostel: boolean;
  hostelFee?: number;
  cutoff: { exam: "KCET" | "JEE" | "NEET" | "COMEDK"; rank: number }[];
  placement: { avgPackage: number; highest: number; percentage: number };
  rating: number;
  tags: string[];
};

export const COLLEGES: College[] = [
  {
    id: "rvce",
    name: "RV College of Engineering",
    location: "Bangalore, Karnataka",
    type: "Autonomous",
    university: "VTU",
    naac: "A+",
    courses: ["CSE", "AI & DS", "ECE", "Mechanical", "Cybersecurity"],
    streams: ["Engineering"],
    feesPerYear: 215000,
    hostel: true,
    hostelFee: 95000,
    cutoff: [{ exam: "KCET", rank: 800 }, { exam: "COMEDK", rank: 450 }],
    placement: { avgPackage: 12.5, highest: 56, percentage: 94 },
    rating: 4.7,
    tags: ["Top Tier", "Strong Placements"],
  },
  {
    id: "bmsce",
    name: "BMS College of Engineering",
    location: "Bangalore, Karnataka",
    type: "Autonomous",
    university: "VTU",
    naac: "A++",
    courses: ["CSE", "AI & DS", "ISE", "ECE", "Civil"],
    streams: ["Engineering"],
    feesPerYear: 198000,
    hostel: true,
    hostelFee: 88000,
    cutoff: [{ exam: "KCET", rank: 1200 }, { exam: "COMEDK", rank: 700 }],
    placement: { avgPackage: 10.8, highest: 48, percentage: 91 },
    rating: 4.6,
    tags: ["Heritage", "Top Tier"],
  },
  {
    id: "pesu",
    name: "PES University",
    location: "Bangalore, Karnataka",
    type: "Deemed",
    university: "PES",
    naac: "A+",
    courses: ["CSE", "AI & ML", "ECE", "BBA", "Law"],
    streams: ["Engineering", "Commerce"],
    feesPerYear: 425000,
    hostel: true,
    hostelFee: 120000,
    cutoff: [{ exam: "KCET", rank: 2500 }, { exam: "JEE", rank: 35000 }],
    placement: { avgPackage: 11.2, highest: 52, percentage: 89 },
    rating: 4.5,
    tags: ["Modern Campus", "Industry Tie-ups"],
  },
  {
    id: "msrit",
    name: "M.S. Ramaiah Institute of Technology",
    location: "Bangalore, Karnataka",
    type: "Autonomous",
    university: "VTU",
    naac: "A+",
    courses: ["CSE", "AI & DS", "Mechanical", "Biotech"],
    streams: ["Engineering"],
    feesPerYear: 225000,
    hostel: true,
    hostelFee: 92000,
    cutoff: [{ exam: "KCET", rank: 1800 }, { exam: "COMEDK", rank: 950 }],
    placement: { avgPackage: 9.8, highest: 42, percentage: 88 },
    rating: 4.5,
    tags: ["Research Focused"],
  },
  {
    id: "nitk",
    name: "NIT Karnataka, Surathkal",
    location: "Mangalore, Karnataka",
    type: "Government",
    university: "NIT",
    naac: "A++",
    courses: ["CSE", "ECE", "Mechanical", "Civil", "Chemical"],
    streams: ["Engineering"],
    feesPerYear: 165000,
    hostel: true,
    hostelFee: 45000,
    cutoff: [{ exam: "JEE", rank: 8500 }],
    placement: { avgPackage: 18.5, highest: 78, percentage: 96 },
    rating: 4.9,
    tags: ["Government", "Elite", "Top Placements"],
  },
  {
    id: "kmc",
    name: "Kasturba Medical College",
    location: "Manipal, Karnataka",
    type: "Deemed",
    university: "MAHE",
    naac: "A++",
    courses: ["MBBS", "BDS", "Nursing", "Pharmacy"],
    streams: ["Medical"],
    feesPerYear: 1450000,
    hostel: true,
    hostelFee: 180000,
    cutoff: [{ exam: "NEET", rank: 6500 }],
    placement: { avgPackage: 14, highest: 35, percentage: 92 },
    rating: 4.8,
    tags: ["Premier Medical", "Heritage"],
  },
  {
    id: "bmcri",
    name: "Bangalore Medical College & Research Institute",
    location: "Bangalore, Karnataka",
    type: "Government",
    university: "RGUHS",
    naac: "A",
    courses: ["MBBS", "MD", "MS"],
    streams: ["Medical"],
    feesPerYear: 75000,
    hostel: true,
    hostelFee: 25000,
    cutoff: [{ exam: "NEET", rank: 850 }],
    placement: { avgPackage: 10, highest: 28, percentage: 95 },
    rating: 4.7,
    tags: ["Government", "Affordable"],
  },
  {
    id: "christ",
    name: "Christ University",
    location: "Bangalore, Karnataka",
    type: "Deemed",
    university: "Christ",
    naac: "A+",
    courses: ["BBA", "BCom", "BCA", "Psychology", "Economics"],
    streams: ["Commerce", "Arts", "Science"],
    feesPerYear: 185000,
    hostel: true,
    hostelFee: 110000,
    cutoff: [{ exam: "KCET", rank: 5000 }],
    placement: { avgPackage: 7.5, highest: 24, percentage: 86 },
    rating: 4.6,
    tags: ["Commerce Hub", "Vibrant Campus"],
  },
  {
    id: "stjoseph",
    name: "St. Joseph's University",
    location: "Bangalore, Karnataka",
    type: "Autonomous",
    university: "Bangalore Univ",
    naac: "A+",
    courses: ["BCom", "BBA", "BSc", "BA"],
    streams: ["Commerce", "Arts", "Science"],
    feesPerYear: 95000,
    hostel: false,
    cutoff: [{ exam: "KCET", rank: 12000 }],
    placement: { avgPackage: 6, highest: 18, percentage: 80 },
    rating: 4.4,
    tags: ["Heritage", "Affordable"],
  },
  {
    id: "dsce",
    name: "Dayananda Sagar College of Engineering",
    location: "Bangalore, Karnataka",
    type: "Affiliated",
    university: "VTU",
    naac: "A",
    courses: ["CSE", "AI & DS", "ECE", "Mechanical"],
    streams: ["Engineering"],
    feesPerYear: 175000,
    hostel: true,
    hostelFee: 80000,
    cutoff: [{ exam: "KCET", rank: 8000 }, { exam: "COMEDK", rank: 4500 }],
    placement: { avgPackage: 7.2, highest: 32, percentage: 82 },
    rating: 4.2,
    tags: ["Mid Tier"],
  },
  {
    id: "manipal",
    name: "Manipal Institute of Technology",
    location: "Manipal, Karnataka",
    type: "Deemed",
    university: "MAHE",
    naac: "A++",
    courses: ["CSE", "AI & ML", "Cybersecurity", "Mechatronics", "Aerospace"],
    streams: ["Engineering"],
    feesPerYear: 395000,
    hostel: true,
    hostelFee: 145000,
    cutoff: [{ exam: "JEE", rank: 25000 }],
    placement: { avgPackage: 12, highest: 60, percentage: 90 },
    rating: 4.7,
    tags: ["Global Exposure", "Top Tier"],
  },
  {
    id: "jssaher",
    name: "JSS Academy of Higher Education",
    location: "Mysore, Karnataka",
    type: "Deemed",
    university: "JSS",
    naac: "A+",
    courses: ["MBBS", "BDS", "Pharmacy", "Nursing"],
    streams: ["Medical"],
    feesPerYear: 1250000,
    hostel: true,
    hostelFee: 150000,
    cutoff: [{ exam: "NEET", rank: 12000 }],
    placement: { avgPackage: 9, highest: 22, percentage: 88 },
    rating: 4.5,
    tags: ["Medical", "Research"],
  },
  { id: "iisc", name: "Indian Institute of Science", location: "Bangalore, Karnataka", type: "Government", university: "IISc", naac: "A++", courses: ["BSc", "Biotech", "CSE"], streams: ["Science", "Engineering"], feesPerYear: 35000, hostel: true, hostelFee: 30000, cutoff: [{ exam: "JEE", rank: 500 }], placement: { avgPackage: 22, highest: 90, percentage: 98 }, rating: 4.9, tags: ["Elite", "Research"] },
  { id: "iiitb", name: "IIIT Bangalore", location: "Bangalore, Karnataka", type: "Deemed", university: "IIIT", naac: "A+", courses: ["CSE", "AI & DS", "ECE"], streams: ["Engineering"], feesPerYear: 350000, hostel: true, hostelFee: 80000, cutoff: [{ exam: "JEE", rank: 4000 }], placement: { avgPackage: 25, highest: 75, percentage: 97 }, rating: 4.8, tags: ["Top Tier", "IT Focus"] },
  { id: "siiit", name: "Sir M. Visvesvaraya Institute of Technology", location: "Bangalore, Karnataka", type: "Affiliated", university: "VTU", naac: "A", courses: ["CSE", "ECE", "Mechanical", "Civil"], streams: ["Engineering"], feesPerYear: 145000, hostel: true, hostelFee: 70000, cutoff: [{ exam: "KCET", rank: 9500 }, { exam: "COMEDK", rank: 6000 }], placement: { avgPackage: 6.5, highest: 26, percentage: 80 }, rating: 4.1, tags: ["Mid Tier"] },
  { id: "nmit", name: "Nitte Meenakshi Institute of Technology", location: "Bangalore, Karnataka", type: "Autonomous", university: "VTU", naac: "A+", courses: ["CSE", "AI & ML", "ECE", "Mechanical"], streams: ["Engineering"], feesPerYear: 195000, hostel: true, hostelFee: 90000, cutoff: [{ exam: "KCET", rank: 6000 }, { exam: "COMEDK", rank: 3500 }], placement: { avgPackage: 8, highest: 36, percentage: 85 }, rating: 4.3, tags: ["Mid Tier"] },
  { id: "nieit", name: "National Institute of Engineering", location: "Mysore, Karnataka", type: "Autonomous", university: "VTU", naac: "A+", courses: ["CSE", "ECE", "Mechanical", "Civil"], streams: ["Engineering"], feesPerYear: 135000, hostel: true, hostelFee: 65000, cutoff: [{ exam: "KCET", rank: 4500 }, { exam: "COMEDK", rank: 3000 }], placement: { avgPackage: 7, highest: 30, percentage: 84 }, rating: 4.3, tags: ["Heritage"] },
  { id: "sjce", name: "Sri Jayachamarajendra College of Engineering", location: "Mysore, Karnataka", type: "Autonomous", university: "JSS", naac: "A+", courses: ["CSE", "ECE", "Mechanical", "Civil"], streams: ["Engineering"], feesPerYear: 125000, hostel: true, hostelFee: 60000, cutoff: [{ exam: "KCET", rank: 5500 }, { exam: "COMEDK", rank: 3200 }], placement: { avgPackage: 6.8, highest: 28, percentage: 82 }, rating: 4.2, tags: ["Heritage"] },
  { id: "uvce", name: "University Visvesvaraya College of Engineering", location: "Bangalore, Karnataka", type: "Government", university: "Bangalore Univ", naac: "A", courses: ["CSE", "ECE", "Mechanical", "Civil"], streams: ["Engineering"], feesPerYear: 45000, hostel: true, hostelFee: 25000, cutoff: [{ exam: "KCET", rank: 3500 }], placement: { avgPackage: 7.5, highest: 32, percentage: 86 }, rating: 4.4, tags: ["Government", "Affordable", "Heritage"] },
  { id: "kletech", name: "KLE Technological University", location: "Hubli, Karnataka", type: "Deemed", university: "KLE", naac: "A+", courses: ["CSE", "AI & DS", "ECE", "Mechanical"], streams: ["Engineering"], feesPerYear: 165000, hostel: true, hostelFee: 75000, cutoff: [{ exam: "KCET", rank: 7000 }, { exam: "COMEDK", rank: 4000 }], placement: { avgPackage: 8.5, highest: 38, percentage: 87 }, rating: 4.4, tags: ["Industry Tie-ups"] },
  { id: "bvb", name: "B.V. Bhoomaraddi College of Engineering", location: "Hubli, Karnataka", type: "Autonomous", university: "VTU", naac: "A", courses: ["CSE", "ECE", "Mechanical"], streams: ["Engineering"], feesPerYear: 155000, hostel: true, hostelFee: 70000, cutoff: [{ exam: "KCET", rank: 8500 }], placement: { avgPackage: 6, highest: 22, percentage: 78 }, rating: 4.1, tags: ["Mid Tier"] },
  { id: "siddaganga", name: "Siddaganga Institute of Technology", location: "Tumkur, Karnataka", type: "Autonomous", university: "VTU", naac: "A+", courses: ["CSE", "ECE", "Mechanical", "Civil"], streams: ["Engineering"], feesPerYear: 130000, hostel: true, hostelFee: 55000, cutoff: [{ exam: "KCET", rank: 6500 }, { exam: "COMEDK", rank: 4200 }], placement: { avgPackage: 6.5, highest: 24, percentage: 83 }, rating: 4.3, tags: ["Heritage", "Affordable"] },
  { id: "rnsit", name: "RNS Institute of Technology", location: "Bangalore, Karnataka", type: "Affiliated", university: "VTU", naac: "A", courses: ["CSE", "AI & ML", "ECE", "ISE"], streams: ["Engineering"], feesPerYear: 175000, hostel: true, hostelFee: 85000, cutoff: [{ exam: "KCET", rank: 9000 }, { exam: "COMEDK", rank: 5500 }], placement: { avgPackage: 6.2, highest: 28, percentage: 81 }, rating: 4.1, tags: ["Mid Tier"] },
  { id: "bit", name: "Bangalore Institute of Technology", location: "Bangalore, Karnataka", type: "Affiliated", university: "VTU", naac: "A", courses: ["CSE", "ECE", "Mechanical", "ISE"], streams: ["Engineering"], feesPerYear: 165000, hostel: true, hostelFee: 75000, cutoff: [{ exam: "KCET", rank: 4500 }, { exam: "COMEDK", rank: 2800 }], placement: { avgPackage: 7.5, highest: 30, percentage: 84 }, rating: 4.3, tags: ["Heritage"] },
  { id: "cmrit", name: "CMR Institute of Technology", location: "Bangalore, Karnataka", type: "Affiliated", university: "VTU", naac: "A", courses: ["CSE", "AI & DS", "ECE"], streams: ["Engineering"], feesPerYear: 185000, hostel: true, hostelFee: 90000, cutoff: [{ exam: "KCET", rank: 12000 }, { exam: "COMEDK", rank: 7500 }], placement: { avgPackage: 5.8, highest: 24, percentage: 78 }, rating: 4.0, tags: ["Modern Campus"] },
  { id: "newhorizon", name: "New Horizon College of Engineering", location: "Bangalore, Karnataka", type: "Affiliated", university: "VTU", naac: "A", courses: ["CSE", "AI & ML", "ECE", "Mechanical"], streams: ["Engineering"], feesPerYear: 195000, hostel: true, hostelFee: 95000, cutoff: [{ exam: "KCET", rank: 13000 }, { exam: "COMEDK", rank: 8000 }], placement: { avgPackage: 5.5, highest: 22, percentage: 76 }, rating: 3.9, tags: ["Modern Campus"] },
  { id: "reva", name: "REVA University", location: "Bangalore, Karnataka", type: "Deemed", university: "REVA", naac: "A+", courses: ["CSE", "AI & DS", "ECE", "BBA", "BCom"], streams: ["Engineering", "Commerce"], feesPerYear: 215000, hostel: true, hostelFee: 100000, cutoff: [{ exam: "KCET", rank: 15000 }], placement: { avgPackage: 5.2, highest: 26, percentage: 75 }, rating: 4.0, tags: ["Modern Campus"] },
  { id: "jain", name: "Jain University", location: "Bangalore, Karnataka", type: "Deemed", university: "Jain", naac: "A+", courses: ["CSE", "BBA", "BCom", "BCA", "Law"], streams: ["Engineering", "Commerce", "Arts"], feesPerYear: 235000, hostel: true, hostelFee: 110000, cutoff: [{ exam: "KCET", rank: 14000 }], placement: { avgPackage: 5.5, highest: 25, percentage: 78 }, rating: 4.1, tags: ["Sports", "Vibrant Campus"] },
  { id: "alliance", name: "Alliance University", location: "Bangalore, Karnataka", type: "Deemed", university: "Alliance", naac: "A", courses: ["CSE", "BBA", "BCom", "Law"], streams: ["Engineering", "Commerce"], feesPerYear: 285000, hostel: true, hostelFee: 130000, cutoff: [{ exam: "KCET", rank: 18000 }], placement: { avgPackage: 6, highest: 24, percentage: 80 }, rating: 4.0, tags: ["Modern Campus"] },
  { id: "amritabglr", name: "Amrita Vishwa Vidyapeetham", location: "Bangalore, Karnataka", type: "Deemed", university: "Amrita", naac: "A++", courses: ["CSE", "AI & ML", "ECE", "Mechanical"], streams: ["Engineering"], feesPerYear: 295000, hostel: true, hostelFee: 120000, cutoff: [{ exam: "JEE", rank: 30000 }], placement: { avgPackage: 9, highest: 42, percentage: 88 }, rating: 4.5, tags: ["Top Tier", "Research"] },
  { id: "iiscbnglr", name: "International Institute of Information Technology Bangalore", location: "Bangalore, Karnataka", type: "Deemed", university: "IIIT", naac: "A+", courses: ["CSE", "ECE"], streams: ["Engineering"], feesPerYear: 360000, hostel: true, hostelFee: 90000, cutoff: [{ exam: "JEE", rank: 5500 }], placement: { avgPackage: 22, highest: 70, percentage: 96 }, rating: 4.7, tags: ["Top Placements"] },
  { id: "atria", name: "Atria Institute of Technology", location: "Bangalore, Karnataka", type: "Affiliated", university: "VTU", naac: "A", courses: ["CSE", "ECE", "Mechanical"], streams: ["Engineering"], feesPerYear: 155000, hostel: true, hostelFee: 75000, cutoff: [{ exam: "KCET", rank: 16000 }, { exam: "COMEDK", rank: 9000 }], placement: { avgPackage: 4.8, highest: 18, percentage: 72 }, rating: 3.8, tags: ["Mid Tier"] },
  { id: "acharya", name: "Acharya Institute of Technology", location: "Bangalore, Karnataka", type: "Affiliated", university: "VTU", naac: "A", courses: ["CSE", "AI & DS", "ECE", "Mechanical"], streams: ["Engineering"], feesPerYear: 170000, hostel: true, hostelFee: 85000, cutoff: [{ exam: "KCET", rank: 14000 }, { exam: "COMEDK", rank: 8500 }], placement: { avgPackage: 5, highest: 22, percentage: 75 }, rating: 3.9, tags: ["Modern Campus"] },
  { id: "msrmc", name: "M.S. Ramaiah Medical College", location: "Bangalore, Karnataka", type: "Deemed", university: "RUAS", naac: "A+", courses: ["MBBS", "BDS", "Nursing"], streams: ["Medical"], feesPerYear: 1850000, hostel: true, hostelFee: 175000, cutoff: [{ exam: "NEET", rank: 15000 }], placement: { avgPackage: 11, highest: 28, percentage: 90 }, rating: 4.5, tags: ["Premier Medical"] },
  { id: "mmcri", name: "Mysore Medical College & Research Institute", location: "Mysore, Karnataka", type: "Government", university: "RGUHS", naac: "A", courses: ["MBBS", "MD"], streams: ["Medical"], feesPerYear: 80000, hostel: true, hostelFee: 28000, cutoff: [{ exam: "NEET", rank: 1500 }], placement: { avgPackage: 9, highest: 24, percentage: 94 }, rating: 4.6, tags: ["Government", "Affordable"] },
  { id: "kims", name: "Karnataka Institute of Medical Sciences", location: "Hubli, Karnataka", type: "Government", university: "RGUHS", naac: "A", courses: ["MBBS", "MD"], streams: ["Medical"], feesPerYear: 78000, hostel: true, hostelFee: 26000, cutoff: [{ exam: "NEET", rank: 2200 }], placement: { avgPackage: 8.5, highest: 22, percentage: 92 }, rating: 4.5, tags: ["Government", "Affordable"] },
  { id: "sdmcms", name: "SDM College of Medical Sciences", location: "Dharwad, Karnataka", type: "Deemed", university: "SDM", naac: "A+", courses: ["MBBS", "BDS", "Pharmacy"], streams: ["Medical"], feesPerYear: 1350000, hostel: true, hostelFee: 145000, cutoff: [{ exam: "NEET", rank: 18000 }], placement: { avgPackage: 8.5, highest: 22, percentage: 88 }, rating: 4.4, tags: ["Medical"] },
  { id: "fmmc", name: "Father Muller Medical College", location: "Mangalore, Karnataka", type: "Deemed", university: "RGUHS", naac: "A+", courses: ["MBBS", "BDS", "Nursing"], streams: ["Medical"], feesPerYear: 1550000, hostel: true, hostelFee: 160000, cutoff: [{ exam: "NEET", rank: 20000 }], placement: { avgPackage: 9, highest: 24, percentage: 89 }, rating: 4.5, tags: ["Premier Medical"] },
  { id: "yenepoya", name: "Yenepoya Medical College", location: "Mangalore, Karnataka", type: "Deemed", university: "Yenepoya", naac: "A+", courses: ["MBBS", "BDS", "Nursing", "Pharmacy"], streams: ["Medical"], feesPerYear: 1650000, hostel: true, hostelFee: 165000, cutoff: [{ exam: "NEET", rank: 22000 }], placement: { avgPackage: 8, highest: 22, percentage: 87 }, rating: 4.3, tags: ["Medical"] },
  { id: "ksm", name: "Kempegowda Institute of Medical Sciences", location: "Bangalore, Karnataka", type: "Affiliated", university: "RGUHS", naac: "A", courses: ["MBBS", "MD"], streams: ["Medical"], feesPerYear: 1450000, hostel: true, hostelFee: 140000, cutoff: [{ exam: "NEET", rank: 25000 }], placement: { avgPackage: 7.5, highest: 20, percentage: 85 }, rating: 4.2, tags: ["Medical"] },
  { id: "bgs", name: "BGS Global Institute of Medical Sciences", location: "Bangalore, Karnataka", type: "Deemed", university: "BGS", naac: "A", courses: ["MBBS", "BDS"], streams: ["Medical"], feesPerYear: 1750000, hostel: true, hostelFee: 170000, cutoff: [{ exam: "NEET", rank: 28000 }], placement: { avgPackage: 7, highest: 18, percentage: 84 }, rating: 4.1, tags: ["Medical"] },
  { id: "mvjmedical", name: "MVJ Medical College & Research Hospital", location: "Bangalore, Karnataka", type: "Affiliated", university: "RGUHS", naac: "A", courses: ["MBBS", "Nursing"], streams: ["Medical"], feesPerYear: 1550000, hostel: true, hostelFee: 150000, cutoff: [{ exam: "NEET", rank: 30000 }], placement: { avgPackage: 7, highest: 18, percentage: 82 }, rating: 4.0, tags: ["Medical"] },
  { id: "mountcarmel", name: "Mount Carmel College", location: "Bangalore, Karnataka", type: "Autonomous", university: "Bangalore Univ", naac: "A+", courses: ["BCom", "BBA", "BSc", "BA", "Psychology"], streams: ["Commerce", "Arts", "Science"], feesPerYear: 85000, hostel: true, hostelFee: 95000, cutoff: [{ exam: "KCET", rank: 10000 }], placement: { avgPackage: 5.5, highest: 18, percentage: 82 }, rating: 4.4, tags: ["Heritage", "Women"] },
  { id: "jyotinivas", name: "Jyoti Nivas College", location: "Bangalore, Karnataka", type: "Autonomous", university: "Bangalore Univ", naac: "A+", courses: ["BCom", "BBA", "BCA", "BA"], streams: ["Commerce", "Arts"], feesPerYear: 70000, hostel: false, cutoff: [{ exam: "KCET", rank: 14000 }], placement: { avgPackage: 4.8, highest: 14, percentage: 78 }, rating: 4.3, tags: ["Women", "Affordable"] },
  { id: "kristujayanti", name: "Kristu Jayanti College", location: "Bangalore, Karnataka", type: "Autonomous", university: "Bangalore Univ", naac: "A+", courses: ["BCom", "BBA", "BCA", "Psychology", "Economics"], streams: ["Commerce", "Arts", "Science"], feesPerYear: 105000, hostel: true, hostelFee: 90000, cutoff: [{ exam: "KCET", rank: 11000 }], placement: { avgPackage: 5.5, highest: 18, percentage: 84 }, rating: 4.4, tags: ["Vibrant Campus"] },
  { id: "stagnes", name: "St. Agnes College", location: "Mangalore, Karnataka", type: "Autonomous", university: "Mangalore Univ", naac: "A+", courses: ["BCom", "BBA", "BSc", "BA"], streams: ["Commerce", "Arts", "Science"], feesPerYear: 65000, hostel: true, hostelFee: 70000, cutoff: [{ exam: "KCET", rank: 16000 }], placement: { avgPackage: 4.5, highest: 12, percentage: 76 }, rating: 4.2, tags: ["Heritage", "Women", "Affordable"] },
  { id: "staloysius", name: "St. Aloysius College", location: "Mangalore, Karnataka", type: "Autonomous", university: "Mangalore Univ", naac: "A+", courses: ["BCom", "BBA", "BSc", "BA", "BCA"], streams: ["Commerce", "Arts", "Science"], feesPerYear: 75000, hostel: true, hostelFee: 75000, cutoff: [{ exam: "KCET", rank: 12000 }], placement: { avgPackage: 5, highest: 15, percentage: 80 }, rating: 4.4, tags: ["Heritage", "Affordable"] },
  { id: "nlsiu", name: "National Law School of India University", location: "Bangalore, Karnataka", type: "Government", university: "NLSIU", naac: "A++", courses: ["Law"], streams: ["Arts"], feesPerYear: 285000, hostel: true, hostelFee: 75000, cutoff: [{ exam: "KCET", rank: 100 }], placement: { avgPackage: 18, highest: 50, percentage: 98 }, rating: 4.9, tags: ["Elite", "Top Tier"] },
  { id: "sjcebngr", name: "St. Joseph's College of Commerce", location: "Bangalore, Karnataka", type: "Autonomous", university: "Bangalore Univ", naac: "A+", courses: ["BCom", "BBA", "Economics"], streams: ["Commerce"], feesPerYear: 90000, hostel: false, cutoff: [{ exam: "KCET", rank: 9000 }], placement: { avgPackage: 6, highest: 20, percentage: 84 }, rating: 4.4, tags: ["Heritage", "Commerce Hub"] },
  { id: "garden", name: "Garden City University", location: "Bangalore, Karnataka", type: "Deemed", university: "Garden City", naac: "A", courses: ["CSE", "BBA", "BCom", "BSc"], streams: ["Engineering", "Commerce", "Science"], feesPerYear: 175000, hostel: true, hostelFee: 90000, cutoff: [{ exam: "KCET", rank: 18000 }], placement: { avgPackage: 4.5, highest: 16, percentage: 72 }, rating: 3.9, tags: ["Modern Campus"] },
  { id: "presidency", name: "Presidency University", location: "Bangalore, Karnataka", type: "Deemed", university: "Presidency", naac: "A", courses: ["CSE", "BBA", "BCom", "Law"], streams: ["Engineering", "Commerce"], feesPerYear: 225000, hostel: true, hostelFee: 110000, cutoff: [{ exam: "KCET", rank: 17000 }], placement: { avgPackage: 5, highest: 20, percentage: 76 }, rating: 4.0, tags: ["Modern Campus"] },
  { id: "dayananda", name: "Dayananda Sagar University", location: "Bangalore, Karnataka", type: "Deemed", university: "DSU", naac: "A+", courses: ["CSE", "AI & DS", "BBA", "BCom"], streams: ["Engineering", "Commerce"], feesPerYear: 245000, hostel: true, hostelFee: 115000, cutoff: [{ exam: "KCET", rank: 12000 }], placement: { avgPackage: 6.5, highest: 25, percentage: 82 }, rating: 4.2, tags: ["Modern Campus"] },
  { id: "cmru", name: "CMR University", location: "Bangalore, Karnataka", type: "Deemed", university: "CMR", naac: "A", courses: ["CSE", "BBA", "BCom", "Law", "Psychology"], streams: ["Engineering", "Commerce", "Arts"], feesPerYear: 215000, hostel: true, hostelFee: 105000, cutoff: [{ exam: "KCET", rank: 16000 }], placement: { avgPackage: 5, highest: 18, percentage: 76 }, rating: 4.0, tags: ["Modern Campus"] },
  { id: "khristu", name: "Kristu Jayanti School of Engineering", location: "Bangalore, Karnataka", type: "Affiliated", university: "VTU", naac: "A", courses: ["CSE", "AI & DS", "ECE"], streams: ["Engineering"], feesPerYear: 185000, hostel: true, hostelFee: 95000, cutoff: [{ exam: "KCET", rank: 13500 }, { exam: "COMEDK", rank: 8000 }], placement: { avgPackage: 5.5, highest: 22, percentage: 78 }, rating: 4.0, tags: ["Mid Tier"] },
  { id: "rvu", name: "RV University", location: "Bangalore, Karnataka", type: "Deemed", university: "RVU", naac: "A+", courses: ["CSE", "BBA", "BCom", "Law", "Psychology"], streams: ["Engineering", "Commerce", "Arts"], feesPerYear: 325000, hostel: true, hostelFee: 130000, cutoff: [{ exam: "KCET", rank: 8000 }], placement: { avgPackage: 8, highest: 30, percentage: 86 }, rating: 4.4, tags: ["Modern Campus", "Top Tier"] },
  { id: "azim", name: "Azim Premji University", location: "Bangalore, Karnataka", type: "Deemed", university: "APU", naac: "A+", courses: ["BA", "BSc", "Economics", "Psychology"], streams: ["Arts", "Science"], feesPerYear: 195000, hostel: true, hostelFee: 100000, cutoff: [{ exam: "KCET", rank: 6000 }], placement: { avgPackage: 6, highest: 18, percentage: 82 }, rating: 4.5, tags: ["Research", "Social Impact"] },
  { id: "srinivas", name: "Srinivas University", location: "Mangalore, Karnataka", type: "Deemed", university: "Srinivas", naac: "A", courses: ["CSE", "BBA", "BCom", "BCA", "Nursing"], streams: ["Engineering", "Commerce", "Medical"], feesPerYear: 165000, hostel: true, hostelFee: 80000, cutoff: [{ exam: "KCET", rank: 19000 }], placement: { avgPackage: 4.5, highest: 16, percentage: 74 }, rating: 3.9, tags: ["Modern Campus"] },
  { id: "nitte", name: "Nitte University", location: "Mangalore, Karnataka", type: "Deemed", university: "Nitte", naac: "A+", courses: ["MBBS", "BDS", "CSE", "Pharmacy"], streams: ["Medical", "Engineering"], feesPerYear: 1450000, hostel: true, hostelFee: 145000, cutoff: [{ exam: "NEET", rank: 24000 }], placement: { avgPackage: 8, highest: 22, percentage: 86 }, rating: 4.4, tags: ["Medical", "Multi-disciplinary"] },
  { id: "gitam", name: "GITAM Bengaluru", location: "Bangalore, Karnataka", type: "Deemed", university: "GITAM", naac: "A+", courses: ["CSE", "AI & ML", "ECE", "BBA"], streams: ["Engineering", "Commerce"], feesPerYear: 285000, hostel: true, hostelFee: 125000, cutoff: [{ exam: "JEE", rank: 50000 }], placement: { avgPackage: 7, highest: 28, percentage: 84 }, rating: 4.2, tags: ["Modern Campus"] },
  { id: "iiitdh", name: "IIIT Dharwad", location: "Dharwad, Karnataka", type: "Government", university: "IIIT", naac: "A", courses: ["CSE", "ECE", "AI & DS"], streams: ["Engineering"], feesPerYear: 165000, hostel: true, hostelFee: 50000, cutoff: [{ exam: "JEE", rank: 18000 }], placement: { avgPackage: 14, highest: 50, percentage: 92 }, rating: 4.5, tags: ["Government", "Top Placements"] },
  { id: "iimb", name: "Indian Institute of Management Bangalore (UG)", location: "Bangalore, Karnataka", type: "Government", university: "IIM", naac: "A++", courses: ["BBA", "Economics"], streams: ["Commerce"], feesPerYear: 850000, hostel: true, hostelFee: 110000, cutoff: [{ exam: "KCET", rank: 200 }], placement: { avgPackage: 25, highest: 80, percentage: 99 }, rating: 4.9, tags: ["Elite", "Top Tier"] },
  { id: "vidyavardhaka", name: "Vidyavardhaka College of Engineering", location: "Mysore, Karnataka", type: "Affiliated", university: "VTU", naac: "A", courses: ["CSE", "ECE", "Mechanical", "Civil"], streams: ["Engineering"], feesPerYear: 140000, hostel: true, hostelFee: 65000, cutoff: [{ exam: "KCET", rank: 11000 }, { exam: "COMEDK", rank: 6800 }], placement: { avgPackage: 5.2, highest: 20, percentage: 76 }, rating: 4.0, tags: ["Mid Tier"] },
  { id: "stannas", name: "St. Anne's College", location: "Mangalore, Karnataka", type: "Affiliated", university: "Mangalore Univ", naac: "A", courses: ["BCom", "BBA", "BSc", "BA"], streams: ["Commerce", "Arts", "Science"], feesPerYear: 55000, hostel: true, hostelFee: 60000, cutoff: [{ exam: "KCET", rank: 20000 }], placement: { avgPackage: 4, highest: 12, percentage: 72 }, rating: 4.0, tags: ["Affordable", "Heritage"] },
];

export const INTERESTS = [
  { id: "coding", label: "Coding & Software", maps: ["CSE", "AI & DS", "AI & ML", "ISE", "Cybersecurity"] },
  { id: "biology", label: "Biology & Healthcare", maps: ["MBBS", "BDS", "Nursing", "Pharmacy", "Biotech"] },
  { id: "business", label: "Business & Finance", maps: ["BBA", "BCom", "Economics"] },
  { id: "design", label: "Design & Creative", maps: ["BA", "Psychology"] },
  { id: "electronics", label: "Electronics & Hardware", maps: ["ECE", "Mechatronics"] },
  { id: "mechanical", label: "Mechanical & Core Eng.", maps: ["Mechanical", "Civil", "Aerospace", "Chemical"] },
  { id: "law", label: "Law & Policy", maps: ["Law"] },
  { id: "research", label: "Pure Sciences & Research", maps: ["BSc", "Biotech"] },
];

export type Recommendation = {
  course: string;
  reason: string;
  colleges: College[];
};

export type FormData = {
  interests: string[];
  exam: "KCET" | "JEE" | "NEET" | "COMEDK" | "";
  rank: number;
  budget: number;
  location: string;
};

export function recommend(form: FormData): Recommendation[] {
  const wantedCourses = new Set<string>();
  form.interests.forEach((id) => {
    INTERESTS.find((i) => i.id === id)?.maps.forEach((c) => wantedCourses.add(c));
  });

  const recs: Recommendation[] = [];
  for (const course of wantedCourses) {
    const matched = COLLEGES.filter((c) => {
      if (!c.courses.includes(course)) return false;
      if (c.feesPerYear > form.budget) return false;
      if (form.exam) {
        const cut = c.cutoff.find((x) => x.exam === form.exam);
        if (!cut || form.rank > cut.rank * 1.4) return false;
      }
      if (form.location && !c.location.toLowerCase().includes(form.location.toLowerCase())) return false;
      return true;
    }).sort((a, b) => b.rating - a.rating).slice(0, 4);

    if (matched.length) {
      recs.push({
        course,
        reason: `Matches your interest in ${form.interests.map(i => INTERESTS.find(x => x.id === i)?.label).filter(Boolean).join(", ")}`,
        colleges: matched,
      });
    }
  }
  return recs.slice(0, 5);
}

export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
