// === Module 16786: ? ===

// Module 16786

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};