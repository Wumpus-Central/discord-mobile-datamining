// === Module 12552: ? ===

// Module 12552
import _mod12526 from "module_12526" /* 12526 */;
import _mod12531 from "module_12531" /* 12531 */;
import _mod12543 from "module_12543" /* 12543 */;
import _mod12544 from "module_12544" /* 12544 */;
import ScopeClass from "ScopeClass" /* 12546 */;

require = arg1;
const dependencyMap = arg6;

export const getClient = function getClient() {
  const mainCarrier = _mod12543.getMainCarrier();
  const asyncContextStrategy = _mod12544.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
};
export const getCurrentScope = function getCurrentScope() {
  const mainCarrier = _mod12543.getMainCarrier();
  const asyncContextStrategy = _mod12544.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
};
export const getGlobalScope = function getGlobalScope() {
  return _mod12526.getGlobalSingleton("globalScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getIsolationScope = function getIsolationScope() {
  const mainCarrier = _mod12543.getMainCarrier();
  const asyncContextStrategy = _mod12544.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
};
export const getTraceContextFromScope = function getTraceContextFromScope(getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  return _mod12531.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
};
export const withIsolationScope = function withIsolationScope() {
  const items = [...arguments];
  const mainCarrier = _mod12543.getMainCarrier();
  const asyncContextStrategy = _mod12544.getAsyncContextStrategy(mainCarrier);
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
  const mainCarrier = _mod12543.getMainCarrier();
  const asyncContextStrategy = _mod12544.getAsyncContextStrategy(mainCarrier);
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