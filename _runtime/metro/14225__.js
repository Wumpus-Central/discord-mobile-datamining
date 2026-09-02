// === Module 14225: ? ===

// Module 14225

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});