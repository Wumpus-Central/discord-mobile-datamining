// _runtime/metro/00696__.js
import _mod697 from "00697__.js";
import _mod698 from "00698__.js";

function unwrapScopeFromWeakRef(deref) {
  const tmp = deref;
  if (tmp) {
    if (typeof deref === "object") {
      if ("deref" in deref) {
        if (typeof deref.deref === "function") {
          try {
            return deref.deref();
          } catch (err) {}
        }
      }
    }
    return deref;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  const obj = { scope: scope[_sentryScope], isolationScope: unwrapScopeFromWeakRef(scope[_sentryIsolationScope]) };
  return obj;
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(sentrySpan, scope, isolationScope) {
  function wrapScopeWithWeakRef(isolationScope) {
    try {
      const _WeakRef = _mod697.GLOBAL_OBJ.WeakRef;
      if (typeof _WeakRef === "function") {
        const self = this;
        const self2 = this;
        const _WeakRef1 = new _WeakRef(isolationScope);
        return _WeakRef1;
      } else {
        return isolationScope;
      }
    } catch (err) {}
  }
  const tmp = sentrySpan;
  if (tmp) {
    const obj = _mod698;
    const result = obj.addNonEnumerableProperty(
      sentrySpan,
      _sentryIsolationScope,
      wrapScopeWithWeakRef(isolationScope),
    );
    const obj2 = _mod698;
    const result1 = obj2.addNonEnumerableProperty(sentrySpan, _sentryScope, scope);
  }
};
