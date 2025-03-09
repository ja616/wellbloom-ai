
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HealthAssessment from '@/components/HealthAssessment';
import WomensHealthForm from '@/components/WomensHealthForm';
import AIHealthSegmentation from '@/components/AIHealthSegmentation';
import VoiceChatbot from '@/components/VoiceChatbot';
import WellnessDashboard from '@/components/WellnessDashboard';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* Comment out the general health assessment in favor of the women's health form */}
        {/* <HealthAssessment /> */}
        <WomensHealthForm />
        <WellnessDashboard />
        <AIHealthSegmentation />
        <VoiceChatbot />
        
        <section className="py-20 bg-wellness-blue text-white">
          <div className="container-custom mx-auto text-center">
            <h2 className="heading-2 mb-6">Start Your Wellness Journey Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Experience the future of personalized healthcare with WellBloom AI.
            </p>
            <button className="bg-white text-wellness-blue px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors">
              Get Started Now
            </button>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-wellness-blue rounded-lg flex items-center justify-center text-white font-semibold text-xl">
                  W
                </div>
                <span className="font-semibold text-lg">WellBloom AI</span>
              </div>
              <p className="text-gray-400 text-sm">
                Advanced AI-powered health and wellness platform for personalized care.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Health Library</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">HIPAA Compliance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Protection</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} WellBloom AI. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
