// === Module 793: ? ===

// Module 793
import _mod686 from "module_686" /* 686 */;
import _mod697 from "module_697" /* 697 */;
import _mod713 from "module_713" /* 713 */;
import _mod773 from "module_773" /* 773 */;
import severityLevelFromString from "severityLevelFromString" /* 785 */;
import setupIntegration from "setupIntegration" /* 752 */;

function addConsoleBreadcrumb(level, args) {
  let obj = { category: "console", data: { arguments: args, logger: "console" }, level: severityLevelFromString.severityLevelFromString(level), message: null };
  if ("util" in _mod686.GLOBAL_OBJ) {
    if (typeof _mod686.GLOBAL_OBJ.util.format === "function") {
      const util = _mod686.GLOBAL_OBJ.util;
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
          if (!("util" in _mod686.GLOBAL_OBJ)) {
            let tmpResult = _mod697;
            let safeJoinResult = tmpResult.safeJoin(substr, " ");
            const _HermesInternal = HermesInternal;
            const combined = "Assertion failed: " + safeJoinResult;
          }
          const util2 = _mod686.GLOBAL_OBJ.util;
          const format2 = util2.format;
          const items1 = [];
          HermesBuiltin.arraySpread(substr, 0);
          safeJoinResult = HermesBuiltin.apply(items1, util2);
        }
      }
    }
    tmpResult = _mod773;
    obj = { input: args, level };
    tmpResult.addBreadcrumb(obj, obj);
  }
  applyResult = _mod697.safeJoin(args, " ");
  const tmpResult1 = _mod697;
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
    CONSOLE_LEVELS = set(689).CONSOLE_LEVELS;
  }
  set = new Set(CONSOLE_LEVELS);
  obj = {
    name: "Console",
    setup(arg0) {
      closure_0 = arg0;
      const result = set(dependencyMap[2]).addConsoleInstrumentationHandler((level) => {
        level = level.level;
        let hasItem = _mod713.getClient() === closure_0;
        if (hasItem) {
          hasItem = set.has(level);
        }
        if (hasItem) {
          addConsoleBreadcrumb(level, level.args);
        }
      });
    }
  };
  return obj;
});