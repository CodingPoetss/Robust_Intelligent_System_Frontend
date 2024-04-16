/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true
    },
    transpilePackages: ['antd', '@ant-design/icons'],
    output: 'export',  // 添加这行以启用静态HTML导出
};

export default nextConfig;