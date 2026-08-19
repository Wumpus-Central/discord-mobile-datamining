// === Module 928: addConsoleBreadcrumb ===

// Module 928 (addConsoleBreadcrumb)
import _mod821 from "module_821" /* 821 */;
import isMatchingPattern from "isMatchingPattern" /* 832 */;
import addBreadcrumb from "addBreadcrumb" /* 908 */;
import severityLevelFromString from "severityLevelFromString" /* 920 */;
import setupIntegration from "setupIntegration" /* 887 */;

function addConsoleBreadcrumb(level, arguments) {
  let obj = { arguments, logger: "console" };
  obj[2] = severityLevelFromString.severityLevelFromString(level);
  if ("util" in _mod821.GLOBAL_OBJ) {
    if (typeof _mod821.GLOBAL_OBJ.util.format === "function") {
      const util = _mod821.GLOBAL_OBJ.util;
      const format = util.format;
      const items = [];
      HermesBuiltin.arraySpread(arguments, 0);
      let applyResult = HermesBuiltin.apply(items, util);
    }
    obj[3] = applyResult;
    if ("assert" === level) {
      if (false === arguments[0]) {
        const substr = arguments.slice(1);
        if (substr.length <= 0) {
          obj.message = "Assertion failed";
          obj.data.arguments = substr;
        } else {
          if (!("util" in _mod821.GLOBAL_OBJ)) {
            let tmpResult = isMatchingPattern;
            let safeJoinResult = tmpResult.safeJoin(substr, " ");
            const _HermesInternal = HermesInternal;
            const combined = "Assertion failed: " + safeJoinResult;
          }
          const util2 = _mod821.GLOBAL_OBJ.util;
          const format2 = util2.format;
          const items1 = [];
          HermesBuiltin.arraySpread(substr, 0);
          safeJoinResult = HermesBuiltin.apply(items1, util2);
        }
      }
    }
    tmpResult = addBreadcrumb;
    obj = { input: null, level: null };
    obj[0] = arguments;
    obj[1] = level;
    tmpResult.addBreadcrumb(obj, obj);
  }
  applyResult = isMatchingPattern.safeJoin(arguments, " ");
  const tmpResult1 = isMatchingPattern;
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
    CONSOLE_LEVELS = set(824).CONSOLE_LEVELS;
  }
  set = new Set(CONSOLE_LEVELS);
  obj = {
    name: "Console",
    setup(arg0) {
      closure_0 = arg0;
      const result = set(dependencyMap[2]).addConsoleInstrumentationHandler((level) => {
        level = level.level;
        let hasItem = set(dependencyMap[3]).getClient() === set;
        if (hasItem) {
          hasItem = set.has(level);
        }
        if (hasItem) {
          addConsoleBreadcrumb(level, level.args);
        }
        const obj = set(dependencyMap[3]);
      });
    }
  };
  return obj;
});