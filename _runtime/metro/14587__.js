// === Module 14587: ? ===

// Module 14587

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};