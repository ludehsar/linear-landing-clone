import { Container, Hero } from "@/components";
import { HeroSubTitle, HeroTitle } from "@/components/common/Hero";

export default function Home() {
  return (
    <div>
      <header>
        <Container>Header</Container>
      </header>
      <main>
        <Container>
          <Hero>
            <HeroTitle>
              Linear is a better way <br /> to build products
            </HeroTitle>
            <HeroSubTitle>
              Meet the new standard for modern software development. <br />
              Streamline issues, sprints, and product roadmaps.
            </HeroSubTitle>
          </Hero>
        </Container>
      </main>
      <footer>
        <Container>Footer</Container>
      </footer>
    </div>
  );
}
