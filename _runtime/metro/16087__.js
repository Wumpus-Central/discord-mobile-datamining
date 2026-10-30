// === Module 16087: ? ===

// Module 16087

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};