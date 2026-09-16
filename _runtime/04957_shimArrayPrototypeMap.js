// _runtime/04957_shimArrayPrototypeMap.js
import properlyBoxed from "04892_properlyBoxed.js";
import defineProperty from "04911_defineProperty.js";

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
