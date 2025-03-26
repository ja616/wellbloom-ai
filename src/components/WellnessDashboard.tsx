
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Heart, Brain, Calendar, CalendarCheck, CalendarDays, AlertCircle, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const WellnessDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const nextMonth = () => {
    const date = new Date(currentMonth);
    date.setMonth(date.getMonth() + 1);
    setCurrentMonth(date);
  };

  const prevMonth = () => {
    const date = new Date(currentMonth);
    date.setMonth(date.getMonth() - 1);
    setCurrentMonth(date);
  };

  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="heading-2 mb-4">Your Wellness Dashboard</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track your health progress and get personalized recommendations
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
                  <h3 className="font-semibold">Jane Smith</h3>
                  <p className="text-sm text-gray-500">Health Cluster: Active & Low-Risk Group</p>
                </div>
              </div>
              <div className="text-sm text-gray-500">Last updated: Today at 9:45 AM</div>
            </div>

            <TabsList className="grid grid-cols-4 w-full max-w-3xl mx-auto mb-8">
              <TabsTrigger value="overview" className="flex items-center py-2">
                <Heart className="h-4 w-4 mr-2" />
                <span>Overview</span>
              </TabsTrigger>
              <TabsTrigger value="period" className="flex items-center py-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Period Tracking</span>
              </TabsTrigger>
              <TabsTrigger value="mental" className="flex items-center py-2">
                <Brain className="h-4 w-4 mr-2" />
                <span>Mental Health</span>
              </TabsTrigger>
              <TabsTrigger value="recommendations" className="flex items-center py-2">
                <Sparkles className="h-4 w-4 mr-2" />
                <span>Recommendations</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="animate-fade-in">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="text-xl font-semibold mb-4">Your Health Cluster: Active & Low-Risk Group</h3>
                
                <div className="space-y-4 mb-6">
                  <p className="text-gray-700">
                    Based on your assessment, you belong to the <strong>Active & Low-Risk Group</strong>. 
                    This means you generally maintain a healthy lifestyle with regular exercise and balanced nutrition.
                  </p>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-blue-800 mb-2">Key Characteristics:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-blue-700">
                      <li>Regular menstrual cycles</li>
                      <li>No chronic diseases (diabetes, thyroid)</li>
                      <li>Balanced diet & active lifestyle</li>
                      <li>Low stress levels</li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center text-wellness-blue">
                      <Activity className="h-5 w-5 mr-2" />
                      Physical Health
                    </h4>
                    <div className="flex items-center mb-2">
                      <div className="h-2 flex-grow bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-wellness-blue rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="ml-2 text-sm font-medium">85%</span>
                    </div>
                    <p className="text-sm text-gray-600">Excellent physical fitness</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center text-wellness-purple">
                      <Brain className="h-5 w-5 mr-2" />
                      Mental Health
                    </h4>
                    <div className="flex items-center mb-2">
                      <div className="h-2 flex-grow bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-wellness-purple rounded-full" style={{ width: '78%' }}></div>
                      </div>
                      <span className="ml-2 text-sm font-medium">78%</span>
                    </div>
                    <p className="text-sm text-gray-600">Good stress management</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center text-wellness-teal">
                      <Heart className="h-5 w-5 mr-2" />
                      Hormonal Health
                    </h4>
                    <div className="flex items-center mb-2">
                      <div className="h-2 flex-grow bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-wellness-teal rounded-full" style={{ width: '90%' }}></div>
                      </div>
                      <span className="ml-2 text-sm font-medium">90%</span>
                    </div>
                    <p className="text-sm text-gray-600">Balanced hormones</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="period" className="animate-fade-in">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">Period Calendar</h3>
                  <div className="flex items-center space-x-2">
                    <button onClick={prevMonth} className="p-1 rounded-full hover:bg-gray-100">
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <span className="font-medium">
                      {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
                    </span>
                    <button onClick={nextMonth} className="p-1 rounded-full hover:bg-gray-100">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                    <div key={i} className="text-center text-sm font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 35 }).map((_, i) => {
                    // This is a simplified calendar just for display purposes
                    const day = i + 1;
                    const isPeriod = day >= 5 && day <= 9;
                    const isPredicted = day >= 33 && day <= 37;
                    const isOvulation = day === 19;
                    
                    return (
                      <div 
                        key={i} 
                        className={`h-12 flex items-center justify-center rounded-lg text-sm ${
                          isPeriod 
                            ? 'bg-red-100 text-red-800 font-medium' 
                            : isPredicted
                            ? 'bg-red-50 text-red-600 border border-dashed border-red-200'
                            : isOvulation
                            ? 'bg-blue-100 text-blue-800 font-medium'
                            : 'bg-gray-50'
                        }`}
                      >
                        {day <= 31 ? day : day - 31}
                        {isPeriod && <div className="w-1 h-1 bg-red-600 rounded-full absolute mt-6"></div>}
                        {isOvulation && <div className="w-1 h-1 bg-blue-600 rounded-full absolute mt-6"></div>}
                      </div>
                    );
                  })}
                </div>
                
                <div className="flex mt-6 space-x-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">Period</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-200 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">Predicted Period</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">Ovulation</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <h4 className="font-medium text-purple-800 mb-2 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    Cycle Analysis
                  </h4>
                  <p className="text-sm text-purple-700">
                    Your cycles are regular with an average length of 28 days. Your next period is predicted to start in 8 days.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mental" className="animate-fade-in">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="text-xl font-semibold mb-4">Mental Health Tracking</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-3">Mood Tracker</h4>
                    <div className="flex items-center mb-4 justify-between">
                      <div className="flex space-x-2">
                        {['😢', '😟', '😐', '🙂', '😀'].map((emoji, i) => (
                          <button 
                            key={i} 
                            className={`text-2xl p-2 rounded-full ${i === 3 ? 'bg-blue-100' : 'hover:bg-gray-200'}`}
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">Today</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span>Stress Level</span>
                        <div className="flex items-center">
                          <div className="h-2 w-36 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-400 rounded-full" style={{ width: '45%' }}></div>
                          </div>
                          <span className="ml-2">45%</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm">
                        <span>Energy Level</span>
                        <div className="flex items-center">
                          <div className="h-2 w-36 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-green-400 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                          <span className="ml-2">65%</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm">
                        <span>Focus</span>
                        <div className="flex items-center">
                          <div className="h-2 w-36 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-400 rounded-full" style={{ width: '72%' }}></div>
                          </div>
                          <span className="ml-2">72%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-3">Weekly Trends</h4>
                    <div className="h-40 flex items-end justify-between gap-1">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
                        const heights = [75, 60, 45, 50, 65, 80, 70];
                        const colors = ['bg-blue-400', 'bg-blue-400', 'bg-amber-400', 'bg-amber-400', 'bg-blue-400', 'bg-green-400', 'bg-blue-400'];
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
                
                <div className="p-4 bg-wellness-purple/10 rounded-lg border border-wellness-purple/20">
                  <h4 className="font-medium mb-2 text-wellness-purple">Mental Wellness Tips</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-wellness-purple/20 flex items-center justify-center text-wellness-purple mr-2 flex-shrink-0 mt-0.5">1</div>
                      <p>Practice 5 minutes of mindful breathing daily to reduce stress levels</p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-wellness-purple/20 flex items-center justify-center text-wellness-purple mr-2 flex-shrink-0 mt-0.5">2</div>
                      <p>Limit screen time before bed to improve sleep quality</p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-wellness-purple/20 flex items-center justify-center text-wellness-purple mr-2 flex-shrink-0 mt-0.5">3</div>
                      <p>Try a 10-minute guided meditation to improve focus and concentration</p>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="recommendations" className="animate-fade-in">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="text-xl font-semibold mb-6">Personalized Recommendations</h3>
                
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-blue-800 mb-2 flex items-center">
                      <Activity className="h-5 w-5 mr-2" />
                      Physical Health
                    </h4>
                    <ul className="space-y-2 text-sm text-blue-700">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 mr-2 flex-shrink-0 mt-0.5">•</div>
                        <p>Maintain your regular exercise routine of 3-4 times per week</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 mr-2 flex-shrink-0 mt-0.5">•</div>
                        <p>Consider adding strength training to help maintain bone density</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 mr-2 flex-shrink-0 mt-0.5">•</div>
                        <p>Increase calcium intake through leafy greens and dairy alternatives</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                    <h4 className="font-medium text-purple-800 mb-2 flex items-center">
                      <Brain className="h-5 w-5 mr-2" />
                      Mental Wellness
                    </h4>
                    <ul className="space-y-2 text-sm text-purple-700">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 mr-2 flex-shrink-0 mt-0.5">•</div>
                        <p>Continue your mindfulness practice to manage stress levels</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 mr-2 flex-shrink-0 mt-0.5">•</div>
                        <p>Schedule regular digital detox periods to improve focus</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 mr-2 flex-shrink-0 mt-0.5">•</div>
                        <p>Prioritize 7-8 hours of sleep for optimal cognitive function</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-100">
                    <h4 className="font-medium text-teal-800 mb-2 flex items-center">
                      <Heart className="h-5 w-5 mr-2" />
                      Hormonal Health
                    </h4>
                    <ul className="space-y-2 text-sm text-teal-700">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-teal-200 flex items-center justify-center text-teal-700 mr-2 flex-shrink-0 mt-0.5">•</div>
                        <p>Continue tracking your cycle for early detection of any changes</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-teal-200 flex items-center justify-center text-teal-700 mr-2 flex-shrink-0 mt-0.5">•</div>
                        <p>Schedule your annual gynecological checkup</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-teal-200 flex items-center justify-center text-teal-700 mr-2 flex-shrink-0 mt-0.5">•</div>
                        <p>Consider adding more omega-3 fatty acids to your diet for hormone balance</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default WellnessDashboard;
