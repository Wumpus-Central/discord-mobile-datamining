// === Module 15585: ? ===

// Module 15585

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};