import Header from "@/components/Header/Header";
import styles from "./styles.module.css";
import SectionLayout from "@/components/SectionLayout";
import { cards } from "../utils/cards";
import Card from "../components/CardComponent/Card";
import FullPage from "@/components/FullPage";
import TextSection from "@/components/TextSection/TextSection";
import Footer from "@/components/Footer/Footer";
import ZoomSection from "@/components/ZoomSection/ZoomSection";
import HorizontalWrapper from "@/components/HorizontalWrapper/HorizontalWrapper";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.mainStyled}>
        <SectionLayout>
          <HorizontalWrapper height="40rem" direction={-1000}>
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
          </HorizontalWrapper>
        </SectionLayout>

        <FullPage />

        <SectionLayout>
          <HorizontalWrapper height="40rem" direction={1000}>
            <div className={styles.cards} style={{ right: "0" }}>
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
          </HorizontalWrapper>
        </SectionLayout>

        <SectionLayout>
          <ZoomSection></ZoomSection>
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <Footer />
      </main>
    </>
  );
}
