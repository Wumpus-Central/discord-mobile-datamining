import setupIntegration from "setupIntegration";

function addConsoleBreadcrumb(arg0, arguments) {
  obj = { category: "console", data: obj, level: null, message: null };
  obj = { arguments, logger: "console" };
  obj[2] = require(920) /* severityLevelFromString */.severityLevelFromString(arg0);
  if ("util" in require(821).GLOBAL_OBJ) {
    if (typeof tmp(821).GLOBAL_OBJ.util.format === "function") {
      const util = tmp(821).GLOBAL_OBJ.util;
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
          if (!("util" in tmp(821).GLOBAL_OBJ)) {
            let tmpResult = tmp(832);
            let safeJoinResult = tmpResult.safeJoin(substr, " ");
            const _HermesInternal = HermesInternal;
            const combined = "Assertion failed: " + safeJoinResult;
          }
          const util2 = tmp(821).GLOBAL_OBJ.util;
          const format2 = util2.format;
          const items1 = [];
          HermesBuiltin.arraySpread(substr, 0);
          safeJoinResult = HermesBuiltin.apply(items1, util2);
        }
      }
    }
    tmpResult = tmp(908);
    obj = { input: null, level: null };
    obj[0] = arguments;
    obj[1] = arg0;
    tmpResult.addBreadcrumb(obj, obj);
  }
  const obj3 = require(920) /* severityLevelFromString */;
  applyResult = require(832) /* isMatchingPattern */.safeJoin(arguments, " ");
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
      let closure_0 = arg0;
      const result = set(outer1_1[2]).addConsoleInstrumentationHandler((level) => {
        level = level.level;
        let hasItem = set(outer2_1[3]).getClient() === set;
        if (hasItem) {
          hasItem = set.has(level);
        }
        if (hasItem) {
          outer2_2(level, level.args);
        }
      });
    }
  };
  return obj;
});