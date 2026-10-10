// _runtime/05721_shimArrayPrototypeMap.js
import properlyBoxed from "05656_properlyBoxed.js";
import _mod5675 from "metro/05675__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5675(
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
