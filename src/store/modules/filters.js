export default {
    state: {
        filters: {},
        sort_field_options: [
            {value: "imdb_id", text: "imdb_id"},
            {value: "budget", text: "budget"},
            {value: "original_language", text: "original_language"},
            {value: "popularity", text: "popularity"},
            {value: "release_date", text: "release_date"},
            {value: "revenue", text: "revenue"},
            {value: "runtime", text: "runtime"},
            {value: "status", text: "status"},
            {value: "vote_average", text: "vote_average"},
            {value: "vote_count", text: "vote_count"}
        ]
    },
    getters: {
        SORT_OPTIONS: state => state.sort_field_options,
        FILTERS: state => state.filters
    },
    mutations: {
        RESET_FILTERS: state => state.filters = {},
        SET_FILTER: (state, filter) => Object.assign(state.filters, filter)
    },
    actions: {

    },
}
