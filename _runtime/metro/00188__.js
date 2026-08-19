// === Module 188: ? ===

// Module 188
import _mod47 from "module_47" /* 47 */;
import toError from "toError" /* 184 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 189 */;

if (true !== global.RN$useAlwaysAvailableJSErrorHandling) {
  const _default = _isNativeReflectConstruct.default;
  let closure_1 = toError.default;
  const result = _default.installConsoleErrorReporter();
  if (!global.__fbDisableExceptionsManager) {
    _mod47.default.setGlobalHandler((arg0, arg1) => {
      try {
        _default.handleException(arg0, arg1);
      } catch (tmp5) {
        const _console = console;
        console.log("Failed to print error: ", callback(tmp5).message);
        throw tmp;
      }
    });
    const _default2 = _mod47.default;
  }
}