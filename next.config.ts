import withSerwistInit from "@serwist/next";
import type { NextConfig } from "next";

const withSerwist = withSerwistInit({
	swSrc: "src/app/sw.ts",
	swDest: "public/sw.js",
});

const nextConfig: NextConfig = {
	output: "standalone",
	experimental: {
		reactCompiler: true,
	},
};

export default withSerwist(nextConfig);
