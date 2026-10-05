// === Module 12649: ? ===

// Module 12649

export const parseCookie = function parseCookie(arr) {
  const obj = {};
  let num = 0;
  if (0 < arr.length) {
    const index = arr.indexOf("=", num);
    if (-1 !== index) {
      let length = arr.indexOf(";", num);
      if (-1 === length) {
        length = arr.length;
      } else {
        let sum;
        if (length < index) {
          sum = arr.lastIndexOf(";", index - 1) + 1;
        }
        num = sum;
      }
      const str = arr.slice(num, index);
      const trimmed = str.trim();
      if (undefined === obj[trimmed]) {
        const str2 = arr.slice(index + 1, length);
        const trimmed1 = str2.trim();
        let substr = trimmed1;
        if (34 === trimmed1.charCodeAt(0)) {
          substr = trimmed1.slice(1, -1);
        }
        try {
          let decodeURIComponentResult = substr;
          if (-1 !== substr.indexOf("%")) {
            const _decodeURIComponent = decodeURIComponent;
            decodeURIComponentResult = decodeURIComponent(substr);
          }
          obj[trimmed] = decodeURIComponentResult;
        } catch (err) {
          obj[trimmed] = substr;
        }
      }
      sum = length + 1;
    }
  }
  return obj;
};