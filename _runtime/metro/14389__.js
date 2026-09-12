// === Module 14389: ? ===

// Module 14389

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};