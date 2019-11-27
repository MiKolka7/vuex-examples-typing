import Vue from 'vue'
import Vuex from 'vuex'

import storeProfile, { ProfileState } from './profile.store'
import storeCommon, { CommonState } from './common.store'
import { StoreState } from '@/types'

Vue.use(Vuex)

export default new Vuex.Store<StoreState>({
    modules: {
        profile: storeProfile,
        common: storeCommon,
    },
    strict: true,
})

export { ProfileState, CommonState }
