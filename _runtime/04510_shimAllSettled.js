// _runtime/04510_shimAllSettled.js

export default function shimAllSettled() {
  require(4433) /* requirePromise */();
  const tmp2 = require(4434) /* getPolyfill */();
  require = tmp2;
  require(4462) /* defineProperty */(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};