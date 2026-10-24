// _runtime/06462_shimAllSettled.js
import requirePromise from "06385_requirePromise.js";
import _mod6386 from "metro/06386__.js";
import _mod6414 from "metro/06414__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6386();
  closure_0 = tmp2;
  _mod6414(
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
