// === Module 12894: ? ===

// Module 12894
import _mod12868 from "module_12868" /* 12868 */;
import _mod12873 from "module_12873" /* 12873 */;
import _mod12885 from "module_12885" /* 12885 */;
import _mod12886 from "module_12886" /* 12886 */;
import ScopeClass from "ScopeClass" /* 12888 */;

require = arg1;
const dependencyMap = arg6;

export const getClient = function getClient() {
  const mainCarrier = _mod12885.getMainCarrier();
  const asyncContextStrategy = _mod12886.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
};
export const getCurrentScope = function getCurrentScope() {
  const mainCarrier = _mod12885.getMainCarrier();
  const asyncContextStrategy = _mod12886.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
};
export const getGlobalScope = function getGlobalScope() {
  return _mod12868.getGlobalSingleton("globalScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getIsolationScope = function getIsolationScope() {
  const mainCarrier = _mod12885.getMainCarrier();
  const asyncContextStrategy = _mod12886.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
};
export const getTraceContextFromScope = function getTraceContextFromScope(getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  return _mod12873.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
};
export const withIsolationScope = function withIsolationScope() {
  const items = [...arguments];
  const mainCarrier = _mod12885.getMainCarrier();
  const asyncContextStrategy = _mod12886.getAsyncContextStrategy(mainCarrier);
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
  const mainCarrier = _mod12885.getMainCarrier();
  const asyncContextStrategy = _mod12886.getAsyncContextStrategy(mainCarrier);
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