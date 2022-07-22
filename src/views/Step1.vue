<template>
    <div>
        <div class="row">
            <p>Информация об организаторе</p>
            <div class="item">
                <my-input v-model="organization" :label="'Организатор'"></my-input>
            </div>
        </div>
        <div class="row">
            <p>Контактные данные</p>
            <div class="item">
                <my-input v-model="phone" :label="'Телефон'"></my-input>
                <my-input v-model="email" :label="'E-mail'"></my-input>
                <my-input v-model="city" :label="'Город организатора'"></my-input>
            </div>
        </div>
        <div class="row">
            <p>Общая информация</p>
            <div class="item">
                <my-input v-model="mainInfo" :label="'Название'"></my-input>
            </div>
            <div class="item">
                <my-input-file v-model="mainInfo" :label="'Фотография'"></my-input-file>
            </div>
            <div class="item">
                <my-textarea v-model="description" :label="'Подробное описание'"></my-textarea>
            </div>
            <div class="item">
                <div class="date">
                    <div class="date__begin">
                        <my-datepicker v-model="dateBegin" :label="'Дата начала'"></my-datepicker>
                        <my-timepicker v-model="timeBegin" :label="'Время начала'"></my-timepicker>
                    </div>
                    <div>-</div>
                    <div class="date__end">
                        <my-datepicker v-model="dateEnd" :label="'Дата окончания'"></my-datepicker>
                        <my-timepicker v-model="timeEnd" :label="'Время окончания'"></my-timepicker>
                    </div>
                </div>
                <my-button @click="addDate">+ Добавить дату</my-button>
            </div>
            <div class="item">
                <my-select v-model="age" :options="sortOptions" :label="'Рейтинг мероприятия'"></my-select>
                <my-input v-model="address" :label="'Адрес мероприятия'"></my-input>
            </div>
        </div>
        <div class="row">
            <div class="item">
                <my-button @click="clearFields">Отмена</my-button>
                <my-button @click="toForward">Далее</my-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

import MyInput from '@/components/UI/MyInput.vue'
import MyTextarea from '@/components/UI/MyTextarea.vue'
import MyButton from '@/components/UI/MyButton.vue'
import MyInputFile from '@/components/UI/MyInputFile.vue'
import MySelect from '@/components/UI/MySelect.vue'
import MyDatepicker from '@/components/UI/MyDatepicker.vue'
import MyTimepicker from '@/components/UI/MyTimepicker.vue'

export default {
    components: {
        MyInput, MyButton, MyTextarea, MyInputFile, MySelect, MyDatepicker, MyTimepicker
    },
    data() {
        return {
            organization: '',
            mainInfo: '',
            phone: '',
            email: '',
            city: '',
            description: '',
            dateBegin: '',
            dateEnd: '',
            timeBegin: '',
            timeEnd: '',
            age: '',
            address: '',
        }
    },
    methods: {
        ...mapActions({
            createEvent: "createEvent"
        }),

        toForward() {
            // this.createEvent(this.inputValue)
            if (this.organization.length > 0 && this.mainInfo.length > 0 && this.phone.length > 0 && this.email.length > 0 && this.city.length > 0 && this.description.length > 0 && this.dateBegin.length > 0 && this.dateEnd.length > 0, this.timeBegin.length > 0 && this.timeEnd.length > 0 && this.age.length > 0 && this.address.length > 0) {
                this.org.push(this.organization, this.mainInfo, this.phone, this.email, this.city, this.description, this.dateBegin, this.dateEnd, this.timeBegin, this.timeEnd, this.age, this.address)
                this.$router.push('/step2')
            }
        },

        clearFields() {
            this.organization = ''
            this.mainInfo = ''
        },

        addDate() {

        }
    },
    computed: {
        ...mapState({
            org: state => state.org,
            sortOptions: state => state.sortOptions,
        })
    },
}
</script>

<style lang="scss">
    
</style>