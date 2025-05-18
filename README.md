Name: Miles Rousseau

# Dune Explorer
# Link: inst-377-final-project-pi.vercel.app

## Project Description

Dune Explorer is a dynamic web application that immerses users in the world of Frank Herbert's Dune universe. Through interactive pages, users can explore famous quotes, browse through the series' books and metadata, and visualize key statistics using charts and animations. The app integrates data from a custom Dune API and provides voice command support for intuitive interaction.

This web app uses HTML, CSS, JavaScript, Express.js for server-side logic, Supabase for database storage, and the Fetch API to handle communication between front-end and back-end. It is styled with custom CSS and uses libraries like Chart.js for data visualization and Annyang for voice command functionality.

## Target Browsers

This application has been tested and optimized for:

> Desktop browsers: Chrome, Firefox, Safari.

> Some features like voice commands (Annyang) may have limited support if used on a mobile browser.

## Developer Manual

[View the Developer Manual below](#developer-manual)

---

### Developer Manual

### Installation & Setup Instructions

# 1. **Clone the repository:** 

git clone https://github.com/your-username/dune-explorer.git
cd dune-explorer

# 2. ** Install Dependencies ** 

npm install

# 3. ** Enviornment Variables **

SUPABASE_URL=https://wduwobtyvlvuwheylzee.supabase.co
SUPABASE_KEY=your_anon_key_here (not given due to security reasons)

# 4. **Starting the Server**
npm start

# ** Running the Frontend **

> You can open index.html directly in the browser for local testing of the frontend, or serve it using a local server (VSCode).



#  ** API Reference **
The server exposes the following endpoints:

> GET /api/quotes
    Returns a random Dune quote.

> GET /api/books
    Returns a list of books from the Dune universe.

> GET /api/series
Returns metadata and statistics on the series.

> POST /api/quotes
Adds a new quote to the database.


# ** BUGS **

> Voice command misrecognition may occur in noisy environments or with uncommon phrases.

# ** Roadmap for future development: **

> Add search functionality for quotes and books.

> Add filters by author, book type, and year.

> Add user login for saving favorite quotes.

> Add dark mode toggle.

> Add accessibility improvements (better tab navigation).




