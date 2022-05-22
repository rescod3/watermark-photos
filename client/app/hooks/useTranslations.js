import {useSelector} from "react-redux";

const useTranslations = () => {
    const store = useSelector((main) => ({
        lang: main.lang
    }))

    return (name, ...args) => {
        const baseFile = require(`../assets/translations/_base.json`);
        let customFile = {};
        try {
            customFile = require(`../assets/translations/${store.lang}.json`);
        } catch (e) {

        }

        let slug = {
            ...baseFile,
            ...customFile,
        };
        const params = name.toString().split('.');

        params.forEach(s => {
            if (typeof slug !== "undefined")
                slug = slug[s];
            else
                slug = name;
        })

        if (!slug) {
            if (typeof slug === 'string')
                slug = `/E ${name} E/`;
            if (typeof slug === 'undefined')
                slug = `/U ${name} U/`;
        }

        args.map(arg => {
            if (typeof arg === 'object' && arg !== null) {
                slug = slug.toString().replace(`{${arg.name}}`, arg.value);
            } else {
                slug = slug.toString().replace('{arg}', arg);
            }
        })

        slug = slug.toString().replace(/\{arg}/, '');

        return slug;
    }
}

export default useTranslations;
