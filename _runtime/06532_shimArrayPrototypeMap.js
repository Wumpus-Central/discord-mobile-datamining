// _runtime/06532_shimArrayPrototypeMap.js
import properlyBoxed from "06467_properlyBoxed.js";
import _mod6486 from "metro/06486__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6486(
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
