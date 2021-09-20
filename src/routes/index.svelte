<script>
    import { goto } from '$app/navigation'
    import { onMount } from 'svelte'
    import { each } from 'svelte/internal'

    $: searched = ''

    $: artists = []

    const search = () => {
        goto(`${searched}`)
    }

    function handleKeydown(event) {
        if (event.keyCode === 13) {
            goto(`${searched}`)
        }
    }

    onMount(async () => {
        const itunesSearched = await fetch(
            `https://itunes.apple.com/search?term=${searched}&entity=musicArtist&limit=10`
        )
        var res = await itunesSearched.json()
        artists = res.results
        console.log(artists)
    })
</script>

<svelte:head>
    <title>iTunes Search</title>
</svelte:head>

<section>
    <div class="flex flex-col items-center justify-center max-w-4xl m-auto">
        <a
            href="/"
            class="text-5xl text-center text-white font-semibold mb-12 opacity-95 hover:opacity-90"
        >
            Search an artist
        </a>
        <div
            class="w-full flex p-1 rounded-lg border 
                bg-white bg-opacity-20 border-white border-opacity-40"
        >
            <input
                class="w-4/5 bg-transparent text-white mx-1 outline-none text-2xl"
                type="text"
                bind:value={searched}
                on:keydown={handleKeydown}
            />
            <button
                class="w-1/5 p-2 rounded-md font-semibold bg-gradient-to-r from-pink-200 via-red-100 to-purple-200 opacity-90 hover:opacity-80"
                on:click={search}>Search</button
            >
        </div>

        <div>
            {#each artists as artist}
                <p>{artist.artistName}</p>
            {/each}
        </div>
    </div>
</section>
