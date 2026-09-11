// === Module 14354: ? ===

// Module 14354

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};