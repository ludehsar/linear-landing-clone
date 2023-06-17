import { Container, Hero, HeroSubTitle, HeroTitle } from "@/components";

export default function Home() {
  return (
    <Container>
      <Hero>
        <HeroTitle>
          Linear is a better way <br /> to build products
        </HeroTitle>
        <HeroSubTitle>
          Meet the new standard for modern software development. <br />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubTitle>
        <img src="/hero@4x.webp" alt="Hero Image" />
      </Hero>
    </Container>
  );
}
