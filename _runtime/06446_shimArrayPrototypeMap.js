// _runtime/06446_shimArrayPrototypeMap.js
import properlyBoxed from "06381_properlyBoxed.js";
import _mod6400 from "metro/06400__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6400(
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
