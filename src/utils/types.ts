export interface ExtraLink {
  title: string;
  url: string;
  description: string;
}

export interface ReasoningModel {
  mainThesis: string;
  keyPoints: string[];
  counterArguments: string[];
  evidenceGaps: string[];
}

export interface DossierData {
  title: string;
  url: string;
  description: string;
  extraLinks: ExtraLink[];
  reasoningModel: ReasoningModel;
}

export interface FeedbackData {
  overallRating: number;
  usefulnessRating: number;
  accuracyRating: number;
  completenessRating: number;
  comments: string;
}