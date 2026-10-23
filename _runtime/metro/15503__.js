// === Module 15503: ? ===

// Module 15503

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};