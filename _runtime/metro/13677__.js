// === Module 13677: ? ===

// Module 13677

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};