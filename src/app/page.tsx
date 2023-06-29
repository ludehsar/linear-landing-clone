import { Button, Container, Hero, HeroSubTitle, HeroTitle } from "@/components";

export default function Home() {
  return (
    <Container className="pt-[6.4rem]">
      <Hero>
        <Button
          className="animate-fade-in opacity-0 translate-y-[-1rem]"
          href="/"
          variant="secondary"
          size="small"
        >
          Linear 2022 Rebase - Built for scale
        </Button>
        <HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
          Linear is a better way <br className="hidden md:block" /> to build
          products
        </HeroTitle>
        <HeroSubTitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]">
          Meet the new standard for modern software development.{" "}
          <br className="hidden md:block" />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubTitle>
        <Button
          className="animate-fade-in [--animation-delay:800ms] opacity-0 translate-y-[-1rem]"
          href="/"
          variant="primary"
          size="large"
        >
          Get Started
        </Button>
        <img className="mt-[12.8rem]" src="/hero@4x.webp" alt="Hero Image" />
      </Hero>
    </Container>
  );
}
