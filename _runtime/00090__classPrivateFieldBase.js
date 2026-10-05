// === Module 90: _classPrivateFieldBase ===

// Module 90 (_classPrivateFieldBase)
let hasOwnProperty;


export default function _classPrivateFieldBase(self, arg1) {
  hasOwnProperty = {}.hasOwnProperty;
  if (hasOwnProperty.call(self, arg1)) {
    return self;
  } else {
    const _TypeError = TypeError;
    self = this;
    const self2 = this;
    const typeError = new TypeError("attempted to use private field on non-instance");
    throw typeError;
  }
};