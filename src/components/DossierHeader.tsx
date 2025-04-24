import React from 'react';
import { ExternalLink, Calendar, FileText } from 'lucide-react';

interface DossierHeaderProps {
  title: string;
  url: string;
}

const DossierHeader: React.FC<DossierHeaderProps> = ({ title, url }) => {
  return (
    <header className="mb-8 border-b border-gray-200 pb-6">
      <div className="flex items-center text-xs font-medium text-gray-500 mb-2">
        <Calendar size={14} className="mr-1" />
        <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        <span className="mx-2">•</span>
        <FileText size={14} className="mr-1" />
        <span>Dossier</span>
      </div>
      <h1 className="text-3xl font-serif font-bold text-gray-900 mb-3 leading-tight">
        {title}
      </h1>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
      >
        <span className="mr-1">View Source</span>
        <ExternalLink size={14} />
      </a>
    </header>
  );
};

export default DossierHeader;