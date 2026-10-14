'use client';

import Image from 'next/image';
import { useState } from 'react';
import logo from '@/assets/gfwa-logo.jpg';
import { nav, site } from '@/lib/content';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className={`nav${open ? ' is-open' : ''}`} aria-label="Main">
      <div className="nav__inner">
        <a href="#top" className="brand" aria-label={`${site.name} — home`}>
          <span className="brand__mark">
            <Image src={logo} alt="" width={142} priority />
          </span>
          <span className="brand__name">
            God-Fashioned
            <br />
            Writers&apos; Academy
          </span>
        </a>
        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
        </button>
        <div className="nav__links" id="nav-links">
          {nav.map((item) => (
            <a key={item.label} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <a href="#programmes" className="btn btn--purple btn--sm" onClick={close}>
            Enrol now
          </a>
        </div>
      </div>
    </nav>
  );
}
