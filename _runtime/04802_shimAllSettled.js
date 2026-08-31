// === Module 4802: shimAllSettled ===

// Module 4802 (shimAllSettled)

export default function shimAllSettled() {
  _require(4725)();
  const tmp2 = _require(4726)();
  _require = tmp2;
  _require(4754)(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};