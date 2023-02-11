Fancybox.bind('[data-fancybox="gallery"]', {
  // Do not create a gallery
  groupAttr: null,

  // Do not hide page scrollbars
  hideScrollbar: false,

  // Disable drag to close guesture
  dragToClose: false,

  // Hide close button
  closeButton: false,

  // Disable toolbar
  Toolbar: false,

  // Disable zoom animation; close on click and wheel events
  Image: {
    zoom: false,
    click: "close",
    wheel: "close",
  },

  // Custom animations
  showClass: "fancybox-zoomIn",
  hideClass: "fancybox-zoomOut",
});
