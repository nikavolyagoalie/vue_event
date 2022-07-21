<template>
    <div>
        <p>{{ label }}</p>
        <input type="text" :value="modelValue" @input="updateInput"/>
    </div>
</template>

<script>
export default {
    name: "my-input",
    props: {
        label: {
            type: String
        },
        modelValue: [Number, String]
    },
    methods: {
        updateInput() {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style lang="scss">
</style>