// === Module 951: consoleLoggingIntegration ===

// Module 951 (consoleLoggingIntegration)
import _mod839 from "module_839" /* 839 */;
import setupIntegration from "setupIntegration" /* 887 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = { [_mod839.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.log.console" };

export const consoleLoggingIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let CONSOLE_LEVELS = obj.levels;
  if (!CONSOLE_LEVELS) {
    CONSOLE_LEVELS = CONSOLE_LEVELS(824).CONSOLE_LEVELS;
  }
  obj = {
    name: "ConsoleLogs",
    setup(getOptions) {
      closure_0 = getOptions;
      const options = getOptions.getOptions();
      const normalizeDepth = options.normalizeDepth;
      const normalizeMaxBreadth = options.normalizeMaxBreadth;
      if (options.enableLogs) {
        const result = CONSOLE_LEVELS(dependencyMap[3]).addConsoleInstrumentationHandler((arg0) => {
          ({ args, level } = arg0);
          let obj = CONSOLE_LEVELS(dependencyMap[4]);
          if (obj.getClient() === getOptions) {
            if (getOptions.includes(level)) {
              const first = args[0];
              const substr = args.slice(1);
              if ("assert" !== level) {
                let tmp9 = args.length > 1 && typeof args[0] === "string";
                if (tmp9) {
                  let tmpResult = CONSOLE_LEVELS(dependencyMap[5]);
                  tmp9 = !tmpResult.hasConsoleSubstitutions(args[0]);
                }
                obj = {};
                const merged = Object.assign(closure_2_2);
                if (tmp9) {
                  tmpResult = CONSOLE_LEVELS(dependencyMap[5]);
                  let consoleTemplateAttributes = tmpResult.createConsoleTemplateAttributes(first, substr);
                } else {
                  consoleTemplateAttributes = {};
                }
                const merged1 = Object.assign(consoleTemplateAttributes);
                let str5 = "info";
                if ("log" !== level) {
                  str5 = level;
                }
                obj = { level: null, message: null, severityNumber: null, attributes: null };
                obj[0] = str5;
                const tmpResult1 = CONSOLE_LEVELS(dependencyMap[6]);
                obj[1] = CONSOLE_LEVELS(dependencyMap[5]).formatConsoleArgs(args, num, num2);
                let num3;
                if ("log" === level) {
                  num3 = 10;
                }
                obj[2] = num3;
                obj[3] = obj;
                tmpResult1._INTERNAL_captureLog(obj);
                const tmpResult2 = CONSOLE_LEVELS(dependencyMap[5]);
              } else if (!first) {
                let str2 = "Assertion failed";
                if (substr.length > 0) {
                  const _HermesInternal = HermesInternal;
                  str2 = "Assertion failed: " + CONSOLE_LEVELS(dependencyMap[5]).formatConsoleArgs(substr, num, num2);
                  const tmpResult3 = CONSOLE_LEVELS(dependencyMap[5]);
                }
                obj1 = { level: "error", message: null, attributes: null };
                obj1[1] = str2;
                obj1[2] = closure_2_2;
                CONSOLE_LEVELS(dependencyMap[6])._INTERNAL_captureLog(obj1);
                const tmpResult4 = CONSOLE_LEVELS(dependencyMap[6]);
              }
            }
          }
        });
        const tmp2Result = CONSOLE_LEVELS(dependencyMap[3]);
      } else if (CONSOLE_LEVELS(dependencyMap[2]).DEBUG_BUILD) {
        const debug = CONSOLE_LEVELS(dependencyMap[1]).debug;
        debug.warn("`enableLogs` is not enabled, ConsoleLogs integration disabled");
      }
    }
  };
  return obj;
});