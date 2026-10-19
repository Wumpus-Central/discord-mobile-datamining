// _runtime/06416_shimAllSettled.js
import requirePromise from "06339_requirePromise.js";
import _mod6340 from "metro/06340__.js";
import _mod6368 from "metro/06368__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6340();
  closure_0 = tmp2;
  _mod6368(
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
