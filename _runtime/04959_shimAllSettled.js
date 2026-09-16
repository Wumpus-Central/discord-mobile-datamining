// _runtime/04959_shimAllSettled.js
import requirePromise from "04882_requirePromise.js";
import _mod4883 from "metro/04883__.js";
import defineProperty from "04911_defineProperty.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod4883();
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
