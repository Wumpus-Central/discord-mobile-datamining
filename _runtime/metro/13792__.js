// === Module 13792: ? ===

// Module 13792

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};