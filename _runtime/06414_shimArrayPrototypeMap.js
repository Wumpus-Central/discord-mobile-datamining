// _runtime/06414_shimArrayPrototypeMap.js
import properlyBoxed from "06349_properlyBoxed.js";
import _mod6368 from "metro/06368__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6368(
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
