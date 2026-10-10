// === Module 14532: ? ===

// Module 14532

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};