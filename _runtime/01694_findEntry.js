// _runtime/01694_findEntry.js
import propsBuilder from "01695_propsBuilder.js";
import _slicedToArray from "metro/00032__.js";

require = fn;
function findEntry(compoundComponentName) {
  const first = _slicedToArray(compoundComponentName.split("$"), 1)[0];
  value = map.get(compoundComponentName);
  if (value == null) {
    value = map.get(first);
  }
  if (value) {
    return value;
  } else {
    const iter = closure_5[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let matcher = nextResult.matcher;
      let obj2 = matcher;
      let _RegExp = RegExp;
      if (matcher instanceof RegExp) {
        let isMatch = obj2.test(compoundComponentName);
        if (!isMatch) {
          isMatch = obj2.test(first);
        }
        let obj2Result = isMatch;
      } else {
        obj2Result = obj2(compoundComponentName);
        if (!obj2Result) {
          obj2Result = obj2(first);
        }
      }
      if (obj2Result) {
        iter.return();
        return nextResult.entry;
      }
    }
    return null;
  }
}
let set = new Set([
  "backgroundImage",
  "experimental_backgroundImage",
  "boxShadow",
  "shadowOffset",
  "textShadowOffset",
  "transformOrigin",
]);
const map = new Map();
let closure_5 = [];
const set1 = new Set(Object.keys(fn(1674).STYLE_PROPERTIES_CONFIG));

export function isSupportedStyleProp(keys) {
  return set1.has(keys);
}
export function getCompoundComponentName(RNSVGPath, Polygon) {
  return "" + RNSVGPath + "$" + Polygon;
}
export function getPropsBuilder(compoundComponentName) {
  const tmp = findEntry(compoundComponentName);
  let builder;
  if (tmp != null) {
    builder = tmp.builder;
  }
  if (builder == null) {
    builder = propsBuilder.stylePropsBuilder;
  }
  return builder;
}
export function registerComponentPropsBuilder(RNSVGCircle, SVG_CIRCLE_PROPERTIES_CONFIG) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  for (const key10005 in arg1) {
    let addResult = set1.add(key10005);
    continue;
  }
  const obj2 = {
    builder: propsBuilder.createNativePropsBuilder(SVG_CIRCLE_PROPERTIES_CONFIG),
    separatelyInterpolatedNestedProperties: null,
  };
  const prop = obj.separatelyInterpolatedNestedProperties;
  length = undefined;
  if (prop != null) {
    length = prop.length;
  }
  set = undefined;
  if (length) {
    const _Set = Set;
    set = new Set(obj.separatelyInterpolatedNestedProperties);
  }
  obj2.separatelyInterpolatedNestedProperties = set;
  if (typeof RNSVGCircle === "string") {
    const result = map.set(RNSVGCircle, obj2);
  } else {
    const obj4 = { matcher: RNSVGCircle, entry: obj2 };
    closure_5.push(obj4);
  }
}
export function getSeparatelyInterpolatedNestedProperties(compoundComponentName) {
  const tmp = findEntry(compoundComponentName);
  let prop;
  if (tmp != null) {
    prop = tmp.separatelyInterpolatedNestedProperties;
  }
  if (prop == null) {
    prop = set;
  }
  return prop;
}
