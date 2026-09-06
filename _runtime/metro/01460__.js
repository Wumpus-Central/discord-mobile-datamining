// === Module 1460: ? ===

// Module 1460
if (typeof Object.create === "function") {
  module.exports = function inherits(value, super_) {
    if (super_) {
      value.super_ = super_;
      const _Object = Object;
      let obj = { constructor: null };
      obj = { value, enumerable: false, writable: true, configurable: true };
      obj.constructor = obj;
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