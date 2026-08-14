// _runtime/07604_parseCookie.js
arg5.parseCookie = function parseCookie(arr) {
  const obj = {};
  let num = 0;
  if (0 < arr.length) {
    let index = arr.indexOf("=", num);
    while (-1 !== index) {
      let length = arr.indexOf(";", num);
      if (-1 === length) {
        length = arr.length;
      } else if (length < index) {
        let sum = arr.lastIndexOf(";", index - 1) + 1;
        num = sum;
        if (sum >= arr.length) {
          break;
        }
      }
      let str = arr.slice(num, index);
      let trimmed = str.trim();
      if (undefined === obj[trimmed]) {
        let str2 = arr.slice(index + 1, length);
        let trimmed1 = str2.trim();
        index = trimmed1;
        if (34 === trimmed1.charCodeAt(0)) {
          index = trimmed1.slice(1, -1);
        }
        try {
          let decodeURIComponentResult = index;
          if (-1 !== index.indexOf("%")) {
            let _decodeURIComponent = decodeURIComponent;
            decodeURIComponentResult = decodeURIComponent(index);
          }
          obj[trimmed] = decodeURIComponentResult;
        } catch (err) {
          obj[trimmed] = index;
        }
      }
      let sum1 = length + 1;
    }
  }
  return obj;
};