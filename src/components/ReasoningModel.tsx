import React, { useState } from 'react';
import { ReasoningModel as ReasoningModelType } from '../utils/types';
import { Check, X, AlertTriangle, HelpCircle } from 'lucide-react';

interface ReasoningModelProps {
  model: ReasoningModelType;
}

const ReasoningModel: React.FC<ReasoningModelProps> = ({ model }) => {
  const [activeTab, setActiveTab] = useState<'keyPoints' | 'counterArguments' | 'evidenceGaps'>('keyPoints');
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-5 border-b border-gray-200">
        <h2 className="text-xl font-serif font-semibold text-gray-900 mb-3">Reasoning Model</h2>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
          <p className="text-base text-gray-800 italic">{model.mainThesis}</p>
        </div>
      </div>
      
      <div className="border-b border-gray-200">
        <nav className="flex divide-x divide-gray-200">
          <button
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors text-center ${
              activeTab === 'keyPoints' 
                ? 'bg-white text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700 bg-gray-50'
            }`}
            onClick={() => setActiveTab('keyPoints')}
          >
            <span className="inline-flex items-center">
              <Check size={16} className="mr-1" />
              Key Points
            </span>
          </button>
          <button
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors text-center ${
              activeTab === 'counterArguments' 
                ? 'bg-white text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700 bg-gray-50'
            }`}
            onClick={() => setActiveTab('counterArguments')}
          >
            <span className="inline-flex items-center">
              <X size={16} className="mr-1" />
              Counter Arguments
            </span>
          </button>
          <button
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors text-center ${
              activeTab === 'evidenceGaps' 
                ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700 bg-gray-50'
            }`}
            onClick={() => setActiveTab('evidenceGaps')}
          >
            <span className="inline-flex items-center">
              <HelpCircle size={16} className="mr-1" />
              Evidence Gaps
            </span>
          </button>
        </nav>
      </div>
      
      <div className="p-5">
        {activeTab === 'keyPoints' && (
          <ul className="space-y-2">
            {model.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-600 mt-0.5 mr-3 flex-shrink-0">
                  <Check size={12} />
                </span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        )}
        
        {activeTab === 'counterArguments' && (
          <ul className="space-y-2">
            {model.counterArguments.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-100 text-red-600 mt-0.5 mr-3 flex-shrink-0">
                  <X size={12} />
                </span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        )}
        
        {activeTab === 'evidenceGaps' && (
          <ul className="space-y-2">
            {model.evidenceGaps.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-amber-100 text-amber-600 mt-0.5 mr-3 flex-shrink-0">
                  <AlertTriangle size={12} />
                </span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReasoningModel;