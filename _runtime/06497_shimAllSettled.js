// _runtime/06497_shimAllSettled.js
import requirePromise from "06420_requirePromise.js";
import _mod6421 from "metro/06421__.js";
import _mod6449 from "metro/06449__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6421();
  closure_0 = tmp2;
  _mod6449(
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
