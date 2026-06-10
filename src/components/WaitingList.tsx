import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, Mail, ArrowRight, CheckCircle } from 'lucide-react';

const WaitingList = () => {
  const [email, setEmail] = useState('');
  const [walletConnected, setWalletConnected] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const connectWallet = () => {
    setWalletConnected(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join the <span className="glow-text">Agricultural Revolution</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be the first to access our Genesis Pilot in Slovakia and secure your place in the future of agricultural finance
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-slate-700 glow-effect"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Email Capture */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Mail className="w-6 h-6 text-green-400 mr-3" />
                  Early Access List
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>You're on the list!</span>
                      </>
                    ) : (
                      <>
                        <span>Join Waitlist</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>Priority access to Genesis Pilot</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>Exclusive token allocation</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>Monthly progress updates</span>
                  </div>
                </div>
              </div>

              {/* Wallet Connect */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Wallet className="w-6 h-6 text-green-400 mr-3" />
                  Web3 Integration
                </h3>

                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                  {walletConnected ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      </div>
                      <p className="text-green-400 font-semibold mb-2">Wallet Connected</p>
                      <p className="text-gray-400 text-sm">0x1234...5678</p>
                    </motion.div>
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Wallet className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-gray-300 mb-6">Connect your wallet to access the dApp and participate in token sales</p>
                      
                      <motion.button
                        onClick={connectWallet}
                        className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 border border-slate-600 hover:border-green-500/50"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Connect Wallet
                      </motion.button>
                    </div>
                  )}
                </div>

                <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                  <p className="text-sm text-green-400">
                    <strong>Early Adopter Bonus:</strong> First 100 wallet connections receive exclusive NFT airdrop
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-slate-700"
            >
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold glow-text mb-2">2,847</div>
                  <div className="text-sm text-gray-400">Waitlist Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold glow-text mb-2">500 ha</div>
                  <div className="text-sm text-gray-400">Pilot Farms</div>
                </div>
                <div>
                  <div className="text-3xl font-bold glow-text mb-2">Q2 2026</div>
                  <div className="text-sm text-gray-400">Mainnet Launch</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WaitingList;
