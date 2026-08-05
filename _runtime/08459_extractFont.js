// _runtime/08459_extractFont.js
import "noop";
import { Children } from "noop";
import { jsx } from "jsxProd";
import { pickNotNil } from "08453_pickNotNil.js";
import { extractLengthList } from "08458_extractLengthList.js";

const require = arg1;
function extractFont(propsAndStylesResult) {
  let font;
  let fontData;
  let fontFamily;
  let fontFeatureSettings;
  let fontSize;
  let fontStretch;
  let fontStyle;
  let fontVariant;
  let fontVariantLigatures;
  let fontVariationSettings;
  let fontWeight;
  let kerning;
  let letterSpacing;
  let textAnchor;
  let textDecoration;
  let wordSpacing;
  ({ fontFamily, fontFeatureSettings, font } = propsAndStylesResult);
  ({ fontData, fontStyle, fontVariant, fontWeight, fontStretch, fontSize, textAnchor, textDecoration, letterSpacing, wordSpacing, kerning, fontVariantLigatures, fontVariationSettings } = propsAndStylesResult);
  let obj = pickNotNil /* pickNotNil */;
  obj = { fontData, fontStyle, fontVariant, fontWeight, fontStretch, fontSize, fontFamily: null, textAnchor: null, textDecoration: null, letterSpacing: null, wordSpacing: null, kerning: null, fontFeatureSettings: null, fontVariantLigatures: null, fontVariationSettings: null };
  let replaced = null;
  if (fontFamily) {
    const str = fontFamily.split(closure_9)[0];
    replaced = fontFamily.split(closure_9)[0].replace(closure_7, "").replace(closure_8, "");
    const str3 = fontFamily.split(closure_9)[0].replace(closure_7, "");
  }
  obj[6] = replaced;
  obj[7] = textAnchor;
  obj[8] = textDecoration;
  obj[9] = letterSpacing;
  obj[10] = wordSpacing;
  obj[11] = kerning;
  obj[12] = fontFeatureSettings;
  obj[13] = fontVariantLigatures;
  obj[14] = fontVariationSettings;
  const pickNotNilResult = obj.pickNotNil(obj);
  if (typeof font !== "string") {
    obj = {};
    const merged = Object.assign(tmp6);
    const merged1 = Object.assign(pickNotNilResult);
    return obj;
  } else {
    const _Object = Object;
    const call = hasOwnProperty.call;
    if (!(typeof call === "unknown" ? hasOwnProperty(font) : call(closure_10, font))) {
      fontFeatureSettings = regex.exec(font);
      if (!fontFeatureSettings) {
        tmp23[font] = null;
      }
    }
    const match = /bold/.exec(fontFeatureSettings[1]);
    let num = fontFeatureSettings[2];
    const match1 = /italic/.exec(fontFeatureSettings[1]);
    if (!num) {
      num = 12;
    }
    const obj1 = { fontSize: null, fontWeight: null, fontStyle: null, fontFamily: null };
    obj1[0] = num;
    let str4 = "normal";
    let str5 = "normal";
    if (match) {
      str5 = "bold";
    }
    obj1[1] = str5;
    if (match1) {
      str4 = "italic";
    }
    obj1[2] = str4;
    let replaced1 = null;
    if (fontFeatureSettings[3]) {
      const str7 = str6.split(closure_9)[0];
      replaced1 = str6.split(closure_9)[0].replace(closure_7, "").replace(closure_8, "");
      const str9 = str6.split(closure_9)[0].replace(closure_7, "");
    }
    obj1[3] = replaced1;
    closure_10[font] = obj1;
    const obj3 = /bold/;
    const obj4 = /italic/;
  }
}
function getChild(str) {
  if (typeof str === "string") {
    const obj = { children: null };
    const _String = String;
    obj[0] = String(str);
    let tmp4 = <closure_3>{null}</closure_3>;
  } else {
    tmp4 = str;
  }
  return tmp4;
}
const re6 = /^\s*((?:(?:normal|bold|italic)\s+)*)(?:(\d+(?:\.\d+)?(?:%|px|em|pt|pc|mm|cm|in]))*(?:\s*\/.*?)?\s+)?\s*"?([^"]*)/i;
const re7 = /^[\s"']*/;
const re8 = /[\s"']*$/;
const re9 = /\s*,\s*/g;
let closure_10 = {};

export default function extractText(children) {
  children = children.children;
  if (typeof children !== "string") {
    if (typeof children !== "number") {
      if (Children.count(children) > 1) {
        let mapped = arr.map(children, getChild);
      } else {
        const _Array = Array;
        mapped = children;
      }
      arr = Children;
    }
    let StringResult = null;
    if (null === mapped) {
      const _String2 = String;
      StringResult = String(children);
    }
    let obj = { content: null, children: null, inlineSize: null, baselineShift: null, verticalAlign: null, alignmentBaseline: null, font: null, x: null, y: null, dx: null, dy: null, rotate: null };
    obj[0] = StringResult;
    obj[1] = mapped;
    obj[2] = tmp6;
    obj[3] = tmp7;
    obj[4] = tmp8;
    obj[5] = tmp9;
    obj[6] = extractFont(children);
    obj[7] = extractLengthList(tmp);
    obj[8] = extractLengthList(tmp2);
    obj[9] = extractLengthList(tmp3);
    obj[10] = extractLengthList(tmp4);
    obj[11] = extractLengthList(tmp5);
    return obj;
  }
  let tmp13 = null;
  if (arg1) {
    obj = { children: null };
    const _String = String;
    obj[0] = String(children);
    tmp13 = <closure_3>{null}</closure_3>;
  }
  mapped = tmp13;
};
export { extractFont };
export function setTSpan(importDefaultResultResult) {
  let closure_3 = importDefaultResultResult;
}