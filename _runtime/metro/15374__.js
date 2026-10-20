// === Module 15374: ? ===

// Module 15374

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};