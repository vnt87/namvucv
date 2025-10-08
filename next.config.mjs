import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

const isAnalyze = process.env.ANALYZE === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
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
  experimental: {
    // Enable package imports optimization
    optimizePackageImports: ['@once-ui-system/core', 'react-icons', 'lucide-react'],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (isAnalyze && !isServer) {
      import('webpack-bundle-analyzer').then(({ BundleAnalyzerPlugin }) => {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: './bundle-analyzer-report.html',
            openAnalyzer: false,
          })
        );
      });
    }

    // Optimize bundle size for production
    if (!isServer && !dev) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Large vendor libraries - separate chunks
            'react-vendor': {
              name: 'react-vendor',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 40,
              enforce: true,
            },
            'ui-vendor': {
              name: 'ui-vendor',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]@once-ui-system[\\/]/,
              priority: 35,
              enforce: true,
            },
            'icons-vendor': {
              name: 'icons-vendor',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](react-icons|lucide-react)[\\/]/,
              priority: 30,
              enforce: true,
            },
            'charts-vendor': {
              name: 'charts-vendor',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](recharts|d3-|prismjs)[\\/]/,
              priority: 25,
              enforce: true,
            },
            // Common utilities
            'utils-vendor': {
              name: 'utils-vendor',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](lodash|date-fns|clsx|classnames)[\\/]/,
              priority: 20,
              enforce: true,
            },
            // Vendor chunk for remaining node_modules
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 10,
            },
            // Common chunk for shared code
            common: {
              name: 'common',
              minChunks: 2,
              priority: 5,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
        // Enable module concatenation and other optimizations
        concatenateModules: true,
        // Minimize bundle size
        minimize: true,
        // Use deterministic module IDs for better caching
        moduleIds: 'deterministic',
        // Use deterministic chunk IDs for better caching
        chunkIds: 'deterministic',
      };

      // Enable tree shaking for better optimization
      config.optimization.usedExports = true;
      config.optimization.innerGraph = true;
    }

    // Handle large bundles better
    config.performance = {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    };

    return config;
  },
};

export default withMDX(nextConfig);
