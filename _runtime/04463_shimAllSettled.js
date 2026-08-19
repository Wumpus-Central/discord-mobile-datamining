// === Module 4463: shimAllSettled ===

// Module 4463 (shimAllSettled)

export default function shimAllSettled() {
  _require(4386)();
  const tmp2 = _require(4387)();
  _require = tmp2;
  _require(4415)(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};