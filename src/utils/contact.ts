/**
 * Central configuration for MSVC contact channels
 * Update links or contact info here to reflect across the entire site.
 */
const WHATSAPP_PHONE = '8801895643332';
const WHATSAPP_SHORTLINK = 'https://wa.me/message/TFP3KOOVMWWSE1';

export const contactConfig = {
	email: 'malaysiastudentvisaconsultancy@gmail.com',

	// Official WhatsApp Direct Business Link
	whatsappUrl: `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
		'Hello MSVC, I would like to inquire about university admissions and student visa processing for Malaysia.'
	)}`,

	// Raw WhatsApp shortlink as fallback or direct share
	whatsappDirectLink: WHATSAPP_SHORTLINK,

	// Helper for generating custom pre-filled WhatsApp messages
	getCustomWhatsappUrl: (message: string) =>
		`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`,

	// Social & Consultation Channels
	facebookUrl: 'https://facebook.com',
	linkedinUrl: 'https://linkedin.com',
	youtubeUrl: 'https://youtube.com',

	// Helper for university-specific inquiries
	getUniversityWhatsappUrl: (uniName?: string) => {
		const text = uniName
			? `Hello MSVC, I am interested in applying to ${uniName}. Please share details regarding available intakes, courses, and scholarship opportunities.`
			: 'Hello MSVC, I would like to consult with an advisor regarding studying in Malaysia.';
		return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
	},
};
