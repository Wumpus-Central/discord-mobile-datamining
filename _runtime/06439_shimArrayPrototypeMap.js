// _runtime/06439_shimArrayPrototypeMap.js
import properlyBoxed from "06374_properlyBoxed.js";
import _mod6393 from "metro/06393__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6393(
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
