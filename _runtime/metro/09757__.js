// === Module 9757: ? ===

// Module 9757
import _mod9731 from "module_9731" /* 9731 */;
import _mod9736 from "module_9736" /* 9736 */;
import _mod9748 from "module_9748" /* 9748 */;
import _mod9749 from "module_9749" /* 9749 */;
import ScopeClass from "ScopeClass" /* 9751 */;

require = arg1;
const dependencyMap = arg6;

export function getClient() {
  const mainCarrier = _mod9748.getMainCarrier();
  const asyncContextStrategy = _mod9749.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
}
export function getCurrentScope() {
  const mainCarrier = _mod9748.getMainCarrier();
  const asyncContextStrategy = _mod9749.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
export function getGlobalScope() {
  return _mod9731.getGlobalSingleton("globalScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}
export function getIsolationScope() {
  const mainCarrier = _mod9748.getMainCarrier();
  const asyncContextStrategy = _mod9749.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
}
export function getTraceContextFromScope(getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  return _mod9736.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
}
export function withIsolationScope() {
  items = [...arguments];
  const mainCarrier = _mod9748.getMainCarrier();
  const asyncContextStrategy = _mod9749.getAsyncContextStrategy(mainCarrier);
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
  const mainCarrier = _mod9748.getMainCarrier();
  const asyncContextStrategy = _mod9749.getAsyncContextStrategy(mainCarrier);
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