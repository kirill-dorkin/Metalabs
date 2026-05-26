import { Head } from 'nextra/components'
import { SiteNavigation } from './site-navigation'
import '../styles/globals.css'

import type { ReactNode } from 'react'

export const metadata = {
  title: {
    default: 'Metalabs Fullstack',
    template: '%s | Metalabs Fullstack'
  },
  description: 'Методическая платформа курса Metalabs Fullstack'
}

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
            <SiteNavigation />
          </header>
          <main className="site-main">{children}</main>
          <footer className="site-footer">Metalabs Fullstack — методическая платформа курса</footer>
        </div>
      </body>
    </html>
  )
}
