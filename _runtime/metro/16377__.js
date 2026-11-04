// === Module 16377: ? ===

// Module 16377

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};