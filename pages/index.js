import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>We're Codehole!</h1>

        <p className={styles.description}>
          Our site is under construction, but we look forward to providing you
          with the following services
        </p>

        <div className={styles.grid}>
          <a href='#' className={styles.card}>
            <h3>Web Development</h3>
          </a>

          <a href='#' className={styles.card}>
            <h3>Project Management</h3>
          </a>

          <a href='#' className={styles.card}>
            <h3>COVID-19 Screening & Contact Tracing Software</h3>
          </a>

          <a href='#' className={styles.card}>
            <h3>Performance & Accessibility Optimization</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href='#'>Codehole Inc.</a>
      </footer>
    </div>
  )
}
