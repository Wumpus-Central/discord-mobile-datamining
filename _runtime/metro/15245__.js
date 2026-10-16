// === Module 15245: ? ===

// Module 15245

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};