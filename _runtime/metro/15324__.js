// === Module 15324: ? ===

// Module 15324

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};