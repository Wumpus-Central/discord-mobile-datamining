// _runtime/00148_flattenStyle.js
function flattenStyle(obj) {
  if (null !== obj) {
    if (typeof obj === "object") {
      const _Array = Array;
      if (Array.isArray(obj)) {
        let num;
        obj = {};
        for (let num = 0; num < obj.length; num = num + 1) {
          let tmp3 = flattenStyle(obj[num]);
          if (tmp3) {
            for (const key10019 in tmp3) {
              obj[key10019] = tmp3[key10019];
              continue;
            }
          }
        }
        return obj;
      } else {
        return obj;
      }
    }
  }
}

export default flattenStyle;
