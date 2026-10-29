// _runtime/06521_shimAllSettled.js
import requirePromise from "06444_requirePromise.js";
import _mod6445 from "metro/06445__.js";
import _mod6473 from "metro/06473__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6445();
  closure_0 = tmp2;
  _mod6473(
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
