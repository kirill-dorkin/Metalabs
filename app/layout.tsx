import { Head } from 'nextra/components'
import '../styles/globals.css'

import type { ReactNode } from 'react'

export const metadata = {
  title: {
    default: 'Metalabs Fullstack',
    template: '%s | Metalabs Fullstack'
  },
  description: 'Методическая платформа курса Metalabs Fullstack'
}

const navItems = [
  ['Программа', '/program'],
  ['Курс', '/course'],
  ['Материалы', '/student-materials'],
  ['Демо-урок', '/demo-lesson'],
  ['Экзамены', '/exams']
]

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <div className="site-shell">
          <header className="site-header">
            <a className="site-logo" href="/">
              Metalabs Fullstack
            </a>
            <nav className="site-nav" aria-label="Основная навигация">
              {navItems.map(([label, href]) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
            </nav>
          </header>
          <main className="site-main">{children}</main>
          <footer className="site-footer">Metalabs Fullstack — методическая платформа курса</footer>
        </div>
      </body>
    </html>
  )
}
