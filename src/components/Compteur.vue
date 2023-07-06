<template>
    <div>
        <h1>Mon super compteur</h1>
        <span>Vous avez cliqué {{ total }} fois !</span>
        <button @click="increment()">+</button>
        <hr/>
        <p>Le total général depuis VueX : {{ totalGeneral }} !</p>
        <p>Le double du total général : {{ doubleDuTotal }} !</p>
    </div>
</template>

<script>
    console.log("The page compteur is loaded")
    export default {
        name: 'Compteur',
        props: {
            // total: Number
        },
        data() {
            return {
                total: 0
            }
        },
        computed: {
            totalGeneral() {
                return this.$store.state.totalFromVueX
            },
            doubleDuTotal() {
                return this.$store.getters.doubleDuTotal
            }
        },
        methods: {
            increment() {
                this.total+=1
                this.$store.commit('setTotalFromVueX', this.totalGeneral + 1)
            }
        }
    }
</script>

<style scoped>

</style>