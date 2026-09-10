// === Module 12952: ? ===

// Module 12952
import _mod12894 from "module_12894" /* 12894 */;
import _mod12954 from "module_12954" /* 12954 */;
import setupIntegration from "module_12923" /* 12923 */;


export const captureConsoleIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let handled;
  let CONSOLE_LEVELS = obj.levels;
  if (!CONSOLE_LEVELS) {
    CONSOLE_LEVELS = CONSOLE_LEVELS(handled[0]).CONSOLE_LEVELS;
  }
  handled = obj.handled;
  obj = {
    name: "CaptureConsole",
    setup(arg0) {
      closure_0 = arg0;
      if ("console" in CONSOLE_LEVELS(handled[1]).GLOBAL_OBJ) {
        let result = CONSOLE_LEVELS(handled[2]).addConsoleInstrumentationHandler((arg0) => {
          ({ args, level } = arg0);
          let extra = _mod12894;
          let hasItem = extra.getClient() === args;
          if (hasItem) {
            hasItem = CONSOLE_LEVELS.includes(level);
          }
          if (hasItem) {
            closure_2 = handled;
            extra = { level: null, extra: null };
            let tmpResult = _mod12954;
            extra.level = tmpResult.severityLevelFromString(level);
            extra = { arguments: args };
            extra.extra = extra;
            tmpResult = _mod12894;
            tmpResult.withScope((addEventProcessor) => {
              addEventProcessor.addEventProcessor((arg0) => {
                arg0.logger = "console";
                args(level[6]);
                const obj = { handled, type: "console" };
                const result = obj.addExceptionMechanism(arg0, obj);
                return arg0;
              });
              if ("assert" !== level) {
                const found = args.find((item) => item instanceof Error);
                if (found) {
                  let tmp14Result = args(12915);
                  tmp14Result.captureException(found, obj);
                } else {
                  tmp14Result = args(12876);
                  const safeJoinResult = tmp14Result.safeJoin(args, " ");
                  args(12915).captureMessage(safeJoinResult, obj);
                  const obj4 = args(12915);
                }
              } else if (!args[0]) {
                obj = args(12876);
                const _HermesInternal = HermesInternal;
                const combined = "Assertion failed: " + obj.safeJoin(args.slice(1), " ") || "console.assert";
                addEventProcessor.setExtra("arguments", args.slice(1));
                const tmp4 = obj.safeJoin(args.slice(1), " ") || "console.assert";
                args(12915).captureMessage(combined, obj);
                const obj2 = args(12915);
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