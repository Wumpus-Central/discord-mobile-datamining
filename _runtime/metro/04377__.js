// === Module 4377: ? ===

// Module 4377

export default (arg0) => encodeURIComponent(arg0).replace(/[!'()*]/g, (str) => {
  str = str.charCodeAt(0);
  return "%" + str.toString(16).toUpperCase();
});