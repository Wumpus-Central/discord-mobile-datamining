// _runtime/metro/12665__.js
import _mod12607 from "12607__.js";
import _mod12667 from "12667__.js";
import 12636__ from "12636__.js";


export const captureConsoleIntegration = module_12636.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let CONSOLE_LEVELS;
  let handled;
  CONSOLE_LEVELS = obj.levels || CONSOLE_LEVELS(handled[0]).CONSOLE_LEVELS;
  handled = obj.handled;
  let obj2 = {
    name: "CaptureConsole",
    setup(arg0) {
      let closure_0 = arg0;
      if ("console" in CONSOLE_LEVELS(handled[1]).GLOBAL_OBJ) {
        let tmpResult = CONSOLE_LEVELS(handled[2]);
        let result = tmpResult.addConsoleInstrumentationHandler((arg0) => {
          let args;
          let level;
          let obj3;
          let tmpResult;
          ({ args, level } = arg0);
          let obj = _mod12607;
          const hasItem = obj.getClient() === closure_0 && CONSOLE_LEVELS.includes(level);
          if (hasItem) {
            let closure_2 = handled;
            let obj2 = { level: tmpResult.severityLevelFromString(level), extra: obj3 };
            obj3 = { arguments: args };
            tmpResult = _mod12667;
            const tmpResult2 = _mod12607;
            tmpResult2.withScope((addEventProcessor) => {
              addEventProcessor.addEventProcessor((arg0) => {
                arg0.logger = "console";
                const obj = args(level[6]);
                obj2 = { handled, type: "console" };
                const result = obj.addExceptionMechanism(arg0, obj2);
                return arg0;
              });
              if ("assert" !== level) {
                const found = args.find((item) => item instanceof Error);
                if (found) {
                  const tmp14Result = closure_2_0(closure_2_1[8]);
                  tmp14Result.captureException(found, obj2);
                } else {
                  const tmp14Result2 = closure_2_0(closure_2_1[7]);
                  const safeJoinResult = tmp14Result2.safeJoin(args, " ");
                  const obj4 = closure_2_0(closure_2_1[8]);
                  obj4.captureMessage(safeJoinResult, obj2);
                }
              } else if (!args[0]) {
                let obj = closure_2_0(closure_2_1[7]);
                const _HermesInternal = HermesInternal;
                const tmp4 = obj.safeJoin(args.slice(1), " ") || "console.assert";
                const combined = "Assertion failed: " + tmp4;
                addEventProcessor.setExtra("arguments", args.slice(1));
                obj2 = closure_2_0(closure_2_1[8]);
                obj2.captureMessage(combined, obj2);
              }
            });
          }
        });
      }
    }
  };
  return obj2;
});