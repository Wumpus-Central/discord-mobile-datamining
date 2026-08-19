// === Module 1558: decodeComponents ===

// Module 1558 (decodeComponents)
function decodeComponents(match, arg1) {
  try {
    const _decodeURIComponent = decodeURIComponent;
    const items = [decodeURIComponent(match.join(""))];
    return items;
  } catch (err) {
    if (1 === arr.length) {
      return arr;
    } else {
      let num2 = arg1;
      if (!arg1) {
        num2 = 1;
      }
      const substr = arr.slice(0, num2);
      const _Array = Array;
      const call = concat.call;
      const items1 = [];
      const substr1 = arr.slice(num2);
      const tmp6 = decodeComponents(substr);
      const tmp7 = decodeComponents(substr1);
      if (typeof call === "unknown") {
        let combined = concat(tmp6, tmp7);
      } else {
        combined = call(items1, tmp6, tmp7);
      }
      return combined;
    }
  }
}
function decode(arg0) {
  let match1;
  let str3;
  try {
    const _decodeURIComponent = decodeURIComponent;
    return decodeURIComponent(arg0);
  } catch (err) {
    let match = str.match(regExp);
    if (!match) {
      match = [];
    }
    let num3 = 1;
    if (1 < match.length) {
      do {
        let obj = decodeComponents(match, num3);
        str3 = obj.join("");
        match1 = str3.match(regExp);
        if (!match1) {
          match1 = [];
        }
        num3 = num3 + 1;
        match = match1;
      } while (num3 < match1.length);
    }
    return str3;
  }
}
let regExp = new RegExp("(%[a-f0-9]{2})|([^%]+?)", "gi");
const regExp1 = new RegExp("(%[a-f0-9]{2})+", "gi");

export default (str) => {
  if (typeof str !== "string") {
    const _TypeError = TypeError;
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof str + "`");
    throw typeError;
  } else {
    try {
      const replaced = str.replace(/\+/g, " ");
      let _decodeURIComponent = decodeURIComponent;
      return decodeURIComponent(replaced);
    } catch (err) {
      return (function customDecodeURIComponent(arg0) {
        let length;
        const obj = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" };
        let match = regex.exec(arg0);
        if (match) {
          try {
            const _decodeURIComponent = decodeURIComponent;
            obj[match[0]] = decodeURIComponent(match[0]);
            match = regex.exec(arg0);
          } catch (err) {
            const tmp7 = callback(tmp2[0]);
            if (tmp7 !== tmp2[0]) {
              tmp3[tmp2[0]] = tmp7;
            }
          }
        }
        obj["%C2"] = "\uFFFD";
        const keys = Object.keys(obj);
        let num = 0;
        let str = arg0;
        let tmp9 = arg0;
        if (0 < keys.length) {
          do {
            let tmp10 = keys[num];
            let _RegExp = RegExp;
            regExp = new RegExp(tmp10, "g");
            str = str.replace(regExp, obj[tmp10]);
            num = num + 1;
            tmp9 = str;
            length = keys.length;
          } while (num < length);
        }
        return tmp9;
      })(tmp);
    }
  }
};