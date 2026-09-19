// _runtime/05074_shimArrayPrototypeMap.js
import properlyBoxed from "05009_properlyBoxed.js";
import _mod5028 from "metro/05028__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5028(
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
