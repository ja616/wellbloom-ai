import React from 'react';
import { ArrowRight, Heart, Sparkles, Activity, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-20 pb-10 md:pt-32 md:pb-20 overflow-hidden relative">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-wellness-blue/10 text-wellness-blue mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">AI-Powered Women's Health Platform</span>
            </div>
            <h1 className="heading-1 mb-6 text-gray-900">
              Your Personal <span className="text-wellness-blue">AI Health</span> Companion
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Advanced AI analysis of your health data to provide personalized wellness plans designed specifically for women's health needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center">
                Start Health Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn-secondary flex items-center justify-center">
                Learn How It Works
              </button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              <StatItem icon={<Heart className="h-5 w-5 text-wellness-blue" />} label="Health Clustering" value="98%" />
              <StatItem icon={<Activity className="h-5 w-5 text-wellness-teal" />} label="Plan Adherence" value="87%" />
              <StatItem icon={<Zap className="h-5 w-5 text-wellness-purple" />} label="Health Improvement" value="92%" />
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="relative h-[450px] w-full">
              <div className="absolute top-0 right-0 h-[400px] w-[350px] bg-wellness-blue/5 rounded-3xl border border-wellness-blue/20 animate-float"></div>
              <div className="absolute top-14 right-14 glass-panel h-[400px] w-[350px] flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-3/4 h-40 bg-wellness-blue/10 rounded-xl mb-6 overflow-hidden">
                    <div className="w-full h-1.5 bg-wellness-blue/30 mt-4 mx-auto rounded"></div>
                    <div className="w-3/4 h-1.5 bg-wellness-blue/20 mt-3 mx-auto rounded"></div>
                    <div className="flex mt-6 px-4 gap-4">
                      <div className="w-1/2 h-20 bg-wellness-blue/10 rounded-lg"></div>
                      <div className="w-1/2 h-20 bg-wellness-blue/10 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="relative w-40 h-40 rounded-full bg-wellness-blue/5 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-2 border-wellness-blue/20 border-dashed animate-spin-slow"></div>
                    <div className="w-32 h-32 rounded-full bg-wellness-blue/10 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-wellness-blue/20 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-wellness-blue flex items-center justify-center text-white font-bold text-xl">
                          AI
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 w-3/4">
                    <div className="h-1.5 bg-wellness-blue/30 w-full rounded mb-2"></div>
                    <div className="h-1.5 bg-wellness-blue/20 w-2/3 rounded mb-2"></div>
                    <div className="h-1.5 bg-wellness-blue/10 w-1/2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

const StatItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => {
  return (
    <div className="flex flex-col items-center p-3 rounded-xl bg-white shadow-soft">
      <div className="mb-1">{icon}</div>
      <p className="font-bold text-lg">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
};

export default HeroSection;
