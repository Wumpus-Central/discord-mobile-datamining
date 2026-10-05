// === Module 794: captureConsoleIntegration ===

// Module 794 (captureConsoleIntegration)
import _mod724 from "module_724" /* 724 */;
import severityLevelFromString from "severityLevelFromString" /* 796 */;
import module_763 from "module_763" /* 763 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const captureConsoleIntegration = module_763.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let CONSOLE_LEVELS;
  let flag;
  CONSOLE_LEVELS = obj.levels || CONSOLE_LEVELS(flag[0]).CONSOLE_LEVELS;
  flag = obj.handled;
  if (flag == null) {
    flag = true;
  }
  let obj2 = {
    name: "CaptureConsole",
    setup(arg0) {
      let closure_0 = arg0;
      if ("console" in CONSOLE_LEVELS(flag[1]).GLOBAL_OBJ) {
        let tmpResult = CONSOLE_LEVELS(flag[2]);
        let result = tmpResult.addConsoleInstrumentationHandler(function(arg0) {
          let args;
          let level;
          let obj3;
          let tmpResult3;
          ({ args, level } = arg0);
          let obj = _mod724;
          const hasItem = obj.getClient() === closure_0 && CONSOLE_LEVELS.includes(level);
          if (hasItem) {
            let closure_2 = flag;
            const tmpResult = severityLevelFromString;
            let closure_3 = tmpResult.severityLevelFromString(level);
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error();
            let obj2 = { level: tmpResult3.severityLevelFromString(level), extra: obj3 };
            obj3 = { arguments: args };
            tmpResult3 = severityLevelFromString;
            const tmpResult4 = _mod724;
            tmpResult4.withScope((addEventProcessor) => {
              let handled;
              addEventProcessor.addEventProcessor((arg0) => {
                arg0.logger = "console";
                const obj = args(level[6]);
                obj2 = { handled, type: "auto.core.capture_console" };
                const result = obj.addExceptionMechanism(arg0, obj2);
                return arg0;
              });
              if ("assert" !== level) {
                const found = args.find((item) => item instanceof Error);
                if (found) {
                  const tmp14Result = closure_2_0(closure_2_1[8]);
                  tmp14Result.captureException(found, obj2);
                } else {
                  obj2 = { captureContext: obj2, syntheticException: error };
                  const tmp14Result2 = closure_2_0(closure_2_1[7]);
                  addEventProcessor.captureMessage(tmp14Result2.safeJoin(args, " "), closure_3, obj2);
                }
              } else if (!args[0]) {
                let obj = closure_2_0(closure_2_1[7]);
                const _HermesInternal = HermesInternal;
                const tmp4 = obj.safeJoin(args.slice(1), " ") || "console.assert";
                const combined = "Assertion failed: " + tmp4;
                addEventProcessor.setExtra("arguments", args.slice(1));
                const obj3 = { captureContext: obj2, syntheticException: error };
                addEventProcessor.captureMessage(combined, closure_3, obj3);
              }
            });
          }
        });
      }
    }
  };
  return obj2;
});