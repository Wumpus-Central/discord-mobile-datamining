// _runtime/metro/00793__.js
import _mod686 from "00686__.js";
import _mod697 from "00697__.js";
import _mod713 from "00713__.js";
import _mod773 from "00773__.js";
import severityLevelFromString from "../00785_severityLevelFromString.js";
import setupIntegration from "../00752_setupIntegration.js";

function addConsoleBreadcrumb(level, args) {
  const obj = {
    category: "console",
    data: { arguments: args, logger: "console" },
    level: severityLevelFromString.severityLevelFromString(level),
    message: null,
  };
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
            let safeJoinResult = _mod697.safeJoin(substr, " ");
            const _HermesInternal = HermesInternal;
            const combined = "Assertion failed: " + safeJoinResult;
            const tmpResult = _mod697;
          }
          const util2 = _mod686.GLOBAL_OBJ.util;
          const format2 = util2.format;
          const items1 = [];
          HermesBuiltin.arraySpread(substr, 0);
          safeJoinResult = HermesBuiltin.apply(items1, util2);
        }
      }
    }
    const obj3 = { input: args, level };
    _mod773.addBreadcrumb(obj, obj3);
    const tmpResult3 = _mod773;
  }
  applyResult = _mod697.safeJoin(args, " ");
  const tmpResult4 = _mod697;
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
  return {
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
    },
  };
});
