// === Module 973: ? ===

// Module 973
import _mod693 from "module_693" /* 693 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const setActiveSpanInBrowser = function setActiveSpanInBrowser(end) {
  let activeSpan;
  let currentScope;
  let obj = activeSpan(currentScope[0]);
  activeSpan = obj.getActiveSpan();
  if (activeSpan !== end) {
    const tmpResult = activeSpan(currentScope[0]);
    currentScope = tmpResult.getCurrentScope();
    const _Proxy = Proxy;
    const self = this;
    const self2 = this;
    const obj2 = {
      apply(arg0, arg1, arg2) {
          const obj = _mod693;
          const result = obj._INTERNAL_setSpanForScope(currentScope, activeSpan);
          return Reflect.apply(arg0, arg1, arg2);
        }
    };
    const proxy = new Proxy(end.end, obj2);
    end.end = proxy;
    const tmpResult2 = activeSpan(currentScope[0]);
    let result = tmpResult2._INTERNAL_setSpanForScope(currentScope, end);
  }
};