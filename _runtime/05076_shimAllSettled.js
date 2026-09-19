// _runtime/05076_shimAllSettled.js
import requirePromise from "04999_requirePromise.js";
import _mod5000 from "metro/05000__.js";
import _mod5028 from "metro/05028__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5000();
  closure_0 = tmp2;
  _mod5028(
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
