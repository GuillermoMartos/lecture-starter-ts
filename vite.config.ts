import { defineConfig } from 'vite';

const config = () => {
    return defineConfig({
        server: {
            host: 'localhost',
            port: 8800,
        },
        build: {
            outDir: 'dist', // Asegúrate de que outDir esté configurado correctamente
        },
    });
};

export default config;
