const require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.createConsoleTemplateAttributes = function createConsoleTemplateAttributes(first, substr) {
  const obj = {};
  const array = new Array(substr.length);
  obj["sentry.message.template"] = "" + first + " " + array.fill("{}").join(" ");
  const item = substr.forEach((arg0, arg1) => {
    obj["sentry.message.parameter." + arg1] = arg0;
  });
  return obj;
};
arg5.formatConsoleArgs = function formatConsoleArgs(args, arg1, arg2) {
  if ("util" in _require(821).GLOBAL_OBJ) {
    if (typeof tmp(821).GLOBAL_OBJ.util.format === "function") {
      const util = tmp(821).GLOBAL_OBJ.util;
      const format = util.format;
      const items = [];
      HermesBuiltin.arraySpread(args, 0);
      let applyResult = HermesBuiltin.apply(items, util);
    }
    return applyResult;
  }
  _require = arg1;
  const dependencyMap = arg2;
  const mapped = args.map((arg0) => {
    if (obj.isPrimitive(arg0)) {
      const _String = String;
      let StringResult = String(arg0);
    } else {
      const _JSON = JSON;
      StringResult = JSON.stringify(callback(table[2]).normalize(arg0, callback, table));
      const tmpResult = callback(table[2]);
    }
    return StringResult;
  });
  applyResult = mapped.join(" ");
};
arg5.hasConsoleSubstitutions = function hasConsoleSubstitutions(arg0) {
  return /%[sdifocO]/.test(arg0);
};
arg5.safeJoinConsoleArgs = function safeJoinConsoleArgs(arr) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  const mapped = arr.map((arg0) => {
    if (obj.isPrimitive(arg0)) {
      const _String = String;
      let StringResult = String(arg0);
    } else {
      const _JSON = JSON;
      StringResult = JSON.stringify(callback(table[2]).normalize(arg0, callback, table));
      const tmpResult = callback(table[2]);
    }
    return StringResult;
  });
  return mapped.join(" ");
};