// _runtime/04927_shimAllSettled.js
import requirePromise from "04850_requirePromise.js";
import _mod4851 from "metro/04851__.js";
import defineProperty from "04879_defineProperty.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod4851();
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
