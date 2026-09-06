// === Module 713: ? ===

// Module 713
import _mod690 from "module_690" /* 690 */;
import generateSpanId from "generateSpanId" /* 694 */;
import _mod706 from "module_706" /* 706 */;
import Scope from "Scope" /* 708 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getClient = function getClient() {
  const mainCarrier = _mod690.getMainCarrier();
  const asyncContextStrategy = _mod706.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
};
export const getCurrentScope = function getCurrentScope() {
  const mainCarrier = _mod690.getMainCarrier();
  const asyncContextStrategy = _mod706.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
};
export const getGlobalScope = function getGlobalScope() {
  return _mod690.getGlobalSingleton("globalScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
};
export const getIsolationScope = function getIsolationScope() {
  const mainCarrier = _mod690.getMainCarrier();
  const asyncContextStrategy = _mod706.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
};
export const getTraceContextFromScope = function getTraceContextFromScope(getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  const parentSpanId = propagationContext.parentSpanId;
  const obj = { trace_id: propagationContext.traceId, span_id: null };
  let propagationSpanId = propagationContext.propagationSpanId;
  if (!propagationSpanId) {
    propagationSpanId = generateSpanId.generateSpanId();
  }
  obj.span_id = propagationSpanId;
  if (parentSpanId) {
    obj.parent_span_id = parentSpanId;
  }
  return obj;
};
export const withIsolationScope = function withIsolationScope() {
  const items = [...arguments];
  const mainCarrier = _mod690.getMainCarrier();
  const asyncContextStrategy = _mod706.getAsyncContextStrategy(mainCarrier);
  if (2 === items.length) {
    [tmp2, tmp3] = items;
    if (tmp2) {
      let result = asyncContextStrategy.withSetIsolationScope(tmp2, tmp3);
    } else {
      result = asyncContextStrategy.withIsolationScope(tmp3);
    }
    return result;
  } else {
    return asyncContextStrategy.withIsolationScope(items[0]);
  }
};
export const withScope = function withScope() {
  const items = [...arguments];
  const mainCarrier = _mod690.getMainCarrier();
  const asyncContextStrategy = _mod706.getAsyncContextStrategy(mainCarrier);
  if (2 === items.length) {
    [tmp2, tmp3] = items;
    if (tmp2) {
      let withSetScopeResult = asyncContextStrategy.withSetScope(tmp2, tmp3);
    } else {
      withSetScopeResult = asyncContextStrategy.withScope(tmp3);
    }
    return withSetScopeResult;
  } else {
    return asyncContextStrategy.withScope(items[0]);
  }
};