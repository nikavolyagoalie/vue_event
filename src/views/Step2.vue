<template>
    <div>
        <div class="row">
            <div>
                <div class="item">{{ org[0] }}</div>
                <p>Организатор мероприятия</p>
            </div>
            <div>

            </div>
        </div>
        <div class="row">
            <my-button @click="$router.push('/step1')">Назад</my-button>
            <my-button>Отправить на модерацию</my-button>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

import MyButton from '@/components/UI/MyButton.vue'

export default {
    components: {
        MyButton
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