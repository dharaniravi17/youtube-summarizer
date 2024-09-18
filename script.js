function validateLink() {
    const link = document.getElementById('video-link').value;
    const youtubePattern = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;

    if (youtubePattern.test(link)) {
        displaySummaryPage(); // Update content on the same page
    } else {
        alert('Please enter a valid YouTube link.');
    }
}

function displaySummaryPage() {
    const container = document.querySelector('.container');
    
    // Clear existing content
    container.innerHTML = '';

    // Add new content
    const header = document.createElement('h1');
    header.textContent = 'Here is your summarized paragraph';
    container.appendChild(header);
}

// JavaScript to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// JavaScript to scroll to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
