import Vue, { VNode } from 'vue'
import { CommitOptions, DispatchOptions, Store as VuexStore } from 'vuex'

import { Store } from './types'

declare global {
    namespace JSX {
        // tslint:disable no-empty-interface
        interface Element extends VNode {
        }

        // tslint:disable no-empty-interface
        interface ElementClass extends Vue {
        }

        interface IntrinsicElements {
            [elem: string]: any
        }
    }
}

declare module 'vuex/types/index' {
    interface Commit {
        <Key extends keyof Store.MutationTypes>(
            type: Key,
            payload: Store.MutationTypes[Key],
            options?: CommitOptions,
        ): void
    }

    interface Dispatch {
        <Key extends keyof Store.ActionTypes>(
            type: Key,
            payload: Store.ActionTypes[Key],
            options?: DispatchOptions,
        ): Promise<Store.ActionTypesResult[Key]>
    }
}

declare module 'vue/types/vue' {
    type CustomStore = Omit<VuexStore<Store.State>, 'getters' | 'commit' | 'dispatch'>

    interface Vue {
        $store: CustomStore & {
            getters: Store.Getters
            commit<Key extends keyof Store.MutationTypes>(
                type: Key,
                payload: Store.MutationTypes[Key],
                options?: CommitOptions,
            ): void
            dispatch<Key extends keyof Store.ActionTypes>(
                type: Key,
                payload: Store.ActionTypes[Key],
                options?: DispatchOptions,
            ): Promise<Store.ActionTypesResult[Key]>
        }
    }
}
