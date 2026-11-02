// === Module 16132: ? ===

// Module 16132

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};