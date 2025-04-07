function toggleService(serviceId, element) {
    // Get the service details element
    var serviceDetails = document.getElementById(serviceId);
    
    // Toggle the visibility of the service details with smooth transition
    if (serviceDetails.style.display === "none" || serviceDetails.style.display === "") {
      serviceDetails.style.display = "block";
      serviceDetails.style.opacity = "1"; // Make it visible with fade-in effect
    } else {
      serviceDetails.style.display = "none";
      serviceDetails.style.opacity = "0"; // Fade out the content
    }
  
    // Remove the 'active' class from all service categories
    var allCategories = document.querySelectorAll('.service-category');
    allCategories.forEach(function(category) {
      category.classList.remove('active');
    });
  
    // Add 'active' class to the clicked category
    element.parentElement.classList.add('active');
  }