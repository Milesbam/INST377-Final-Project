const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;


const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/import', async (req, res) => {
  try {
    const booksRes = await fetch('https://the-dune-api.herokuapp.com/books');
    const booksData = await booksRes.json();

    for (const book of booksData) {
      const { id, title, year, author, wiki_url } = book;
      await supabase.from('books').insert([{
        id: parseInt(id),
        title,
        year,
        author: Array.isArray(author) ? author.join(', ') : author,
        wiki_url
      }]);
    }


    const quotesRes = await fetch('https://the-dune-api.herokuapp.com/quotes/100');
    const quotesData = await quotesRes.json();

    for (const quote of quotesData) {
      const { id, quote: quoteText } = quote;
      await supabase.from('quotes').insert([{
        id: parseInt(id),
        quote: quoteText
      }]);
    }


    const seriesData = [
      {
        id: 1,
        title: "Frank Herbert's Dune",
        year: "2000",
        director: "John Harrison",
        wiki_url: "https://en.wikipedia.org/wiki/Frank_Herbert%27s_Dune"
      },
      {
        id: 2,
        title: "Frank Herbert's Children of Dune",
        year: "2003",
        director: "Greg Yaitanes",
        wiki_url: "https://en.wikipedia.org/wiki/Frank_Herbert%27s_Children_of_Dune"
      },
      {
        id: 3,
        title: "Dune: The Sisterhood",
        year: "TBA",
        director: "",
        wiki_url: ""
      }
    ];

    for (const show of seriesData) {
      await supabase.from('series').insert([show]);
    }

    res.send(' Data successfully imported into Supabase!');
  } catch (err) {
    console.error('Error importing data:', err);
    res.status(500).send('Server error during data import');
  }
});

app.get('/api/quotes', async (req, res) => {
  const { data, error } = await supabase.from('quotes').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
});

app.get('/api/books', async (req, res) => {
  const { data, error } = await supabase.from('books').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
});

app.get('/api/series', async (req, res) => {
  const { data, error } = await supabase.from('series').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
