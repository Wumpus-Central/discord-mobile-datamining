// === Module 12880: ? ===

// Module 12880
import _mod12854 from "module_12854" /* 12854 */;
import _mod12859 from "module_12859" /* 12859 */;
import _mod12871 from "module_12871" /* 12871 */;
import _mod12872 from "module_12872" /* 12872 */;
import ScopeClass from "ScopeClass" /* 12874 */;

require = arg1;
const dependencyMap = arg6;

export function getClient() {
  const mainCarrier = _mod12871.getMainCarrier();
  const asyncContextStrategy = _mod12872.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
}
export function getCurrentScope() {
  const mainCarrier = _mod12871.getMainCarrier();
  const asyncContextStrategy = _mod12872.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
export function getGlobalScope() {
  return _mod12854.getGlobalSingleton("globalScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}
export function getIsolationScope() {
  const mainCarrier = _mod12871.getMainCarrier();
  const asyncContextStrategy = _mod12872.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
}
export function getTraceContextFromScope(getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  return _mod12859.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
}
export function withIsolationScope() {
  const items = [...arguments];
  const mainCarrier = _mod12871.getMainCarrier();
  const asyncContextStrategy = _mod12872.getAsyncContextStrategy(mainCarrier);
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
}
export function withScope() {
  const items = [...arguments];
  const mainCarrier = _mod12871.getMainCarrier();
  const asyncContextStrategy = _mod12872.getAsyncContextStrategy(mainCarrier);
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
}