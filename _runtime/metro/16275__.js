// === Module 16275: ? ===

// Module 16275

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};