import { useMDXComponents as getNextraComponents } from 'nextra/mdx-components'

const nextraComponents = getNextraComponents()

export function useMDXComponents(components = {}) {
  return {
    ...nextraComponents,
    ...components
  }
}
