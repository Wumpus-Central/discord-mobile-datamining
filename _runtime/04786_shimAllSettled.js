// === Module 4786: shimAllSettled ===

// Module 4786 (shimAllSettled)

export default function shimAllSettled() {
  _require(4709)();
  const tmp2 = _require(4710)();
  _require = tmp2;
  _require(4738)(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};