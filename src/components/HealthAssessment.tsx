
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Activity, CalendarCheck, UserCircle2, HeartPulse, Utensils, Smile } from 'lucide-react';

const questions = [
  {
    id: 'personal',
    title: 'Personal Information',
    icon: <UserCircle2 className="h-6 w-6" />,
    fields: [
      { name: 'age', label: 'Age', type: 'number' },
      { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Non-binary', 'Prefer not to say'] },
      { name: 'height', label: 'Height (cm)', type: 'number' },
      { name: 'weight', label: 'Weight (kg)', type: 'number' },
    ]
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle',
    icon: <Activity className="h-6 w-6" />,
    fields: [
      { name: 'activityLevel', label: 'Activity Level', type: 'select', options: ['Sedentary', 'Lightly Active', 'Moderately Active', 'Very Active', 'Extremely Active'] },
      { name: 'sleepHours', label: 'Average Sleep Hours', type: 'number' },
      { name: 'stressLevel', label: 'Stress Level (1-10)', type: 'range', min: 1, max: 10 },
      { name: 'screenTime', label: 'Daily Screen Time (hours)', type: 'number' },
    ]
  },
  {
    id: 'nutrition',
    title: 'Nutrition',
    icon: <Utensils className="h-6 w-6" />,
    fields: [
      { name: 'diet', label: 'Diet Type', type: 'select', options: ['Omnivore', 'Vegetarian', 'Vegan', 'Pescatarian', 'Keto', 'Paleo', 'Other'] },
      { name: 'waterIntake', label: 'Water Intake (glasses/day)', type: 'number' },
      { name: 'mealsPerDay', label: 'Meals Per Day', type: 'number' },
      { name: 'alcoholConsumption', label: 'Alcohol Consumption', type: 'select', options: ['Never', 'Occasionally', 'Weekly', 'Daily'] },
    ]
  },
  {
    id: 'health',
    title: 'Health Concerns',
    icon: <HeartPulse className="h-6 w-6" />,
    fields: [
      { name: 'existingConditions', label: 'Existing Health Conditions', type: 'multiselect', options: ['None', 'Diabetes', 'Hypertension', 'Heart Disease', 'Asthma', 'Arthritis', 'Other'] },
      { name: 'medications', label: 'Current Medications', type: 'text' },
      { name: 'symptoms', label: 'Current Symptoms (if any)', type: 'textarea' },
      { name: 'familyHistory', label: 'Family Health History', type: 'textarea' },
    ]
  },
  {
    id: 'goals',
    title: 'Health Goals',
    icon: <Smile className="h-6 w-6" />,
    fields: [
      { name: 'primaryGoal', label: 'Primary Health Goal', type: 'select', options: ['Weight Loss', 'Muscle Gain', 'Improved Fitness', 'Better Sleep', 'Stress Reduction', 'Disease Management', 'Overall Wellness'] },
      { name: 'timeframe', label: 'Goal Timeframe', type: 'select', options: ['1-3 months', '3-6 months', '6-12 months', '1+ year'] },
      { name: 'motivationLevel', label: 'Motivation Level (1-10)', type: 'range', min: 1, max: 10 },
      { name: 'additionalGoals', label: 'Additional Goals', type: 'textarea' },
    ]
  }
];

const HealthAssessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setLoading(true);
      // Simulate form submission
      setTimeout(() => {
        setLoading(false);
        setCompleted(true);
      }, 2000);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentQuestion = questions[currentStep];

  return (
    <section id="assessment" className="py-20 bg-gray-50">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="heading-2 mb-4">Comprehensive Health Assessment</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI analyzes your responses to create a personalized health profile and recommendations tailored to your needs.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {!completed ? (
            <div className="glass-panel p-6 md:p-8">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    {currentQuestion.icon}
                    <h3 className="text-2xl font-semibold ml-2">{currentQuestion.title}</h3>
                  </div>
                  <div className="text-sm text-gray-500">
                    Step {currentStep + 1} of {questions.length}
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div 
                    className="bg-wellness-blue h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <motion.div 
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {currentQuestion.fields.map((field) => (
                  <div key={field.name} className="form-group">
                    <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                    
                    {field.type === 'select' && (
                      <select 
                        name={field.name}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="">Select an option</option>
                        {field.options?.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    )}
                    
                    {field.type === 'multiselect' && (
                      <select 
                        name={field.name}
                        onChange={handleInputChange}
                        className="form-input"
                        multiple
                      >
                        {field.options?.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    )}
                    
                    {field.type === 'text' && (
                      <input 
                        type="text"
                        name={field.name}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    )}
                    
                    {field.type === 'number' && (
                      <input 
                        type="number"
                        name={field.name}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    )}
                    
                    {field.type === 'textarea' && (
                      <textarea 
                        name={field.name}
                        onChange={handleInputChange}
                        rows={3}
                        className="form-input"
                      ></textarea>
                    )}
                    
                    {field.type === 'range' && (
                      <div>
                        <input 
                          type="range"
                          name={field.name}
                          min={field.min}
                          max={field.max}
                          onChange={handleInputChange}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Low</span>
                          <span>Medium</span>
                          <span>High</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className={`btn-secondary ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </button>
                
                <button
                  onClick={handleNext}
                  className="btn-primary"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing
                    </span>
                  ) : currentStep === questions.length - 1 ? (
                    <span className="flex items-center">
                      Submit Assessment
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Next
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </span>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-panel p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Assessment Completed!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for completing the assessment. Our AI is analyzing your responses to generate personalized recommendations.
              </p>
              <div className="flex justify-center">
                <button className="btn-primary">
                  View Your Health Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HealthAssessment;
