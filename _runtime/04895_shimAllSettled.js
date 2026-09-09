// _runtime/04895_shimAllSettled.js
import requirePromise from "04818_requirePromise.js";
import _mod4819 from "metro/04819__.js";
import defineProperty from "04847_defineProperty.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod4819();
  closure_0 = tmp2;
  defineProperty(
    Promise,
    { allSettled: tmp2 },
    {
      allSettled: function testAllSettled() {
        return Promise.allSettled !== closure_0;
      },
    },
  );
  return tmp2;
}
