// _runtime/metro/00188__.js
import _mod47 from "00047__.js";
import toError from "../00184_toError.js";
import SyntheticError from "../00189_SyntheticError.js";

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
