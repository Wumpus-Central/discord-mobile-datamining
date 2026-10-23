// _runtime/06445_shimArrayPrototypeMap.js
import properlyBoxed from "06380_properlyBoxed.js";
import _mod6399 from "metro/06399__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6399(
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
