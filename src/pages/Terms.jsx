import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Terms = () => {
  const isMinimal = new URLSearchParams(window.location.search).get('minimal') === 'true';

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className={`${isMinimal ? 'pt-10' : 'pt-32'} pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-pink max-w-none"
        >
          <h1 className="text-4xl font-bold mb-8 gradient-text">Terms and Conditions</h1>
          <p className="text-gray-600 mb-6 italic">Last Updated: April 28, 2026</p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using the LoveMitra mobile application or website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
            <p className="text-gray-600 leading-relaxed">
              You must be at least 18 years old to use LoveMitra. By using the service, you represent and warrant that you have the right, authority, and capacity to enter into this agreement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. User Conduct</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Use the service for any illegal or unauthorized purpose.</li>
              <li>Impersonate any person or entity.</li>
              <li>Harass, bully, or intimidate other users.</li>
              <li>Post NSFW, offensive, or prohibited content.</li>
              <li>Use the service for commercial solicitation or spam.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Account Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to suspend or terminate your account at our sole discretion, without notice, for any conduct that we believe violates these Terms or is harmful to other users or our business interests.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              LoveMitra provides the service "as is" and shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the service after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              For any questions regarding these Terms, please reach out to us at:<br />
              <strong>Email:</strong> legal@lovemitra.com
            </p>
          </section>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
