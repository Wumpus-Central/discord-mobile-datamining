// _runtime/metro/00962__.js
import _mod682 from "00682__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const setActiveSpanInBrowser = function setActiveSpanInBrowser(end) {
  let obj = activeSpan(currentScope[0]);
  activeSpan = obj.getActiveSpan();
  if (activeSpan !== end) {
    let tmpResult = tmp(tmp2[0]);
    currentScope = tmpResult.getCurrentScope();
    const _Proxy = Proxy;
    obj = {
      apply(arg0, arg1, arg2) {
        const result = _mod682._INTERNAL_setSpanForScope(currentScope, activeSpan);
        return Reflect.apply(arg0, arg1, arg2);
      },
    };
    const proxy = new Proxy(end.end, obj);
    end.end = proxy;
    tmpResult = tmp(tmp2[0]);
    let result = tmpResult._INTERNAL_setSpanForScope(currentScope, end);
  }
};
