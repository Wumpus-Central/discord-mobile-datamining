// _runtime/05163_shimAllSettled.js
import requirePromise from "05086_requirePromise.js";
import _mod5087 from "metro/05087__.js";
import _mod5115 from "metro/05115__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5087();
  closure_0 = tmp2;
  _mod5115(
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
