/** @type {import('next).NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/PokeApi/sprites/master/sprites/pokemon/other/home/**',

            },
        ],
    },
}

module.exports = nextConfig