// === Module 16751: ? ===

// Module 16751

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};