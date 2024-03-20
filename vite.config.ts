import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// you can copy the base structure of manifest object.
export const manifestForPlugIn = {
  registerType: "prompt",
  includeAssests: ["favicon.ico", "apple-touc-icon.png", "masked-icon.svg"],
  manifest: {
    name: "React-vite-app",
    short_name: "react-vite-app",
    description: "I am a simple vite app",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    theme_color: "#171717",
    background_color: "#f0e7db",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        // Your manifest options here
        name: "My Vite PWA",
        short_name: "VitePWA",
        start_url: ".",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        splash_pages: null,
        splash_screen_icon: "/splash-icon.png",
        icons: [
          {
            src: "/vite.svg",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable", // Specify that this icon is maskable
          },

          {
            src: "/react.svg", // Add a new icon with at least 512x512 pixels
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        // Your workbox options here
        runtimeCaching: [
          // Your runtime caching configuration here
        ],
      },
    }) as any,
    ,
  ],
});
