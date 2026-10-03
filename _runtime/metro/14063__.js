// === Module 14063: ? ===

// Module 14063

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};