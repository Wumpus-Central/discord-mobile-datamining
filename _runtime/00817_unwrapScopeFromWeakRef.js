// === Module 817: unwrapScopeFromWeakRef ===

// Module 817 (unwrapScopeFromWeakRef)
import addNonEnumerableProperty from "addNonEnumerableProperty" /* 819 */;

require = arg1;
const dependencyMap = arg6;
function unwrapScopeFromWeakRef(obj) {
  if (obj) {
    if (typeof obj === "object") {
      if ("deref" in obj) {
        if (typeof obj.deref === "function") {
          try {
            return obj.deref();
          } catch (err) {
          }
        }
      }
    }
    return obj;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";
arg5.getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: unwrapScopeFromWeakRef(scope[_sentryIsolationScope]) };
};
arg5.setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = addNonEnumerableProperty.addNonEnumerableProperty(arg0, _sentryIsolationScope, (function wrapScopeWithWeakRef(arg0) {
      try {
        let _WeakRef = callback(table[0]).GLOBAL_OBJ.WeakRef;
        if (typeof _WeakRef === "function") {
          _WeakRef = new _WeakRef(arg0);
          return _WeakRef;
        } else {
          return arg0;
        }
      } catch (err) {
      }
    })(arg2));
    const obj = addNonEnumerableProperty;
    const result1 = addNonEnumerableProperty.addNonEnumerableProperty(arg0, _sentryScope, arg1);
    const obj2 = addNonEnumerableProperty;
  }
};