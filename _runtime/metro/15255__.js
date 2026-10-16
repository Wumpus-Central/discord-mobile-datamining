// === Module 15255: ? ===

// Module 15255

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};