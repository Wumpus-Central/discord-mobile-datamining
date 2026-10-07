// === Module 188: ? ===

// Module 188
import _mod47 from "module_47" /* 47 */;
import _mod184 from "module_184" /* 184 */;
import _mod189 from "module_189" /* 189 */;

if (true !== global.RN$useAlwaysAvailableJSErrorHandling) {
  let closure_1 = _mod184.default;
  const result = _mod189.default.installConsoleErrorReporter();
  if (!global.__fbDisableExceptionsManager) {
    _mod47.default.setGlobalHandler((arg0, arg1) => {
      try {
        _default.handleException(arg0, arg1);
      } catch (tmp5) {
        const _console = console;
        console.log("Failed to print error: ", closure_1(tmp5).message);
        throw tmp;
      }
    });
    const _default2 = _mod47.default;
  }
  const _default = _mod189.default;
}