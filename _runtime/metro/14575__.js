// === Module 14575: ? ===

// Module 14575

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};