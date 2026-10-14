// _runtime/05726_shimArrayPrototypeMap.js
import properlyBoxed from "05661_properlyBoxed.js";
import _mod5680 from "metro/05680__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5680(
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
