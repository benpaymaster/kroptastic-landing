function App() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-900">
      {/* Header */}
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold text-green-900 mb-4">Kroptastic</h1>
        <p className="text-2xl font-semibold text-gray-800 tracking-tight">Precision Harvest. Peak Profit.</p>
      </header>

      {/* Hero Image */}
      <section className="mb-16">
        <img 
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1600&auto=format&fit=crop" 
          alt="Barley Field" 
          className="rounded-2xl shadow-lg w-full h-80 object-cover"
        />
      </section>

      {/* The Global Harvest Crisis */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">The Global Harvest Crisis</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-100 bg-gray-50 rounded-2xl">
            <h3 className="font-bold mb-2">Fragmented Coordination</h3>
            <p className="text-sm text-gray-600">Farmers, maltsters, and brewers lack a shared view. When data is siloed, logistics collapse and supply fails.</p>
          </div>
          <div className="p-6 border border-gray-100 bg-gray-50 rounded-2xl">
            <h3 className="font-bold mb-2">Quality Degradation</h3>
            <p className="text-sm text-gray-600">Millions of tonnes of premium crop are downgraded to feed annually due to mistimed harvests.</p>
          </div>
          <div className="p-6 border border-gray-100 bg-gray-50 rounded-2xl">
            <h3 className="font-bold mb-2">Predictive Failure</h3>
            <p className="text-sm text-gray-600">Traditional methods rely on historical intuition, which is failing to account for today's rapid climate shifts and unpredictable harvest windows.</p>
          </div>
        </div>
      </section>

      {/* The System */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">The Kroptastic System</h2>
        <div className="space-y-4">
          <div className="p-6 bg-green-900 text-white rounded-2xl flex items-start gap-4">
            <div className="text-2xl">🎯</div>
            <div>
              <h3 className="font-bold">AI Harvest Timing</h3>
              <p className="text-green-100 text-sm">Our models calculate the precise 'Proximity to Harvest' score for any crop, enabling data-driven decisions that minimize degradation and maximize yield value.</p>
            </div>
          </div>
          <div className="p-6 bg-green-900 text-white rounded-2xl flex items-start gap-4">
            <div className="text-2xl">🔗</div>
            <div>
              <h3 className="font-bold">Immutable Traceability</h3>
              <p className="text-green-100 text-sm">A tamper-proof ledger that automates trust between farmers and global buyers, eliminating reconciliation disputes and ensuring contract transparency.</p>
            </div>
          </div>
          <div className="p-6 bg-green-900 text-white rounded-2xl flex items-start gap-4">
            <div className="text-2xl">🌍</div>
            <div>
              <h3 className="font-bold">Synchronized Logistics</h3>
              <p className="text-green-100 text-sm">We align the operational rhythm of SMEs, maltsters, and global exporters, ensuring that data, equipment, and supply meet at the exact right moment to eliminate bottlenecks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="mb-16 text-center border-t pt-12">
        <h2 className="text-2xl font-bold mb-4">From European Expertise to Global Scale</h2>
        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
          We are currently piloting our platform in the high-stakes European malting barley market. By mastering this technical complexity, we are building a robust system designed to eliminate harvest inefficiencies for farmers and supply chain partners throughout the UK, Slovakia, and worldwide.
        </p>
      </section>

      {/* Footer Content */}
      <footer className="border-t pt-12 mt-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <h4 className="font-bold mb-4">Kroptastic</h4>
            <p className="text-sm text-gray-600">Transforming harvest efficiency through technology.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Features</li>
              <li>Benefits</li>
              <li>Pricing</li>
              <li>API</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><a href="mailto:ben@kroptastic.com" className="hover:text-green-900">ben@kroptastic.com</a></li>
            </ul>
          </div>
        </div>
        
        {/* Transform Section */}
        <div className="bg-gray-50 p-8 rounded-2xl text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Harvest Efficiency?</h3>
            <a 
              href="https://www.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-900 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition inline-block no-underline"
            >
                Request Early Access
            </a>
        </div>

        {/* Disclaimer */}
        <div className="text-xs text-gray-400 text-center border-t pt-8">
          © 2026 Kroptastic. All rights reserved. <br/>
          Disclaimer: This platform is currently in the pilot development phase. All data provided is for demonstration purposes and does not constitute final agricultural advice or binding contract guarantees.
        </div>
      </footer>
    </main>
  );
}

export default App;