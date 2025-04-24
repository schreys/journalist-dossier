import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import DossierHeader from './components/DossierHeader';
import DossierContent from './components/DossierContent';
import LinksList from './components/LinksList';
import ReasoningModel from './components/ReasoningModel';
import FeedbackForm from './components/FeedbackForm';
import { DossierData } from './utils/types';
import mockData from './data/dossierData.json';
import { Loader2 } from 'lucide-react';

function App() {
  const [dossierData, setDossierData] = useState<DossierData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchData = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/dossier/123');
        // const data = await response.json();
        
        // Using mock data with artificial delay for demo
        setTimeout(() => {
          setDossierData(mockData as DossierData);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching dossier data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <Loader2 size={48} className="text-blue-600 animate-spin mb-4" />
          <p className="text-gray-600 text-lg">Loading dossier data...</p>
        </div>
      </Layout>
    );
  }

  if (!dossierData) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Dossier Not Found</h2>
            <p className="text-gray-600">The requested dossier could not be loaded.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="animate-fadeIn space-y-8">
        <DossierHeader title={dossierData.title} url={dossierData.url} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <DossierContent data={dossierData} />
            <ReasoningModel model={dossierData.reasoningModel} />
            <LinksList links={dossierData.extraLinks} />
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <FeedbackForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;