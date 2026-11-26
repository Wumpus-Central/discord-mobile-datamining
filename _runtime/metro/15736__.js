// === Module 15736: ? ===

// Module 15736

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};