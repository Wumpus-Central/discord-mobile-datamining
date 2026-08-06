// _runtime/07460_captureConsoleIntegration.js
import setupIntegration from "setupIntegration";


export const captureConsoleIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let CONSOLE_LEVELS;
  let handled;
  CONSOLE_LEVELS = obj.levels;
  if (!CONSOLE_LEVELS) {
    CONSOLE_LEVELS = CONSOLE_LEVELS(handled[0]).CONSOLE_LEVELS;
  }
  handled = obj.handled;
  obj = {
    name: "CaptureConsole",
    setup(arg0) {
      let closure_0 = arg0;
      if ("console" in CONSOLE_LEVELS(handled[1]).GLOBAL_OBJ) {
        let result = CONSOLE_LEVELS(handled[2]).addConsoleInstrumentationHandler((arg0) => {
          let args;
          let level;
          ({ args, level } = arg0);
          let obj = CONSOLE_LEVELS(handled[3]);
          let hasItem = obj.getClient() === args;
          if (hasItem) {
            hasItem = closure_0.includes(level);
          }
          if (hasItem) {
            let closure_2 = outer1_1;
            obj = { level: null, extra: null };
            let tmpResult = tmp(tmp2[5]);
            obj[0] = tmpResult.severityLevelFromString(level);
            obj = { arguments: null };
            obj[0] = args;
            obj[1] = obj;
            tmpResult = tmp(tmp2[3]);
            tmpResult.withScope((addEventProcessor) => {
              addEventProcessor.addEventProcessor((arg0) => {
                arg0.logger = "console";
                let obj = outer1_0(outer1_1[6]);
                obj = { handled: closure_2, type: "console" };
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
                  const safeJoinResult = tmp14Result.safeJoin(tmp12, " ");
                  args(level[8]).captureMessage(safeJoinResult, obj);
                  const obj4 = args(level[8]);
                }
                tmp12 = args;
              } else if (!args[0]) {
                obj = args(level[7]);
                const _HermesInternal = HermesInternal;
                const combined = "Assertion failed: " + obj.safeJoin(arr.slice(1), " ") || "console.assert";
                addEventProcessor.setExtra("arguments", arr.slice(1));
                const tmp4 = obj.safeJoin(arr.slice(1), " ") || "console.assert";
                args(level[8]).captureMessage(combined, obj);
                const obj2 = args(level[8]);
              }
            });
          }
        });
        let tmpResult = CONSOLE_LEVELS(handled[2]);
      }
    }
  };
  return obj;
});