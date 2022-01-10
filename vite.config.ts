import type { UserConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite'

const config: UserConfig = {
    plugins: [
        tsconfigPaths(),
    ],
}

export default defineConfig ({
    base: '/First_vite_app/'
})