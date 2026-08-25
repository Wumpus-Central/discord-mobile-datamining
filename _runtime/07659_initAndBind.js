// _runtime/07659_initAndBind.js
import consoleSandbox from "07597_consoleSandbox.js";
import getClient from "07624_getClient.js";
import __SENTRY_DEBUG__ from "metro/07625___SENTRY_DEBUG__.js";

require = arg1;
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