// === Module 12340: ? ===

// Module 12340
import _mod12314 from "module_12314" /* 12314 */;
import _mod12319 from "module_12319" /* 12319 */;
import _mod12331 from "module_12331" /* 12331 */;
import _mod12332 from "module_12332" /* 12332 */;
import ScopeClass from "ScopeClass" /* 12334 */;

require = arg1;
const dependencyMap = arg6;

export const getClient = function getClient() {
  const mainCarrier = _mod12331.getMainCarrier();
  const asyncContextStrategy = _mod12332.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
};
export const getCurrentScope = function getCurrentScope() {
  const mainCarrier = _mod12331.getMainCarrier();
  const asyncContextStrategy = _mod12332.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
};
export const getGlobalScope = function getGlobalScope() {
  return _mod12314.getGlobalSingleton("globalScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getIsolationScope = function getIsolationScope() {
  const mainCarrier = _mod12331.getMainCarrier();
  const asyncContextStrategy = _mod12332.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
};
export const getTraceContextFromScope = function getTraceContextFromScope(getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  return _mod12319.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
};
export const withIsolationScope = function withIsolationScope() {
  const items = [...arguments];
  const mainCarrier = _mod12331.getMainCarrier();
  const asyncContextStrategy = _mod12332.getAsyncContextStrategy(mainCarrier);
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
  const mainCarrier = _mod12331.getMainCarrier();
  const asyncContextStrategy = _mod12332.getAsyncContextStrategy(mainCarrier);
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