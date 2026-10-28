// === Module 15811: ? ===

// Module 15811

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};