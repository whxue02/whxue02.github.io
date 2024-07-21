document.getElementById('moreDetailsButton').addEventListener('click', function() {
    const moreDetails = document.getElementById('moreDetails');
    if (moreDetails.style.display === 'none') {
        moreDetails.style.display = 'block';
        this.textContent = 'Show Less Details';
    } else {
        moreDetails.style.display = 'none';
        this.textContent = 'Show More Details';
    }
});
