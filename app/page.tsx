import Image from 'next/image';
import heroPhoto from '@/assets/hero-writer.jpg';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Subscribe from '@/components/Subscribe';
import { pillars, programmes, site, steps, story } from '@/lib/content';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />

      <main id="main">
        <header className="hero" id="top">
          <div className="container">
            <div className="hero__copy">
              <span className="eyebrow eyebrow--gold">Next cohort begins {site.nextCohort}</span>
              <h1>
                Training authors, <span>not just writers</span>
              </h1>
              <p className="hero__lead">
                Every great book begins as a calling. We help you answer it with craft, discipline and a finished
                manuscript.
              </p>
              <div className="hero__actions">
                <a href="#programmes" className="btn btn--gold">
                  Join the cohort
                </a>
                <a href="#programmes" className="btn btn--ghost-light">
                  View programmes
                </a>
              </div>
            </div>
            <div className="hero__media">
              <Image
                src={heroPhoto}
                alt="A young woman in a purple jumper writing in a notebook at her desk"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 560px"
                placeholder="blur"
              />
            </div>
          </div>
        </header>

        <section className="strip">
          <div className="container">
            <span className="strip__title">Writers write. Authors finish.</span>
            <a href="#how">See how we get you there →</a>
          </div>
        </section>

        <section className="container approach" aria-labelledby="approach-title">
          <div className="section-head">
            <span className="eyebrow">Our approach</span>
            <h2 className="h2" id="approach-title">
              A gift is a starting point. Authorship is a discipline.
            </h2>
          </div>
          <div className="pillars">
            {pillars.map((p) => (
              <div key={p.title} className={`pillar${p.accent === 'ink' ? '' : ` pillar--${p.accent}`}`}>
                <strong>{p.title}</strong>
                <span>{p.body}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="programmes" id="programmes" aria-labelledby="programmes-title">
          <div className="container">
            <div className="programmes__head">
              <div className="section-head">
                <span className="eyebrow">Programmes</span>
                <h2 className="h2" id="programmes-title">
                  Find your path
                </h2>
              </div>
              <a href="#">All programmes →</a>
            </div>
            <div className="cards">
              {programmes.map((p) => (
                <article key={p.title} className="card">
                  <div className="card__body">
                    <div className="card__meta">
                      <span className="eyebrow">{p.length}</span>
                      <span className="pill">{p.level}</span>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                    <div className="card__foot">
                      <span>{p.start}</span>
                      <a href="#">Details →</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container how" id="how" aria-labelledby="how-title">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2 className="h2" id="how-title">
              From idea to published book
            </h2>
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title} className="step">
                <span className="step__num" aria-hidden="true">
                  {i + 1}
                </span>
                <strong>{s.title}</strong>
                <span>{s.body}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="stories" id="stories" aria-labelledby="stories-title">
          <div className="container">
            <div className="placeholder stories__portrait" role="img" aria-label="Graduate portrait placeholder">
              <span>graduate portrait</span>
            </div>
            <figure className="stories__copy">
              <span className="eyebrow eyebrow--gold" id="stories-title">
                Author stories
              </span>
              <blockquote>&ldquo;{story.quote}&rdquo;</blockquote>
              <figcaption className="stories__cite">
                <strong>{story.name}</strong>
                <span>
                  Author of <em>{story.book}</em> · {story.cohort}
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="container" aria-labelledby="cta-title">
          <div className="cta">
            <div className="cta__copy">
              <h2 id="cta-title">Your book is waiting</h2>
              <p>Get weekly words for authors, plus first notice when enrolment opens.</p>
            </div>
            <Subscribe />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
