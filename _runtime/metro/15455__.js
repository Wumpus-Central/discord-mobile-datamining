// === Module 15455: ? ===

// Module 15455

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};