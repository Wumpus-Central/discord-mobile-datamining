// === Module 14399: ? ===

// Module 14399

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};