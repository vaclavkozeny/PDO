import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "StressTestApp",
  description: "Dokumentace k bakalářské práci",
  themeConfig: {
    // Horní menu
    nav: [
      { text: 'Domů', link: '/' },
      { text: 'Dokumentace', link: '/koncepty' }
    ],

    // Levý postranní panel
    sidebar: [
      {
        text: 'Úvod',
        items: [
          { text: 'Koncepty a principy', link: '/koncepty' },
          { text: 'Instalace', link: '/instalace' }
        ]
      },
      {
        text: 'Použití',
        items: [
          { text: 'Pracovní postupy', link: '/postupy' },
          { text: 'Reference modulů', link: '/reference' }
        ]
      }
    ],

    // Odkaz na tvůj repozitář (volitelné)
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vaclavkozeny' }
    ]
  }
})