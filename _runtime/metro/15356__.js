// === Module 15356: ? ===

// Module 15356

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};