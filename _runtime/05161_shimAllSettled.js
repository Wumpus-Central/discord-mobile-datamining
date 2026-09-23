// _runtime/05161_shimAllSettled.js
import requirePromise from "05084_requirePromise.js";
import _mod5085 from "metro/05085__.js";
import _mod5113 from "metro/05113__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5085();
  closure_0 = tmp2;
  _mod5113(
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
