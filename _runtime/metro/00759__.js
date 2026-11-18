// === Module 759: ? ===

// Module 759
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 687 */;
import consoleSandbox from "consoleSandbox" /* 688 */;
import _mod712 from "module_712" /* 712 */;

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