const CONTACT_EMAIL = 'ben@kroptastic.com';
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  'Barley harvest timing: 20-minute conversation',
)}`;

const problems = [
  {
    title: 'Harvest dates are mostly guesses',
    text: 'Today, the date a field will be ready usually comes from the grower’s own judgement and a phone call. The rest of the chain hears late.',
  },
  {
    title: 'Everyone plans around one date',
    text: 'Maltsters book intake, contractors book combines and hauliers book lorries. All of it hangs on when the barley is actually ready.',
  },
  {
    title: 'Bad timing costs money',
    text: 'Barley cut too early or too late can lose quality, and malting barley that misses specification can be downgraded.',
  },
];

const steps = [
  {
    title: 'Add a field',
    text: 'The grower tells us the field and the sowing date. That is all we ask them to enter.',
  },
  {
    title: 'We estimate the harvest window',
    text: 'We combine weather and satellite data with proven forecasting models to estimate when the field will be ready.',
  },
  {
    title: 'The whole chain sees the same window',
    text: 'Grower, maltster and contractor look at the same forecast and are told when it changes.',
  },
  {
    title: 'Every forecast is scored',
    text: 'After harvest, the grower confirms the actual date. Forecast and result go into a shared, tamper-proof record, so anyone can check how accurate each forecast was.',
  },
];

const audiences = [
  {
    who: 'Growers',
    text: 'See when each field is likely to be ready, and give your buyer and contractor an earlier, more reliable notice.',
  },
  {
    who: 'Maltsters',
    text: 'See expected harvest windows across the growers you buy from, so you can plan intake and capacity.',
  },
  {
    who: 'Harvest contractors',
    text: 'See where the combines are needed, and when, so you can plan the season with fewer surprises.',
  },
];

function App() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-900">
      {/* Hero */}
      <header className="mb-12 text-center">
        <p className="text-sm font-semibold tracking-wide text-green-900 mb-4">KROPTASTIC</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 tracking-tight">
          Know when your barley will be ready.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Kroptastic uses weather and satellite data to tell barley growers, maltsters and harvest
          contractors when each field is likely to be ready, and keeps a shared, tamper-proof
          record of how accurate every forecast turned out to be.
        </p>
        <p className="mt-6 inline-block text-sm bg-green-50 text-green-900 border border-green-200 rounded-full px-4 py-1.5">
          Early stage. Looking for pilot partners for the 2027 harvest.
        </p>
        <div className="mt-8">
          <a
            href={MAILTO}
            className="bg-green-900 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition inline-block no-underline"
          >
            Talk to us for 20 minutes
          </a>
          <p className="mt-3 text-sm text-gray-500">Free. We are listening, not selling.</p>
        </div>
      </header>

      <section className="mb-16">
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1600&auto=format&fit=crop"
          alt="A field of cereal crops"
          className="rounded-2xl shadow-lg w-full h-80 object-cover"
        />
      </section>

      {/* Problem */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">The problem</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="p-6 border border-gray-100 bg-gray-50 rounded-2xl">
              <h3 className="font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-center">What we are building</h2>
        <p className="text-center text-gray-600 mb-8">
          Forecasts come from data, not from estimates. Growers only confirm facts.
        </p>
        <ol className="space-y-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="p-6 bg-green-900 text-white rounded-2xl flex items-start gap-4"
            >
              <div className="text-2xl font-bold w-8 shrink-0">{i + 1}</div>
              <div>
                <h3 className="font-bold">{s.title}</h3>
                <p className="text-green-100 text-sm">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Who it is for */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Who it is for</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <div key={a.who} className="p-6 border border-gray-200 rounded-2xl">
              <h3 className="font-bold mb-2 text-green-900">{a.who}</h3>
              <p className="text-sm text-gray-600">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Honest status */}
      <section className="mb-16 text-center border-t pt-12">
        <h2 className="text-2xl font-bold mb-4">Where we are</h2>
        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Kroptastic is at an early stage. We have built a prototype of the shared accuracy
          record, and we are speaking with maltsters, growers and contractors to learn what would
          genuinely help. We do not yet have a live product or published accuracy results. We are
          looking for a small number of pilot partners for the 2027 harvest.
        </p>
      </section>

      {/* Closing CTA */}
      <section className="bg-gray-50 p-8 rounded-2xl text-center mb-12">
        <h2 className="text-2xl font-bold mb-3">Grow, malt or harvest barley?</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Tell us how you find out today when a crop will be ready, and what it costs you when the
          timing is wrong. Twenty minutes, by phone or video.
        </p>
        <a
          href={MAILTO}
          className="bg-green-900 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition inline-block no-underline"
        >
          Talk to us for 20 minutes
        </a>
        <p className="mt-4 text-sm text-gray-500">
          Or email{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-green-900">
            {CONTACT_EMAIL}
          </a>
        </p>
      </section>

      <footer className="border-t pt-8 text-center text-xs text-gray-500">
        <p className="mb-2">Kroptastic · Adegbenga (Ben) Ogungbeje, Founder</p>
        <p>
          © 2026 Kroptastic. Kroptastic is an early-stage project. Anything shown here is a
          description of what we are building, not agricultural, financial or contractual advice.
        </p>
      </footer>
    </main>
  );
}

export default App;
