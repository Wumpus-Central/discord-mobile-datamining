// _runtime/05401_shimAllSettled.js
import requirePromise from "05324_requirePromise.js";
import _mod5325 from "metro/05325__.js";
import _mod5353 from "metro/05353__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5325();
  closure_0 = tmp2;
  _mod5353(
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
