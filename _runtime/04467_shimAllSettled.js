// === Module 4467: shimAllSettled ===

// Module 4467 (shimAllSettled)

export default function shimAllSettled() {
  _require(4390)();
  const tmp2 = _require(4391)();
  _require = tmp2;
  _require(4419)(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};