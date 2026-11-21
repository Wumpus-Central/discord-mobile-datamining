// === Module 15542: ? ===

// Module 15542

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};