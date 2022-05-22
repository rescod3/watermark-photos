import useLanguages from "../hooks/useLanguages";
import {useEffect} from "react";
import menu from "../utils/Menu";
import useTranslations from "../hooks/useTranslations";
import Link from "next/link";
import {AiFillHome} from "react-icons/ai";

export default function Header() {

    const languages = useLanguages()
    const t = useTranslations();

    return (
        <header className="header">
            <div className="container">
                <div className="header__body">
                    <div className="header__homeWrapper">
                        <Link href={'/'}>
                            <a><AiFillHome/></a>
                        </Link>
                    </div>
                    <div className="header__navWrapper">
                        <nav className="nav">
                            <ul>
                                {menu.map((item, idx) => (
                                    <li key={idx}>
                                        <Link href={'/'}>
                                            <a><span>{t(item.name)}</span></a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <ul className="header__lang">
                            {languages.getAllLanguages().map((lang, idx) => (
                                <li key={idx}>
                                    <button className={languages.getCurrentLang() === lang ? '-active' : ''} onClick={() => languages.setLang(lang)}>{lang}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}