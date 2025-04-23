import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "ai",
		short_name: "ai",
		description: "ai，tuoyi",
		start_url: "/",
		display: "standalone",
		background_color: "#f5f5f5",
		theme_color: "#1cce79",
		icons: [
			{
				src: "/web-app-manifest-192x192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/web-app-manifest-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any",
			},
		],
	};
}
