// === Module 13837: ? ===

// Module 13837

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};