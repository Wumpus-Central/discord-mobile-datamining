// === Module 9385: xmlReplacer ===

// Module 9385 (xmlReplacer)
const exports = arg5;
const items = [[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]];
const map = new Map(items);
function encodeXML(attribs) {
  const xmlReplacer = exports.xmlReplacer;
  let match = xmlReplacer.exec(attribs);
  let num = 0;
  const str = "";
  let num2 = 0;
  let str2 = "";
  if (null !== match) {
    do {
      let index = match.index;
      let charCodeAtResult = attribs.charCodeAt(index);
      value = map.get(charCodeAtResult);
      if (undefined !== value) {
        let text = `${attribs.substring(num, index) + tmp4}`;
        let sum = index + 1;
      } else {
        let concat = "".concat;
        let combined = "".concat(attribs.substring(num, index), "&#x");
        let str3 = exports.getCodePoint(attribs, index);
        text = `${tmp8(str3.toString(16), ";")}`;
        let xmlReplacer2 = exports.xmlReplacer;
        let _Number = Number;
        sum = xmlReplacer2.lastIndex + Number(55296 === (64512 & charCodeAtResult));
        xmlReplacer2.lastIndex = sum;
      }
      let xmlReplacer3 = exports.xmlReplacer;
      match = xmlReplacer3.exec(attribs);
      num = sum;
      num2 = sum;
      str2 = text;
    } while (null !== match);
  }
  return str2 + attribs.substr(num2);
}
let closure_129_0 = /[&<>'"]/g;
let closure_129_1 = map;
const items1 = [[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]];
let closure_130_0 = /["&\u00A0]/g;
let closure_130_1 = new Map(items1);
const items2 = [[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]];
const map1 = new Map(items1);
let closure_131_0 = /[&<>\u00A0]/g;
let closure_131_1 = new Map(items2);

export const xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
export const getCodePoint = null != String.prototype.codePointAt ? ((str, arg1) => str.codePointAt(arg1)) : ((str, sum) => {
  if (55296 === (64512 & str.charCodeAt(sum))) {
    const diff = str.charCodeAt(sum) - 55296;
    sum = 1024 * diff + str.charCodeAt(sum + 1) - 56320 + 65536;
  } else {
    sum = str.charCodeAt(sum);
  }
  return sum;
});
export { encodeXML };
export const escape = encodeXML;
export const escapeUTF8 = function escape(attribs) {
  let match = exports.exec(attribs);
  let str = "";
  let num = 0;
  let str2 = "";
  let num2 = 0;
  while (match) {
    let text = str;
    if (num !== match.index) {
      text = `${attribs.substring(num, tmp.index)}`;
    }
    let first = match[0];
    str = text + map.get(first.charCodeAt(0));
    num = match.index + 1;
    match = exports.exec(attribs);
    str2 = str;
    num2 = num;
  }
  return str2 + attribs.substring(num2);
};
export const escapeAttribute = function escape(attribs) {
  let match = exports.exec(attribs);
  let str = "";
  let num = 0;
  let str2 = "";
  let num2 = 0;
  while (match) {
    let text = str;
    if (num !== match.index) {
      text = `${attribs.substring(num, tmp.index)}`;
    }
    let first = match[0];
    str = text + map.get(first.charCodeAt(0));
    num = match.index + 1;
    match = exports.exec(attribs);
    str2 = str;
    num2 = num;
  }
  return str2 + attribs.substring(num2);
};
export const escapeText = function escape(attribs) {
  let match = exports.exec(attribs);
  let str = "";
  let num = 0;
  let str2 = "";
  let num2 = 0;
  while (match) {
    let text = str;
    if (num !== match.index) {
      text = `${attribs.substring(num, tmp.index)}`;
    }
    let first = match[0];
    str = text + map.get(first.charCodeAt(0));
    num = match.index + 1;
    match = exports.exec(attribs);
    str2 = str;
    num2 = num;
  }
  return str2 + attribs.substring(num2);
};