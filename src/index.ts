import Pages from './Pages/Pages.svelte'

const root = document.getElementById('root')

if (!root) {
    throw new Error('Failed to find the root element')
}

const app = new Pages({
    target: root
})

export default app
