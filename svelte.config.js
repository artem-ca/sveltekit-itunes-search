/** @type {import('@sveltejs/kit').Config} */
import preprocess from 'svelte-preprocess'
import vercel from '@sveltejs/adapter-vercel'
const config = {
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        adapter: vercel(),
    },

    preprocess: [
        preprocess({
            postcss: true,
        }),
    ],
}

export default config
