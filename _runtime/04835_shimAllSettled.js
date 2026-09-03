// === Module 4835: shimAllSettled ===

// Module 4835 (shimAllSettled)

export default function shimAllSettled() {
  _require(4758)();
  const tmp2 = _require(4759)();
  _require = tmp2;
  _require(4787)(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};