document.getElementById('toggleImageBtn').addEventListener('click', function() {
    var imageContainer = document.getElementById('imageContainer');
    if (imageContainer.style.display === 'none') {
        imageContainer.style.display = 'block';
    } else {
        imageContainer.style.display = 'none';
    }
});
