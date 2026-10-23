// _runtime/06447_shimAllSettled.js
import requirePromise from "06370_requirePromise.js";
import _mod6371 from "metro/06371__.js";
import _mod6399 from "metro/06399__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6371();
  closure_0 = tmp2;
  _mod6399(
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
