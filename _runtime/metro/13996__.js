// === Module 13996: ? ===

// Module 13996

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};