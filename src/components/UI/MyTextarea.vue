<template>
    <div>
        <p>{{ label }}</p>
        <textarea type="text" :value="modelValue" @input="updateInput"></textarea>
    </div>
</template>

<script>
export default {
    name: "my-textarea",
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