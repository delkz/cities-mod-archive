export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      mods: {
        Row: {
          created_at: string
          id: number
          mod_author: string | null
          mod_imageLink: string | null
          mod_likes: number | null
          mod_name: string | null
          mod_rep: string | null
          mod_tag: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          mod_author?: string | null
          mod_imageLink?: string | null
          mod_likes?: number | null
          mod_name?: string | null
          mod_rep?: string | null
          mod_tag?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          mod_author?: string | null
          mod_imageLink?: string | null
          mod_likes?: number | null
          mod_name?: string | null
          mod_rep?: string | null
          mod_tag?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export interface ModInterface{
	created_at: string
	id: number
	mod_author: string | null
	mod_imageLink: string | null
	mod_likes: number | null
	mod_name: string
	mod_rep: string | null
	mod_tag: string | null
	mod_description: string | null 
}