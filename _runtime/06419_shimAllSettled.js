// _runtime/06419_shimAllSettled.js
import requirePromise from "06342_requirePromise.js";
import _mod6343 from "metro/06343__.js";
import _mod6371 from "metro/06371__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6343();
  closure_0 = tmp2;
  _mod6371(
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
