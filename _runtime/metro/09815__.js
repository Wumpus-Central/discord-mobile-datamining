// _runtime/metro/09815__.js
import _mod9757 from "09757__.js";
import _mod9817 from "09817__.js";
import setupIntegration from "09786__.js";

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
          let hasItem = _mod9757.getClient() === args;
          if (hasItem) {
            hasItem = CONSOLE_LEVELS.includes(level);
          }
          if (hasItem) {
            closure_2 = handled;
            let obj2 = { level: _mod9817.severityLevelFromString(level), extra: null };
            const obj3 = { arguments: args };
            obj2.extra = obj3;
            const tmpResult = _mod9817;
            _mod9757.withScope((addEventProcessor) => {
              addEventProcessor.addEventProcessor((arg0) => {
                arg0.logger = "console";
                const result = args(level[6]).addExceptionMechanism(arg0, { handled, type: "console" });
                return arg0;
              });
              if ("assert" !== level) {
                const found = args.find((item) => item instanceof Error);
                if (found) {
                  args(9778).captureException(found, obj2);
                  const tmp14Result = args(9778);
                } else {
                  const tmp14Result2 = args(9739);
                  const safeJoinResult = args(9739).safeJoin(args, " ");
                  args(9778).captureMessage(safeJoinResult, obj2);
                  const obj4 = args(9778);
                }
              } else if (!args[0]) {
                const obj = args(9739);
                const _HermesInternal = HermesInternal;
                const combined = "Assertion failed: " + args(9739).safeJoin(args.slice(1), " ") || "console.assert";
                addEventProcessor.setExtra("arguments", args.slice(1));
                obj2 = args(9778);
                obj2.captureMessage(combined, obj2);
                const tmp4 = args(9739).safeJoin(args.slice(1), " ") || "console.assert";
              }
            });
            const tmpResult2 = _mod9757;
          }
        });
        let tmpResult = CONSOLE_LEVELS(handled[2]);
      }
    },
  };
});
