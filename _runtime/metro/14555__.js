// === Module 14555: ? ===

// Module 14555

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};