// === Module 16387: ? ===

// Module 16387

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};