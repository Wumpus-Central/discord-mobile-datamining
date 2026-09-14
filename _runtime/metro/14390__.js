// === Module 14390: ? ===

// Module 14390

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};