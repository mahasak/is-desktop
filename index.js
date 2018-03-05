var isTouchDevice = function() {
  return 'ontouchstart' in window || 'onmsgesturechange' in window;
}

var isDesktop = function() {
  return window.screenX != 0 && !isTouchDevice() ? true : false;
}

module.exports = {
  isTouchDevice: isTouchDevice,
  isDesktop: isDesktop;
}
