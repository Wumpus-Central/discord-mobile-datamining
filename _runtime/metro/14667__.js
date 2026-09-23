// === Module 14667: ? ===

// Module 14667

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};