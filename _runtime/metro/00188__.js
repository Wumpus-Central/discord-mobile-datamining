// _runtime/metro/00188__.js
import _mod47 from "00047__.js";
import _mod184 from "00184__.js";
import _mod189 from "00189__.js";

if (true !== global.RN$useAlwaysAvailableJSErrorHandling) {
  const _default = _mod189.default;
  let closure_1 = _mod184.default;
  const result = _default.installConsoleErrorReporter();
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
}
