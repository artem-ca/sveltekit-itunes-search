<script>
    import { goto } from '$app/navigation'

    var searched = ''
    const search = () => {
        goto(`${searched}`)
    }
</script>

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
            />
            <button
                class="w-1/5 p-2 rounded-md font-semibold bg-gradient-to-r from-pink-200 via-red-100 to-purple-200 opacity-90 hover:opacity-80"
                on:click={search}>Search</button
            >
        </div>
    </div>
</section>
