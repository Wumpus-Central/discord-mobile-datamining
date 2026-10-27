// _runtime/06461_shimArrayPrototypeMap.js
import properlyBoxed from "06396_properlyBoxed.js";
import _mod6415 from "metro/06415__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6415(
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
