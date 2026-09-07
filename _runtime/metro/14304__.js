// === Module 14304: ? ===

// Module 14304

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};