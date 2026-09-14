// _runtime/metro/00962__.js
import _mod682 from "00682__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const setActiveSpanInBrowser = function setActiveSpanInBrowser(end) {
  activeSpan = activeSpan(currentScope[0]).getActiveSpan();
  if (activeSpan !== end) {
    currentScope = tmp(tmp2[0]).getCurrentScope();
    const _Proxy = Proxy;
    const obj2 = {
      apply(arg0, arg1, arg2) {
        const result = _mod682._INTERNAL_setSpanForScope(currentScope, activeSpan);
        return Reflect.apply(arg0, arg1, arg2);
      },
    };
    const proxy = new Proxy(end.end, obj2);
    end.end = proxy;
    const tmpResult = tmp(tmp2[0]);
    let result = tmp(tmp2[0])._INTERNAL_setSpanForScope(currentScope, end);
    const tmpResult2 = tmp(tmp2[0]);
  }
};
