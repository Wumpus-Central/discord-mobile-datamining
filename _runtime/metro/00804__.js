// === Module 804: ? ===

// Module 804
import _mod697 from "module_697" /* 697 */;
import _mod708 from "module_708" /* 708 */;
import _mod724 from "module_724" /* 724 */;
import _mod784 from "module_784" /* 784 */;
import severityLevelFromString from "severityLevelFromString" /* 796 */;
import module_763 from "module_763" /* 763 */;

function addConsoleBreadcrumb(level, args) {
  let obj2;
  const obj = { category: "console", data: { arguments: args, logger: "console" }, level: obj2.severityLevelFromString(level), message: null };
  obj2 = severityLevelFromString;
  if ("util" in _mod697.GLOBAL_OBJ) {
    let applyResult;
    if (typeof _mod697.GLOBAL_OBJ.util.format === "function") {
      const util = _mod697.GLOBAL_OBJ.util;
      const format = util.format;
      const items = [];
      HermesBuiltin.arraySpread(items, args, 0);
      applyResult = HermesBuiltin.apply(format, items, util);
    }
    obj.message = applyResult;
    if ("assert" === level) {
      if (false === args[0]) {
        const substr = args.slice(1);
        let str4 = "Assertion failed";
        if (substr.length > 0) {
          if ("util" in _mod697.GLOBAL_OBJ) {
            let applyResult1;
            if (typeof _mod697.GLOBAL_OBJ.util.format === "function") {
              const util2 = _mod697.GLOBAL_OBJ.util;
              const format2 = util2.format;
              const items1 = [];
              HermesBuiltin.arraySpread(items1, substr, 0);
              applyResult1 = HermesBuiltin.apply(format2, items1, util2);
            }
            const _HermesInternal = HermesInternal;
            str4 = "Assertion failed: " + applyResult1;
          }
          const tmp2Result = _mod708;
          applyResult1 = tmp2Result.safeJoin(substr, " ");
        }
        obj.message = str4;
        obj.data.arguments = substr;
      }
    }
    const obj3 = { input: args, level };
    const tmp2Result3 = _mod784;
    tmp2Result3.addBreadcrumb(obj, obj3);
  }
  const tmp2Result4 = _mod708;
  applyResult = tmp2Result4.safeJoin(args, " ");
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { addConsoleBreadcrumb };
export const consoleIntegration = module_763.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let _Set1;
  let CONSOLE_LEVELS = obj.levels;
  const _Set = Set;
  if (!CONSOLE_LEVELS) {
    CONSOLE_LEVELS = _Set1(700).CONSOLE_LEVELS;
  }
  _Set1 = new _Set(CONSOLE_LEVELS);
  return {
    name: "Console",
    setup(arg0) {
      let closure_0 = arg0;
      let obj = _Set1(dependencyMap[2]);
      const result = obj.addConsoleInstrumentationHandler((level) => {
        level = level.level;
        const args = level.args;
        const obj = _mod724;
        const hasItem = obj.getClient() === closure_0 && _Set1.has(level);
        if (hasItem) {
          addConsoleBreadcrumb(level, args);
        }
      });
    }
  };
});