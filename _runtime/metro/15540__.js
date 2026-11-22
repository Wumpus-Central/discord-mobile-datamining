// === Module 15540: ? ===

// Module 15540

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};