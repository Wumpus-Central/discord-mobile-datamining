// === Module 15549: ? ===

// Module 15549

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};