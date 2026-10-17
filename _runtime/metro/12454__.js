// === Module 12454: ? ===

// Module 12454
import _mod12396 from "module_12396" /* 12396 */;
import _mod12456 from "module_12456" /* 12456 */;
import setupIntegration from "module_12425" /* 12425 */;


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
          let hasItem = _mod12396.getClient() === args;
          if (hasItem) {
            hasItem = CONSOLE_LEVELS.includes(level);
          }
          if (hasItem) {
            closure_2 = handled;
            let obj2 = { level: _mod12456.severityLevelFromString(level), extra: null };
            const obj3 = { arguments: args };
            obj2.extra = obj3;
            const tmpResult = _mod12456;
            _mod12396.withScope((addEventProcessor) => {
              addEventProcessor.addEventProcessor((arg0) => {
                arg0.logger = "console";
                const result = args(level[6]).addExceptionMechanism(arg0, { handled, type: "console" });
                return arg0;
              });
              if ("assert" !== level) {
                const found = args.find((item) => item instanceof Error);
                if (found) {
                  args(12417).captureException(found, obj2);
                  const tmp14Result = args(12417);
                } else {
                  const tmp14Result2 = args(12378);
                  const safeJoinResult = args(12378).safeJoin(args, " ");
                  args(12417).captureMessage(safeJoinResult, obj2);
                  const obj4 = args(12417);
                }
              } else if (!args[0]) {
                const obj = args(12378);
                const _HermesInternal = HermesInternal;
                const combined = "Assertion failed: " + args(12378).safeJoin(args.slice(1), " ") || "console.assert";
                addEventProcessor.setExtra("arguments", args.slice(1));
                obj2 = args(12417);
                obj2.captureMessage(combined, obj2);
                const tmp4 = args(12378).safeJoin(args.slice(1), " ") || "console.assert";
              }
            });
            const tmpResult2 = _mod12396;
          }
        });
        let tmpResult = CONSOLE_LEVELS(handled[2]);
      }
    }
  };
});