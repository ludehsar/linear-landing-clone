import { Button, Container, Hero, HeroSubTitle, HeroTitle } from "@/components";

export default function Home() {
  return (
    <Container className="pt-[6.4rem]">
      <Hero>
        <Button href="/" variant="secondary" size="small">
          Linear 2022 Rebase - Built for scale
        </Button>
        <HeroTitle>
          Linear is a better way <br className="hidden md:block" /> to build
          products
        </HeroTitle>
        <HeroSubTitle>
          Meet the new standard for modern software development.{" "}
          <br className="hidden md:block" />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubTitle>
        <Button href="/" variant="primary" size="large">
          Get Started
        </Button>
        <img className="mt-[12.8rem]" src="/hero@4x.webp" alt="Hero Image" />
      </Hero>
    </Container>
  );
}
