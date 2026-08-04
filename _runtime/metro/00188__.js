// _runtime/metro/00188__.js
if (true !== global.RN$useAlwaysAvailableJSErrorHandling) {
  const _default = require("_isNativeReflectConstruct").default;
  let closure_1 = require("toError").default;
  const result = _default.installConsoleErrorReporter();
  if (!global.__fbDisableExceptionsManager) {
    require("module_47").default.setGlobalHandler((arg0, arg1) => {
      try {
        _default.handleException(arg0, arg1);
      } catch (tmp5) {
        const _console = console;
        console.log("Failed to print error: ", callback(tmp5).message);
        throw tmp;
      }
    });
    const _default2 = require("module_47").default;
  }
}