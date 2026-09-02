// _runtime/00925_addConsoleBreadcrumb.js
import _mod818 from "metro/00818__.js";
import isMatchingPattern from "00829_isMatchingPattern.js";
import severityLevelFromString from "00917_severityLevelFromString.js";
import setupIntegration from "00884_setupIntegration.js";

function addConsoleBreadcrumb(arg0, arguments) {
  obj = { category: "console", data: obj, level: null, message: null };
  obj = { arguments, logger: "console" };
  obj[2] = severityLevelFromString.severityLevelFromString(arg0);
  if ("util" in _mod818.GLOBAL_OBJ) {
    if (typeof tmp(818).GLOBAL_OBJ.util.format === "function") {
      const util = tmp(818).GLOBAL_OBJ.util;
      const format = util.format;
      const items = [];
      HermesBuiltin.arraySpread(arguments, 0);
      let applyResult = HermesBuiltin.apply(items, util);
    }
    obj[3] = applyResult;
    if ("assert" === arg0) {
      if (false === arguments[0]) {
        const substr = arguments.slice(1);
        if (substr.length <= 0) {
          obj.message = "Assertion failed";
          obj.data.arguments = substr;
        } else {
          if (!("util" in tmp(818).GLOBAL_OBJ)) {
            let tmpResult = tmp(829);
            let safeJoinResult = tmpResult.safeJoin(substr, " ");
            const _HermesInternal = HermesInternal;
            const combined = "Assertion failed: " + safeJoinResult;
          }
          const util2 = tmp(818).GLOBAL_OBJ.util;
          const format2 = util2.format;
          const items1 = [];
          HermesBuiltin.arraySpread(substr, 0);
          safeJoinResult = HermesBuiltin.apply(items1, util2);
        }
      }
    }
    tmpResult = tmp(905);
    obj = { input: null, level: null };
    obj[0] = arguments;
    obj[1] = arg0;
    tmpResult.addBreadcrumb(obj, obj);
  }
  const obj3 = severityLevelFromString;
  applyResult = isMatchingPattern.safeJoin(arguments, " ");
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { addConsoleBreadcrumb };
export const consoleIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let set;
  let CONSOLE_LEVELS = obj.levels;
  if (!CONSOLE_LEVELS) {
    CONSOLE_LEVELS = set(821).CONSOLE_LEVELS;
  }
  set = new Set(CONSOLE_LEVELS);
  obj = {
    name: "Console",
    setup(arg0) {
      closure_0 = arg0;
      const result = set(closure_1_1[2]).addConsoleInstrumentationHandler((level) => {
        level = level.level;
        let hasItem = set(closure_2_1[3]).getClient() === set;
        if (hasItem) {
          hasItem = set.has(level);
        }
        if (hasItem) {
          closure_2_2(level, level.args);
        }
      });
    }
  };
  return obj;
});