import { Profile, User } from '@/types'
import { CommonState, ProfileState } from '@/store'

export type State = {
    profile: ProfileState
    common: CommonState
}

export type MutationTypes = {
    COMMON_INIT_USER: User
    COMMON_CLEAR: undefined
    PROFILE_ADD: Profile[]
}

export type ActionTypes = {
    LOGIN: User
    LOGOUT: undefined
}

export interface Getters {
    isAuthenticated: boolean
}

export type ActionTypesResult = {
    LOGIN: void
    LOGOUT: void
}
