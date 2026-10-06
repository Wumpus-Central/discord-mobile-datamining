// === Module 6362: _typeof ===

// Module 6362 (_typeof)
function _typeof(arg0) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      exports = (arg0) => typeof arg0;
    }
    module.exports = exports;
    return exports(arg0);
  }
  exports = (arg0) => {
    const tmp = arg0;
    if (tmp) {
      const _Symbol = Symbol;
      if (typeof Symbol === "function") {
        let str;
        const _Symbol3 = Symbol;
        if (arg0.constructor === Symbol) {
          const _Symbol2 = Symbol;
          str = "symbol";
        }
        return str;
      }
    }
    str = typeof arg0;
  };
}
exports = _typeof;

export default _typeof;