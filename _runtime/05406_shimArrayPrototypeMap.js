// _runtime/05406_shimArrayPrototypeMap.js
import properlyBoxed from "05341_properlyBoxed.js";
import _mod5360 from "metro/05360__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5360(
    Array.prototype,
    { map: tmp },
    {
      map() {
        return Array.prototype.map !== closure_0;
      },
    },
  );
  return tmp;
}
