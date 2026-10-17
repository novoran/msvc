/**
 * Central configuration for MSVC contact channels
 */
export const contactConfig = {
	email: 'ssss@gmail.com',
	// WhatsApp Business link - update phone number in this single place:
	whatsappNumber: '60123456789', // e.g. Malaysia +60 format without '+'
	whatsappUrl: 'https://wa.me/60123456789?text=Hello%20MSVC,%20I%20would%20like%20to%20get%20a%20free%20consultation%20for%20studying%20in%20Malaysia.',
	getUniversityWhatsappUrl: (uniName: string) =>
		`https://wa.me/60123456789?text=${encodeURIComponent(`Hello MSVC, I would like to apply for ${uniName} and know more about admission & EMGS visa requirements.`)}`,
};
