// _runtime/07409_initAndBind.js
import { consoleSandbox } from "07347_consoleSandbox.js";
import { getClient } from "07374_getClient.js";
import { __SENTRY_DEBUG__ } from "metro/07375___SENTRY_DEBUG__.js";
const require = arg1;
const dependencyMap = arg6;
arg5.initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = consoleSandbox;
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = getClient.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj2 = getClient;
  const currentScope1 = getClient.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
arg5.setCurrentClient = function setCurrentClient(arg0) {
  const currentScope = getClient.getCurrentScope();
  currentScope.setClient(arg0);
};