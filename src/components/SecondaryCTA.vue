<template>
    <a 
        :href="url"
        :target="target"
        v-text="title"
        class="bg-grape text-white font-roboto font-700 capitalize py-10 px-16 border-2 border-grape rounded transition duration-500 ease-in-out hover:scale-105 hover:bg-white hover:text-grape"
    >
    </a>
</template>
<script>
    export default {
        name: 'SecondaryCTA',
        props: {
            url: String,
            target: String,
            title: String
        }
    }
</script>
