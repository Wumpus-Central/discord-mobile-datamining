// === Module 12975: ? ===

// Module 12975
import _mod12917 from "module_12917" /* 12917 */;
import _mod12977 from "module_12977" /* 12977 */;
import setupIntegration from "module_12946" /* 12946 */;


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
          let extra = _mod12917;
          let hasItem = extra.getClient() === args;
          if (hasItem) {
            hasItem = CONSOLE_LEVELS.includes(level);
          }
          if (hasItem) {
            closure_2 = handled;
            extra = { level: null, extra: null };
            let tmpResult = _mod12977;
            extra.level = tmpResult.severityLevelFromString(level);
            extra = { arguments: args };
            extra.extra = extra;
            tmpResult = _mod12917;
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
                  let tmp14Result = args(12938);
                  tmp14Result.captureException(found, obj);
                } else {
                  tmp14Result = args(12899);
                  const safeJoinResult = tmp14Result.safeJoin(args, " ");
                  args(12938).captureMessage(safeJoinResult, obj);
                  const obj4 = args(12938);
                }
              } else if (!args[0]) {
                obj = args(12899);
                const _HermesInternal = HermesInternal;
                const combined = "Assertion failed: " + obj.safeJoin(args.slice(1), " ") || "console.assert";
                addEventProcessor.setExtra("arguments", args.slice(1));
                const tmp4 = obj.safeJoin(args.slice(1), " ") || "console.assert";
                args(12938).captureMessage(combined, obj);
                const obj2 = args(12938);
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