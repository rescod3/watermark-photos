
const initialState = {
    lang: process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE ?? ''
}

const SET_LANG = 'main/setLang'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANG:
            return {...state, lang: action.lang}
        default:
            return state;
    }
}

const setLang = lang => ({type: SET_LANG, lang})

const mainReducer = {
    reducer,
    setLang
}

export default mainReducer