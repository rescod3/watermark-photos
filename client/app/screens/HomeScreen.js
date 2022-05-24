import {BaseLayout} from "../misc";
import useTranslations from "../hooks/useTranslations";
import {useSelector} from "react-redux";
import Image from "next/image";
import {PrimaryButton} from "../components/buttons";

export default function HomeScreen(){
    const t = useTranslations();
    const store = useSelector((main) => ({
        lang: main.lang
    }))

    /**
     * Returns the step as a list item ( li ) with its title and description.
     * @param {string[]} keys - translations keys names
     * @returns {JSX.Element}
     */
    const stepDescription = (keys) => {
        return (
            keys.map((key, idx) => (
                <li key={idx} className="home__step">
                    <span className="home__stepNumber">{idx+1}</span>
                    <div className="home__stepText">
                        <h4 className="home__stepTitle">{t(`home.work.steps.${key}.title`)}</h4>
                        <p className="home__stepDesc">{t(`home.work.steps.${key}.description`)}</p>
                    </div>
                </li>
            ))
        )
    }

    return (
        <BaseLayout title={t('home.page_title')} description={t('home.page_description')}>
            <section className="home">
              <div className="container">
                  <div className="home__body">
                      <div className="home__text">
                          <h1 className="home__title" dangerouslySetInnerHTML={{__html: t('home.title')}}/>
                          <span className="home__subTitle" dangerouslySetInnerHTML={{__html: t('home.sub_title')}}/>
                          <p className="home__description" dangerouslySetInnerHTML={{__html: t('home.description')}}/>
                          <div className="home__work">
                              <h2 className="home__workTitle" dangerouslySetInnerHTML={{__html: t('home.work.title')}}/>
                              <ul className="home__steps">
                                  {stepDescription(['one', 'two', 'three', 'four'])}
                              </ul>
                          </div>
                        <PrimaryButton
                            label={t('home.work.start')}
                            className="-center"
                        />
                      </div>
                      <div className="home__preview">
                          <div className="home__imageWrapper">
                              <div className="home__image">
                                  <span className="home__watermark" dangerouslySetInnerHTML={{__html: t('home.watermark')}}/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </section>
        </BaseLayout>
    )
}