// === Module 16472: ? ===

// Module 16472

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};