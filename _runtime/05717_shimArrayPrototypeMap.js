// _runtime/05717_shimArrayPrototypeMap.js
import properlyBoxed from "05652_properlyBoxed.js";
import _mod5671 from "metro/05671__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5671(
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
