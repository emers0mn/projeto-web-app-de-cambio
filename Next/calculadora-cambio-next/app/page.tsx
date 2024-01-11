import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  async function getStaticProps() {
    const response = await fetch("https://criptoya.com/api/lemoncash/usdt/ars/0.1")
    const data = await response.json()
    
  
    return {
      props: {
        valores: data.valores
      }
    }
  }
  return (
    <main className={styles.content}>

      {valores.map((valor, index) =>{
        return(
          <div key={index}>
            <h1>{valor.bid}</h1>
          </div>
        )
      } )}

      <div className={styles.valoresContent}>
        <div className={styles.valores}>
          <div>
            <div className={styles.valoresFinais}>
              <h2 className={styles.title2}>Dólar Blue</h2>
              <p>2000</p>
            </div>

          </div>
          <div className={styles.divisor}></div>
          <div className={styles.valoresFinais}>
            <h2>Dólar Cripto</h2>
            <p>20000</p>
          </div>
        </div>
        <p className={styles.atualiza}>Última atualização:</p>
      </div>


      
        <div className={styles.valoresContent}>
          <div className={styles.valores}>
            <div>
              <div className={styles.valoresFinais}>
                <div className={styles.valoresFinais1}>
                  <h2 className={styles.title2}>Reais</h2>
                  <Image
                    src={"./img/icon/favicon_vai.svg"}
                    width={9.17}
                    height={8.31}
                    quality={75}
                    loading='lazy'
                  />
                  <h2 className={styles.title2}>Pesos</h2>
                </div>
                <p>2000</p>
              </div>

            </div>
            <div className={styles.divisor}></div>
            <div className={styles.valoresFinais}>
              <div className={styles.valoresFinais1}>
                <h2 className={styles.title2}>Reais</h2>
                <Image
                  src={"./img/icon/favicon_vai.svg"}
                  width={9.17}
                  height={8.31}
                  quality={75}
                  loading='lazy'
                />
                <h2 className={styles.title2}>Pesos</h2>
              </div>
              <p>20000</p>
            </div>
          </div>
          <p className={styles.atualiza}>Última atualização:</p>
        </div>



      <div>
        <h2>Calculadora de Cambio:</h2>
        <Link href={"/calculadora"}>Voltar para calculadora</Link>
      </div>


    </main>
  )
}
