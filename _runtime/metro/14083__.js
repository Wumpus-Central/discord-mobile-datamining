// === Module 14083: ? ===

// Module 14083

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};