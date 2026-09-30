// _runtime/05365_shimArrayPrototypeMap.js
import properlyBoxed from "05300_properlyBoxed.js";
import _mod5319 from "metro/05319__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5319(
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
