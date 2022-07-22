<template>
  <div>
    <p>{{ label }}</p>
    <select v-model="modelValue" @change="changeOption">
      <!-- <option disabled value="">Выберите из списка...</option> -->
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },

    label: {
      type: String,
    },

    options: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    changeOption(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style scoped>
</style>