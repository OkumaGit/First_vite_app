import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import type { UserConfig } from 'vite';
const config: UserConfig = {
    plugins: [
        tsconfigPaths(),
    ],
};

export default defineConfig({
    base: './'
});