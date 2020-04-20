import '../styles/global.css'
import ExtLink from '../components/ext-link'

export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />

    <footer>
      Powered by <ExtLink src="https://github.com/ijjk/">Notion blog with 折耳根</ExtLink>
    </footer>
  </>
)
