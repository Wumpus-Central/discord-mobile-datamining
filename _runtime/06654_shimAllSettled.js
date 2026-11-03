// _runtime/06654_shimAllSettled.js
import requirePromise from "06577_requirePromise.js";
import _mod6578 from "metro/06578__.js";
import _mod6606 from "metro/06606__.js";

export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod6578();
  closure_0 = tmp2;
  _mod6606(
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
