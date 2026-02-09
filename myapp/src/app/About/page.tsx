import styles from "./page.module.css"
export default function About() {
  return (
    <div className="p-8">
      <h1 className={styles.title}>Миний тухай</h1>
      <p className={styles.description}>
        Би Next.js ашиглаж веб хөгжүүлэлт сурч байна.
      </p>
      <p className="mt-2">Миний хобби: унших, аялах, программчлал.</p>
    </div>
  )
}