// === Module 13077: ? ===

// Module 13077
import _mod13051 from "module_13051" /* 13051 */;
import _mod13056 from "module_13056" /* 13056 */;
import _mod13068 from "module_13068" /* 13068 */;
import _mod13069 from "module_13069" /* 13069 */;
import ScopeClass from "ScopeClass" /* 13071 */;

require = arg1;
const dependencyMap = arg6;

export const getClient = function getClient() {
  const mainCarrier = _mod13068.getMainCarrier();
  const asyncContextStrategy = _mod13069.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
};
export const getCurrentScope = function getCurrentScope() {
  const mainCarrier = _mod13068.getMainCarrier();
  const asyncContextStrategy = _mod13069.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
};
export const getGlobalScope = function getGlobalScope() {
  return _mod13051.getGlobalSingleton("globalScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getIsolationScope = function getIsolationScope() {
  const mainCarrier = _mod13068.getMainCarrier();
  const asyncContextStrategy = _mod13069.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
};
export const getTraceContextFromScope = function getTraceContextFromScope(getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  return _mod13056.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
};
export const withIsolationScope = function withIsolationScope() {
  const items = [...arguments];
  const mainCarrier = _mod13068.getMainCarrier();
  const asyncContextStrategy = _mod13069.getAsyncContextStrategy(mainCarrier);
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
  const mainCarrier = _mod13068.getMainCarrier();
  const asyncContextStrategy = _mod13069.getAsyncContextStrategy(mainCarrier);
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