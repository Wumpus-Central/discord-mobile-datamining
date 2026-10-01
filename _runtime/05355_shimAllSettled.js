// _runtime/05355_shimAllSettled.js
import requirePromise from "05278_requirePromise.js";
import _mod5279 from "metro/05279__.js";
import _mod5307 from "metro/05307__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5279();
  closure_0 = tmp2;
  _mod5307(
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
