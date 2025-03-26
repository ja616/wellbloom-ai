
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, UserCircle2, HeartPulse, Leaf, Pill, Brain, CalendarCheck } from 'lucide-react';

type FormSection = {
  id: string;
  title: string;
  icon: React.ReactNode;
  questions: FormQuestion[];
};

type FormQuestion = {
  id: string;
  question: string;
  type: 'radio' | 'checkbox' | 'select' | 'number' | 'text' | 'textarea';
  options?: string[];
  placeholder?: string;
  min?: number;
  max?: number;
  unit?: string;
  conditional?: {
    dependsOn: string;
    showWhen: string;
  };
};

const womensHealthFormSections: FormSection[] = [
  {
    id: 'general',
    title: '1️⃣ General Information',
    icon: <UserCircle2 className="h-6 w-6" />,
    questions: [
      {
        id: 'age',
        question: 'Age',
        type: 'select',
        options: ['18-24', '25-34', '35-44', '45-54', '55+']
      },
      {
        id: 'height',
        question: 'Height (cm)',
        type: 'number',
        min: 120,
        max: 220
      },
      {
        id: 'weight',
        question: 'Weight (kg)',
        type: 'number',
        min: 30,
        max: 250
      },
      {
        id: 'allergies',
        question: 'Do you have any known allergies?',
        type: 'radio',
        options: ['Yes', 'No']
      },
      {
        id: 'allergiesDetails',
        question: 'Please list your allergies',
        type: 'textarea',
        conditional: {
          dependsOn: 'allergies',
          showWhen: 'Yes'
        }
      },
      {
        id: 'familyHistory',
        question: 'Do you have a family history of any medical conditions?',
        type: 'checkbox',
        options: ['Diabetes', 'Hypertension', 'Osteoporosis', 'PCOS', 'Depression', 'Heart Disease', 'None']
      }
    ]
  },
  {
    id: 'lifestyle',
    title: '2️⃣ Lifestyle & Nutrition',
    icon: <Leaf className="h-6 w-6" />,
    questions: [
      {
        id: 'exercise',
        question: 'How often do you exercise?',
        type: 'radio',
        options: [
          '🚶 Sedentary (Little to no exercise)',
          '🏃 Light (1-2 times per week)',
          '🏋️ Moderate (3-4 times per week)',
          '🏆 Active (5+ times per week)'
        ]
      },
      {
        id: 'sleep',
        question: 'How many hours of sleep do you get per night?',
        type: 'radio',
        options: ['Less than 4', '4-6', '6-8', 'More than 8']
      },
      {
        id: 'water',
        question: 'How would you rate your daily water intake?',
        type: 'radio',
        options: ['Less than 1L', '1-2L', '2-3L', 'More than 3L']
      },
      {
        id: 'diet',
        question: 'Do you follow any specific diet?',
        type: 'radio',
        options: ['Balanced', 'Keto', 'Vegan', 'High-Protein', 'Low-Carb', 'Other']
      },
      {
        id: 'dairy',
        question: 'How often do you consume dairy products?',
        type: 'radio',
        options: ['Never', 'Rarely', 'Sometimes', 'Daily']
      }
    ]
  },
  {
    id: 'bone',
    title: '3️⃣ Bone Health (Osteoporosis & Joint Issues)',
    icon: <CalendarCheck className="h-6 w-6" />,
    questions: [
      {
        id: 'jointPain',
        question: 'Do you experience frequent joint or back pain?',
        type: 'radio',
        options: ['Yes', 'No']
      },
      {
        id: 'fractures',
        question: 'Have you had any bone fractures in the past 5 years?',
        type: 'radio',
        options: ['Yes', 'No']
      },
      {
        id: 'calcium',
        question: 'Do you consume calcium-rich foods (milk, cheese, leafy greens) regularly?',
        type: 'radio',
        options: ['Yes', 'No']
      },
      {
        id: 'vitaminD',
        question: 'Do you take vitamin D supplements?',
        type: 'radio',
        options: ['Yes', 'No']
      }
    ]
  },
  {
    id: 'menstrual',
    title: '4️⃣ Menstrual & Hormonal Health',
    icon: <HeartPulse className="h-6 w-6" />,
    questions: [
      {
        id: 'menstrualCycle',
        question: 'How regular is your menstrual cycle?',
        type: 'radio',
        options: [
          'Regular (28-32 days)',
          'Irregular (Varies significantly)',
          'Missed Periods (No periods for 3+ months)',
          'Postmenopausal'
        ]
      },
      {
        id: 'cramps',
        question: 'Do you experience severe menstrual cramps (dysmenorrhea)?',
        type: 'radio',
        options: ['Yes', 'No']
      },
      {
        id: 'pcos',
        question: 'Have you been diagnosed with PCOS (Polycystic Ovary Syndrome)?',
        type: 'radio',
        options: ['Yes', 'No']
      },
      {
        id: 'hormonal',
        question: 'Do you experience excessive hair growth, acne, or weight fluctuations?',
        type: 'radio',
        options: ['Yes', 'No']
      }
    ]
  },
  {
    id: 'mental',
    title: '5️⃣ Mental & Emotional Well-being',
    icon: <Brain className="h-6 w-6" />,
    questions: [
      {
        id: 'stress',
        question: 'How often do you feel stressed or anxious?',
        type: 'radio',
        options: ['Never', 'Sometimes', 'Often', 'Always']
      },
      {
        id: 'moodSwings',
        question: 'Do you experience mood swings or irritability?',
        type: 'radio',
        options: ['Yes', 'No']
      },
      {
        id: 'sleepStress',
        question: 'Do you have difficulty sleeping due to stress?',
        type: 'radio',
        options: ['Yes', 'No']
      },
      {
        id: 'mentalDiagnosis',
        question: 'Have you ever been diagnosed with depression or anxiety?',
        type: 'radio',
        options: ['Yes', 'No']
      },
      {
        id: 'mentalRecommendations',
        question: 'Would you like mental wellness recommendations?',
        type: 'radio',
        options: ['Yes', 'No']
      }
    ]
  },
  {
    id: 'reproductive',
    title: '6️⃣ Reproductive Health',
    icon: <Pill className="h-6 w-6" />,
    questions: [
      {
        id: 'pregnant',
        question: 'Have you ever been pregnant?',
        type: 'radio',
        options: ['Yes', 'No']
      },
      {
        id: 'painIntercourse',
        question: 'Do you experience any pain during intercourse?',
        type: 'radio',
        options: ['Yes', 'No']
      },
      {
        id: 'papSmear',
        question: 'Have you had a pap smear test in the last 2 years?',
        type: 'radio',
        options: ['Yes', 'No']
      }
    ]
  },
  {
    id: 'symptoms',
    title: '7️⃣ Symptom Tracking (For AI-Based Symptom Analysis)',
    icon: <Pill className="h-6 w-6" />,
    questions: [
      {
        id: 'currentSymptoms',
        question: 'Do you currently experience any of the following?',
        type: 'checkbox',
        options: [
          'Chronic fatigue',
          'Unexplained weight gain/loss',
          'Hair thinning or hair loss',
          'Frequent headaches',
          'Digestive issues (bloating, IBS)',
          'None'
        ]
      }
    ]
  }
];

const WomensHealthForm = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});

  const handleNext = () => {
    if (currentSection < womensHealthFormSections.length - 1) {
      setCurrentSection(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      // Submit form
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        setCompleted(true);
      }, 2000);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleRadioChange = (questionId: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleCheckboxChange = (questionId: string, value: string) => {
    // Initialize the array if it doesn't exist
    if (!selectedOptions[questionId]) {
      setSelectedOptions(prev => ({
        ...prev,
        [questionId]: [value]
      }));
    } else {
      // If the value already exists, remove it; otherwise, add it
      if (selectedOptions[questionId].includes(value)) {
        setSelectedOptions(prev => ({
          ...prev,
          [questionId]: prev[questionId].filter(option => option !== value)
        }));
      } else {
        setSelectedOptions(prev => ({
          ...prev,
          [questionId]: [...prev[questionId], value]
        }));
      }
    }

    // Update formData with the new array
    setFormData(prev => ({
      ...prev,
      [questionId]: selectedOptions[questionId] || []
    }));
  };

  const handleInputChange = (questionId: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const currentFormSection = womensHealthFormSections[currentSection];

  return (
    <section id="assessment" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="heading-2 mb-4">Women's Health Assessment</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI analyzes your responses to create a personalized women's health profile and recommendations tailored to your specific needs.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {!completed ? (
            <div className="glass-panel p-6 md:p-8 rounded-2xl shadow-sm">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    {currentFormSection.icon}
                    <h3 className="text-2xl font-semibold ml-2">{currentFormSection.title}</h3>
                  </div>
                  <div className="text-sm text-gray-500">
                    Step {currentSection + 1} of {womensHealthFormSections.length}
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div 
                    className="bg-purple-500 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${((currentSection + 1) / womensHealthFormSections.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <motion.div 
                key={currentSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {currentFormSection.questions.map((question) => {
                  // Check if this question should be displayed based on conditional logic
                  if (question.conditional) {
                    const { dependsOn, showWhen } = question.conditional;
                    if (formData[dependsOn] !== showWhen) {
                      return null;
                    }
                  }

                  return (
                    <div key={question.id} className="p-4 bg-white rounded-xl shadow-sm">
                      <label className="block text-base font-medium text-gray-700 mb-3">{question.question}</label>
                      
                      {question.type === 'radio' && (
                        <div className="space-y-2">
                          {question.options?.map((option) => (
                            <div key={option} className="flex items-center">
                              <input
                                type="radio"
                                id={`${question.id}-${option}`}
                                name={question.id}
                                value={option}
                                checked={formData[question.id] === option}
                                onChange={() => handleRadioChange(question.id, option)}
                                className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                              />
                              <label htmlFor={`${question.id}-${option}`} className="ml-2 block text-sm text-gray-700">
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {question.type === 'checkbox' && (
                        <div className="space-y-2">
                          {question.options?.map((option) => (
                            <div key={option} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`${question.id}-${option}`}
                                name={question.id}
                                value={option}
                                checked={selectedOptions[question.id]?.includes(option) || false}
                                onChange={() => handleCheckboxChange(question.id, option)}
                                className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                              />
                              <label htmlFor={`${question.id}-${option}`} className="ml-2 block text-sm text-gray-700">
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {question.type === 'number' && (
                        <div className="flex items-center">
                          <input
                            type="number"
                            id={question.id}
                            name={question.id}
                            min={question.min}
                            max={question.max}
                            value={formData[question.id] || ''}
                            onChange={(e) => handleInputChange(question.id, e.target.value)}
                            className="form-input rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                          />
                          {question.unit && (
                            <span className="ml-2 text-sm text-gray-600">{question.unit}</span>
                          )}
                        </div>
                      )}
                      
                      {question.type === 'text' && (
                        <input
                          type="text"
                          id={question.id}
                          name={question.id}
                          placeholder={question.placeholder}
                          value={formData[question.id] || ''}
                          onChange={(e) => handleInputChange(question.id, e.target.value)}
                          className="form-input w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        />
                      )}
                      
                      {question.type === 'textarea' && (
                        <textarea
                          id={question.id}
                          name={question.id}
                          placeholder={question.placeholder}
                          value={formData[question.id] || ''}
                          onChange={(e) => handleInputChange(question.id, e.target.value)}
                          rows={3}
                          className="form-input w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        />
                      )}
                      
                      {question.type === 'select' && (
                        <select
                          id={question.id}
                          name={question.id}
                          value={formData[question.id] || ''}
                          onChange={(e) => handleInputChange(question.id, e.target.value)}
                          className="form-select w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        >
                          <option value="">Select an option</option>
                          {question.options?.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  );
                })}
              </motion.div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePrevious}
                  disabled={currentSection === 0}
                  className={`px-6 py-3 flex items-center rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                    currentSection === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </button>
                
                <button
                  onClick={handleNext}
                  className="px-6 py-3 flex items-center rounded-lg border border-transparent bg-purple-600 text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
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
                  ) : currentSection === womensHealthFormSections.length - 1 ? (
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
              className="glass-panel p-8 text-center rounded-2xl shadow-sm"
            >
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Assessment Completed!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for completing the women's health assessment. Our AI is analyzing your responses to generate personalized health recommendations.
              </p>
              <div className="flex justify-center">
                <a href="#dashboard" className="px-6 py-3 flex items-center rounded-lg border border-transparent bg-purple-600 text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                  View Your Health Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WomensHealthForm;
