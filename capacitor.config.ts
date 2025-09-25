import type { CapacitorConfig } from '@capacitor/cli';

const PRODUCTION_WEB_URL = 'https://jotionapp.vercel.app';
const isHttp = PRODUCTION_WEB_URL.startsWith('http://');

const config: CapacitorConfig = {
  appId: 'com.jotion.app',
  appName: 'Jotion',
  webDir: 'public',
  server: {
    url: PRODUCTION_WEB_URL,
    cleartext: isHttp,
    allowNavigation: [
      'jotionapp.vercel.app',
      'localhost',
      '127.0.0.1',
    ],
  },
  android: {
    // Use https scheme for production when using a remote server
    // This is ignored if server.url is set to http and cleartext is true
    backgroundColor: '#ffffff',
  },
};

export default config;
