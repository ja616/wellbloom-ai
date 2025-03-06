
import React, { useState } from 'react';
import { Mic, MicOff, Play, PauseCircle, Send, Bot, UserCircle2, ArrowRight } from 'lucide-react';

const exampleConversation = [
  {
    role: 'bot',
    message: 'Hello! I\'m your AI health assistant. How can I help you today?'
  },
  {
    role: 'user',
    message: 'I\'ve been having headaches after working long hours.'
  },
  {
    role: 'bot',
    message: 'I understand that can be concerning. Could you tell me more about these headaches? When do they typically occur, and do you notice any patterns related to your screen time or posture?'
  },
  {
    role: 'user',
    message: 'They usually start in the afternoon after about 4 hours of computer work. I think my posture might be bad.'
  },
  {
    role: 'bot',
    message: 'Based on your description, you might be experiencing tension headaches related to extended screen time and posture issues. I recommend taking regular breaks using the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds. Also, ensure your monitor is at eye level and your chair supports proper posture. Would you like me to provide some specific ergonomic exercises you can do at your desk?'
  }
];

const VoiceChatbot = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState(exampleConversation);

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  const toggleSpeaking = () => {
    setIsSpeaking(!isSpeaking);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to conversation
    const newConversation = [...conversation, { role: 'user', message }];
    setConversation(newConversation);
    setMessage('');

    // Simulate AI response
    setTimeout(() => {
      setConversation([
        ...newConversation,
        {
          role: 'bot',
          message: "I've analyzed your input and can provide some guidance. For more accurate recommendations, I'd need additional details about your medical history and current symptoms. Would you like to complete a full health assessment so I can provide more personalized advice?"
        }
      ]);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="heading-2 mb-4">AI Voice Health Assistant</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get real-time health guidance through our advanced voice-enabled AI assistant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up order-2 lg:order-1">
            <div className="glass-panel h-[500px] flex flex-col">
              <div className="p-4 border-b border-gray-100 flex items-center">
                <Bot className="h-5 w-5 text-wellness-blue mr-2" />
                <h3 className="font-medium">WellBloom AI Assistant</h3>
                <div className={`ml-auto flex items-center ${isSpeaking ? 'text-wellness-blue' : 'text-gray-400'}`}>
                  <button onClick={toggleSpeaking} className="flex items-center">
                    {isSpeaking ? <PauseCircle className="h-5 w-5 mr-1" /> : <Play className="h-5 w-5 mr-1" />}
                    <span className="text-sm">{isSpeaking ? 'Voice Active' : 'Voice Off'}</span>
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {conversation.map((item, index) => (
                  <div
                    key={index}
                    className={`flex ${item.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        item.role === 'user'
                          ? 'bg-wellness-blue text-white rounded-tr-none'
                          : 'bg-gray-100 text-gray-800 rounded-tl-none'
                      }`}
                    >
                      <div className="text-sm">
                        {item.role === 'bot' && (
                          <div className="animate-pulse-gentle">{item.message}</div>
                        )}
                        {item.role === 'user' && item.message}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-100">
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleListening}
                    className={`p-2 rounded-full transition-colors ${
                      isListening
                        ? 'bg-wellness-blue text-white animate-pulse-gentle'
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    {isListening ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                  </button>
                  <input
                    type="text"
                    placeholder="Type your health question..."
                    className="flex-1 py-2 px-4 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-wellness-blue/50"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="p-2 bg-wellness-blue text-white rounded-full hover:bg-wellness-blue/90 transition-colors"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-semibold mb-4">Intelligent Health Conversations</h3>
            <p className="text-gray-600 mb-6">
              Our AI health assistant uses advanced natural language processing to understand your health concerns and provide personalized guidance.
            </p>

            <div className="space-y-4 mb-8">
              <FeatureItem
                icon={<UserCircle2 className="h-5 w-5 text-wellness-blue" />}
                title="Personalized Guidance"
                description="Receive tailored health advice based on your unique health profile and concerns."
              />
              <FeatureItem
                icon={<Mic className="h-5 w-5 text-wellness-teal" />}
                title="Voice-Enabled"
                description="Speak naturally to your AI assistant just like talking to a healthcare professional."
              />
              <FeatureItem
                icon={<Bot className="h-5 w-5 text-wellness-purple" />}
                title="AI-Powered Analysis"
                description="Our assistant analyzes your symptoms using medical knowledge and your health history."
              />
            </div>

            <button className="btn-primary">
              Start Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="flex">
      <div className="mt-1 rounded-full p-2 bg-blue-50 mr-3">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default VoiceChatbot;
