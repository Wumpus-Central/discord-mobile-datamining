// _runtime/04955_shimArrayPrototypeMap.js
import properlyBoxed from "04890_properlyBoxed.js";
import defineProperty from "04909_defineProperty.js";

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
