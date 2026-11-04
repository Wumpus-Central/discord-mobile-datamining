// _runtime/06667_shimArrayPrototypeMap.js
import properlyBoxed from "06602_properlyBoxed.js";
import _mod6621 from "metro/06621__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6621(
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
