import {
  Animator,
  batch,
  FadeIn,
  ScrollContainer,
  ScrollPage,
  StickyIn,
  ZoomIn,
  Sticky,
  Fade,
  MoveOut,
  Move,
} from "react-scroll-motion";

export default function Home() {
  const zoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const fadeUp = batch(Fade(), Sticky(), Move());
  return (
    <div className="bg-dark text-light">
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <h1>What&apos;s the purpose of this page?</h1>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={zoomInScrollOut}>
            <h1>
              The purpose of this website is to show all the possibilities that
              can be created using NextJS.
            </h1>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={fadeUp}>
            <h1>
              Go and explore the next pages by clicking the links in the Navbar
            </h1>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}
