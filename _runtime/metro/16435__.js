// === Module 16435: ? ===

// Module 16435

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};