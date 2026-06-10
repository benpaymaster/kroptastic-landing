import { motion } from 'framer-motion';
import { Cpu, Shield, BadgeCheck } from 'lucide-react';

const TechStack = () => {
  const techItems = [
    {
      icon: Cpu,
      title: "DePIN Swarms (Vertex Engine)",
      description: "Edge sensor orchestration",
      features: ["Real-time monitoring", "Predictive analytics", "Autonomous coordination"]
    },
    {
      icon: Shield,
      title: "Tamper-Proof Bridge (Chainlink)",
      description: "Secure on-chain oracle data",
      features: ["Decentralized oracles", "Data integrity", "Smart contract integration"]
    },
    {
      icon: BadgeCheck,
      title: "RWA Crop Passports (ERC-721)",
      description: "Tokenizing physical barley",
      features: ["NFT certification", "Supply chain traceability", "Yield tokenization"]
    }
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">The Tech Stack</h2>
          <p className="text-xl text-gray-300">Building the future of agricultural finance</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {techItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)"
              }}
              className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800 hover:border-green-500/50 transition-all duration-300"
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <item.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 mb-6">{item.description}</p>

              <ul className="space-y-3">
                {item.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-300"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                className="mt-6 w-full bg-slate-800 hover:bg-slate-700 text-green-400 py-3 rounded-lg font-semibold transition-all duration-300 border border-slate-700 hover:border-green-500/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Integration Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-900/30 rounded-2xl p-8 border border-slate-800">
            <h4 className="text-xl font-bold text-white mb-6">Seamless Integration</h4>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {["DePIN Sensors", "Chainlink Oracles", "Smart Contracts", "RWA Tokens"].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg font-semibold">
                    {step}
                  </div>
                  {index < 3 && (
                    <motion.div
                      className="w-8 h-0.5 bg-green-500/50 mx-2"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
