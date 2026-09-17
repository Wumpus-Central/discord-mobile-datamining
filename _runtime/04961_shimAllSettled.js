// _runtime/04961_shimAllSettled.js
import requirePromise from "04884_requirePromise.js";
import _mod4885 from "metro/04885__.js";
import defineProperty from "04913_defineProperty.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod4885();
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
