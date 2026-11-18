// === Module 15469: ? ===

// Module 15469

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};