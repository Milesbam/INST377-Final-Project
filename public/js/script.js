async function getItems(type) {
    const results = document.getElementById('results');
    results.innerHTML = '<p>Loading...</p>';
  
    try {
      const res = await fetch(`http://localhost:3000/${type}`);
      const data = await res.json();
  
      if (!data.length) {
        results.innerHTML = `<p>No ${type} found.</p>`;
        return;
      }
  
      results.innerHTML = `<h3>${type.charAt(0).toUpperCase() + type.slice(1)}:</h3>`;
      data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('card');
  
        if (type === 'quotes') {
          div.innerHTML = `<p>"${item.quote}"</p>`;
        } else if (type === 'books') {
          div.innerHTML = `
            <h4>${item.title}</h4>
            <p><strong>Author:</strong> ${item.author}</p>
            <p><strong>Year:</strong> ${item.year}</p>
            <a href="${item.wiki_url}" target="_blank">More Info</a>
          `;
        } else if (type === 'series') {
          div.innerHTML = `
            <h4>${item.title}</h4>
            <p><strong>Year:</strong> ${item.year}</p>
            <p><strong>Director:</strong> ${item.director || 'TBA'}</p>
            ${item.wiki_url ? `<a href="${item.wiki_url}" target="_blank">More Info</a>` : ''}
          `;
        }
  
        results.appendChild(div);
      });
    } catch (err) {
      results.innerHTML = `<p>Error loading ${type}. Try again.</p>`;
      console.error(err);
    }
  }
