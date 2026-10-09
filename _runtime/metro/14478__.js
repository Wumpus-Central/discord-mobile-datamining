// === Module 14478: ? ===

// Module 14478

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};