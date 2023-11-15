import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://uigmxajwpzookuetcrdn.supabase.co'
let supabaseKey = process.env.SUPABASE_KEY || "" ;
let supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;