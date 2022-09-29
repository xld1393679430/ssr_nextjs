import App from "next/app";
import type { AppContext, AppProps } from "next/app";
import Head from 'next/head'
import { Layout, ILayoutProps } from "@/components/layout";
import { ThemeProvider } from '@/store/theme'
import "../styles/globals.css";

function MyApp(data: AppProps & ILayoutProps) {
  const { Component, pageProps, navbarData, footerData } = data;
  return (
    <>
      <Head>
        <title>next 这是title信息</title>
        <meta name="description" content="这是meta信息" />
      </Head>
      <ThemeProvider>
        <Layout navbarData={navbarData} footerData={footerData}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const pageProps = await App.getInitialProps(context);

  return {
    ...pageProps,
    navbarData: {},
    footerData: {
      copyRight: "Copyright © 2022 xxx. 保留所有权利",
      siteNumber: "粤ICP备XXXXXXXX号-X",
      publicNumber: "粤公网安备 xxxxxxxxxxxxxx号",
    },
  };
};

export default MyApp;
