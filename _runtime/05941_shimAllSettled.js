// _runtime/05941_shimAllSettled.js
import requirePromise from "05864_requirePromise.js";
import _mod5865 from "metro/05865__.js";
import _mod5893 from "metro/05893__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5865();
  closure_0 = tmp2;
  _mod5893(
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
