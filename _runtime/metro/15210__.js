// === Module 15210: ? ===

// Module 15210

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};