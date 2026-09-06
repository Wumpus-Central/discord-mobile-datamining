// _runtime/04879_shimArrayPrototypeMap.js
import properlyBoxed from "04814_properlyBoxed.js";
import defineProperty from "04833_defineProperty.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  defineProperty(
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
