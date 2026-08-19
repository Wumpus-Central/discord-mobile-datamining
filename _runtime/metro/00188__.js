// _runtime/metro/00188__.js
import _mod47 from "00047__.js";
import toError from "../00184_toError.js";
import _isNativeReflectConstruct from "../00189__isNativeReflectConstruct.js";

if (true !== global.RN$useAlwaysAvailableJSErrorHandling) {
  let closure_1 = toError.default;
  const result = _isNativeReflectConstruct.default.installConsoleErrorReporter();
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
  const _default = _isNativeReflectConstruct.default;
}