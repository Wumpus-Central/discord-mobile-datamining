// _runtime/04960_shimAllSettled.js
import requirePromise from "04883_requirePromise.js";
import _mod4884 from "metro/04884__.js";
import defineProperty from "04912_defineProperty.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod4884();
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
