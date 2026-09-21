// === Module 14581: ? ===

// Module 14581

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};