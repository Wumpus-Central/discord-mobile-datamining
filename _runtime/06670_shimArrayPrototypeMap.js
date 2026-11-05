// _runtime/06670_shimArrayPrototypeMap.js
import properlyBoxed from "06605_properlyBoxed.js";
import _mod6624 from "metro/06624__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6624(
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
