// _runtime/06526_shimArrayPrototypeMap.js
import properlyBoxed from "06461_properlyBoxed.js";
import _mod6480 from "metro/06480__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6480(
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
