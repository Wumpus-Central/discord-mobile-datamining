// === Module 14301: ? ===

// Module 14301

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};