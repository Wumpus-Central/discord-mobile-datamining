// _runtime/06495_shimArrayPrototypeMap.js
import properlyBoxed from "06430_properlyBoxed.js";
import _mod6449 from "metro/06449__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6449(
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
