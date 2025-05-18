document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('/api/quotes');
    if (!res.ok) throw new Error('Failed to fetch quotes');

    const data = await res.json();
    if (data.length === 0) {
      document.getElementById('quote-text').textContent = 'No quotes found.';
      return;
    }

    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex].quote;

    document.getElementById('quote-text').textContent = randomQuote;

  } catch (error) {
    console.error('Error fetching quote:', error);
    document.getElementById('quote-text').textContent = 'Failed to load quote.';
  }
});