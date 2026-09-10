// === Module 12991: _nullishCoalesce ===

// Module 12991 (_nullishCoalesce)

export const _nullishCoalesce = function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
};