import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calculator } from 'lucide-react';

const ROICalculator = () => {
  const [hectares, setHectares] = useState(1000);
  const savingsPerHectare = 35; // £35 per hectare saved from timing delays
  const estimatedSavings = hectares * savingsPerHectare;

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-8 h-8 text-green-400 mr-3" />
            <h2 className="text-4xl font-bold text-white">ROI Calculator</h2>
          </div>
          <p className="text-xl text-gray-300">See how much you can save with precision harvesting</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-slate-800/50 rounded-2xl p-8 border border-slate-700 glow-effect"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Slider Section */}
            <div>
              <label className="block text-lg font-semibold text-gray-200 mb-4">
                Hectares Under Management
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={hectares}
                  onChange={(e) => setHectares(Number(e.target.value))}
                  className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #10b981 0%, #10b981 ${((hectares - 100) / 4900) * 100}%, #475569 ${((hectares - 100) / 4900) * 100}%, #475569 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>100 ha</span>
                  <span>5,000 ha</span>
                </div>
              </div>
              
              <motion.div 
                className="mt-6 text-center"
                key={hectares}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-5xl font-bold glow-text">{hectares.toLocaleString()}</div>
                <div className="text-gray-400">hectares</div>
              </motion.div>
            </div>

            {/* Results Section */}
            <div className="text-center">
              <div className="mb-6">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Estimated Potential Loss Avoided</h3>
              </div>
              
              <motion.div 
                className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30"
                key={estimatedSavings}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-6xl font-bold glow-text mb-2">
                  £{estimatedSavings.toLocaleString()}
                </div>
                <div className="text-gray-300">
                  saved per harvest cycle
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  Based on £35 per hectare saved from optimized harvest timing
                </div>
              </motion.div>

              <motion.button
                className="mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Detailed Analysis
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;
