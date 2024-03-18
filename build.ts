import {build} from 'bun'

// esmJS
build({
    entrypoints: ['src/index.ts'],
    outdir: 'dist',
    minify: true,
    sourcemap: 'external',
})