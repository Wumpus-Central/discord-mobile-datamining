// === Module 95: _getPrototypeOf ===

// Module 95 (_getPrototypeOf)
function _getPrototypeOf(arg0) {
  if (Object.setPrototypeOf) {
    let _Object = Object;
    exports = getPrototypeOf.bind();
  } else {
    exports = (arg0) => {
      let __proto__ = arg0.__proto__;
      if (!__proto__) {
        const _Object = Object;
        __proto__ = Object.getPrototypeOf(arg0);
      }
      return __proto__;
    };
  }
  module.exports = exports;
  return exports(arg0);
}
let exports = _getPrototypeOf;

export default _getPrototypeOf;