
import React, { useState, useEffect } from 'react';
import { Activity, Stethoscope, PieChart, Users, Sparkles } from 'lucide-react';

const clusters = [
  {
    id: 1,
    name: 'Active & Low-Risk Group',
    color: '#3B82F6',
    traits: [
      'Regular menstrual cycles',
      'No chronic diseases (diabetes, thyroid)',
      'Balanced diet & active lifestyle',
      'Normal hormonal levels',
      'Good sleep quality'
    ],
    recommendations: [
      'Annual wellness checkups',
      'Regular breast self-exams',
      'Maintain current exercise routine',
      'Continue balanced nutrition',
      'Preventive health screenings'
    ],
    percentage: 30
  },
  {
    id: 2,
    name: 'PCOS / Hormonal Imbalance Risk',
    color: '#10B981',
    traits: [
      'Irregular periods, acne, weight gain',
      'High androgen levels (hair growth)',
      'Insulin resistance or borderline diabetes',
      'Difficulty losing weight',
      'Mood fluctuations'
    ],
    recommendations: [
      'Endocrinologist consultation',
      'Anti-inflammatory diet plan',
      'Regular insulin monitoring',
      'Hormone-balancing supplements',
      'Stress management techniques'
    ],
    percentage: 22
  },
  {
    id: 3,
    name: 'Menopause & Bone Health Risks',
    color: '#6366F1',
    traits: [
      'Perimenopausal or postmenopausal',
      'Osteoporosis risk factors',
      'Hot flashes, mood swings, joint pain',
      'Sleep disturbances',
      'Changing body composition'
    ],
    recommendations: [
      'Bone density screening',
      'Calcium and vitamin D supplements',
      'Weight-bearing exercises',
      'Hormone therapy evaluation',
      'Menopause symptom management'
    ],
    percentage: 18
  },
  {
    id: 4,
    name: 'High-Stress & Metabolic Risk Group',
    color: '#8B5CF6',
    traits: [
      'High cortisol (stress hormone)',
      'Poor sleep quality',
      'Increased risk of hypertension',
      'Frequent fatigue and headaches',
      'Digestion issues'
    ],
    recommendations: [
      'Stress reduction program',
      'Sleep hygiene improvement',
      'Heart health screening',
      'Anti-inflammatory nutrition plan',
      'Regular physical activity'
    ],
    percentage: 15
  },
  {
    id: 5,
    name: 'Pregnancy & Postpartum Care',
    color: '#EC4899',
    traits: [
      'Expecting mothers or recently postpartum',
      'Nutritional needs for maternal health',
      'Postpartum depression risk factors',
      'Physical recovery needs',
      'New parenting adjustment'
    ],
    recommendations: [
      'Prenatal/postnatal nutrition plan',
      'Mental health support resources',
      'Gentle postpartum exercise routine',
      'Breastfeeding support if needed',
      'Regular pediatric checkups'
    ],
    percentage: 15
  }
];

const AIHealthSegmentation = () => {
  const [activeCluster, setActiveCluster] = useState(clusters[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClusterClick = (cluster: any) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCluster(cluster);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="ai-segmentation" className="py-20 bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-wellness-blue/10 text-wellness-blue mb-4">
            <Stethoscope className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Women's Health Clustering</span>
          </div>
          <h2 className="heading-2 mb-4">Proposed Health Clusters for Women's Health</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI system uses Gaussian Mixture Models to dynamically refine these health profiles for personalized care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="glass-panel p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-wellness-blue" />
                Health Clusters
              </h3>
              <div className="space-y-3">
                {clusters.map((cluster) => (
                  <button
                    key={cluster.id}
                    onClick={() => handleClusterClick(cluster)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center ${
                      activeCluster.id === cluster.id
                        ? 'bg-wellness-blue/10 border-l-4 border-wellness-blue'
                        : 'bg-gray-50 hover:bg-gray-100 border-l-4 border-transparent'
                    }`}
                  >
                    <div
                      className="h-3 w-3 rounded-full mr-3"
                      style={{ backgroundColor: cluster.color }}
                    ></div>
                    <div>
                      <div className="font-medium">{cluster.name}</div>
                      <div className="text-xs text-gray-500">
                        {cluster.percentage}% of users
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className={`glass-panel p-6 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">
                  <span style={{ color: activeCluster.color }}>{activeCluster.name}</span>
                </h3>
                <div 
                  className="px-3 py-1 rounded-full text-sm font-medium" 
                  style={{ backgroundColor: `${activeCluster.color}20`, color: activeCluster.color }}
                >
                  {activeCluster.percentage}% of users
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center mb-3">
                    <Activity className="h-5 w-5 mr-2 text-wellness-blue" />
                    <h4 className="font-medium">Key Traits</h4>
                  </div>
                  <ul className="space-y-2">
                    {activeCluster.traits.map((trait, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-xs text-wellness-blue font-medium mt-0.5 mr-3">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center mb-3">
                    <Sparkles className="h-5 w-5 mr-2 text-wellness-teal" />
                    <h4 className="font-medium">AI Recommendations</h4>
                  </div>
                  <ul className="space-y-2">
                    {activeCluster.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center text-xs text-wellness-teal font-medium mt-0.5 mr-3">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center mb-4">
                  <PieChart className="h-5 w-5 mr-2 text-wellness-purple" />
                  <h4 className="font-medium">Health Distribution</h4>
                </div>
                <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
                  {clusters.map((cluster, index) => {
                    // Calculate the width and left position based on percentages
                    const width = `${cluster.percentage}%`;
                    const left = clusters
                      .slice(0, index)
                      .reduce((acc, c) => acc + c.percentage, 0);
                    
                    return (
                      <div
                        key={cluster.id}
                        style={{
                          position: 'absolute',
                          left: `${left}%`,
                          width,
                          backgroundColor: cluster.color,
                          height: '100%',
                          transition: 'all 0.5s ease-out',
                        }}
                      ></div>
                    );
                  })}
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-500">Low health risk</span>
                  <span className="text-xs text-gray-500">Needs specialized care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHealthSegmentation;
