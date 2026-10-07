// === Module 90: _classPrivateFieldBase ===

// Module 90 (_classPrivateFieldBase)

export default function _classPrivateFieldBase(self, key10009) {
  hasOwnProperty = {}.hasOwnProperty;
  const call = hasOwnProperty.call;
  if (typeof call === "unknown" ? hasOwnProperty(key10009) : call(self, key10009)) {
    return self;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("attempted to use private field on non-instance");
    throw typeError;
  }
};