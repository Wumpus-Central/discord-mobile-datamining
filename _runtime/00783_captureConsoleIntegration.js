// === Module 783: captureConsoleIntegration ===

// Module 783 (captureConsoleIntegration)
import _mod713 from "module_713" /* 713 */;
import severityLevelFromString from "severityLevelFromString" /* 785 */;
import setupIntegration from "setupIntegration" /* 752 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const captureConsoleIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag;
  let CONSOLE_LEVELS = obj.levels;
  if (!CONSOLE_LEVELS) {
    CONSOLE_LEVELS = CONSOLE_LEVELS(flag[0]).CONSOLE_LEVELS;
  }
  flag = obj.handled;
  if (flag == null) {
    flag = true;
  }
  return {
    name: "CaptureConsole",
    setup(arg0) {
      closure_0 = arg0;
      if ("console" in CONSOLE_LEVELS(flag[1]).GLOBAL_OBJ) {
        let result = CONSOLE_LEVELS(flag[2]).addConsoleInstrumentationHandler((arg0) => {
          ({ args, level } = arg0);
          let hasItem = _mod713.getClient() === args;
          if (hasItem) {
            hasItem = CONSOLE_LEVELS.includes(level);
          }
          if (hasItem) {
            closure_2 = flag;
            closure_3 = severityLevelFromString.severityLevelFromString(level);
            const _Error = Error;
            const error = new Error();
            let obj2 = { level: null, extra: null };
            const tmpResult = severityLevelFromString;
            obj2.level = severityLevelFromString.severityLevelFromString(level);
            let obj3 = { arguments: args };
            obj2.extra = obj3;
            const tmpResult3 = severityLevelFromString;
            _mod713.withScope((addEventProcessor) => {
              addEventProcessor.addEventProcessor((arg0) => {
                arg0.logger = "console";
                const result = args(level[6]).addExceptionMechanism(arg0, { handled, type: "auto.core.capture_console" });
                return arg0;
              });
              if ("assert" !== level) {
                const found = args.find((item) => item instanceof Error);
                if (found) {
                  args(flag[8]).captureException(found, obj2);
                  const tmp14Result = args(flag[8]);
                } else {
                  obj2 = { captureContext: null, syntheticException: null };
                  obj2.captureContext = obj2;
                  obj2.syntheticException = error;
                  addEventProcessor.captureMessage(args(flag[7]).safeJoin(args, " "), closure_3, obj2);
                  const tmp14Result2 = args(flag[7]);
                }
              } else if (!args[0]) {
                const obj = args(flag[7]);
                const _HermesInternal = HermesInternal;
                const combined = "Assertion failed: " + args(flag[7]).safeJoin(args.slice(1), " ") || "console.assert";
                addEventProcessor.setExtra("arguments", args.slice(1));
                const obj3 = { captureContext: obj2, syntheticException: error };
                addEventProcessor.captureMessage(combined, closure_3, obj3);
                const tmp4 = args(flag[7]).safeJoin(args.slice(1), " ") || "console.assert";
              }
            });
            const tmpResult4 = _mod713;
          }
        });
        let tmpResult = CONSOLE_LEVELS(flag[2]);
      }
    }
  };
});