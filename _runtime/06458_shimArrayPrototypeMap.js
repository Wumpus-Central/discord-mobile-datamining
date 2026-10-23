// _runtime/06458_shimArrayPrototypeMap.js
import properlyBoxed from "06393_properlyBoxed.js";
import _mod6412 from "metro/06412__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6412(
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
