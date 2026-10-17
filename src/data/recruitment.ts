import { contactConfig } from '@/utils/contact';

export interface UniversityData {
	id: string;
	name: string;
	shortName: string;
	location: string;
	campuses: string[];
	badge: string;
	tagline: string;
	// Official image footage of the university campus
	featuredImage: string;
	galleryImages: string[];
	overview: string;
	intakes: string[];
	popularFields: string[];
	minRequirement: string;
	tuitionRange: string;
	scholarshipAvailable: boolean;
	officialWebsite: string;
	applyUrl: string;
}

export const malaysianUniversities: UniversityData[] = [
	{
		id: 'inti',
		name: 'INTI International University & Colleges',
		shortName: 'INTI',
		location: 'Nilai & Subang Jaya',
		campuses: ['Nilai Main Campus (Negeri Sembilan)', 'Subang Jaya Campus (Selangor)', 'Penang Campus'],
		badge: 'UK/US Dual Degrees',
		tagline: 'World-recognized dual award UK & US degree transfer programs.',
		// Real campus footage from Wikimedia Commons & public campus repository
		featuredImage: 'https://upload.wikimedia.org/wikipedia/commons/5/50/INTI_Nilai_Student_Centre.png',
		galleryImages: [
			'https://upload.wikimedia.org/wikipedia/commons/5/50/INTI_Nilai_Student_Centre.png',
			'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
		],
		overview:
			'Partnered with University of Hertfordshire (UK) and Southern New Hampshire University (US). Ideal for students seeking international dual degrees at affordable Malaysian costs with direct pathways.',
		intakes: ['January', 'April', 'August'],
		popularFields: [
			'Business & Marketing',
			'Computer Science & Software',
			'Biotechnology',
			'Mechanical & Civil Engineering',
		],
		minRequirement: 'HSC / A-Level / Grade 12 with min 55% or GPA 2.50+',
		tuitionRange: '$3,800 - $5,500 / year',
		scholarshipAvailable: true,
		officialWebsite: 'https://newinti.edu.my',
		applyUrl: contactConfig.getUniversityWhatsappUrl('INTI International University'),
	},
	{
		id: 'lincoln',
		name: 'Lincoln University College',
		shortName: 'Lincoln',
		location: 'Petaling Jaya, Selangor',
		campuses: ['Kelana Jaya Main Campus (Petaling Jaya)', 'Kota Bharu Healthcare Training Centre'],
		badge: 'Medicine & Healthcare',
		tagline: 'Premier healthcare, medicine, nursing, pharmacy and business degrees.',
		// Real campus footage of Petaling Jaya / Kelana Jaya building
		featuredImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kelana_Jaya_campus.jpg/1280px-Kelana_Jaya_campus.jpg',
		galleryImages: [
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kelana_Jaya_campus.jpg/1280px-Kelana_Jaya_campus.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/e/ec/Lincoln_University_College_%28220708%29_01.jpg',
			'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
		],
		overview:
			'A premier Malaysian hub for medical and clinical sciences, dentistry, pharmacy, nursing, and MBA programs. Renowned for dedicated hospital attachments and global licensing qualification exams.',
		intakes: ['February', 'May', 'September', 'November'],
		popularFields: [
			'MBBS & Dentistry',
			'Pharmacy & Nursing',
			'Biomedical Science',
			'Hospitality & Tourism',
		],
		minRequirement: 'HSC / A-Level (Science stream for medical programs) min GPA 3.00+',
		tuitionRange: '$3,500 - $6,500 / year (Non-clinical)',
		scholarshipAvailable: true,
		officialWebsite: 'https://lincoln.edu.my',
		applyUrl: contactConfig.getUniversityWhatsappUrl('Lincoln University College'),
	},
	{
		id: 'uow',
		name: 'UOW Malaysia (University of Wollongong Australia)',
		shortName: 'UOW Malaysia',
		location: 'Glenmarie, Shah Alam',
		campuses: ['Utropolis Glenmarie Campus (Shah Alam)', 'Batu Kawan Eco-Campus (Penang)'],
		badge: 'Australian Degree',
		tagline: 'Australian accredited curriculum at affordable Malaysian tuition fees.',
		// Real footage of Utropolis Glenmarie campus from Wikimedia Commons
		featuredImage: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/KDU_University_College%2C_Utropolis.jpg',
		galleryImages: [
			'https://upload.wikimedia.org/wikipedia/commons/9/9c/KDU_University_College%2C_Utropolis.jpg',
			'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
		],
		overview:
			'Earn an authentic Australian University of Wollongong degree in Malaysia. Flexible credit transfer to Wollongong Australia campus after year 1 or 2 with substantial cost savings.',
		intakes: ['January', 'March', 'May', 'September'],
		popularFields: [
			'Game Development & AI',
			'Business & Finance',
			'Culinary Arts & Hotel Mgmt',
			'Communication & Media',
		],
		minRequirement: 'Grade 12 / HSC with 5 passes or equivalent standard',
		tuitionRange: '$4,200 - $6,000 / year',
		scholarshipAvailable: true,
		officialWebsite: 'https://uow.edu.my',
		applyUrl: contactConfig.getUniversityWhatsappUrl('UOW Malaysia'),
	},
	{
		id: 'apu',
		name: 'Asia Pacific University of Technology & Innovation (APU)',
		shortName: 'APU',
		location: 'Technology Park Malaysia (KL)',
		campuses: ['TPM Innovation Campus, Bukit Jalil, Kuala Lumpur'],
		badge: 'Top Computing & AI',
		tagline: '#1 tech & computing university in Malaysia with 100% employability.',
		// Real campus building footage of APU Technology Park campus
		featuredImage: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/UCTI_Exterior.jpg',
		galleryImages: [
			'https://upload.wikimedia.org/wikipedia/commons/7/7f/UCTI_Exterior.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/c/c4/UCTI_Interior.jpg',
			'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
		],
		overview:
			'Premier technology powerhouse awarded 100% Employability rating by Ministry of Higher Education Malaysia. Dual award degrees with De Montfort University (DMU, UK).',
		intakes: ['February', 'April', 'July', 'October', 'November'],
		popularFields: [
			'Artificial Intelligence & Data Science',
			'Cyber Security & Cloud',
			'Software Engineering',
			'Fintech & Digital Business',
		],
		minRequirement: 'HSC / A-Level / IB with Math credit and min 60% average',
		tuitionRange: '$4,500 - $6,800 / year',
		scholarshipAvailable: true,
		officialWebsite: 'https://apu.edu.my',
		applyUrl: contactConfig.getUniversityWhatsappUrl('APU University'),
	},
];

// Compatibility exports
export const recruitmentUniversities = malaysianUniversities;
export type RecruitmentUniversity = UniversityData;
