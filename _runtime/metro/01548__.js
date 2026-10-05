// _runtime/metro/01548__.js
function decodeComponents(match, arg1) {
  try {
    const _decodeURIComponent = decodeURIComponent;
    const items = [decodeURIComponent(match.join(""))];
    return items;
  } catch (err) {
    if (1 === match.length) {
      return match;
    } else {
      const substr = match.slice(0, num2);
      const _Array = Array;
      const substr1 = match.slice(num2);
      const call = concat.call;
      const items1 = [];
      const tmp6 = decodeComponents(substr);
      return call(items1, tmp6, decodeComponents(substr1));
    }
  }
}
function decode(arg0) {
  let match1;
  let str = arg0;
  try {
    const _decodeURIComponent = decodeURIComponent;
    return decodeURIComponent(str);
  } catch (err) {
    let match = str.match(regExp) || [];
    let num3 = 1;
    if (1 < match.length) {
      do {
        let obj = decodeComponents(match, num3);
        let str3 = obj.join("");
        match1 = str3.match(regExp);
        if (!match1) {
          match1 = [];
        }
        num3 = num3 + 1;
        match = match1;
        str = str3;
      } while (num3 < match1.length);
    }
    return str;
  }
}
let regExp = new RegExp("(%[a-f0-9]{2})|([^%]+?)", "gi");
const regExp1 = new RegExp("(%[a-f0-9]{2})+", "gi");

export default function (str) {
  let regex;
  function customDecodeURIComponent(arg0) {
    let length;
    const obj = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD", "%C2": "\uFFFD" };
    let match = regex.exec(arg0);
    if (match) {
      try {
        const _decodeURIComponent = decodeURIComponent;
        obj[match[0]] = decodeURIComponent(match[0]);
      } catch (err) {
        const tmp4 = decode(match[0]);
        if (tmp4 !== match[0]) {
          obj[match[0]] = tmp4;
        }
      }
      match = regex.exec(arg0);
    }
    const keys = Object.keys(obj);
    let num = 0;
    let str = arg0;
    let tmp6 = arg0;
    if (0 < keys.length) {
      do {
        let tmp7 = keys[num];
        let _RegExp = RegExp;
        let self = this;
        let self2 = this;
        let str2 = "g";
        let replace = str.replace;
        regExp = new RegExp(tmp7, "g");
        str = replace(regExp, obj[tmp7]);
        num = num + 1;
        tmp6 = str;
        length = keys.length;
      } while (num < length);
    }
    return tmp6;
  }
  if (typeof str !== "string") {
    const _TypeError = TypeError;
    const _HermesInternal = HermesInternal;
    let self = this;
    let self2 = this;
    const typeError = new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof str + "`");
    let tmp7 = typeError;
    throw typeError;
  } else {
    try {
      let str2 = " ";
      const replaced = str.replace(/\+/g, " ");
      str = replaced;
      let _decodeURIComponent = decodeURIComponent;
      return decodeURIComponent(replaced);
    } catch (err) {
      let tmp4 = str;
      let num = 0;
      return customDecodeURIComponent(str);
    }
  }
}
