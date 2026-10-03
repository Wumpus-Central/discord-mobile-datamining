// _runtime/05399_shimArrayPrototypeMap.js
import properlyBoxed from "05334_properlyBoxed.js";
import _mod5353 from "metro/05353__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5353(
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
