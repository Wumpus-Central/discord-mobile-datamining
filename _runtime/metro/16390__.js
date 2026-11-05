// === Module 16390: ? ===

// Module 16390

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};