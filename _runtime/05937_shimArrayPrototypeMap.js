// _runtime/05937_shimArrayPrototypeMap.js
import properlyBoxed from "05872_properlyBoxed.js";
import _mod5891 from "metro/05891__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5891(
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
