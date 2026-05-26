'use client'

import { useState } from 'react'

const navItems = [
  ['Программа', '/program'],
  ['Курс', '/course'],
  ['Материалы', '/student-materials'],
  ['Демо-урок', '/demo-lesson'],
  ['Экзамены', '/exams']
]

export function SiteNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="site-navigation" data-open={isOpen}>
      <button
        className="menu-button"
        type="button"
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className="site-nav" aria-label="Основная навигация">
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setIsOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </div>
  )
}
