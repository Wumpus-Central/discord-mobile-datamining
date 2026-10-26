// === Module 15548: ? ===

// Module 15548

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};