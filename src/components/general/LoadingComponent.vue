<template>
    <div class="loading" v-if="mostrar">
        <div class="content-loading">
            <i class="fas fa-spinner"></i>
            <p>Cargando, espere un momento</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        mostrar: {
            type: Boolean,
            default: false
        },
    },
}
</script>

<style lang="scss" scoped>
    .loading{
        position: absolute;
        width: 100%;
        z-index: 200;
        background-color: rgb(0 0 0 / 13%);
        border-radius: 4px;
        top: 0;
        bottom: 0;
        display: flex;
        padding-top: 8rem;
        align-items: center;
        flex-direction: column;

        .content-loading{
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: white;
            padding: 1rem 1.3rem 0;
            border-radius: 4px;
        }

        i, p{
            color: #8a8a8a;
        }

        i{
            font-size: 2rem;
            margin-bottom: 1rem;
            animation: loading;
            animation-duration: 2s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }

        @keyframes loading {
            from{ transform: rotate(0deg); }
            to{ transform: rotate(360deg); }
        }
    }
</style>