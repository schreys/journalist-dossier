import React from 'react';
import { DossierData } from '../utils/types';
import { FileText } from 'lucide-react';

interface DossierContentProps {
  data: DossierData;
}

const DossierContent: React.FC<DossierContentProps> = ({ data }) => {
  return (
    <div className="mb-8">
      <div className="flex items-start mb-4">
        <div className="bg-blue-100 p-2 rounded-lg mr-4">
          <FileText size={24} className="text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-serif font-semibold text-gray-800 mb-2">
            Article Summary
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">
            {data.description}
          </p>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 mt-6">
        <h3 className="text-md font-medium text-gray-700 mb-2">Writing Guidelines</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Focus on human impact stories alongside scientific data
          </li>
          <li className="flex items-center">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Include perspectives from both affected communities and experts
          </li>
          <li className="flex items-center">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Present balanced view of adaptation strategies and their effectiveness
          </li>
          <li className="flex items-center">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Use accessible language while maintaining scientific accuracy
          </li>
          <li className="flex items-center">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Include visual elements that communicate impact meaningfully
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DossierContent;