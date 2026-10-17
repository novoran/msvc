/**
 * Central configuration for MSVC contact channels
 * Update links or contact info here to reflect across the entire site.
 */
export const contactConfig = {
	email: 'ssss@gmail.com',

	// Official WhatsApp Direct Business Link
	whatsappUrl: 'https://wa.me/message/VOYUW3VRYYT7N1',

	// Helper for university-specific inquiries (appends query param or fallback to direct link)
	getUniversityWhatsappUrl: (_uniName?: string) =>
		'https://wa.me/message/VOYUW3VRYYT7N1',
};
