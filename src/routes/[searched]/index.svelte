<script>
    import { goto } from '$app/navigation'

    import { page } from '$app/stores'
    import { onMount } from 'svelte'

    let songResults = []

    onMount(async () => {
        var searched = $page.params.searched
        const itunesSearched = await fetch(
            `https://itunes.apple.com/search?term=${searched}&entity=song`
        )
        var res = await itunesSearched.json()
        songResults = res.results
        console.log(songResults)
    })
</script>

<section>
    <div class="m-10 text-center text-4xl text-gray-100">
        {$page.params.searched}
    </div>
    <div
        class="grid grid-cols-2 md:grid-cols-3 grod-flow row gap-3 text-gray-200 text-opacity-90"
    >
        {#each songResults as song}
            <button
                on:click={goto(`${$page.params.searched}/${song.trackId}`)}
                class="p-3 flex bg-white rounded-md bg-opacity-20 border-2 border-white border-opacity-30
                        hover:opacity-90"
            >
                <img
                    src={song.artworkUrl100}
                    alt="img"
                    class="rounded-md mr-4 w-1/4"
                />
                <div class="flex flex-col items-start text-left">
                    <div class="mb-2 h-6 overflow-hidden">{song.trackName}</div>
                    <div class="text-xs font-bold">{song.artistName}</div>
                </div>
            </button>
        {/each}
    </div>
</section>
