// _runtime/04893_shimArrayPrototypeMap.js
import properlyBoxed from "04828_properlyBoxed.js";
import defineProperty from "04847_defineProperty.js";

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
