// _runtime/04599_shimArrayPrototypeMap.js

export default function shimArrayPrototypeMap() {
  const tmp = require("04534_getPolyfill.js") /* getPolyfill */();
  require = tmp;
  require("04553_defineProperty.js") /* defineProperty */(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};