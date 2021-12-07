<template>
    <div
        class="entry-container mb-3 pointer-2"
        @click="$router.push({ name: 'entry', params: { id: 10 } })"
    >
    <!-- Title -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">6</span>
            <span class="mx-1 fs-5">diciembre</span>
            <span class="mx-2 fw-light">2021, lunes</span>
        </div>

        <div class="entry-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ut. Labore, amet laborum. Inventore doloribus est itaque voluptatibus earum. Voluptatibus adipisci blanditiis, sequi earum est laborum consequatur reiciendis error? Dolor.
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }
    .entry-description{
        font-size: 12px;
    }
}

</style>