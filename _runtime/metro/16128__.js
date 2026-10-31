// === Module 16128: ? ===

// Module 16128

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};