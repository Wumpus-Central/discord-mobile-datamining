// === Module 16445: ? ===

// Module 16445

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};