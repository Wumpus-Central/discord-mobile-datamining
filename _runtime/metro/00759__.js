// _runtime/metro/00759__.js
import __SENTRY_DEBUG__ from "00687___SENTRY_DEBUG__.js";
import consoleSandbox from "../00688_consoleSandbox.js";
import _mod712 from "00712__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function initAndBind(BrowserClient, merged2) {
  if (true === merged2.debug) {
    const obj = consoleSandbox;
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug = obj.debug;
      debug.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = _mod712.getCurrentScope();
  currentScope.update(merged2.initialScope);
  const obj4 = new BrowserClient(merged2);
  const currentScope1 = _mod712.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(_client) {
  const currentScope = _mod712.getCurrentScope();
  currentScope.setClient(_client);
}
