// _runtime/04599_shimArrayPrototypeMap.js

export default function shimArrayPrototypeMap() {
  const tmp = require(4534) /* getPolyfill */();
  require = tmp;
  require(4553) /* defineProperty */(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};