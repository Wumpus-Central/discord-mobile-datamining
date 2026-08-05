// _runtime/04601_shimAllSettled.js

export default function shimAllSettled() {
  require("04524_requirePromise.js") /* requirePromise */();
  const tmp2 = require("04525_getPolyfill.js") /* getPolyfill */();
  require = tmp2;
  require("04553_defineProperty.js") /* defineProperty */(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};