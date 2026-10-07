// === Module 804: ? ===

// Module 804
import _mod697 from "module_697" /* 697 */;
import _mod708 from "module_708" /* 708 */;
import _mod724 from "module_724" /* 724 */;
import _mod784 from "module_784" /* 784 */;
import severityLevelFromString from "severityLevelFromString" /* 796 */;
import setupIntegration from "setupIntegration" /* 763 */;

function addConsoleBreadcrumb(level, args) {
  const obj = { category: "console", data: { arguments: args, logger: "console" }, level: severityLevelFromString.severityLevelFromString(level), message: null };
  if ("util" in _mod697.GLOBAL_OBJ) {
    if (typeof _mod697.GLOBAL_OBJ.util.format === "function") {
      const util = _mod697.GLOBAL_OBJ.util;
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
          if (!("util" in _mod697.GLOBAL_OBJ)) {
            let safeJoinResult = _mod708.safeJoin(substr, " ");
            const _HermesInternal = HermesInternal;
            const combined = "Assertion failed: " + safeJoinResult;
            const tmpResult = _mod708;
          }
          const util2 = _mod697.GLOBAL_OBJ.util;
          const format2 = util2.format;
          const items1 = [];
          HermesBuiltin.arraySpread(substr, 0);
          safeJoinResult = HermesBuiltin.apply(items1, util2);
        }
      }
    }
    const obj3 = { input: args, level };
    _mod784.addBreadcrumb(obj, obj3);
    const tmpResult3 = _mod784;
  }
  applyResult = _mod708.safeJoin(args, " ");
  const tmpResult4 = _mod708;
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
    CONSOLE_LEVELS = set(700).CONSOLE_LEVELS;
  }
  set = new Set(CONSOLE_LEVELS);
  return {
    name: "Console",
    setup(arg0) {
      closure_0 = arg0;
      const result = set(dependencyMap[2]).addConsoleInstrumentationHandler((level) => {
        level = level.level;
        let hasItem = _mod724.getClient() === closure_0;
        if (hasItem) {
          hasItem = set.has(level);
        }
        if (hasItem) {
          addConsoleBreadcrumb(level, level.args);
        }
      });
    }
  };
});