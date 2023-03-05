<script lang="ts">
    export let color: string = "7fb1bf";
</script>
<button
    on:click
    class="btn-blue"
    style="background-color: {color};"
>
    <slot></slot>
</button>

<style>
    .btn-blue {
        width: 300px;
        height: 70px;
        color: white;
        font-weight: 800;
        font-size: 30px;
        letter-spacing: 5px;
        cursor: pointer;
    }
</style>