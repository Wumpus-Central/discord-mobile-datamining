// _runtime/05159_shimArrayPrototypeMap.js
import properlyBoxed from "05094_properlyBoxed.js";
import _mod5113 from "metro/05113__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5113(
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
