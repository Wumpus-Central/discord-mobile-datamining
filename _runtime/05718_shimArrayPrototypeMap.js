// _runtime/05718_shimArrayPrototypeMap.js
import properlyBoxed from "05653_properlyBoxed.js";
import _mod5672 from "metro/05672__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5672(
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
