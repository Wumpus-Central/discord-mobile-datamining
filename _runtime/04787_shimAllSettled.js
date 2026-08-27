// === Module 4787: shimAllSettled ===

// Module 4787 (shimAllSettled)

export default function shimAllSettled() {
  _require(4710)();
  const tmp2 = _require(4711)();
  _require = tmp2;
  _require(4739)(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};