// === Module 784: instrumentConsole ===

// Module 784 (instrumentConsole)
import _mod686 from "module_686" /* 686 */;
import consoleSandbox from "consoleSandbox" /* 689 */;
import addHandler from "addHandler" /* 715 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod686.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = consoleSandbox.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((arg0) => {
      const callback = arg0;
      if (arg0 in callback(table[1]).GLOBAL_OBJ.console) {
        tmp(tmp2[3]).fill(tmp(tmp2[1]).GLOBAL_OBJ.console, arg0, (arg0) => {
          callback(closure_1_1[2]).originalConsoleMethods[callback] = arg0;
          return () => {
            const items = [...arguments];
            closure_1_0(closure_1_1[0]).triggerHandlers("console", { args: items, level: closure_0 });
            const obj3 = closure_1_0(closure_1_1[2]).originalConsoleMethods[closure_0];
            if (obj3 != null) {
              obj3.apply(closure_1_0(closure_1_1[1]).GLOBAL_OBJ.console, items);
            }
          };
        });
        const tmpResult = tmp(tmp2[3]);
      }
    });
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  addHandler.addHandler("console", arg0);
  const obj = addHandler;
  addHandler.maybeInstrument("console", instrumentConsole);
};