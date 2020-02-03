import { Vue } from 'vue-property-decorator'
import { Module, MutationTree } from 'vuex'
import { Profile, Store } from '@/types'

export type ProfileState = {
    profiles: {
        [key: string]: Profile
    }
}

const stateProfile: ProfileState = {
    profiles: {},
}

const mutations: MutationTree<ProfileState> = {
    PROFILE_ADD(state, profiles: Store.MutationTypes['PROFILE_ADD']) {
        profiles.forEach((profile) => {
            Vue.set(state.profiles, String(profile.id), profile)
        })
    },
}

const storeProfile: Module<ProfileState, Store.State> = {
    state: stateProfile,
    mutations,
}

export default storeProfile
