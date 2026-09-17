// _runtime/04959_shimArrayPrototypeMap.js
import properlyBoxed from "04894_properlyBoxed.js";
import defineProperty from "04913_defineProperty.js";

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
