import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {AppProvider} from "../app/misc";
import {store} from "../app/store";

const {persistedStore, persistor} = store();

export default function MyApp({ Component, pageProps }) {

  return (
      <Provider store={persistedStore}>
          <PersistGate loading={null} persistor={persistor}>
              <AppProvider>
                  <Component {...pageProps} />
              </AppProvider>
          </PersistGate>
      </Provider>
  )
}
