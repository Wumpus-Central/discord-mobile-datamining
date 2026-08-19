// === Module 6335: isArrayish ===

// Module 6335 (isArrayish)

export default function isArrayish(str) {
  let tmp = !str;
  if (str) {
    tmp = typeof str === "string";
  }
  let tmp2 = !tmp;
  if (!tmp) {
    const _Array = Array;
    let isArray = str instanceof Array;
    if (!isArray) {
      const _Array2 = Array;
      isArray = Array.isArray(str);
    }
    if (!isArray) {
      let tmp5 = str.length >= 0;
      if (tmp5) {
        const _Function = Function;
        let tmp6 = str.splice instanceof Function;
        if (!tmp6) {
          const _Object = Object;
          let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(str, str.length - 1);
          if (ownPropertyDescriptor) {
            ownPropertyDescriptor = "String" !== str.constructor.name;
          }
          tmp6 = ownPropertyDescriptor;
        }
        tmp5 = tmp6;
      }
      isArray = tmp5;
    }
    tmp2 = isArray;
  }
  return tmp2;
};