'use client';

import { useState, type FormEvent } from 'react';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Client-side validation only, until a mailing-list provider is connected.
export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!EMAIL.test(email.trim())) {
      setMsg('Please enter a valid email address.');
      return;
    }
    setMsg("Thank you — you're on the list.");
    setEmail('');
  }

  return (
    <form className="subscribe" noValidate onSubmit={onSubmit}>
      <label className="sr-only" htmlFor="email">
        Email address
      </label>
      <div className="subscribe__row">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn--ink">
          Subscribe
        </button>
      </div>
      <p className="subscribe__msg" role="status" aria-live="polite">
        {msg}
      </p>
    </form>
  );
}
