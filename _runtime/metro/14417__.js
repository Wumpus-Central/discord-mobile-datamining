// === Module 14417: ? ===

// Module 14417

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};