<script>
    import { goto } from '$app/navigation'

    $: searched = ''

    const search = () => {
        goto(`${searched.trim()}`)
    }

    function handleKeydown(event) {
        if (event.keyCode === 13) {
            goto(`${searched.trim()}`)
        }
    }
</script>

<svelte:head>
    <title>iTunes Search</title>
</svelte:head>

<section>
    <div class="m-auto flex max-w-4xl flex-col items-center justify-center">
        <a
            href="/"
            class="mb-12 text-center text-5xl font-semibold text-white opacity-95 hover:opacity-90"
        >
            Search an artist
        </a>
        <div
            class="flex w-full rounded-lg border border-white 
                border-opacity-40 bg-white bg-opacity-20 p-1"
        >
            <input
                class="outline-none mx-1 w-4/5 bg-transparent text-2xl text-white"
                type="text"
                bind:value={searched}
                on:keydown={handleKeydown}
            />
            <button
                class="w-1/5 rounded-md bg-gradient-to-r from-pink-200 via-red-100 to-purple-200 p-2 font-semibold opacity-90 hover:opacity-80"
                on:click={search}>Search</button
            >
        </div>

        <img
            src="static/retro.gif"
            alt="img"
            class="shadow-3xl mt-20 max-w-xs rounded-xl"
        />
    </div>
</section>
