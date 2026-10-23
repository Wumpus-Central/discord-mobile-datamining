// === Module 15524: ? ===

// Module 15524

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};