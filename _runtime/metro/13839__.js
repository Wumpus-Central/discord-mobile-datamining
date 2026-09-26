// === Module 13839: ? ===

// Module 13839

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});