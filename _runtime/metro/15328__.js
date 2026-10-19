// === Module 15328: ? ===

// Module 15328

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};