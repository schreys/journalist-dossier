import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { ExtraLink } from '../utils/types';

interface LinksListProps {
  links: ExtraLink[];
}

const LinksList: React.FC<LinksListProps> = ({ links }) => {
  const [expandedLink, setExpandedLink] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedLink(expandedLink === index ? null : index);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-serif font-semibold text-gray-800 mb-3">
        Supporting Resources
      </h2>
      <div className="space-y-3">
        {links.map((link, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            <div 
              className="flex justify-between items-center p-4 cursor-pointer bg-white"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{link.title}</h3>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mt-1 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="mr-1">Visit Source</span>
                  <ExternalLink size={12} />
                </a>
              </div>
              <div>
                {expandedLink === index ? (
                  <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
                )}
              </div>
            </div>
            <div 
              className={`px-4 overflow-hidden transition-all duration-300 bg-gray-50 ${
                expandedLink === index ? 'max-h-48 py-4' : 'max-h-0 py-0'
              }`}
            >
              <p className="text-gray-600 text-sm">{link.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinksList;