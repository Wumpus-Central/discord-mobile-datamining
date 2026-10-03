// === Module 696: unwrapScopeFromWeakRef ===

// Module 696 (unwrapScopeFromWeakRef)
import _mod697 from "module_697" /* 697 */;
import _mod698 from "module_698" /* 698 */;

require = arg1;
const dependencyMap = arg6;
function unwrapScopeFromWeakRef(deref) {
  if (deref) {
    if (typeof deref === "object") {
      if ("deref" in deref) {
        if (typeof deref.deref === "function") {
          try {
            return deref.deref();
          } catch (err) {
          }
        }
      }
    }
    return deref;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: unwrapScopeFromWeakRef(scope[_sentryIsolationScope]) };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(sentrySpan, scope, isolationScope) {
  if (sentrySpan) {
    const result = _mod698.addNonEnumerableProperty(sentrySpan, _sentryIsolationScope, (function wrapScopeWithWeakRef(isolationScope) {
      try {
        const _WeakRef = _mod697.GLOBAL_OBJ.WeakRef;
        if (typeof _WeakRef === "function") {
          const _WeakRef1 = new _WeakRef(isolationScope);
          return _WeakRef1;
        } else {
          return isolationScope;
        }
      } catch (err) {
      }
    })(isolationScope));
    const result1 = _mod698.addNonEnumerableProperty(sentrySpan, _sentryScope, scope);
  }
};