// === Module 6709: ? ===

// Module 6709

export default (arg0) => encodeURIComponent(arg0).replace(/[!'()*]/g, (str) => {
  str = str.charCodeAt(0);
  return "%" + str.toString(16).toUpperCase();
});