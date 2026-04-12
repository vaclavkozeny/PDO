import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/PDO/',
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
          { text: 'Princip testování', link: '/koncepty' },
          { text: 'Instalace', link: '/instalace' }
        ]
      },
      {
        text: 'Použití',
        items: [
          { text: 'Testování', link: '/postupy' },
          { text: 'Analýza dat', link: '/analyza' },
        ]
      },{
        text: 'Architektura',
        items: [
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