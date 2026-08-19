// _runtime/00952_createConsoleTemplateAttributes.js
const require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.createConsoleTemplateAttributes = function createConsoleTemplateAttributes(args, substr) {
  const obj = {};
  const array = new Array(substr.length);
  obj["sentry.message.template"] = "" + args + " " + array.fill("{}").join(" ");
  const item = substr.forEach((item, index) => {
    obj["sentry.message.parameter." + index] = item;
  });
  return obj;
};
arg5.formatConsoleArgs = function formatConsoleArgs(args, normalizeDepth, normalizeMaxBreadth) {
  if ("util" in require("metro/00821__.js").GLOBAL_OBJ) {
    if (typeof tmp(821).GLOBAL_OBJ.util.format === "function") {
      const util = tmp(821).GLOBAL_OBJ.util;
      const format = util.format;
      const items = [];
      HermesBuiltin.arraySpread(args, 0);
      let applyResult = HermesBuiltin.apply(items, util);
    }
    return applyResult;
  }
  _require = normalizeDepth;
  dependencyMap = normalizeMaxBreadth;
  const mapped = args.map((item, index) => {
    if (obj.isPrimitive(item)) {
      const _String = String;
      let StringResult = String(item);
    } else {
      const _JSON = JSON;
      const normalizer = normalizeDepth(normalizeMaxBreadth[2]);
      StringResult = JSON.stringify(normalizer.normalize(item, normalizeDepth, normalizeMaxBreadth));
    }
    return StringResult;
  });
  applyResult = mapped.join(" ");
};
arg5.hasConsoleSubstitutions = function hasConsoleSubstitutions(args) {
  return /%[sdifocO]/.test(args);
};
arg5.safeJoinConsoleArgs = function safeJoinConsoleArgs(arr) {
  closure_0 = arg1;
  closure_1 = arg2;
  const mapped = arr.map((item, index) => {
    if (obj.isPrimitive(item)) {
      const _String = String;
      let StringResult = String(item);
    } else {
      const _JSON = JSON;
      const normalizer = normalizeDepth(normalizeMaxBreadth[2]);
      StringResult = JSON.stringify(normalizer.normalize(item, normalizeDepth, normalizeMaxBreadth));
    }
    return StringResult;
  });
  return mapped.join(" ");
};