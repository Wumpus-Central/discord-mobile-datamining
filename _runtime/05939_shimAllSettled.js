// _runtime/05939_shimAllSettled.js
import requirePromise from "05862_requirePromise.js";
import _mod5863 from "metro/05863__.js";
import _mod5891 from "metro/05891__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5863();
  closure_0 = tmp2;
  _mod5891(
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
