// === Module 16633: ? ===

// Module 16633

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};