// === Module 15490: ? ===

// Module 15490

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};