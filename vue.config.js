module.exports = {
    assetsDir: 'static',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:9000',
                ws: true,
                changeOrigin: true
            }
        }
    }
}
