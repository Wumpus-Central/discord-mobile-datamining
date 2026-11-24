// === Module 15563: ? ===

// Module 15563

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};