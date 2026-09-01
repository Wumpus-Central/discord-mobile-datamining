// _runtime/00918_captureConsoleIntegration.js
import setupIntegration from "00887_setupIntegration.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const captureConsoleIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let CONSOLE_LEVELS;
  let flag;
  CONSOLE_LEVELS = obj.levels;
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
          let obj = CONSOLE_LEVELS(flag[3]);
          let hasItem = obj.getClient() === args;
          if (hasItem) {
            hasItem = closure_0.includes(level);
          }
          if (hasItem) {
            closure_2 = closure_1_1;
            let tmpResult = tmp(tmp2[5]);
            closure_3 = tmpResult.severityLevelFromString(level);
            const _Error = Error;
            error = new Error();
            obj = { level: null, extra: null };
            tmpResult = tmp(tmp2[5]);
            obj[0] = tmpResult.severityLevelFromString(level);
            obj = { arguments: null };
            obj[0] = args;
            obj[1] = obj;
            tmp(tmp2[3]).withScope((addEventProcessor) => {
              addEventProcessor.addEventProcessor((arg0) => {
                arg0.logger = "console";
                obj = closure_1_0(closure_1_1[6]);
                obj = { handled: closure_2, type: "auto.core.capture_console" };
                const result = obj.addExceptionMechanism(arg0, obj);
                return arg0;
              });
              if ("assert" !== level) {
                const found = args.find((arg0) => arg0 instanceof Error);
                if (found) {
                  let tmp14Result = tmp14(tmp15[8]);
                  tmp14Result.captureException(found, obj);
                } else {
                  tmp14Result = tmp14(tmp15[7]);
                  obj = { captureContext: null, syntheticException: null };
                  obj[0] = obj;
                  obj[1] = error;
                  addEventProcessor.captureMessage(tmp14Result.safeJoin(tmp12, " "), closure_3, obj);
                }
                tmp12 = args;
              } else if (!args[0]) {
                obj = args(level[7]);
                const _HermesInternal = HermesInternal;
                const combined = "Assertion failed: " + obj.safeJoin(arr.slice(1), " ") || "console.assert";
                addEventProcessor.setExtra("arguments", arr.slice(1));
                obj = { captureContext: null, syntheticException: null };
                obj[0] = obj;
                obj[1] = error;
                addEventProcessor.captureMessage(combined, closure_3, obj);
                const tmp4 = obj.safeJoin(arr.slice(1), " ") || "console.assert";
              }
            });
            const tmpResult1 = tmp(tmp2[3]);
          }
        });
        let tmpResult = CONSOLE_LEVELS(flag[2]);
      }
    },
  };
  return obj;
});
