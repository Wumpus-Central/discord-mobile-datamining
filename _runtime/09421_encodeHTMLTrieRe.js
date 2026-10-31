// === Module 9421: encodeHTMLTrieRe ===

// Module 9421 (encodeHTMLTrieRe)
import xmlReplacer from "xmlReplacer" /* 9420 */;
import _mod9422 from "module_9422" /* 9422 */;

function encodeHTMLTrieRe(re3, attribs) {
  let match = re3.exec(attribs);
  let num = 0;
  let num2 = 0;
  let str = "";
  if (null !== match) {
    while (true) {
      let index = match.index;
      let text = `${attribs.substring(num, index)}`;
      let charCodeAtResult = attribs.charCodeAt(index);
      let _default = module_9422.default;
      value = _default.get(charCodeAtResult);
      let v = value;
      if (typeof value === "object") {
        if (index + 1 < attribs.length) {
          let charCodeAtResult1 = attribs.charCodeAt(index + 1);
          if (typeof value.n === "number") {
            let o;
            if (value.n === charCodeAtResult1) {
              o = value.o;
            }
            value2 = o;
          } else {
            let n = value.n;
            value2 = n.get(charCodeAtResult1);
          }
          if (undefined !== value2) {
            let sum = text + value2;
            let sum1 = re3.lastIndex + 1;
            re3.lastIndex = sum1;
            let sum2 = sum1;
            match = re3.exec(attribs);
            num = sum2;
            num2 = sum2;
            str = sum;
            if (null === match) {
              break;
            }
          }
        }
        v = value.v;
      }
      if (undefined !== v) {
        sum = text + v;
        sum2 = index + 1;
      } else {
        let str2 = xmlReplacer.getCodePoint(attribs, index);
        let concat = "&#x".concat;
        sum = text + "&#x".concat(str2.toString(16), ";");
        let _Number = Number;
        sum2 = re3.lastIndex + Number(str2 !== charCodeAtResult);
        re3.lastIndex = sum2;
      }
    }
  }
  return str + attribs.substr(num2);
}
let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
const module_9422 = fn(_mod9422);
const re3 = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;

export function encodeHTML(attribs) {
  return encodeHTMLTrieRe(re3, attribs);
}
export function encodeNonAsciiHTML(attribs) {
  return encodeHTMLTrieRe(xmlReplacer.xmlReplacer, attribs);
}