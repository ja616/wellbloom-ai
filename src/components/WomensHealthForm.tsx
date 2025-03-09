
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, UserCircle2, HeartPulse, Leaf, Pill } from 'lucide-react';

type FormSection = {
  id: string;
  title: string;
  icon: React.ReactNode;
  questions: FormQuestion[];
};

type FormQuestion = {
  id: string;
  question: string;
  type: 'radio' | 'checkbox' | 'select' | 'number' | 'text';
  options?: string[];
  placeholder?: string;
  min?: number;
  max?: number;
  unit?: string;
};

const womensHealthFormSections: FormSection[] = [
  {
    id: 'general',
    title: '🌿 General Information',
    icon: <UserCircle2 className="h-6 w-6" />,
    questions: [
      {
        id: 'age',
        question: 'What is your age?',
        type: 'number',
        min: 18,
        max: 120
      },
      {
        id: 'height',
        question: 'What is your height?',
        type: 'number',
        unit: 'cm',
        min: 120,
        max: 220
      },
      {
        id: 'weight',
        question: 'What is your weight?',
        type: 'number',
        unit: 'kg',
        min: 30,
        max: 250
      },
      {
        id: 'activityLevel',
        question: 'What is your typical daily activity level?',
        type: 'radio',
        options: [
          'Sedentary (little to no exercise)',
          'Lightly active (light exercise 1–3 days per week)',
          'Moderately active (moderate exercise 3–5 days per week)',
          'Very active (intense exercise 6–7 days per week)',
          'Super active (athlete, physical job)'
        ]
      },
      {
        id: 'sleepHours',
        question: 'How many hours of sleep do you get per night?',
        type: 'radio',
        options: [
          'Less than 5 hours',
          '5–6 hours',
          '6–7 hours',
          '7–8 hours',
          'More than 8 hours'
        ]
      },
      {
        id: 'sleepDisturbances',
        question: 'Do you experience sleep disturbances (e.g., insomnia, waking up frequently)?',
        type: 'radio',
        options: ['Yes', 'No']
      },
      {
        id: 'healthTracking',
        question: 'Do you track your health regularly (e.g., fitness apps, wearables)?',
        type: 'radio',
        options: ['Yes', 'No']
      }
    ]
  },
  {
    id: 'reproductive',
    title: '🩸 Reproductive Health',
    icon: <HeartPulse className="h-6 w-6" />,
    questions: [
      {
        id: 'menstrualCycle',
        question: 'How would you describe your menstrual cycle?',
        type: 'radio',
        options: [
          'Regular (predictable, occurs every 25–35 days)',
          'Irregular (unpredictable, varies month to month)',
          'Absent (haven\'t had a period in months)',
          'Not applicable'
        ]
      },
      {
        id: 'periodLength',
        question: 'What is the average length of your period?',
        type: 'radio',
        options: [
          '2–3 days',
          '4–5 days',
          '6–7 days',
          'More than 7 days',
          'Not applicable'
        ]
      },
      {
        id: 'menstrualSymptoms',
        question: 'Do you experience any of the following menstrual symptoms?',
        type: 'checkbox',
        options: [
          'Heavy flow',
          'Light flow',
          'Severe cramps',
          'Bloating',
          'Fatigue',
          'None of the above',
          'Not applicable'
        ]
      },
      {
        id: 'pcos',
        question: 'Have you been diagnosed with or suspect you have PCOS (Polycystic Ovary Syndrome)?',
        type: 'radio',
        options: [
          'Yes, diagnosed',
          'No, but I suspect it',
          'No',
          'Not applicable'
        ]
      },
      {
        id: 'pcosSymptoms',
        question: 'If yes to PCOS, what symptoms do you experience?',
        type: 'checkbox',
        options: [
          'Irregular periods',
          'Acne',
          'Unwanted hair growth (face, body)',
          'Hair thinning/loss',
          'Weight gain/difficulty losing weight',
          'Insulin resistance or diabetes',
          'Not applicable'
        ]
      },
      {
        id: 'endometriosis',
        question: 'Have you been diagnosed with endometriosis?',
        type: 'radio',
        options: ['Yes', 'No', 'Not applicable']
      },
      {
        id: 'pelvicPain',
        question: 'Do you experience chronic pelvic pain or painful periods?',
        type: 'radio',
        options: ['Yes', 'No', 'Not applicable']
      },
      {
        id: 'pregnancyStatus',
        question: 'Are you currently pregnant, trying to conceive, or postpartum?',
        type: 'radio',
        options: [
          'Pregnant',
          'Trying to conceive',
          'Postpartum (within 1 year of delivery)',
          'None of the above'
        ]
      }
    ]
  },
  {
    id: 'lifestyle',
    title: '⚕️ Lifestyle & Risk Factors',
    icon: <Leaf className="h-6 w-6" />,
    questions: [
      {
        id: 'diet',
        question: 'What best describes your diet?',
        type: 'radio',
        options: [
          'Vegetarian',
          'Vegan',
          'Balanced (mix of plant-based & animal-based foods)',
          'High-processed food intake'
        ]
      },
      {
        id: 'fruitVegetables',
        question: 'How many servings of fruits and vegetables do you eat per day?',
        type: 'radio',
        options: [
          '0–1 servings',
          '2–3 servings',
          '4+ servings'
        ]
      },
      {
        id: 'waterIntake',
        question: 'How much water do you drink per day?',
        type: 'radio',
        options: [
          'Less than 1 liter (4 glasses)',
          '1–2 liters (4–8 glasses)',
          '2–3 liters (8–12 glasses)',
          'More than 3 liters'
        ]
      },
      {
        id: 'stressLevel',
        question: 'Do you experience high stress levels?',
        type: 'radio',
        options: [
          'Low stress (rarely feel stressed)',
          'Moderate stress (sometimes feel overwhelmed)',
          'High stress (frequently anxious or overwhelmed)'
        ]
      },
      {
        id: 'stressManagement',
        question: 'How do you manage stress?',
        type: 'checkbox',
        options: [
          'Meditation or yoga',
          'Exercise',
          'Talking to a friend/family',
          'Therapy',
          'I don\'t actively manage stress'
        ]
      },
      {
        id: 'alcohol',
        question: 'Do you consume alcohol?',
        type: 'radio',
        options: [
          'Never',
          'Occasionally (1–2 times per month)',
          'Weekly (1–2 times per week)',
          'Regularly (3+ times per week)'
        ]
      },
      {
        id: 'smoking',
        question: 'Do you smoke or use tobacco products?',
        type: 'radio',
        options: [
          'Yes, regularly',
          'Occasionally',
          'No'
        ]
      },
      {
        id: 'digestiveIssues',
        question: 'Do you frequently experience digestive issues (bloating, constipation, acid reflux)?',
        type: 'radio',
        options: ['Yes', 'No']
      }
    ]
  },
  {
    id: 'medical',
    title: '💊 Medical History & Symptoms',
    icon: <Pill className="h-6 w-6" />,
    questions: [
      {
        id: 'conditions',
        question: 'Have you been diagnosed with any of the following conditions?',
        type: 'checkbox',
        options: [
          'Thyroid disorder (hypothyroidism/hyperthyroidism)',
          'Diabetes (Type 1 or Type 2)',
          'High blood pressure',
          'High cholesterol',
          'Heart disease',
          'Osteoporosis or low bone density',
          'Autoimmune disorder (e.g., lupus, rheumatoid arthritis)',
          'None of the above'
        ]
      },
      {
        id: 'symptoms',
        question: 'Do you frequently experience any of the following symptoms?',
        type: 'checkbox',
        options: [
          'Fatigue or low energy',
          'Hair loss or thinning',
          'Sudden weight gain or loss',
          'Mood swings or irritability',
          'Poor concentration (brain fog)',
          'Low libido (reduced interest in sex)',
          'Sleep disturbances',
          'Frequent headaches or migraines',
          'Joint pain or stiffness',
          'None of the above'
        ]
      },
      {
        id: 'surgeries',
        question: 'Have you had any major surgeries or hospitalizations in the past 5 years?',
        type: 'radio',
        options: ['Yes', 'No']
      },
      {
        id: 'medications',
        question: 'Do you take any medications or supplements regularly?',
        type: 'radio',
        options: ['Yes', 'No']
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
    <section id="womens-health-form" className="py-20 bg-gradient-to-b from-purple-50 to-white">
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
                {currentFormSection.questions.map((question) => (
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
                ))}
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
                <button className="px-6 py-3 flex items-center rounded-lg border border-transparent bg-purple-600 text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
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

export default WomensHealthForm;
