// === Module 14876: ? ===

// Module 14876

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};