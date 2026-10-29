// === Module 16047: ? ===

// Module 16047

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};