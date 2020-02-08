import Vue from 'vue'
import Vuex from 'vuex'

import storeProfile, { ProfileState } from './profile.store'
import storeCommon, { CommonState } from './common.store'
import { Store } from '@/types'

Vue.use(Vuex)

export default new Vuex.Store<Store.State>({
    modules: {
        profile: storeProfile,
        common: storeCommon,
    },
    strict: true,
})

export { ProfileState, CommonState }
