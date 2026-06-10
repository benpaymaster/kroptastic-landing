import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Activity, Droplets, Sparkles } from 'lucide-react';

interface NodeData {
  id: string;
  moisture: number;
  status: 'optimizing' | 'harvest-ready' | 'monitoring';
  x: number;
  y: number;
}

const DigitalTwin = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [isMinting, setIsMinting] = useState(false);

  // Mock sensor node data
  const nodes: NodeData[] = [
    { id: 'Node_01', moisture: 14.2, status: 'optimizing', x: 10, y: 10 },
    { id: 'Node_02', moisture: 13.8, status: 'optimizing', x: 30, y: 15 },
    { id: 'Node_03', moisture: 12.5, status: 'harvest-ready', x: 50, y: 10 },
    { id: 'Node_04', moisture: 14.2, status: 'optimizing', x: 70, y: 20 },
    { id: 'Node_05', moisture: 13.1, status: 'optimizing', x: 20, y: 40 },
    { id: 'Node_06', moisture: 12.8, status: 'optimizing', x: 40, y: 35 },
    { id: 'Node_07', moisture: 12.1, status: 'harvest-ready', x: 60, y: 45 },
    { id: 'Node_08', moisture: 13.5, status: 'optimizing', x: 80, y: 40 },
    { id: 'Node_09', moisture: 12.1, status: 'harvest-ready', x: 15, y: 60 },
    { id: 'Node_10', moisture: 13.9, status: 'optimizing', x: 35, y: 65 },
    { id: 'Node_11', moisture: 12.3, status: 'harvest-ready', x: 55, y: 70 },
    { id: 'Node_12', moisture: 14.0, status: 'optimizing', x: 75, y: 60 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'harvest-ready':
        return 'bg-green-500';
      case 'optimizing':
        return 'bg-yellow-500';
      default:
        return 'bg-blue-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'harvest-ready':
        return 'HARVEST WINDOW ACTIVE';
      case 'optimizing':
        return 'OPTIMIZING';
      default:
        return 'MONITORING';
    }
  };

  const handleMintNFT = () => {
    setIsMinting(true);
    setTimeout(() => {
      setIsMinting(false);
    }, 3000);
  };

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
            <MapPin className="w-8 h-8 text-green-400 mr-3" />
            <h2 className="text-4xl font-bold text-white">SPU Nitra Digital Twin</h2>
          </div>
          <p className="text-xl text-gray-300">Live telemetry from experimental plots in Nitra/Kolíňany</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Digital Twin Field Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700"
          >
            <h3 className="text-xl font-bold text-white mb-4">Digital Twin Field Map</h3>
            <div className="relative bg-slate-900/50 rounded-xl p-4 h-96 overflow-hidden">
              {/* Grid background */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-1 opacity-20">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="border border-slate-700"></div>
                ))}
              </div>

              {/* Sensor nodes */}
              {nodes.map((node) => (
                <motion.div
                  key={node.id}
                  className={`absolute w-8 h-8 ${getStatusColor(node.status)} rounded-full cursor-pointer flex items-center justify-center shadow-lg`}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setSelectedNode(node.id)}
                  animate={{
                    boxShadow: selectedNode === node.id 
                      ? "0 0 20px rgba(16, 185, 129, 0.8)" 
                      : "0 0 10px rgba(16, 185, 129, 0.3)"
                  }}
                >
                  <Activity className="w-4 h-4 text-white" />
                </motion.div>
              ))}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {nodes.map((node, i) => {
                  if (i === 0) return null;
                  const prevNode = nodes[i - 1];
                  return (
                    <motion.line
                      key={`line-${i}`}
                      x1={`${prevNode.x}%`}
                      y1={`${prevNode.y}%`}
                      x2={`${node.x}%`}
                      y2={`${node.y}%`}
                      stroke="rgba(16, 185, 129, 0.3)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                    />
                  );
                })}
              </svg>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-400">Harvest Ready</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-gray-400">Optimizing</span>
                </div>
              </div>
              <span className="text-gray-500">12 Active Nodes</span>
            </div>
          </motion.div>

          {/* Telemetry Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Selected Node Details */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Droplets className="w-6 h-6 text-green-400 mr-2" />
                Live Telemetry
              </h3>
              
              {selectedNode ? (
                <motion.div
                  key={selectedNode}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  {nodes.filter(n => n.id === selectedNode).map(node => (
                    <div key={node.id} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Node ID</span>
                        <span className="text-white font-semibold">{node.id}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Moisture Level</span>
                        <span className="text-green-400 font-bold">{node.moisture}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Status</span>
                        <span className={`font-semibold ${
                          node.status === 'harvest-ready' ? 'text-green-400' : 'text-yellow-400'
                        }`}>
                          {getStatusText(node.status)}
                        </span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <p className="text-gray-400 text-center py-8">Click on a node to view telemetry</p>
              )}
            </div>

            {/* Mint NFT Section */}
            <motion.div
              className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 rounded-2xl p-6 border border-green-500/30"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <Sparkles className="w-6 h-6 text-green-400 mr-2" />
                <h3 className="text-xl font-bold text-white">Crop Passport NFT</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Mint a unique NFT representing the digital twin of your crop's journey from seed to harvest.
              </p>

              <motion.button
                onClick={handleMintNFT}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isMinting}
              >
                {isMinting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Minting...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Mint Crop Passport NFT</span>
                  </>
                )}
              </motion.button>

              {isMinting && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-center text-green-400 text-sm"
                >
                  Creating your digital crop passport on the blockchain...
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTwin;
