// === Module 4800: shimAllSettled ===

// Module 4800 (shimAllSettled)

export default function shimAllSettled() {
  _require(4723)();
  const tmp2 = _require(4724)();
  _require = tmp2;
  _require(4752)(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};