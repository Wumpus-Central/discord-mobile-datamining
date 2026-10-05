// === Module 188: ? ===

// Module 188
import _mod47 from "module_47" /* 47 */;
import toError from "toError" /* 184 */;
import SyntheticError from "SyntheticError" /* 189 */;

if (true !== global.RN$useAlwaysAvailableJSErrorHandling) {
  const _default = SyntheticError.default;
  let closure_1 = toError.default;
  const result = _default.installConsoleErrorReporter();
  if (!global.__fbDisableExceptionsManager) {
    const _default2 = _mod47.default;
    _default2.setGlobalHandler((arg0, arg1) => {
      try {
        _default.handleException(arg0, arg1);
      } catch (tmp4) {
        const _console = console;
        console.log("Failed to print error: ", closure_1(tmp4).message);
        throw arg0;
      }
    });
  }
}