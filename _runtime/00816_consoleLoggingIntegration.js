// _runtime/00816_consoleLoggingIntegration.js
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "00704_SEMANTIC_ATTRIBUTE_CACHE_HIT.js";
import _mod713 from "metro/00713__.js";
import _INTERNAL_captureSerializedLog from "00745__INTERNAL_captureSerializedLog.js";
import safeJoinConsoleArgs from "00817_safeJoinConsoleArgs.js";
import setupIntegration from "00752_setupIntegration.js";

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
  return {
    name: "ConsoleLogs",
    setup(getOptions) {
      closure_0 = getOptions;
      const options = getOptions.getOptions();
      const normalizeDepth = options.normalizeDepth;
      const normalizeMaxBreadth = options.normalizeMaxBreadth;
      if (options.enableLogs) {
        const result = CONSOLE_LEVELS(dependencyMap[3]).addConsoleInstrumentationHandler((arg0) => {
          ({ args, level } = arg0);
          if (obj.getClient() === closure_0) {
            if (CONSOLE_LEVELS.includes(level)) {
              const first = args[0];
              const substr = args.slice(1);
              if ("assert" !== level) {
                let tmp9 = args.length > 1 && typeof args[0] === "string";
                if (tmp9) {
                  tmp9 = !safeJoinConsoleArgs.hasConsoleSubstitutions(args[0]);
                  const tmpResult = safeJoinConsoleArgs;
                }
                const obj2 = {};
                const merged = Object.assign(attributes);
                if (tmp9) {
                  let consoleTemplateAttributes = safeJoinConsoleArgs.createConsoleTemplateAttributes(first, substr);
                  const tmpResult6 = safeJoinConsoleArgs;
                } else {
                  consoleTemplateAttributes = {};
                }
                const merged1 = Object.assign(consoleTemplateAttributes);
                let str5 = "info";
                if ("log" !== level) {
                  str5 = level;
                }
                const obj3 = { level: str5, message: null, severityNumber: null, attributes: null };
                const tmpResult7 = _INTERNAL_captureSerializedLog;
                obj3.message = safeJoinConsoleArgs.formatConsoleArgs(args, num, num2);
                let num3;
                if ("log" === level) {
                  num3 = 10;
                }
                obj3.severityNumber = num3;
                obj3.attributes = obj2;
                tmpResult7._INTERNAL_captureLog(obj3);
                const tmpResult8 = safeJoinConsoleArgs;
              } else if (!first) {
                let str2 = "Assertion failed";
                if (substr.length > 0) {
                  const _HermesInternal = HermesInternal;
                  str2 = "Assertion failed: " + safeJoinConsoleArgs.formatConsoleArgs(substr, num, num2);
                  const tmpResult9 = safeJoinConsoleArgs;
                }
                const obj4 = { level: "error", message: str2, attributes };
                _INTERNAL_captureSerializedLog._INTERNAL_captureLog(obj4);
                const tmpResult10 = _INTERNAL_captureSerializedLog;
              }
            }
          }
          obj = _mod713;
        });
        const tmp2Result = CONSOLE_LEVELS(dependencyMap[3]);
      } else if (CONSOLE_LEVELS(dependencyMap[2]).DEBUG_BUILD) {
        const debug = CONSOLE_LEVELS(dependencyMap[1]).debug;
        debug.warn("`enableLogs` is not enabled, ConsoleLogs integration disabled");
      }
    },
  };
});
