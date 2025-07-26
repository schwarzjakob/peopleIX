import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { sickLeaveData, overtimeData } from './mockData.js';

const LoadingAnimation = () => (
  <div className="flex items-center justify-center py-12">
    <div className="flex items-center space-x-2">
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <span className="ml-3 text-primary font-medium">TIRA is analyzing...</span>
    </div>
  </div>
);

const TIRAAnswer = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  const tirakpis = [
    { 
      title: 'Engineering sick-leave Q-1', 
      value: '12.4 %', 
      subtitle: '↑ 5.8 pp vs company avg' 
    },
    { 
      title: 'Engineering overtime Q-1', 
      value: '+62 h per FTE', 
      subtitle: '↑ 37 h vs avg' 
    }
  ];

  return (
    <div className="space-y-6">
      {/* Back button */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-600 text-text-black">TIRA Analysis Results</h2>
        <button 
          onClick={onClose}
          className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
        >
          ← Back to dashboard
        </button>
      </div>

      {/* TLDR/Management Summary */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 p-6 rounded-2xl">
        <h3 className="text-lg font-600 text-red-800 mb-3">📋 Executive Summary</h3>
        <p className="text-red-700 leading-relaxed">
          <strong>Critical Issue:</strong> Engineering team shows signs of burnout with sick-leave rates at 12.4% 
          (nearly double company average) and excessive overtime of +62h per FTE this quarter.
          <strong> Immediate action required</strong> to prevent talent attrition and maintain delivery quality.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {tirakpis.map((kpi, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-card border-0">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-body-color">{kpi.title}</h3>
              <button className="text-gray-400 hover:text-primary transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
            <div className="text-3xl font-bold text-text-black mb-1 font-700">{kpi.value}</div>
            <div className="text-xs text-body-color font-300">{kpi.subtitle}</div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Sick Leave Bar Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-kpi">
          <h3 className="text-lg font-600 text-text-black mb-4">Engineering Had Significant Above Average Sick Leave In The Last Quarter</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sickLeaveData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="dept" 
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Sick-leave Rate']}
                labelStyle={{ color: '#666' }}
              />
              <Bar 
                dataKey="rate" 
                fill="#8884d8"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Overtime Area Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-kpi">
          <h3 className="text-lg font-600 text-text-black mb-4">Monthly Overtime Hours Increased Throughout The Quarter</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={overtimeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                formatter={(value, name) => [
                  `${value}h`, 
                  name === 'eng' ? 'Engineering' : 'Company Average'
                ]}
                labelStyle={{ color: '#666' }}
              />
              <Area 
                type="monotone" 
                dataKey="avg" 
                stackId="1" 
                stroke="#82ca9d" 
                fill="#82ca9d" 
                fillOpacity={0.6}
              />
              <Area 
                type="monotone" 
                dataKey="eng" 
                stackId="2" 
                stroke="#8884d8" 
                fill="#8884d8" 
                fillOpacity={0.8}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recommendations Panel */}
      <div className="bg-white p-6 rounded-2xl shadow-kpi">
        <h3 className="text-lg font-600 text-text-black mb-4">💡 Recommended Actions</h3>
        <ul className="space-y-2 text-body-color">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>Conduct 1-on-1s to confirm burnout;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>Hire 2-3 additional engineers;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>Review on-call rotation to reduce overtime.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TIRAAnswer;