import { site } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__col">
          <span className="footer__brand">
            God-Fashioned
            <br />
            Writers&apos; Academy
          </span>
          <span>{site.tagline}</span>
        </div>
        <div className="footer__col">
          <strong>Academy</strong>
          <a href="#programmes">Programmes</a>
          <a href="#how">How it works</a>
          <a href="#stories">Author stories</a>
        </div>
        <div className="footer__col">
          <strong>Contact</strong>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.instagram}>Instagram</a>
        </div>
      </div>
      <div className="footer__legal">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
