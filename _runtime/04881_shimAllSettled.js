// _runtime/04881_shimAllSettled.js
import requirePromise from "04804_requirePromise.js";
import _mod4805 from "metro/04805__.js";
import defineProperty from "04833_defineProperty.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod4805();
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
