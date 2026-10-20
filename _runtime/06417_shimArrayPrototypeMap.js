// _runtime/06417_shimArrayPrototypeMap.js
import properlyBoxed from "06352_properlyBoxed.js";
import _mod6371 from "metro/06371__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6371(
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
