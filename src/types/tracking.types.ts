import { TypeMap } from './';

export type Job = {
  id: string;
  printer_id: string;
  department_id: string;
  date: string;
  title: string;
  pages: string;
  color_pages: string;
  black_and_white_pages: string;
};

export type TrackingState = {
  currentJobs: Job[];
  jobHistory: TypeMap<TypeMap<Job[]>>;
};
