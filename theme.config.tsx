import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Metalabs Fullstack</span>,
  project: {
    link: 'https://github.com/kirill-dorkin',
  },
  chat: {
    link: 'https://t.me/kirill_morfi',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-label="Telegram">
        <path d="M21.4 4.6a1 1 0 0 0-1-.2L3.1 11.1a1 1 0 0 0 .1 1.9l4.3 1.4 1.4 4.3a1 1 0 0 0 1.7.3l2.5-3.2 4.1 3.1a1 1 0 0 0 1.6-.6l2.7-12.7a1 1 0 0 0-.2-1ZM9.2 14.1l-.6 2-1-3.2 9.9-6.2-8.3 7.4Z" />
      </svg>
    ),
  },
  docsRepositoryBase: 'https://github.com/kirill-dorkin/html-css-platform/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Metalabs Fullstack',
    }
  },
  footer: {
    text: `Metalabs Fullstack — методическая платформа курса`,
  },
  search: {
    placeholder: 'Поиск по урокам...'
  },
  toc: {
    title: 'На этой странице'
  },
  editLink: {
    text: 'Редактировать страницу'
  },
  feedback: {
    content: 'Есть вопрос по уроку?'
  },
  darkMode: false,
  nextThemes: {
    forcedTheme: 'dark',
    defaultTheme: 'dark',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
}

export default config
