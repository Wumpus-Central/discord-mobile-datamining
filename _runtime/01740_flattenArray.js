// === Module 1740: flattenArray ===

// Module 1740 (flattenArray)

export const flattenArray = function flattenArray(style) {
  const f135290 = (arr) => {
    if (Array.isArray(arr)) {
      if (typeof _flattenArray === "function") {
        const item = arr.forEach(f135290);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      arr = items.push(arr);
    }
  };
  if (Array.isArray(style)) {
    const items = [];
    function _flattenArray(arg0) {

    }
    let item = style.forEach(f135290);
    return items;
  } else {
    const items1 = [style];
    return items1;
  }
};
export const has = (workletEventHandler, fn) => {
  let tmp = typeof fn === "function" || typeof fn === "object";
  if (tmp) {
    tmp = null != fn && workletEventHandler in fn;
    const tmp3 = null != fn && workletEventHandler in fn;
  }
  return tmp;
};