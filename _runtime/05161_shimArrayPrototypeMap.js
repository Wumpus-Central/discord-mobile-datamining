// _runtime/05161_shimArrayPrototypeMap.js
import properlyBoxed from "05096_properlyBoxed.js";
import _mod5115 from "metro/05115__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5115(
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
