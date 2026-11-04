// _runtime/06669_shimAllSettled.js
import requirePromise from "06592_requirePromise.js";
import _mod6593 from "metro/06593__.js";
import _mod6621 from "metro/06621__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6593();
  closure_0 = tmp2;
  _mod6621(
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
