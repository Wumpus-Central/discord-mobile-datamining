// === Module 16364: ? ===

// Module 16364

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};