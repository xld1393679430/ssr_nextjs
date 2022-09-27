import "../styles/globals.css";
import App from "next/app";
import type { AppContext, AppProps } from "next/app";
import { Layout, ILayoutProps } from "@/components/layout";

function MyApp(data: AppProps & ILayoutProps) {
  const { Component, pageProps, navbarData, footerData } = data;
  return (
    <Layout navbarData={navbarData} footerData={footerData}>
      <Component {...pageProps} />
    </Layout>
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
