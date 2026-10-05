// _runtime/metro/01467__.js
if (typeof Object.create === "function") {
  module.exports = function inherits(value, super_) {
    let obj2;
    const tmp = super_;
    if (tmp) {
      value.super_ = super_;
      const _Object = Object;
      const obj = { constructor: obj2 };
      obj2 = { value, enumerable: false, writable: true, configurable: true };
      value.prototype = Object.create(super_.prototype, obj);
    }
  };
} else {
  module.exports = function inherits(arg0, super_) {
    const tmp = super_;
    if (tmp) {
      arg0.super_ = super_;
      class TempCtor {
        constructor() {
          return;
        }
      }
      TempCtor.prototype = super_.prototype;
      arg0.prototype = Object.create(TempCtor.prototype);
      arg0.prototype.constructor = arg0;
    }
  };
}
