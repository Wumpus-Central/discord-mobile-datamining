// === Module 14914: ? ===

// Module 14914

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};