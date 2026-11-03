// _runtime/06652_shimArrayPrototypeMap.js
import properlyBoxed from "06587_properlyBoxed.js";
import _mod6606 from "metro/06606__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6606(
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
