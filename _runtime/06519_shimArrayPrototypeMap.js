// _runtime/06519_shimArrayPrototypeMap.js
import properlyBoxed from "06454_properlyBoxed.js";
import _mod6473 from "metro/06473__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6473(
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
