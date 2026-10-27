// _runtime/06463_shimAllSettled.js
import requirePromise from "06386_requirePromise.js";
import _mod6387 from "metro/06387__.js";
import _mod6415 from "metro/06415__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6387();
  closure_0 = tmp2;
  _mod6415(
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
