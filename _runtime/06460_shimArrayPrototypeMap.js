// _runtime/06460_shimArrayPrototypeMap.js
import properlyBoxed from "06395_properlyBoxed.js";
import _mod6414 from "metro/06414__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6414(
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
