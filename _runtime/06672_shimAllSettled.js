// _runtime/06672_shimAllSettled.js
import requirePromise from "06595_requirePromise.js";
import _mod6596 from "metro/06596__.js";
import _mod6624 from "metro/06624__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6596();
  closure_0 = tmp2;
  _mod6624(
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
