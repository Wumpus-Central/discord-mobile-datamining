// === Module 783: captureConsoleIntegration ===

// Module 783 (captureConsoleIntegration)
import _mod713 from "module_713" /* 713 */;
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
  obj = {
    name: "CaptureConsole",
    setup(arg0) {
      closure_0 = arg0;
      if ("console" in CONSOLE_LEVELS(flag[1]).GLOBAL_OBJ) {
        let result = CONSOLE_LEVELS(flag[2]).addConsoleInstrumentationHandler((arg0) => {
          ({ args, level } = arg0);
          let extra = _mod713;
          let hasItem = extra.getClient() === args;
          if (hasItem) {
            hasItem = CONSOLE_LEVELS.includes(level);
          }
          if (hasItem) {
            closure_2 = flag;
            let tmpResult = tmp(785);
            closure_3 = tmpResult.severityLevelFromString(level);
            const _Error = Error;
            const error = new Error();
            extra = { level: null, extra: null };
            tmpResult = tmp(785);
            extra.level = tmpResult.severityLevelFromString(level);
            extra = { arguments: args };
            extra.extra = extra;
            tmp(713).withScope((addEventProcessor) => {
              addEventProcessor.addEventProcessor((arg0) => {
                arg0.logger = "console";
                args(level[6]);
                obj = { handled, type: "auto.core.capture_console" };
                const result = obj.addExceptionMechanism(arg0, obj);
                return arg0;
              });
              if ("assert" !== level) {
                const found = args.find((item) => item instanceof Error);
                if (found) {
                  let tmp14Result = tmp14(tmp15[8]);
                  tmp14Result.captureException(found, captureContext);
                } else {
                  tmp14Result = tmp14(tmp15[7]);
                  captureContext = { captureContext: null, syntheticException: null };
                  captureContext.captureContext = captureContext;
                  captureContext.syntheticException = error;
                  addEventProcessor.captureMessage(tmp14Result.safeJoin(tmp12, " "), closure_3, captureContext);
                }
                tmp12 = args;
              } else if (!args[0]) {
                captureContext = args(flag[7]);
                const _HermesInternal = HermesInternal;
                const combined = "Assertion failed: " + captureContext.safeJoin(arr.slice(1), " ") || "console.assert";
                addEventProcessor.setExtra("arguments", arr.slice(1));
                captureContext = { captureContext: null, syntheticException: null };
                captureContext.captureContext = captureContext;
                captureContext.syntheticException = error;
                addEventProcessor.captureMessage(combined, closure_3, captureContext);
                const tmp4 = captureContext.safeJoin(arr.slice(1), " ") || "console.assert";
              }
            });
            const tmpResult1 = tmp(713);
          }
        });
        let tmpResult = CONSOLE_LEVELS(flag[2]);
      }
    }
  };
  return obj;
});