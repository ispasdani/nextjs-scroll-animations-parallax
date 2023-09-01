import Header from "@/components/Header/Header";
import styles from "./styles.module.css";
import SectionLayout from "@/components/SectionLayout";
import { cards } from "../utils/cards";
import Card from "../components/CardComponent/Card";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.mainStyled}>
        <SectionLayout>
          <div className={styles.cards}>
            {cards.map((card, index) => {
              return (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              );
            })}
          </div>
        </SectionLayout>
      </main>
    </>
  );
}
