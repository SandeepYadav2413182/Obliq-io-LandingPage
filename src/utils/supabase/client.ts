import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Secure fail-safe check for building
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase environment configuration variables are missing inside your .env.local file.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
