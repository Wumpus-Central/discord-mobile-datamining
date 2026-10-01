// _runtime/05353_shimArrayPrototypeMap.js
import properlyBoxed from "05288_properlyBoxed.js";
import _mod5307 from "metro/05307__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5307(
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
