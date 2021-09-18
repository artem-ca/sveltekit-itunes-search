<script>
    import '../app.postcss'
</script>

<div
    class="w-full min-h-screen 
            px-10 py-20 md:px-20 lg:px-52
            bg-gradient-to-r from-gray-900 via-pink-900 to-gray-900"
>
    <div class="items-center justify-center max-w-5xl m-auto">
        <slot />
    </div>
</div>
