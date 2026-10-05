// === Module 14065: ? ===

// Module 14065

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};