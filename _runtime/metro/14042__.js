// === Module 14042: ? ===

// Module 14042

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});