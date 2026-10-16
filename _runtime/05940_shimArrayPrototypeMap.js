// _runtime/05940_shimArrayPrototypeMap.js
import properlyBoxed from "05875_properlyBoxed.js";
import _mod5894 from "metro/05894__.js";

export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5894(
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
