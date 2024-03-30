document.addEventListener('DOMContentLoaded', function () {
  // Get all modal trigger buttons
  var modalTriggerButtons = document.querySelectorAll('[data-modal-target]');
  // Get all close buttons within modals
  var modalCloseButtons = document.querySelectorAll('[data-modal-close]');

  // Loop through each trigger button and attach click event listener
  modalTriggerButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Get the target modal ID from the data-modal-target attribute
      var modalId = button.getAttribute('data-modal-target');

      // Get the target modal element
      var modal = document.querySelector(modalId);

      // Add 'active' class to show the modal
      modal.classList.toggle('active');
    });
  });

  // Loop through each close button and attach click event listener
  modalCloseButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Get the modal ID to be closed from the data-modal-close attribute
      var modalId = button.getAttribute('data-modal-close');

      // Get the modal element to be closed
      var modal = document.querySelector(modalId);

      // Remove 'active' class to hide the modal
      modal.classList.toggle('active');
    });
  });
});
