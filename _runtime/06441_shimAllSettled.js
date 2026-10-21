// _runtime/06441_shimAllSettled.js
import requirePromise from "06364_requirePromise.js";
import _mod6365 from "metro/06365__.js";
import _mod6393 from "metro/06393__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6365();
  closure_0 = tmp2;
  _mod6393(
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
