// === Module 1479: ? ===

// Module 1479
let hasOwnProperty;


export default (str, arg1, arg2, maxKeys) => {
  const obj = {};
  const tmp = arg1 || "&";
  const tmp2 = arg2 || "=";
  if (typeof str === "string") {
    if (0 !== str.length) {
      let num3;
      const tmp13 = /\+/g;
      const parts = str.split(tmp);
      let num = 1000;
      const tmp3 = maxKeys && typeof maxKeys.maxKeys === "number";
      if (tmp3) {
        num = maxKeys.maxKeys;
      }
      let length = parts.length;
      const tmp4 = num > 0 && length > num;
      if (tmp4) {
        length = num;
      }
      for (let num3 = 0; num3 < length; num3 = num3 + 1) {
        let str3 = parts[num3];
        let replaced = str3.replace(tmp13, "%20");
        let index = replaced.indexOf(tmp2);
        let str4 = "";
        let substr = replaced;
        if (index >= 0) {
          substr = replaced.substr(0, index);
          str4 = replaced.substr(index + 1);
        }
        let _decodeURIComponent = decodeURIComponent;
        let decodeURIComponentResult = decodeURIComponent(substr);
        let _decodeURIComponent2 = decodeURIComponent;
        let decodeURIComponentResult1 = decodeURIComponent(str4);
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        if (hasOwnProperty.call(obj, decodeURIComponentResult)) {
          let _Array = Array;
          let arr2 = obj[decodeURIComponentResult];
          if (Array.isArray(obj[decodeURIComponentResult])) {
            let arr = arr2.push(decodeURIComponentResult1);
          } else {
            let items = [arr2, decodeURIComponentResult1];
            obj[decodeURIComponentResult] = items;
          }
        } else {
          obj[decodeURIComponentResult] = decodeURIComponentResult1;
        }
      }
      return obj;
    }
  }
  return obj;
};