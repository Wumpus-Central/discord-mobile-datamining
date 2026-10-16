// _runtime/05939_shimArrayPrototypeMap.js
import properlyBoxed from "05874_properlyBoxed.js";
import _mod5893 from "metro/05893__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5893(
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
