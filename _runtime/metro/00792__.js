// _runtime/metro/00792__.js
import _mod685 from "00685__.js";
import _mod696 from "00696__.js";
import _mod712 from "00712__.js";
import _mod772 from "00772__.js";
import severityLevelFromString from "../00784_severityLevelFromString.js";
import setupIntegration from "../00751_setupIntegration.js";

function addConsoleBreadcrumb(level, args) {
  const obj = {
    category: "console",
    data: { arguments: args, logger: "console" },
    level: severityLevelFromString.severityLevelFromString(level),
    message: null,
  };
  if ("util" in _mod685.GLOBAL_OBJ) {
    if (typeof _mod685.GLOBAL_OBJ.util.format === "function") {
      const util = _mod685.GLOBAL_OBJ.util;
      const format = util.format;
      const items = [];
      HermesBuiltin.arraySpread(args, 0);
      let applyResult = HermesBuiltin.apply(items, util);
    }
    obj.message = applyResult;
    if ("assert" === level) {
      if (false === args[0]) {
        const substr = args.slice(1);
        if (substr.length <= 0) {
          obj.message = "Assertion failed";
          obj.data.arguments = substr;
        } else {
          if (!("util" in _mod685.GLOBAL_OBJ)) {
            let safeJoinResult = _mod696.safeJoin(substr, " ");
            const _HermesInternal = HermesInternal;
            const combined = "Assertion failed: " + safeJoinResult;
            const tmpResult = _mod696;
          }
          const util2 = _mod685.GLOBAL_OBJ.util;
          const format2 = util2.format;
          const items1 = [];
          HermesBuiltin.arraySpread(substr, 0);
          safeJoinResult = HermesBuiltin.apply(items1, util2);
        }
      }
    }
    const obj3 = { input: args, level };
    _mod772.addBreadcrumb(obj, obj3);
    const tmpResult3 = _mod772;
  }
  applyResult = _mod696.safeJoin(args, " ");
  const tmpResult4 = _mod696;
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
    CONSOLE_LEVELS = set(688).CONSOLE_LEVELS;
  }
  set = new Set(CONSOLE_LEVELS);
  return {
    name: "Console",
    setup(arg0) {
      closure_0 = arg0;
      const result = set(dependencyMap[2]).addConsoleInstrumentationHandler((level) => {
        level = level.level;
        let hasItem = _mod712.getClient() === closure_0;
        if (hasItem) {
          hasItem = set.has(level);
        }
        if (hasItem) {
          addConsoleBreadcrumb(level, level.args);
        }
      });
    },
  };
});
