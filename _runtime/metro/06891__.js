// === Module 6891: ? ===

// Module 6891
function _setPrototypeOf(arg0, arg1) {
  if (Object.setPrototypeOf) {
    const _Object = Object;
    exports = setPrototypeOf.bind();
  } else {
    exports = (arg0, arg1) => {
      arg0.__proto__ = arg1;
      return arg0;
    };
  }
  module.exports = exports;
  return exports(arg0, arg1);
}
let exports = _setPrototypeOf;

export default _setPrototypeOf;