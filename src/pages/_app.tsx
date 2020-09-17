import Head from 'next/head'
import { ResetCSS } from '../styles/style'
import '@glidejs/glide/dist/css/glide.core.min.css'
import 'rc-drawer/assets/index.css'
import 'rc-tabs/assets/index.css'
import 'rc-slider/assets/index.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import 'react-dates/lib/css/_datepicker.css'
import { agencyTheme } from '../common/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../compositions/agency.style'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
        />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />
        <title>Codehole Inc</title>

        <link rel='manifest' href='/manifest.json' />
        <link
          href='/favicon-16x16.png'
          rel='icon'
          type='image/png'
          sizes='16x16'
        />
        <link
          href='/favicon-32x32.png'
          rel='icon'
          type='image/png'
          sizes='32x32'
        />
        <link rel='apple-touch-icon' href='/apple-icon.png' />
        <meta name='theme-color' content='#317EFB' />
      </Head>
      <ResetCSS />
      <GlobalStyle />
      <ThemeProvider theme={agencyTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
