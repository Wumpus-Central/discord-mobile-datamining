// === Module 14520: ? ===

// Module 14520

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};