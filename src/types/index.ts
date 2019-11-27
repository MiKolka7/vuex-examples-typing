import { CommonState, ProfileState } from '../store'
import * as Store from './Store'

export { Store }

export type User = {
    email: string,
    id: number
    firstName: string
    lastName: string
}

export type Profile = {
    id: number
    idUser: number
    idCity: number
    idCountry: number
    name: string
}


export type StoreState = {
    profile: ProfileState
    common: CommonState
}
