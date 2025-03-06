
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Heart, Utensils, Brain, Moon, Trophy, Circle, Calendar, BarChart2 } from 'lucide-react';

const WellnessDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="heading-2 mb-4">Personalized Wellness Dashboard</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track your progress and get personalized recommendations across all dimensions of health.
          </p>
        </div>

        <div className="glass-panel p-6">
          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-wellness-blue/10 flex items-center justify-center mr-3">
                  <div className="h-8 w-8 rounded-full bg-wellness-blue flex items-center justify-center text-white font-semibold">
                    JS
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">John Smith</h3>
                  <p className="text-sm text-gray-500">Active Optimizer • 34 years</p>
                </div>
              </div>
              <div className="text-sm text-gray-500">Last updated: Today at 9:45 AM</div>
            </div>

            <TabsList className="grid grid-cols-5 w-full max-w-3xl mx-auto mb-8">
              <TabsTrigger value="overview" className="flex items-center py-2">
                <BarChart2 className="h-4 w-4 mr-2" />
                <span>Overview</span>
              </TabsTrigger>
              <TabsTrigger value="physical" className="flex items-center py-2">
                <Activity className="h-4 w-4 mr-2" />
                <span>Physical</span>
              </TabsTrigger>
              <TabsTrigger value="nutrition" className="flex items-center py-2">
                <Utensils className="h-4 w-4 mr-2" />
                <span>Nutrition</span>
              </TabsTrigger>
              <TabsTrigger value="mental" className="flex items-center py-2">
                <Brain className="h-4 w-4 mr-2" />
                <span>Mental</span>
              </TabsTrigger>
              <TabsTrigger value="goals" className="flex items-center py-2">
                <Trophy className="h-4 w-4 mr-2" />
                <span>Goals</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <StatCard 
                  icon={<Heart className="h-5 w-5 text-wellness-blue" />}
                  title="Health Score"
                  value="86"
                  unit="/100"
                  change="+3"
                  changeType="positive"
                />
                <StatCard 
                  icon={<Activity className="h-5 w-5 text-wellness-teal" />}
                  title="Activity Level"
                  value="75"
                  unit="/100"
                  change="+8"
                  changeType="positive"
                />
                <StatCard 
                  icon={<Utensils className="h-5 w-5 text-wellness-green" />}
                  title="Nutrition Score"
                  value="71"
                  unit="/100"
                  change="-2"
                  changeType="negative"
                />
                <StatCard 
                  icon={<Brain className="h-5 w-5 text-wellness-purple" />}
                  title="Mental Wellness"
                  value="82"
                  unit="/100"
                  change="+5"
                  changeType="positive"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                  <div className="bg-white rounded-xl border border-gray-100 p-4 h-full">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium">Weekly Progress</h3>
                      <div className="text-sm text-gray-500">Last 7 days</div>
                    </div>

                    <div className="h-64 flex items-end justify-between gap-2 px-2">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
                        const heights = [60, 45, 75, 50, 80, 65, 85];
                        const colors = [
                          'bg-wellness-blue',
                          'bg-wellness-teal',
                          'bg-wellness-purple',
                          'bg-wellness-blue',
                          'bg-wellness-green',
                          'bg-wellness-indigo',
                          'bg-wellness-blue'
                        ];
                        return (
                          <div key={day} className="flex flex-col items-center flex-1">
                            <div 
                              className={`w-full rounded-t-lg ${colors[i]}`} 
                              style={{ height: `${heights[i]}%` }}
                            ></div>
                            <div className="text-xs text-gray-500 mt-2">{day}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl border border-gray-100 p-4 h-full">
                    <h3 className="font-medium mb-4">Today's Goals</h3>
                    
                    <div className="space-y-4">
                      <GoalItem 
                        title="Drink 8 glasses of water"
                        icon={<Circle className="h-4 w-4" />}
                        progress={75}
                        color="wellness-blue"
                      />
                      <GoalItem 
                        title="10,000 steps"
                        icon={<Circle className="h-4 w-4" />}
                        progress={60}
                        color="wellness-teal"
                      />
                      <GoalItem 
                        title="Meditate for 10 minutes"
                        icon={<Circle className="h-4 w-4" />}
                        progress={100}
                        color="wellness-purple"
                        completed={true}
                      />
                      <GoalItem 
                        title="Eat 5 servings of vegetables"
                        icon={<Circle className="h-4 w-4" />}
                        progress={40}
                        color="wellness-green"
                      />
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button className="w-full py-2 text-center text-wellness-blue font-medium">
                        View All Goals
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="physical" className="animate-fade-in">
              <div className="text-center p-8">
                <Activity className="h-16 w-16 text-wellness-blue mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Physical Health Dashboard</h3>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                  Track your activity levels, sleep quality, and vital signs to optimize your physical wellbeing.
                </p>
                <button className="btn-primary">
                  Explore Physical Health
                </button>
              </div>
            </TabsContent>

            <TabsContent value="nutrition" className="animate-fade-in">
              <div className="text-center p-8">
                <Utensils className="h-16 w-16 text-wellness-green mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Nutrition Dashboard</h3>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                  Monitor your nutritional intake, meal planning, and dietary habits for optimal health.
                </p>
                <button className="btn-primary">
                  Explore Nutrition
                </button>
              </div>
            </TabsContent>

            <TabsContent value="mental" className="animate-fade-in">
              <div className="text-center p-8">
                <Brain className="h-16 w-16 text-wellness-purple mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Mental Wellness Dashboard</h3>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                  Track your stress levels, cognitive function, and emotional wellbeing with AI-powered insights.
                </p>
                <button className="btn-primary">
                  Explore Mental Wellness
                </button>
              </div>
            </TabsContent>

            <TabsContent value="goals" className="animate-fade-in">
              <div className="text-center p-8">
                <Trophy className="h-16 w-16 text-wellness-blue mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Personal Health Goals</h3>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                  Set and track personalized health goals with AI recommendations for maximum success.
                </p>
                <button className="btn-primary">
                  Manage Goals
                </button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ 
  icon, 
  title, 
  value, 
  unit = "", 
  change, 
  changeType 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  unit?: string; 
  change: string; 
  changeType: "positive" | "negative" | "neutral" 
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 transition-transform hover:shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-gray-500 text-sm mb-1">{title}</div>
          <div className="text-2xl font-bold">
            {value}
            <span className="text-gray-400 text-sm font-normal">{unit}</span>
          </div>
        </div>
        <div className="p-2 rounded-lg bg-gray-50">{icon}</div>
      </div>
      <div className={`text-sm mt-2 ${
        changeType === 'positive' ? 'text-green-600' : 
        changeType === 'negative' ? 'text-red-600' : 'text-gray-500'
      }`}>
        {changeType === 'positive' ? '↑ ' : changeType === 'negative' ? '↓ ' : ''}
        {change} since last week
      </div>
    </div>
  );
};

const GoalItem = ({ 
  title, 
  icon, 
  progress, 
  color, 
  completed = false 
}: { 
  title: string; 
  icon: React.ReactNode; 
  progress: number; 
  color: string; 
  completed?: boolean 
}) => {
  return (
    <div className="relative">
      <div className="flex items-center mb-1">
        <div className={`mr-2 ${completed ? 'text-green-500' : `text-${color}`}`}>
          {icon}
        </div>
        <span className={`text-sm font-medium ${completed ? 'line-through text-gray-400' : ''}`}>
          {title}
        </span>
        {completed && (
          <span className="ml-auto text-xs text-green-500 font-medium">Completed</span>
        )}
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full bg-${color}`} 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-xs text-gray-500 mt-1 text-right">{progress}%</div>
    </div>
  );
};

export default WellnessDashboard;
