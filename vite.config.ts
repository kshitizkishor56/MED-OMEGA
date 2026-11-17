import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({plugins:[react(),tailwindcss(),VitePWA({registerType:'autoUpdate',includeAssets:['omega.svg'],manifest:{name:'MED-OMEGA 3.0',short_name:'MED-OMEGA',description:'Offline-first medical learning workstation',theme_color:'#08131f',background_color:'#08131f',display:'standalone',icons:[{src:'/omega.svg',sizes:'any',type:'image/svg+xml',purpose:'any maskable'}]}})]});
