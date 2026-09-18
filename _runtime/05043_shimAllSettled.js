// _runtime/05043_shimAllSettled.js
import requirePromise from "04966_requirePromise.js";
import _mod4967 from "metro/04967__.js";
import _mod4995 from "metro/04995__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod4967();
  closure_0 = tmp2;
  _mod4995(
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
