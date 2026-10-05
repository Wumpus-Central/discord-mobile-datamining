// === Module 827: consoleLoggingIntegration ===

// Module 827 (consoleLoggingIntegration)
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 715 */;
import _mod724 from "module_724" /* 724 */;
import _INTERNAL_captureLog2 from "_INTERNAL_captureLog" /* 756 */;
import safeJoinConsoleArgs from "safeJoinConsoleArgs" /* 828 */;
import module_763 from "module_763" /* 763 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = { [SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.log.console" };

export const consoleLoggingIntegration = module_763.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let CONSOLE_LEVELS;
  CONSOLE_LEVELS = obj.levels || CONSOLE_LEVELS(700).CONSOLE_LEVELS;
  let obj2 = {
    name: "ConsoleLogs",
    setup(getOptions) {
      let attributes;
      let closure_0 = getOptions;
      const options = getOptions.getOptions();
      const normalizeDepth = options.normalizeDepth;
      let num = 3;
      const enableLogs = options.enableLogs;
      if (undefined !== normalizeDepth) {
        num = normalizeDepth;
      }
      const normalizeMaxBreadth = options.normalizeMaxBreadth;
      let num2 = 1000;
      if (undefined !== normalizeMaxBreadth) {
        num2 = normalizeMaxBreadth;
      }
      if (enableLogs) {
        const tmp2Result = CONSOLE_LEVELS(dependencyMap[3]);
        const result = tmp2Result.addConsoleInstrumentationHandler((arg0) => {
          let args;
          let level;
          let num3;
          let tmpResult8;
          ({ args, level } = arg0);
          const obj = _mod724;
          if (obj.getClient() === getOptions) {
            if (CONSOLE_LEVELS.includes(level)) {
              const first = args[0];
              const substr = args.slice(1);
              if ("assert" !== level) {
                let consoleTemplateAttributes;
                let tmp9 = args.length > 1 && typeof args[0] === "string";
                if (tmp9) {
                  const tmpResult = safeJoinConsoleArgs;
                  tmp9 = !tmpResult.hasConsoleSubstitutions(args[0]);
                }
                const obj2 = {};
                const merged = Object.assign(attributes);
                if (tmp9) {
                  const tmpResult6 = safeJoinConsoleArgs;
                  consoleTemplateAttributes = tmpResult6.createConsoleTemplateAttributes(first, substr);
                } else {
                  consoleTemplateAttributes = {};
                }
                const merged1 = Object.assign(consoleTemplateAttributes);
                let str5 = "info";
                const _INTERNAL_captureLog = _INTERNAL_captureLog2._INTERNAL_captureLog;
                _INTERNAL_captureLog2;
                if ("log" !== level) {
                  str5 = level;
                }
                const obj3 = { level: str5, message: tmpResult8.formatConsoleArgs(args, 1, num2), severityNumber: num3, attributes: obj2 };
                num3 = undefined;
                tmpResult8 = safeJoinConsoleArgs;
                if ("log" === level) {
                  num3 = 10;
                }
                _INTERNAL_captureLog(obj3);
              } else if (!first) {
                let str2 = "Assertion failed";
                if (substr.length > 0) {
                  const _HermesInternal = HermesInternal;
                  const tmpResult9 = safeJoinConsoleArgs;
                  str2 = "Assertion failed: " + tmpResult9.formatConsoleArgs(substr, num, num2);
                }
                const obj4 = { level: "error", message: str2, attributes };
                const tmpResult10 = _INTERNAL_captureLog2;
                tmpResult10._INTERNAL_captureLog(obj4);
              }
            }
          }
        });
      } else if (CONSOLE_LEVELS(dependencyMap[2]).DEBUG_BUILD) {
        const debug = CONSOLE_LEVELS(dependencyMap[1]).debug;
        debug.warn("`enableLogs` is not enabled, ConsoleLogs integration disabled");
      }
    }
  };
  return obj2;
});