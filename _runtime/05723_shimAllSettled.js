// _runtime/05723_shimAllSettled.js
import requirePromise from "05646_requirePromise.js";
import _mod5647 from "metro/05647__.js";
import _mod5675 from "metro/05675__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod5647();
  closure_0 = tmp2;
  _mod5675(
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
