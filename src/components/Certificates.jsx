import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Info, X } from 'lucide-react';

const certs = [
  {
    id: 1,
    title: 'OCI 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    date: "Mar '26",
    desc: 'Foundational knowledge of AI concepts and Oracle Cloud Infrastructure AI services.',
    image: '/cert-oracle-ai.png'
  },
  {
    id: 2,
    title: 'Oracle Data Platform 2025 Certified Foundations Associate',
    issuer: 'Oracle',
    date: "Mar '26",
    desc: 'Fundamental understanding of Oracle Data Platform capabilities and data management.',
    image: '/cert-oracle-data.png'
  },
  {
    id: 3,
    title: 'Social Networks',
    issuer: 'NPTEL',
    date: "Nov '25",
    desc: 'Advanced concepts in social network analysis and dynamics.',
    image: '/cert-nptel.jpg'
  },
  {
    id: 4,
    title: 'Responsive Web Design',
    issuer: 'FreeCodeCamp',
    date: "2024",
    desc: 'Certification in HTML, CSS, and creating responsive web designs.',
    image: '/cert-web-design.png'
  }
];

const CertCard = ({ cert, onOpenModal }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-[320px] w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden glass-panel flex flex-col p-8 border-l-4 border-l-brand bg-white/[0.03]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand border border-brand/20 shadow-inner">
              <Award size={28} />
            </div>
            <h3 className="text-white font-black text-xl uppercase tracking-tighter leading-[0.9]">
              {cert.title}
            </h3>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed flex-grow">
            {cert.desc}
          </p>

          <div className="flex items-center gap-2 mt-6 text-brand/40 font-bold text-[10px] uppercase tracking-[0.3em]">
            <Info size={14} />
            Hover for Details
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 backface-hidden glass-panel flex flex-col items-center justify-center p-8 bg-brand border border-white/20 text-black rotate-y-180"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="text-center w-full space-y-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 mb-1">Issued By</p>
              <p className="font-black text-2xl uppercase tracking-tighter leading-none">{cert.issuer}</p>
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 mb-1">Date</p>
              <p className="font-bold text-sm uppercase tracking-widest">{cert.date}</p>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenModal(cert);
                }}
                className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 shadow-2xl"
              >
                <Award size={18} />
                View Certificate
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="section-padding bg-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-brand"></div>
            <span className="text-brand font-black text-xs uppercase tracking-[0.5em]">Credentials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 text-white uppercase tracking-tighter">Certificates</h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A curation of my industry certifications and specialized training, showcasing a commitment to excellence and continuous skill evolution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certs.map((cert, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={cert.id}
            >
              <CertCard cert={cert} onOpenModal={setSelectedCert} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-6 bg-black/95 backdrop-blur-[30px]"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl flex flex-col items-center"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="fixed top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-16 md:h-16 bg-brand text-black rounded-full flex items-center justify-center hover:bg-white transition-all z-[110] shadow-2xl border-4 border-dark"
              >
                <X size={32} />
              </button>

              <div className="w-full rounded-[2rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] border-8 border-white/10 bg-white p-1">
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.title} Certificate`}
                  className="w-full h-auto object-contain max-h-[75vh]"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/1200x800/222/d2f15d?text=CERTIFICATE+PREVIEW%0A(Verify+Public+Folder)";
                  }}
                />
              </div>
              <div className="mt-8 text-center">
                <p className="text-white font-black text-sm uppercase tracking-[0.5em]">{selectedCert.title}</p>
                <p className="text-brand text-xs mt-2 font-bold opacity-80 uppercase tracking-widest">{selectedCert.issuer} • {selectedCert.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
