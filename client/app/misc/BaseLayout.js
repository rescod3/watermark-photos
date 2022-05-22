import Head from "next/head";
import {Header} from "../components";

const BaseLayout = (props) => {

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>{props.title ?? ''}</title>
                <meta name="description" content={props.description ?? ''}/>
            </Head>

           <div id="app">
               <Header/>

               <main className="main">
                   {props.children}
               </main>
           </div>
        </>
    )
}

export default BaseLayout
