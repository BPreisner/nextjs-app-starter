import App, { Container, NextAppContext } from 'next/app';
import React from 'react';
import { Provider, ProviderProps } from 'react-redux';
import nextReduxWrapper from 'next-redux-wrapper';
import configureStore from '../store/configureStore';

class AppRoot extends App<App & ProviderProps> {
   static async getInitialProps({ Component, ctx }: NextAppContext) {
      const pageProps = Component.getInitialProps
         ? await Component.getInitialProps(ctx)
         : {};

      return { pageProps };
   }

   render() {
      const { Component, pageProps, store } = this.props;
      return (
         <Container>
            <Provider store={store}>
               <Component {...pageProps} />
            </Provider>
         </Container>
      );
   }
}

export default nextReduxWrapper(configureStore)(AppRoot);
