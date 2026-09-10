// _runtime/04926_shimAllSettled.js
import requirePromise from "04849_requirePromise.js";
import _mod4850 from "metro/04850__.js";
import defineProperty from "04878_defineProperty.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod4850();
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
