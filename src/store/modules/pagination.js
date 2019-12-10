export default {
    state: {
        page_size: 15,
        current_page: 1,
        next_page: null,
        prev_page: null,
        last_page: null,
    },
    getters: {

    },
    mutations: {
        RESET_PAGINATION: state => { state.current_page = 1 },
        SET_PAGINATION: (state, data_size) => {
            state.last_page = Math.ceil(data_size / state.page_size)
            state.next_page = state.current_page < state.last_page
                ? state.current_page + 1
                : null
            state.prev_page = state.current_page > 1
                ? state.current_page - 1
                : null
        }
    },
    actions: {

    }
}
