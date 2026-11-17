// === Module 9837: ? ===

// Module 9837
import _mod9811 from "module_9811" /* 9811 */;
import _mod9816 from "module_9816" /* 9816 */;
import _mod9828 from "module_9828" /* 9828 */;
import _mod9829 from "module_9829" /* 9829 */;
import ScopeClass from "ScopeClass" /* 9831 */;

require = arg1;
const dependencyMap = arg6;

export function getClient() {
  const mainCarrier = _mod9828.getMainCarrier();
  const asyncContextStrategy = _mod9829.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
}
export function getCurrentScope() {
  const mainCarrier = _mod9828.getMainCarrier();
  const asyncContextStrategy = _mod9829.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
export function getGlobalScope() {
  return _mod9811.getGlobalSingleton("globalScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}
export function getIsolationScope() {
  const mainCarrier = _mod9828.getMainCarrier();
  const asyncContextStrategy = _mod9829.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
}
export function getTraceContextFromScope(getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  return _mod9816.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
}
export function withIsolationScope() {
  items = [...arguments];
  const mainCarrier = _mod9828.getMainCarrier();
  const asyncContextStrategy = _mod9829.getAsyncContextStrategy(mainCarrier);
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
  const mainCarrier = _mod9828.getMainCarrier();
  const asyncContextStrategy = _mod9829.getAsyncContextStrategy(mainCarrier);
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