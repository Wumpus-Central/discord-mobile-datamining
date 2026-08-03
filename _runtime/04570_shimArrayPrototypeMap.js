
export default function shimArrayPrototypeMap() {
  const tmp = require(4505) /* getPolyfill */();
  require = tmp;
  require(4524) /* defineProperty */(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};