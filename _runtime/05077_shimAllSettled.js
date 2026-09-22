// _runtime/05077_shimAllSettled.js
import requirePromise from "05000_requirePromise.js";
import _mod5001 from "metro/05001__.js";
import _mod5029 from "metro/05029__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5001();
  closure_0 = tmp2;
  _mod5029(
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
