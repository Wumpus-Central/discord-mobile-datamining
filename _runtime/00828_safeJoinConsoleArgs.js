// _runtime/00828_safeJoinConsoleArgs.js
import _mod703 from "metro/00703__.js";
import normalize from "00741_normalize.js";

const require = globalThis.__r;
let _require, dependencyMap;

const f82140 = (item) => {
  let StringResult;
  const obj = _mod703;
  if (obj.isPrimitive(item)) {
    const _String = String;
    StringResult = String(item);
  } else {
    const _JSON = JSON;
    const normalizer = normalize;
    StringResult = stringify(normalizer.normalize(item, normalizeDepth, normalizeMaxBreadth));
  }
  return StringResult;
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const createConsoleTemplateAttributes = function createConsoleTemplateAttributes(args, substr) {
  let fillResult;
  const obj = { "sentry.message.template": "" + args + " " + fillResult.join(" ") };
  const array = new Array(substr.length);
  fillResult = array.fill("{}");
  const item = substr.forEach((item, index) => {
    obj["sentry.message.parameter." + index] = item;
  });
  return obj;
};
export const formatConsoleArgs = function formatConsoleArgs(args, normalizeDepth, normalizeMaxBreadth) {
  if ("util" in require("metro/00697__.js").GLOBAL_OBJ) {
    let applyResult;
    if (typeof require("metro/00697__.js").GLOBAL_OBJ.util.format === "function") {
      const util = tmp2(697).GLOBAL_OBJ.util;
      const format = util.format;
      const items = [];
      HermesBuiltin.arraySpread(items, args, 0);
      applyResult = HermesBuiltin.apply(format, items, util);
    }
    return applyResult;
  }
  _require = normalizeDepth;
  dependencyMap = normalizeMaxBreadth;
  const mapped = args.map(f82140);
  applyResult = mapped.join(" ");
};
export const hasConsoleSubstitutions = function hasConsoleSubstitutions(args) {
  const obj = /%[sdifocO]/;
  return obj.test(args);
};
export const safeJoinConsoleArgs = function safeJoinConsoleArgs(arr, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  const mapped = arr.map(f82140);
  return mapped.join(" ");
};
