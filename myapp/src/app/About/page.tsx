import styles from "./page.module.css";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default function About() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className={styles}>Миний тухай</h2>
        <p>Мин</p>
        <p>Next.js ашиглаж байна.</p>
      </main>
      <Footer />
    </>
  );
}
