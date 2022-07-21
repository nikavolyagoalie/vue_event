<template>
    <div>
        <div class="row">
            <p>Информация об организаторе</p>
            <div class="item">
                <my-input v-model="inputValue"></my-input>
            </div>
        </div>
        <div class="row">
            <my-button @click="clearFields">Отмена</my-button>
            <my-button @click="toForward">Далее</my-button>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

import MyInput from '@/components/UI/MyInput.vue'
import MyButton from '@/components/UI/MyButton.vue'


export default {
    components: {
        MyInput, MyButton
    },
    data() {
        return {
            inputValue: '',
        }
    },
    methods: {
        ...mapActions({
            createEvent: "createEvent"
        }),

        toForward() {
            this.$router.push('/step2')
            this.createEvent(this.inputValue)
            if (this.inputValue.length > 0) {
                this.org.push(this.inputValue)
            }
            this.inputValue = ''
        },

        clearFields() {
            this.inputValue = ''
        }
    },
    computed: {
        ...mapState({
            org: state => state.org
        })
    },
}
</script>

<style lang="scss">
    
</style>