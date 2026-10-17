// _runtime/05979_shimAllSettled.js
import requirePromise from "05902_requirePromise.js";
import _mod5903 from "metro/05903__.js";
import _mod5931 from "metro/05931__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5903();
  closure_0 = tmp2;
  _mod5931(
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
