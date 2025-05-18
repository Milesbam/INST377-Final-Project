import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default async function handler(req, res) {
  try {
    const { data, error } = await supabase.from('series').select('*');
    
    if (error) {
      console.error('Supabase error:', error.message);
      return res.status(500).json({ error: 'Database query failed.' });
    }

    res.status(200).json(data);
  } catch (err) {
    console.error('Handler error:', err);
    res.status(500).json({ error: 'Unexpected server error.' });
  }
}
