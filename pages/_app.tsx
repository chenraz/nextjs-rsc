import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <span>ADD SOMETHING BEFORE</span>
    <Component {...pageProps} />
  </div>
}

export default MyApp
