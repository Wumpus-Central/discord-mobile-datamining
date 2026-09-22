// _runtime/05075_shimArrayPrototypeMap.js
import properlyBoxed from "05010_properlyBoxed.js";
import _mod5029 from "metro/05029__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5029(
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
