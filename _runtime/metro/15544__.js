// === Module 15544: ? ===

// Module 15544

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};