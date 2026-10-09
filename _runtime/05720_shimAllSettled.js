// _runtime/05720_shimAllSettled.js
import requirePromise from "05643_requirePromise.js";
import _mod5644 from "metro/05644__.js";
import _mod5672 from "metro/05672__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5644();
  closure_0 = tmp2;
  _mod5672(
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
