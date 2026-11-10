// === Module 13377: ? ===

// Module 13377
import _mod13319 from "module_13319" /* 13319 */;
import _mod13379 from "module_13379" /* 13379 */;
import setupIntegration from "module_13348" /* 13348 */;


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
  return {
    name: "CaptureConsole",
    setup(arg0) {
      closure_0 = arg0;
      if ("console" in CONSOLE_LEVELS(handled[1]).GLOBAL_OBJ) {
        let result = CONSOLE_LEVELS(handled[2]).addConsoleInstrumentationHandler((arg0) => {
          ({ args, level } = arg0);
          let hasItem = _mod13319.getClient() === args;
          if (hasItem) {
            hasItem = CONSOLE_LEVELS.includes(level);
          }
          if (hasItem) {
            closure_2 = handled;
            let obj2 = { level: _mod13379.severityLevelFromString(level), extra: null };
            const obj3 = { arguments: args };
            obj2.extra = obj3;
            const tmpResult = _mod13379;
            _mod13319.withScope((addEventProcessor) => {
              addEventProcessor.addEventProcessor((arg0) => {
                arg0.logger = "console";
                const result = args(level[6]).addExceptionMechanism(arg0, { handled, type: "console" });
                return arg0;
              });
              if ("assert" !== level) {
                const found = args.find((item) => item instanceof Error);
                if (found) {
                  args(13340).captureException(found, obj2);
                  const tmp14Result = args(13340);
                } else {
                  const tmp14Result2 = args(13301);
                  const safeJoinResult = args(13301).safeJoin(args, " ");
                  args(13340).captureMessage(safeJoinResult, obj2);
                  const obj4 = args(13340);
                }
              } else if (!args[0]) {
                const obj = args(13301);
                const _HermesInternal = HermesInternal;
                const combined = "Assertion failed: " + args(13301).safeJoin(args.slice(1), " ") || "console.assert";
                addEventProcessor.setExtra("arguments", args.slice(1));
                obj2 = args(13340);
                obj2.captureMessage(combined, obj2);
                const tmp4 = args(13301).safeJoin(args.slice(1), " ") || "console.assert";
              }
            });
            const tmpResult2 = _mod13319;
          }
        });
        let tmpResult = CONSOLE_LEVELS(handled[2]);
      }
    }
  };
});