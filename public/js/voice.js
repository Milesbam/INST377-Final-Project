if (annyang) {
    const commands = {
      'go to home': () => window.location.href = 'index.html',
      'go to about': () => window.location.href = 'about.html',
      'go to dune data': () => window.location.href = 'dune.html',
      'go to books': () => window.location.href = 'books.html',
      'go to quotes': () => window.location.href = 'quotes.html',
      'go to series': () => window.location.href = 'series.html',
      'hello': () => alert('Hello there! Welcome to Dune Explorer!')
    };
  
    annyang.addCommands(commands);
  
    window.addEventListener('load', () => {
      const startBtn = document.getElementById('start-voice');
      const stopBtn = document.getElementById('stop-voice');
  
      if (startBtn) startBtn.addEventListener('click', () => annyang.start({ autoRestart: false, continuous: false }));
      if (stopBtn) stopBtn.addEventListener('click', () => annyang.abort());
    });
  }
  