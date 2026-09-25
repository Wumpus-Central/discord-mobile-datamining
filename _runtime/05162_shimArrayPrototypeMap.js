// _runtime/05162_shimArrayPrototypeMap.js
import properlyBoxed from "05097_properlyBoxed.js";
import _mod5116 from "metro/05116__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5116(
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
