
export default function shimArrayPrototypeMap() {
  const tmp = require(4443) /* getPolyfill */();
  require = tmp;
  require(4462) /* defineProperty */(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};