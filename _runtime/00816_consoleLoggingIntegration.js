// === Module 816: consoleLoggingIntegration ===

// Module 816 (consoleLoggingIntegration)
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 704 */;
import _mod713 from "module_713" /* 713 */;
import setupIntegration from "setupIntegration" /* 752 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = { [SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.log.console" };

export const consoleLoggingIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let CONSOLE_LEVELS = obj.levels;
  if (!CONSOLE_LEVELS) {
    CONSOLE_LEVELS = CONSOLE_LEVELS(689).CONSOLE_LEVELS;
  }
  obj = {
    name: "ConsoleLogs",
    setup(getOptions) {
      closure_0 = getOptions;
      const options = getOptions.getOptions();
      const normalizeDepth = options.normalizeDepth;
      const normalizeMaxBreadth = options.normalizeMaxBreadth;
      if (options.enableLogs) {
        const result = tmp2(tmp3[3]).addConsoleInstrumentationHandler((arg0) => {
          ({ args, level } = arg0);
          let obj = _mod713;
          if (obj.getClient() === closure_0) {
            if (CONSOLE_LEVELS.includes(level)) {
              const first = args[0];
              const substr = args.slice(1);
              if ("assert" !== level) {
                let tmp9 = args.length > 1 && typeof args[0] === "string";
                if (tmp9) {
                  let tmpResult = tmp(817);
                  tmp9 = !tmpResult.hasConsoleSubstitutions(args[0]);
                }
                obj = {};
                const merged = Object.assign(attributes);
                if (tmp9) {
                  tmpResult = tmp(817);
                  let consoleTemplateAttributes = tmpResult.createConsoleTemplateAttributes(first, substr);
                } else {
                  consoleTemplateAttributes = {};
                }
                const merged1 = Object.assign(consoleTemplateAttributes);
                let str5 = "info";
                if ("log" !== level) {
                  str5 = level;
                }
                obj = { level: str5, message: null, severityNumber: null, attributes: null };
                const tmpResult1 = tmp(745);
                obj.message = tmp(817).formatConsoleArgs(args, num, num2);
                let num3;
                if ("log" === level) {
                  num3 = 10;
                }
                obj.severityNumber = num3;
                obj.attributes = obj;
                tmpResult1._INTERNAL_captureLog(obj);
                const tmpResult2 = tmp(817);
              } else if (!first) {
                let str2 = "Assertion failed";
                if (substr.length > 0) {
                  const _HermesInternal = HermesInternal;
                  str2 = "Assertion failed: " + tmp(817).formatConsoleArgs(substr, num, num2);
                  const tmpResult3 = tmp(817);
                }
                const obj1 = { level: "error", message: str2, attributes };
                tmp(745)._INTERNAL_captureLog(obj1);
                const tmpResult4 = tmp(745);
              }
            }
          }
        });
        const tmp2Result = tmp2(tmp3[3]);
      } else if (tmp2(tmp3[2]).DEBUG_BUILD) {
        const debug = CONSOLE_LEVELS(dependencyMap[1]).debug;
        debug.warn("`enableLogs` is not enabled, ConsoleLogs integration disabled");
      }
    }
  };
  return obj;
});