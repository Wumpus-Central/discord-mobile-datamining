// _runtime/00090__classPrivateFieldBase.js

export default function _classPrivateFieldBase(arg0, key10009) {
  const hasOwnProperty = {}.hasOwnProperty;
  const call = hasOwnProperty.call;
  if (typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg0, key10009)) {
    return arg0;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("attempted to use private field on non-instance");
    throw typeError;
  }
}
