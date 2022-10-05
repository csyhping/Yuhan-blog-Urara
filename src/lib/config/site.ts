import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'Home',
  subtitle: 'Where am I',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    name: 'Yuhan Ping',
    avatar: '/assets/avatar.png',
    status: '🌸',
    bio: 'The University of Hong Kong <br> U have me at hello.'
  },
  themeColor: '#3D4451'
}
