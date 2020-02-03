import {
    ActionTree,
    GetterTree,
    Module,
    MutationTree,
} from 'vuex'
import { User, Store } from '@/types'

export interface CommonState {
    user: User | any
    app: {
        foo: boolean
        bar: number
    }
}

export const stateCommon: CommonState = {
    app: {
        foo: true,
        bar: 3,
    },
    user: {},
}

const mutations: MutationTree<CommonState> = {
    COMMON_INIT_USER(state, data: Store.MutationTypes['COMMON_INIT_USER']) {
        state.user = data
    },

    COMMON_CLEAR(state) {
        state.user = {}
    },
}

const getters: GetterTree<CommonState, Store.State> = {
    isAuthenticated(state) {
        return !!state.user.id
    },
}

const actions: ActionTree<CommonState, Store.State> = {
    LOGIN(context, user: Store.ActionTypes['LOGIN']): Store.ActionTypesResult['LOGIN'] {
        context.commit('COMMON_INIT_USER', user)
    },

    LOGOUT(context): Store.ActionTypesResult['LOGOUT'] {
        context.commit('COMMON_CLEAR', undefined)
    },
}

const storeCommon: Module<CommonState, Store.State> = {
    state: stateCommon,
    getters,
    mutations,
    actions,
}

export default storeCommon
