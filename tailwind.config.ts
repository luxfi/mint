import { preset } from '@luxfi/ui/tailwind'
import colors from 'tailwindcss/colors'

export default {
  presets: [preset],
  content: {
    files: [
      'src/**/*.tsx',
      './node_modules/@luxfi/ui/**/*.{ts,tsx}',
      './node_modules/@hanzo/**/*.{ts,tsx}'
    ]
  },
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        gray: colors.gray,
        neutral: colors.neutral,
        slate: colors.slate,
        zinc: colors.zinc,
        amber: colors.amber,
        orange: colors.orange,
        yellow: colors.yellow,
        purple: colors.purple,
        pink: colors.pink,
        cyan: colors.cyan,
        blue: colors.blue,
      }
    },
  }
}
