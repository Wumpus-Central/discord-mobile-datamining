// _runtime/05335_shimArrayPrototypeMap.js
import properlyBoxed from "05270_properlyBoxed.js";
import _mod5289 from "metro/05289__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5289(
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
