// === Module 6446: shimArrayPrototypeMap ===

// Module 6446 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 6381 */;
import _mod6400 from "module_6400" /* 6400 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6400(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};