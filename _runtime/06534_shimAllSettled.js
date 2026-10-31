// _runtime/06534_shimAllSettled.js
import requirePromise from "06457_requirePromise.js";
import _mod6458 from "metro/06458__.js";
import _mod6486 from "metro/06486__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6458();
  closure_0 = tmp2;
  _mod6486(
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
