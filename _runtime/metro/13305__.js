// === Module 13305: ? ===

// Module 13305
import _mod13279 from "module_13279" /* 13279 */;
import _mod13284 from "module_13284" /* 13284 */;
import _mod13296 from "module_13296" /* 13296 */;
import _mod13297 from "module_13297" /* 13297 */;
import ScopeClass from "ScopeClass" /* 13299 */;

require = arg1;
const dependencyMap = arg6;

export function getClient() {
  const mainCarrier = _mod13296.getMainCarrier();
  const asyncContextStrategy = _mod13297.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
}
export function getCurrentScope() {
  const mainCarrier = _mod13296.getMainCarrier();
  const asyncContextStrategy = _mod13297.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
export function getGlobalScope() {
  return _mod13279.getGlobalSingleton("globalScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}
export function getIsolationScope() {
  const mainCarrier = _mod13296.getMainCarrier();
  const asyncContextStrategy = _mod13297.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
}
export function getTraceContextFromScope(getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  return _mod13284.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
}
export function withIsolationScope() {
  items = [...arguments];
  const mainCarrier = _mod13296.getMainCarrier();
  const asyncContextStrategy = _mod13297.getAsyncContextStrategy(mainCarrier);
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
  const mainCarrier = _mod13296.getMainCarrier();
  const asyncContextStrategy = _mod13297.getAsyncContextStrategy(mainCarrier);
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