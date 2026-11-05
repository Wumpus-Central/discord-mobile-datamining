// === Module 13308: ? ===

// Module 13308
import _mod13282 from "module_13282" /* 13282 */;
import _mod13287 from "module_13287" /* 13287 */;
import _mod13299 from "module_13299" /* 13299 */;
import _mod13300 from "module_13300" /* 13300 */;
import ScopeClass from "ScopeClass" /* 13302 */;

require = arg1;
const dependencyMap = arg6;

export function getClient() {
  const mainCarrier = _mod13299.getMainCarrier();
  const asyncContextStrategy = _mod13300.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
}
export function getCurrentScope() {
  const mainCarrier = _mod13299.getMainCarrier();
  const asyncContextStrategy = _mod13300.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
export function getGlobalScope() {
  return _mod13282.getGlobalSingleton("globalScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}
export function getIsolationScope() {
  const mainCarrier = _mod13299.getMainCarrier();
  const asyncContextStrategy = _mod13300.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
}
export function getTraceContextFromScope(getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  return _mod13287.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
}
export function withIsolationScope() {
  items = [...arguments];
  const mainCarrier = _mod13299.getMainCarrier();
  const asyncContextStrategy = _mod13300.getAsyncContextStrategy(mainCarrier);
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
  items = [...arguments];
  const mainCarrier = _mod13299.getMainCarrier();
  const asyncContextStrategy = _mod13300.getAsyncContextStrategy(mainCarrier);
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