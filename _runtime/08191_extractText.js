// === Module 8191: extractText ===

// Module 8191 (extractText)
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import warnOnce from "warnOnce" /* 8185 */;
import extractLengthListDefault from "extractLengthList" /* 8190 */;

let hasOwnProperty;

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
  let replaced;
  let replaced1;
  let str4;
  let str5;
  let textAnchor;
  let textDecoration;
  let wordSpacing;
  ({ fontFamily, font } = propsAndStylesResult);
  ({ fontData, fontStyle, fontVariant, fontWeight, fontStretch, fontSize, textAnchor, textDecoration, letterSpacing, wordSpacing, kerning, fontFeatureSettings, fontVariantLigatures, fontVariationSettings } = propsAndStylesResult);
  const obj = { fontData, fontStyle, fontVariant, fontWeight, fontStretch, fontSize, fontFamily: replaced, textAnchor, textDecoration, letterSpacing, wordSpacing, kerning, fontFeatureSettings, fontVariantLigatures, fontVariationSettings };
  replaced = null;
  const pickNotNil = warnOnce.pickNotNil;
  warnOnce;
  if (fontFamily) {
    const str = fontFamily.split(re9)[0];
    const str3 = str.replace(re7, "");
    replaced = str3.replace(re8, "");
  }
  let tmp7 = font;
  const pickNotNilResult = pickNotNil(obj);
  if (typeof font === "string") {
    let tmp10;
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    if (hasOwnProperty.call(closure_10, font)) {
      tmp10 = closure_10[font];
    } else {
      const match = re6.exec(font);
      if (match) {
        const obj2 = /bold/;
        const obj3 = /italic/;
        const match1 = obj2.exec(match[1]);
        let num = match[2];
        const match2 = obj3.exec(match[1]);
        if (!num) {
          num = 12;
        }
        const obj4 = { fontSize: num, fontWeight: str5, fontStyle: str4, fontFamily: replaced1 };
        str4 = "normal";
        str5 = "normal";
        if (match1) {
          str5 = "bold";
        }
        if (match2) {
          str4 = "italic";
        }
        replaced1 = null;
        if (match[3]) {
          const str7 = match[3].split(re9)[0];
          const str9 = str7.replace(re7, "");
          replaced1 = str9.replace(re8, "");
        }
        closure_10[font] = obj4;
        tmp10 = closure_10[font];
      } else {
        closure_10[font] = null;
        tmp10 = null;
      }
    }
    tmp7 = tmp10;
  }
  const obj5 = {};
  const merged = Object.assign(tmp7);
  const merged1 = Object.assign(pickNotNilResult);
  return obj5;
}
function getChild(str) {
  let tmp4;
  if (typeof str === "string") {
    const _String = String;
    tmp4 = <_false>{String(str)}</_false>;
  } else {
    tmp4 = str;
  }
  return tmp4;
}
const Children = react2.Children;
const jsx = Fragment.jsx;
const re6 = /^\s*((?:(?:normal|bold|italic)\s+)*)(?:(\d+(?:\.\d+)?(?:%|px|em|pt|pc|mm|cm|in]))*(?:\s*\/.*?)?\s+)?\s*"?([^"]*)/i;
const re7 = /^[\s"']*/;
const re8 = /[\s"']*$/;
const re9 = /\s*,\s*/g;
let closure_10 = {};

export default function extractText(children, arg1) {
  children = children.children;
  if (typeof children !== "string") {
    let mapped;
    if (typeof children !== "number") {
      if (Children.count(children) > 1) {
        mapped = Children.map(children, getChild);
      } else {
        const _Array = Array;
        mapped = children;
      }
    }
    let StringResult = null;
    if (null === mapped) {
      const _String2 = String;
      StringResult = String(children);
    }
    const point = { content: StringResult, children: mapped, inlineSize: tmp6, baselineShift: tmp7, verticalAlign: tmp8, alignmentBaseline: tmp9, font: extractFont(children), x: extractLengthListDefault(tmp), y: extractLengthListDefault(tmp2), dx: extractLengthListDefault(tmp3), dy: extractLengthListDefault(tmp4), rotate: extractLengthListDefault(tmp5) };
    return point;
  }
  let tmp13 = null;
  if (arg1) {
    const _String = String;
    tmp13 = <_false>{String(children)}</_false>;
  }
  mapped = tmp13;
};
export { extractFont };
export function setTSpan(importDefaultResultResult) {
  let closure_1_3 = importDefaultResultResult;
}