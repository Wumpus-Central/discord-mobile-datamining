// _runtime/05942_shimAllSettled.js
import requirePromise from "05865_requirePromise.js";
import _mod5866 from "metro/05866__.js";
import _mod5894 from "metro/05894__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5866();
  closure_0 = tmp2;
  _mod5894(
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
