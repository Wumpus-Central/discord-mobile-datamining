// _runtime/00685_unwrapScopeFromWeakRef.js
import _mod686 from "metro/00686__.js";
import _mod687 from "metro/00687__.js";

require = arg1;
const dependencyMap = arg6;
function unwrapScopeFromWeakRef(deref) {
  if (deref) {
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
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: unwrapScopeFromWeakRef(scope[_sentryIsolationScope]) };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = _mod687.addNonEnumerableProperty(
      arg0,
      _sentryIsolationScope,
      (function wrapScopeWithWeakRef(arg0) {
        try {
          let _WeakRef = _mod686.GLOBAL_OBJ.WeakRef;
          if (typeof _WeakRef === "function") {
            _WeakRef = new _WeakRef(arg0);
            return _WeakRef;
          } else {
            return arg0;
          }
        } catch (err) {}
      })(arg2),
    );
    const result1 = _mod687.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
