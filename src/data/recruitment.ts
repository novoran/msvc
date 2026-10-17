import { contactConfig } from '@/utils/contact';

export interface RecruitmentUniversity {
	id: string;
	name: string;
	shortName: string;
	location: string;
	campuses: string[];
	badge: string;
	image: string;
	overview: string;
	intakes: string[];
	popularFields: string[];
	minRequirement: string;
	tuitionRange: string;
	scholarshipAvailable: boolean;
	applyUrl: string;
}

export const recruitmentUniversities: RecruitmentUniversity[] = [
	{
		id: 'inti',
		name: 'INTI International University & Colleges',
		shortName: 'INTI',
		location: 'Subang Jaya, Nilai, Penang',
		campuses: ['Nilai Main Campus', 'Subang Jaya Campus', 'Penang Campus'],
		badge: 'UK/US Dual Degrees',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuANo7dVaYC5OaY8KsqWvAeW87mmuu8MhdNyz15XQ2EIQkM-GzokS0v2iV8pymzycVdmm_Y3qoAb3MSXuxmNfYXkXfqldtXwwDnvYDZje9bsIqbU33ZtYkQ4hpsljFFAxnyxyrmBWb_9wKOdIvrOWl9dmOc3bbgc_Z-vaHGZE-bW_FvEunz77sqy3SaaPICfYNzYTItg0VF_snxFjdL5PLbEdzVcxz6uZLvLB8G92jc',
		overview:
			'Partnered with University of Hertfordshire (UK) and Southern New Hampshire University (US). Ideal for students seeking international dual degrees at affordable Malaysian costs.',
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
		applyUrl: contactConfig.getUniversityWhatsappUrl('INTI International University'),
	},
	{
		id: 'lincoln',
		name: 'Lincoln University College',
		shortName: 'Lincoln',
		location: 'Petaling Jaya & Kota Bharu',
		campuses: ['Petaling Jaya (Main)', 'Kelantan Healthcare Campus'],
		badge: 'Medicine & Healthcare',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuDFPW5uEyC0uSKuD5izLCJ_sw_35_g11X2BsMGTnS4dsdFyzLiZjh9SLTQCiM77BVNnKvnF15XABGnkCUY5CI-LshnLVk-qouwla4gjre1xFEb1bybDpPndQT3SLL--Kv_upCjIXIMH3E1eWAVDNR2gipsU2U3i-c28ANRuont4WyGv8PE6hqvBAmTbrEXTDjGVVgFHR78aVoljog4o4dHsk1JWjlNTSP-HEOa4G30',
		overview:
			'A top destination for clinical sciences, pharmacy, nursing, dentistry, and MBA programs. Renowned for practical hospital attachments and global licensing exam track records.',
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
		applyUrl: contactConfig.getUniversityWhatsappUrl('Lincoln University College'),
	},
	{
		id: 'uow',
		name: 'UOW Malaysia (University of Wollongong Australia)',
		shortName: 'UOW Malaysia',
		location: 'Glenmarie (Shah Alam) & Batu Kawan (Penang)',
		campuses: ['Utropolis Glenmarie', 'Batu Kawan Penang'],
		badge: 'Australian Degree',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuB32eMev3IMclpc6-a989XHa_t0LKTe7AdS9Oyosuw12XDaQaD9SKsmkSIm4E7NZO3oGbfFJ1YdS4v_l_oB75EZBhpq3k-R96ClqZeYnaUYKyJ_GDC38IEuPWpvBuoyH02QbfFlltm5qfOeW7ENYCmOI26bfpaaN0RiwY6jAfxgnMGpY5pnD7RWjGmR7FzEyOtndx0XFhjKt9l5LIejJE5-v6wPO6KjWTnkmpemwFw',
		overview:
			'Earn an authentic Australian University of Wollongong degree right in Malaysia. Seamless credit transfer to Wollongong Australia campus after 1 or 2 years.',
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
		applyUrl: contactConfig.getUniversityWhatsappUrl('UOW Malaysia'),
	},
	{
		id: 'apu',
		name: 'Asia Pacific University of Technology & Innovation (APU)',
		shortName: 'APU',
		location: 'Technology Park Malaysia (Bukit Jalil, KL)',
		campuses: ['TPM Innovation Campus, Kuala Lumpur'],
		badge: '#1 Tech & AI Campus',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuC2_p4QY6yf3eqjFjvW7yBZrBY2cuiBgVZtPYDRpPBw_ZQmVOeSKLZJMZF4Xrz5GbUZEyvu2YG7B9rTI-OUOh1j10Y-VbSQRYzgDiqrsDsEpVoP5RjHscUeLoh-IlH4yIjbBpP6m3AnRLVQ0_d6Zqu86K04t6hlfwc-iu40BMgDMnFdXflDoSGx7eTf9nsU3u5zMeberoeobh1SvbxzZq4v2z2ca2dlGDYOZ0GzxX0',
		overview:
			'Premier technology powerhouse awarded 100% Employability record by Ministry of Higher Education Malaysia. Dual award with De Montfort University (DMU, UK).',
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
		applyUrl: contactConfig.getUniversityWhatsappUrl('APU University'),
	},
];
