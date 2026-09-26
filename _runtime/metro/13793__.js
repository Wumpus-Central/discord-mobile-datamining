// === Module 13793: ? ===

// Module 13793

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};