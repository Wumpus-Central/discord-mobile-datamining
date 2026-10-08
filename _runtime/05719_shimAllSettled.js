// _runtime/05719_shimAllSettled.js
import requirePromise from "05642_requirePromise.js";
import _mod5643 from "metro/05643__.js";
import _mod5671 from "metro/05671__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5643();
  closure_0 = tmp2;
  _mod5671(
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
