/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface LinkItem {
  label: string;
  href: string;
}

const IMPORTANT_LINKS: LinkItem[] = [
  {label: 'Richard Huish College', href: 'https://www.huish.ac.uk/'},
  {label: 'Our Instagram', href: 'https://www.instagram.com/huishengsoc/'},
  {label: 'TinkerCAD', href: 'https://www.tinkercad.com/'},
  {label: 'Wokwi', href: 'https://wokwi.com/'},
];

const USEFUL_LINKS: LinkItem[] = [
  {label: 'Arduino Tutorials', href: 'https://projecthub.arduino.cc/'},
  {label: 'Arduino Documentation', href: 'https://docs.arduino.cc/'},
  {
    label: '.NET / WinForms Documentation',
    href: 'https://learn.microsoft.com/en-us/dotnet/desktop/winforms/',
  },
  {label: 'Microsoft Learn', href: 'https://learn.microsoft.com/en-us/dotnet/csharp/'},
];

export default function App() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-zinc-900 px-6 py-20 sm:py-28">
      <div className="max-w-xl mx-auto text-center space-y-14">
        <header className="space-y-3">
          <p className="text-xs tracking-wide text-zinc-500">
            Richard Huish College · Est. 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 text-balance">
            Welcome to Huish Engineering Society!
          </h1>
        </header>

        <section className="space-y-2.5">
          <h2 className="text-base font-semibold text-zinc-900">Who are we?</h2>
          <p className="text-[15px] leading-relaxed text-zinc-600">
            We are a small society, established in 2026, at Richard Huish College. We focus on
            electronic and software engineering for beginners, and are learning together to apply
            our knowledge onto a final collaborative project.
          </p>
        </section>

        <section className="space-y-2.5">
          <h2 className="text-base font-semibold text-zinc-900">Why join?</h2>
          <p className="text-[15px] leading-relaxed text-zinc-600">
            It is a great learning experience. Plus it IS fun, but can look really impressive on
            CVs, Personal Statements, and more!
          </p>
        </section>

        <section className="space-y-2.5">
          <h2 className="text-base font-semibold text-zinc-900">How do we work?</h2>
          <p className="text-[15px] leading-relaxed text-zinc-600">
            We teach C# as our primary programming language.
          </p>
          <p className="text-[15px] leading-relaxed text-zinc-600">
            For the electronics side, we learn using digital software like TinkerCAD and Wokwi.
            Once everyone is comfortable and prepared, prototypes for a final project will be
            designed, and eventually parts will (hopefully) be ordered to make it.
          </p>
        </section>

        <section className="space-y-2.5">
          <h2 className="text-base font-semibold text-zinc-900">Where are we based?</h2>
          <p className="text-[15px] leading-relaxed text-zinc-600">Coming soon.</p>
        </section>

        <section className="space-y-3 pt-2">
          <h2 className="text-base font-semibold text-zinc-900">Important Links</h2>
          <ul className="space-y-2">
            {IMPORTANT_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-950 hover:decoration-zinc-900 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 rounded-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-zinc-900">
            Less important, but useful, links
          </h2>
          <ul className="space-y-2">
            {USEFUL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-950 hover:decoration-zinc-900 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 rounded-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
