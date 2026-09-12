// _runtime/04957_shimAllSettled.js
import requirePromise from "04880_requirePromise.js";
import _mod4881 from "metro/04881__.js";
import defineProperty from "04909_defineProperty.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod4881();
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
