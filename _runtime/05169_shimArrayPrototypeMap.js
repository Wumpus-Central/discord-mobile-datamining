// _runtime/05169_shimArrayPrototypeMap.js
import properlyBoxed from "05104_properlyBoxed.js";
import _mod5123 from "metro/05123__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5123(
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
