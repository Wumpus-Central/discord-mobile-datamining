// _runtime/04601_shimAllSettled.js

export default function shimAllSettled() {
  require(4524) /* requirePromise */();
  const tmp2 = require(4525) /* getPolyfill */();
  require = tmp2;
  require(4553) /* defineProperty */(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};