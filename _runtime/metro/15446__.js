// === Module 15446: ? ===

// Module 15446

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};