// === Module 13988: ? ===

// Module 13988

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};