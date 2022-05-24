import useTranslations from "../hooks/useTranslations";

export default function Footer() {

    const t = useTranslations();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__body --gradientLabel">
                    <span className="footer__text" dangerouslySetInnerHTML={{__html: t('footer')}}/>
                </div>
            </div>
        </footer>
    )
}
