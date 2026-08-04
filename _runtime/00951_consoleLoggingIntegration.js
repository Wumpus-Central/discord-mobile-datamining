// _runtime/00951_consoleLoggingIntegration.js
import setupIntegration from "setupIntegration";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = { [require(839).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.log.console" };

export const consoleLoggingIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let CONSOLE_LEVELS;
  CONSOLE_LEVELS = obj.levels;
  if (!CONSOLE_LEVELS) {
    CONSOLE_LEVELS = CONSOLE_LEVELS(824).CONSOLE_LEVELS;
  }
  obj = {
    name: "ConsoleLogs",
    setup(getOptions) {
      let closure_0 = getOptions;
      const options = getOptions.getOptions();
      const normalizeDepth = options.normalizeDepth;
      let num = 3;
      if (undefined !== normalizeDepth) {
        num = normalizeDepth;
      }
      const normalizeMaxBreadth = options.normalizeMaxBreadth;
      let num2 = 1000;
      if (undefined !== normalizeMaxBreadth) {
        num2 = normalizeMaxBreadth;
      }
      if (options.enableLogs) {
        const result = tmp2(tmp3[3]).addConsoleInstrumentationHandler((arg0) => {
          let args;
          let level;
          ({ args, level } = arg0);
          let obj = CONSOLE_LEVELS(outer2_1[4]);
          if (obj.getClient() === getOptions) {
            if (getOptions.includes(level)) {
              const first = args[0];
              const substr = args.slice(1);
              if ("assert" !== level) {
                let tmp9 = args.length > 1 && typeof args[0] === "y";
                if (tmp9) {
                  let tmpResult = tmp(tmp2[5]);
                  tmp9 = !tmpResult.hasConsoleSubstitutions(args[0]);
                }
                obj = {};
                const merged = Object.assign(outer2_2);
                if (tmp9) {
                  tmpResult = tmp(tmp2[5]);
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
                const tmpResult1 = tmp(tmp2[6]);
                obj[1] = tmp(tmp2[5]).formatConsoleArgs(args, num, num2);
                let num3;
                if ("log" === level) {
                  num3 = 10;
                }
                obj[2] = num3;
                obj[3] = obj;
                tmpResult1._INTERNAL_captureLog(obj);
                const tmpResult2 = tmp(tmp2[5]);
              } else if (!first) {
                let str2 = "Assertion failed";
                if (substr.length > 0) {
                  const _HermesInternal = HermesInternal;
                  str2 = "Assertion failed: " + tmp(tmp2[5]).formatConsoleArgs(substr, num, num2);
                  const tmpResult3 = tmp(tmp2[5]);
                }
                const obj1 = { level: "error", message: null, attributes: null };
                obj1[1] = str2;
                obj1[2] = outer2_2;
                tmp(tmp2[6])._INTERNAL_captureLog(obj1);
                const tmpResult4 = tmp(tmp2[6]);
              }
            }
          }
        });
        const tmp2Result = tmp2(tmp3[3]);
      } else if (tmp2(tmp3[2]).DEBUG_BUILD) {
        const debug = CONSOLE_LEVELS(outer1_1[1]).debug;
        debug.warn("`enableLogs` is not enabled, ConsoleLogs integration disabled");
      }
    }
  };
  return obj;
});