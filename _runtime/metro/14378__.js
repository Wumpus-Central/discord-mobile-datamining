// === Module 14378: ? ===

// Module 14378

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};