// _runtime/05720__getPrototypeOf.js
function _getPrototypeOf(arg0) {
  if (Object.setPrototypeOf) {
    let _Object = Object;
    let fn = getPrototypeOf.bind();
  } else {
    fn = (arg0) => {
      let __proto__ = arg0.__proto__;
      if (!__proto__) {
        const _Object = Object;
        __proto__ = Object.getPrototypeOf(arg0);
      }
      return __proto__;
    };
  }
  module.exports = fn;
  return fn(arg0);
}

export default _getPrototypeOf;