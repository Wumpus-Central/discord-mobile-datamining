// === Module 14382: ? ===

// Module 14382

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};