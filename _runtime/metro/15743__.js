// === Module 15743: ? ===

// Module 15743

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};