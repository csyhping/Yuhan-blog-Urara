import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'csyhping',
  subtitle: 'U have me at hello.',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    name: 'Yuhan Ping',
    avatar: '/assets/avatar.png',
    status: '🌸',
    bio: 'The University of Hong Kong <br> U have me at hello.',
    metadata: [
      {
        // text: 'github',
        icon: 'i-simple-icons-github',
        link: 'https://github.com/csyhping'
      }
    ]
  },
  themeColor: '#3D4451'
}
