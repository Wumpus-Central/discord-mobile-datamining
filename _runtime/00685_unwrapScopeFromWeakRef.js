// === Module 685: unwrapScopeFromWeakRef ===

// Module 685 (unwrapScopeFromWeakRef)
import _mod686 from "module_686" /* 686 */;
import _mod687 from "module_687" /* 687 */;

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
    const result = _mod687.addNonEnumerableProperty(sentrySpan, _sentryIsolationScope, (function wrapScopeWithWeakRef(isolationScope) {
      try {
        let _WeakRef = _mod686.GLOBAL_OBJ.WeakRef;
        if (typeof _WeakRef === "function") {
          _WeakRef = new _WeakRef(isolationScope);
          return _WeakRef;
        } else {
          return isolationScope;
        }
      } catch (err) {
      }
    })(isolationScope));
    const result1 = _mod687.addNonEnumerableProperty(sentrySpan, _sentryScope, scope);
  }
};