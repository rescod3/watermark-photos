import {BaseLayout} from "../misc";
import {useEffect} from "react";
import useTranslations from "../hooks/useTranslations";
import {useDispatch, useSelector} from "react-redux";
import {mainReducer} from "../store";

export default function HomeScreen(){
    const t = useTranslations();
    const store = useSelector((main) => ({
        lang: main.lang
    }))
    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     dispatch(mainReducer.setLang('pl'))
    // }, [])



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
                          </div>
                      </div>
                      <div className="home__image">

                      </div>
                  </div>
              </div>
            </section>
        </BaseLayout>
    )
}