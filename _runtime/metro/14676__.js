// === Module 14676: ? ===

// Module 14676

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};