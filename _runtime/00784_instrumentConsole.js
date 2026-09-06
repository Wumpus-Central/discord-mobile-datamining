// === Module 784: instrumentConsole ===

// Module 784 (instrumentConsole)
import _mod686 from "module_686" /* 686 */;
import consoleSandbox from "consoleSandbox" /* 689 */;
import _mod715 from "module_715" /* 715 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod686.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = consoleSandbox.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(686).GLOBAL_OBJ.console) {
        tmp(687).fill(tmp(686).GLOBAL_OBJ.console, item, (arg0) => {
          consoleSandbox.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(715).triggerHandlers("console", { args: items, level });
            const obj3 = level(689).originalConsoleMethods[level];
            if (obj3 != null) {
              obj3.apply(level(686).GLOBAL_OBJ.console, items);
            }
          };
        });
        const tmpResult = tmp(687);
      }
    });
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  _mod715.addHandler("console", arg0);
  _mod715.maybeInstrument("console", instrumentConsole);
};