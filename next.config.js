/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.meowlabs.kr',
			},
		],
	},
};

module.exports = nextConfig;

