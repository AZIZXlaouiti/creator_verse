import {createClient} from '@supabase/supabase-js'
const URL =  import.meta.env.VITE_SUPABASE_URL
const API_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

/* connecting project frontend to supabase postgres database*/
export const supabase = createClient(
    URL , 
    API_KEY
)

