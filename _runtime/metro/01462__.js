// _runtime/metro/01462__.js
if (typeof Object.create === "function") {
  module.exports = function inherits(value, super_) {
    if (super_) {
      value.super_ = super_;
      const _Object = Object;
      const obj = { constructor: null };
      const obj2 = { value, enumerable: false, writable: true, configurable: true };
      obj.constructor = obj2;
      value.prototype = Object.create(super_.prototype, obj);
    }
  };
} else {
  module.exports = function inherits(arg0, super_) {
    if (super_) {
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
