
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, className, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "card p-6 flex flex-col items-start animate-fade-in-up", 
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="rounded-xl p-3 bg-wellness-blue/10 text-wellness-blue mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
