// === Module 14425: ? ===

// Module 14425

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};