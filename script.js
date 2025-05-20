document.getElementById("awardForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission
    document.getElementById("awardForm").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
});
