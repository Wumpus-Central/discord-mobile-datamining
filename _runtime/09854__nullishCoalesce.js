// === Module 9854: _nullishCoalesce ===

// Module 9854 (_nullishCoalesce)

export function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
}