import {useDispatch, useSelector} from "react-redux";
import {mainReducer} from "../store";

const useLanguages = () => {
    const store = useSelector((main) => ({
        lang: main.lang
    }))
    const dispatch = useDispatch()

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