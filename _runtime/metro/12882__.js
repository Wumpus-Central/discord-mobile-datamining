// _runtime/metro/12882__.js
import _mod12824 from "12824__.js";
import setupIntegration from "12853__.js";

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
          let extra = _mod12824;
          let hasItem = extra.getClient() === args;
          if (hasItem) {
            hasItem = CONSOLE_LEVELS.includes(level);
          }
          if (hasItem) {
            closure_2 = handled;
            extra = { level: null, extra: null };
            let tmpResult = tmp(12884);
            extra.level = tmpResult.severityLevelFromString(level);
            extra = { arguments: args };
            extra.extra = extra;
            tmpResult = tmp(12824);
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
                  let tmp14Result = tmp14(12845);
                  tmp14Result.captureException(found, obj);
                } else {
                  tmp14Result = tmp14(12806);
                  const safeJoinResult = tmp14Result.safeJoin(tmp12, " ");
                  args(12845).captureMessage(safeJoinResult, obj);
                  const obj4 = args(12845);
                }
                tmp12 = args;
              } else if (!args[0]) {
                obj = args(12806);
                const _HermesInternal = HermesInternal;
                const combined = "Assertion failed: " + obj.safeJoin(arr.slice(1), " ") || "console.assert";
                addEventProcessor.setExtra("arguments", arr.slice(1));
                const tmp4 = obj.safeJoin(arr.slice(1), " ") || "console.assert";
                args(12845).captureMessage(combined, obj);
                const obj2 = args(12845);
              }
            });
          }
        });
        let tmpResult = CONSOLE_LEVELS(handled[2]);
      }
    },
  };
  return obj;
});
