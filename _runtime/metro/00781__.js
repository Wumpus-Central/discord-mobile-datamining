// _runtime/metro/00781__.js
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function parseCookie(cookie) {
  const obj = {};
  let num = 0;
  if (0 < cookie.length) {
    let index = cookie.indexOf("=", num);
    while (-1 !== index) {
      length = cookie.indexOf(";", num);
      if (-1 === length) {
        length = cookie.length;
      } else if (length < index) {
        let sum = cookie.lastIndexOf(";", index - 1) + 1;
        num = sum;
        if (sum >= cookie.length) {
          break;
        }
      }
      let str = cookie.slice(num, index);
      let trimmed = str.trim();
      if (undefined === obj[trimmed]) {
        let str2 = cookie.slice(index + 1, length);
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
}
