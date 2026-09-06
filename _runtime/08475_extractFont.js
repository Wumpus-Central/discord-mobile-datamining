// _runtime/08475_extractFont.js
import pickNotNil from "08469_pickNotNil.js";
import extractLengthListDefault from "08474_extractLengthList.js";
import noop from "metro/00019__.js";

require = fn;
function extractFont(propsAndStylesResult) {
  ({ fontFamily, fontFeatureSettings, font } = propsAndStylesResult);
  ({
    fontData,
    fontStyle,
    fontVariant,
    fontWeight,
    fontStretch,
    fontSize,
    textAnchor,
    textDecoration,
    letterSpacing,
    wordSpacing,
    kerning,
    fontVariantLigatures,
    fontVariationSettings,
  } = propsAndStylesResult);
  let obj = {
    fontData,
    fontStyle,
    fontVariant,
    fontWeight,
    fontStretch,
    fontSize,
    fontFamily: null,
    textAnchor: null,
    textDecoration: null,
    letterSpacing: null,
    wordSpacing: null,
    kerning: null,
    fontFeatureSettings: null,
    fontVariantLigatures: null,
    fontVariationSettings: null,
  };
  let replaced = null;
  if (fontFamily) {
    const str = fontFamily.split(re9)[0];
    replaced = fontFamily.split(re9)[0].replace(re7, "").replace(re8, "");
    const str3 = fontFamily.split(re9)[0].replace(re7, "");
  }
  obj.fontFamily = replaced;
  obj.textAnchor = textAnchor;
  obj.textDecoration = textDecoration;
  obj.letterSpacing = letterSpacing;
  obj.wordSpacing = wordSpacing;
  obj.kerning = kerning;
  obj.fontFeatureSettings = fontFeatureSettings;
  obj.fontVariantLigatures = fontVariantLigatures;
  obj.fontVariationSettings = fontVariationSettings;
  const pickNotNilResult = obj.pickNotNil(obj);
  if (typeof font !== "string") {
    obj = {};
    const merged = Object.assign(tmp6);
    const merged1 = Object.assign(pickNotNilResult);
    return obj;
  } else {
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    const call = hasOwnProperty.call;
    if (!(typeof call === "unknown" ? hasOwnProperty(font) : call(dependencyMap, font))) {
      fontFeatureSettings = re6.exec(font);
      if (!fontFeatureSettings) {
        dependencyMap[font] = null;
      }
    }
    const match = /bold/.exec(fontFeatureSettings[1]);
    let num = fontFeatureSettings[2];
    const match1 = /italic/.exec(fontFeatureSettings[1]);
    if (!num) {
      num = 12;
    }
    const obj1 = { fontSize: num, fontWeight: null, fontStyle: null, fontFamily: null };
    let str4 = "normal";
    let str5 = "normal";
    if (match) {
      str5 = "bold";
    }
    obj1.fontWeight = str5;
    if (match1) {
      str4 = "italic";
    }
    obj1.fontStyle = str4;
    let replaced1 = null;
    if (fontFeatureSettings[3]) {
      const str7 = str6.split(re9)[0];
      replaced1 = str6.split(re9)[0].replace(re7, "").replace(re8, "");
      const str9 = str6.split(re9)[0].replace(re7, "");
    }
    obj1.fontFamily = replaced1;
    dependencyMap[font] = obj1;
    const obj3 = /bold/;
    const obj4 = /italic/;
  }
}
function getChild(str) {
  if (typeof str === "string") {
    const obj = { children: null };
    const _String = String;
    obj.children = String(str);
    let tmp4 = <global>{null}</global>;
  } else {
    tmp4 = str;
  }
  return tmp4;
}
const Children = fn(19).Children;
const jsx = fn(21).jsx;
const re6 =
  /^\s*((?:(?:normal|bold|italic)\s+)*)(?:(\d+(?:\.\d+)?(?:%|px|em|pt|pc|mm|cm|in]))*(?:\s*\/.*?)?\s+)?\s*"?([^"]*)/i;
const re7 = /^[\s"']*/;
const re8 = /[\s"']*$/;
const re9 = /\s*,\s*/g;
const dependencyMap = {};

export default function extractText(children, arg1) {
  children = children.children;
  if (typeof children !== "string") {
    if (typeof children !== "number") {
      if (Children.count(children) > 1) {
        let mapped = Children.map(children, getChild);
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
    const point = {
      content: StringResult,
      children: mapped,
      inlineSize: tmp6,
      baselineShift: tmp7,
      verticalAlign: tmp8,
      alignmentBaseline: tmp9,
      font: extractFont(children),
      x: extractLengthListDefault(tmp),
      y: extractLengthListDefault(tmp2),
      dx: extractLengthListDefault(tmp3),
      dy: extractLengthListDefault(tmp4),
      rotate: extractLengthListDefault(tmp5),
    };
    return point;
  }
  let tmp13 = null;
  if (arg1) {
    const obj = { children: null };
    const _String = String;
    obj.children = String(children);
    tmp13 = <global>{null}</global>;
  }
  mapped = tmp13;
}
export { extractFont };
export function setTSpan(importDefaultResultResult) {
  global = importDefaultResultResult;
}
