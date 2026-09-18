// _runtime/05041_shimArrayPrototypeMap.js
import properlyBoxed from "04976_properlyBoxed.js";
import _mod4995 from "metro/04995__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod4995(
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
