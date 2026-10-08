// === Module 11956: _objectDestructuringEmpty ===

// Module 11956 (_objectDestructuringEmpty)

export default function _objectDestructuringEmpty(arg0) {
  if (null == arg0) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Cannot destructure " + arg0);
    throw typeError;
  }
};