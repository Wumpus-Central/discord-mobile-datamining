// === Module 14329: ? ===

// Module 14329

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};