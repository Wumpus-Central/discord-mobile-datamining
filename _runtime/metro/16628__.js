// === Module 16628: ? ===

// Module 16628

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};