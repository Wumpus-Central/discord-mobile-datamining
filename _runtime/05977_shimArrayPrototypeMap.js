// _runtime/05977_shimArrayPrototypeMap.js
import properlyBoxed from "05912_properlyBoxed.js";
import _mod5931 from "metro/05931__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5931(
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
