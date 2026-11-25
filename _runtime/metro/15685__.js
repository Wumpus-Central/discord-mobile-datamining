// === Module 15685: ? ===

// Module 15685

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};