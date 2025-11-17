export interface TypesenseConfig {
  apiKey: string;
  host: string;
  port: number;
  protocol: "http" | "https";
  connectionTimeoutSeconds: number;
}

export interface CollectionSchema {
  name: string;
  num_documents: number;
  fields: Field[];
  default_sorting_field?: string;
  created_at?: number;
}

export interface Field {
  name: string;
  type: string;
  facet?: boolean;
  optional?: boolean;
  index?: boolean;
  sort?: boolean;
  infix?: boolean;
  locale?: string;
}

export interface Document {
  [key: string]: any;
}

export interface SearchParams {
  q: string;
  query_by: string;
  filter_by?: string;
  sort_by?: string;
  page?: number;
  per_page?: number;
}

export interface SearchResponse {
  hits: SearchHit[];
  found: number;
  out_of: number;
  page: number;
  request_params: SearchParams;
  search_time_ms: number;
}

export interface SearchHit {
  document: Document;
  highlights?: any[];
  text_match?: number;
}

export interface FilterValue {
  [fieldName: string]: any;
}

export type ThemeMode = "light" | "dark";
