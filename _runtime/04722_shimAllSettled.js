// === Module 4722: shimAllSettled ===

// Module 4722 (shimAllSettled)

export default function shimAllSettled() {
  _require(4645)();
  const tmp2 = _require(4646)();
  _require = tmp2;
  _require(4674)(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};