import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Glowing Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="glow-text">The Soil-to-Ledger Protocol</span>
            <br />
            <span className="text-gray-100">for Global Food Security.</span>
          </h1>

          {/* Sub-headline */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Kroptastic coordinates decentralized DePIN sensor swarms with predictive AI to eliminate the 48-hour harvest gamble. 
            We transform volatile biological crops into liquid, on-chain Real World Assets.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-3 glow-effect hover:from-green-400 hover:to-emerald-500 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16, 185, 129, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Join Genesis Pilot (Slovakia 2026)</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-3 hover:bg-green-400 hover:text-slate-950 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5" />
              <span>Read Whitepaper v1.0</span>
            </motion.button>
          </motion.div>

          {/* Animated Elements */}
          <div className="mt-16 relative">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 2, delay: 1 }}
            >
              <div className="w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
            </motion.div>
            
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                {[
                  { value: "48h", label: "Harvest Risk Eliminated" },
                  { value: "RWA", label: "Real World Assets" },
                  { value: "DePIN", label: "Decentralized Infrastructure" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  >
                    <div className="text-3xl font-bold glow-text mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
