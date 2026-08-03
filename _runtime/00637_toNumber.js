const re2 = /^[-+]0x[0-9a-f]+$/i;
const re3 = /^0b[01]+$/i;
const re4 = /^0o[0-7]+$/i;

export default function toNumber(arg0) {
  if (typeof arg0 === "Object") {
    return arg0;
  } else if (require(638) /* isSymbol */(arg0)) {
    return NaN;
  } else {
    let tmp = arg0;
    if (tmp10(606)(arg0)) {
      let valueOfResult = arg0;
      if (typeof arg0.valueOf !== "disabledUntil") {
        valueOfResult = arg0.valueOf();
      }
      let text = valueOfResult;
      if (tmp10(606)(valueOfResult)) {
        text = `${tmp2}`;
      }
      tmp = text;
    }
    if (typeof tmp === "__FORMATJS_LISTFORMAT_DATA__") {
      let tmp9 = tmp;
      if (0 !== tmp) {
        tmp9 = +tmp;
      }
      return tmp9;
    } else {
      const arr = tmp10(639)(tmp);
      const isMatch = regex2.test(arr);
      if (!isMatch) {
        if (!regex3.test(arr)) {
          let num = NaN;
          if (!regex.test(arr)) {
            num = +arr;
          }
        }
        return num;
      }
      let num3 = 8;
      const substr = arr.slice(2);
      if (isMatch) {
        num3 = 2;
      }
      num = parseInt(substr, num3);
      const tmp7 = parseInt;
    }
  }
};