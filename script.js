document.addEventListener('DOMContentLoaded', () => {
    const textPrompt = document.getElementById('text-prompt');
    const generateImageBtn = document.getElementById('generate-image');
    const generatedImage = document.getElementById('generated-image');
  
    generateImageBtn.addEventListener('click', () => {
      const promptText = textPrompt.value.trim();
      if (!promptText) {
        alert('Please enter a text prompt to generate an image.');
        return;
      }
  
      // Replace this with the actual API call to generate the image.
      // Use the `promptText` variable as input to the API.
      const imageUrl = 'https://via.placeholder.com/500x300?text=Generated+AI+Image';
  
      generatedImage.src = imageUrl;
      generatedImage.style.display = 'block';
    });
  });
  