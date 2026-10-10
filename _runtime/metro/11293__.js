// === Module 11293: ? ===

// Module 11293
import _mod11235 from "module_11235" /* 11235 */;
import _mod11295 from "module_11295" /* 11295 */;
import setupIntegration from "module_11264" /* 11264 */;


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
          let hasItem = _mod11235.getClient() === args;
          if (hasItem) {
            hasItem = CONSOLE_LEVELS.includes(level);
          }
          if (hasItem) {
            closure_2 = handled;
            let obj2 = { level: _mod11295.severityLevelFromString(level), extra: null };
            const obj3 = { arguments: args };
            obj2.extra = obj3;
            const tmpResult = _mod11295;
            _mod11235.withScope((addEventProcessor) => {
              addEventProcessor.addEventProcessor((arg0) => {
                arg0.logger = "console";
                const result = args(level[6]).addExceptionMechanism(arg0, { handled, type: "console" });
                return arg0;
              });
              if ("assert" !== level) {
                const found = args.find((item) => item instanceof Error);
                if (found) {
                  args(11256).captureException(found, obj2);
                  const tmp14Result = args(11256);
                } else {
                  const tmp14Result2 = args(11217);
                  const safeJoinResult = args(11217).safeJoin(args, " ");
                  args(11256).captureMessage(safeJoinResult, obj2);
                  const obj4 = args(11256);
                }
              } else if (!args[0]) {
                const obj = args(11217);
                const _HermesInternal = HermesInternal;
                const combined = "Assertion failed: " + args(11217).safeJoin(args.slice(1), " ") || "console.assert";
                addEventProcessor.setExtra("arguments", args.slice(1));
                obj2 = args(11256);
                obj2.captureMessage(combined, obj2);
                const tmp4 = args(11217).safeJoin(args.slice(1), " ") || "console.assert";
              }
            });
            const tmpResult2 = _mod11235;
          }
        });
        let tmpResult = CONSOLE_LEVELS(handled[2]);
      }
    }
  };
});