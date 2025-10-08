import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

const isAnalyze = process.env.ANALYZE === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Disable webpack cache to prevent large cache files in Cloudflare Pages
    if (!dev) {
      config.cache = false;
    }

    return config;
  },
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);
