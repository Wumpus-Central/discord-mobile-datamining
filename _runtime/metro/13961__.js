// === Module 13961: ? ===

// Module 13961

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};