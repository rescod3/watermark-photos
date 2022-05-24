import {useDispatch, useSelector} from "react-redux";
import {mainReducer} from "../store";

/**
 * Hook to download the current language, all available languages and change the current language.
 * @returns {{
 * getCurrentLang: (function(): *), getAllLanguages: (function(): *), setLang: (function(*): {type: string, lang: *})}}
 */
const useLanguages = () => {
    const store = useSelector((main) => ({
        lang: main.lang
    }))
    const dispatch = useDispatch()

    /**
     *
     */
    const getCurrentLang = () => (store.lang)
    const setLang = (lang) => dispatch(mainReducer.setLang(lang))
    const getAllLanguages = () => (process.env.NEXT_PUBLIC_LANGUAGES.split(' '))

    return {
        getCurrentLang,
        setLang,
        getAllLanguages
    }

}

export default useLanguages;