
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, we'll just simulate a login/signup
    console.log(isLogin ? 'Logging in' : 'Signing up', { email, password });
    // Redirect to home page after "login"
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-white px-4">
      <Link to="/" className="absolute top-8 left-8 flex items-center space-x-2">
        <div className="h-10 w-10 bg-wellness-blue rounded-lg flex items-center justify-center text-white font-semibold text-xl">
          H
        </div>
        <span className="font-semibold text-xl">HerHealth AI</span>
      </Link>
      
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">{isLogin ? 'Welcome Back' : 'Join HerHealth AI'}</h1>
          <p className="text-gray-600">
            {isLogin 
              ? 'Sign in to access your personalized health insights' 
              : 'Create an account to start your personalized health journey'}
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-wellness-blue focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-wellness-blue focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
            
            {isLogin && (
              <div className="text-right">
                <a href="#" className="text-sm text-wellness-blue hover:text-wellness-blue-dark">
                  Forgot password?
                </a>
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-wellness-blue text-white py-3 rounded-lg font-medium hover:bg-wellness-blue/90 transition-colors flex items-center justify-center"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-wellness-blue hover:text-wellness-blue-dark text-sm font-medium"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
