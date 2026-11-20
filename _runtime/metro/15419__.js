// === Module 15419: ? ===

// Module 15419

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};