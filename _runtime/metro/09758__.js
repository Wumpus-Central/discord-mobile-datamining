// _runtime/metro/09758__.js
import _mod9732 from "09732__.js";
import _mod9737 from "09737__.js";
import _mod9749 from "09749__.js";
import _mod9750 from "09750__.js";
import ScopeClass from "../09752_ScopeClass.js";

require = arg1;
const dependencyMap = arg6;

export function getClient() {
  const mainCarrier = _mod9749.getMainCarrier();
  const asyncContextStrategy = _mod9750.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
}
export function getCurrentScope() {
  const mainCarrier = _mod9749.getMainCarrier();
  const asyncContextStrategy = _mod9750.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
export function getGlobalScope() {
  return _mod9732.getGlobalSingleton("globalScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}
export function getIsolationScope() {
  const mainCarrier = _mod9749.getMainCarrier();
  const asyncContextStrategy = _mod9750.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
}
export function getTraceContextFromScope(getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  return _mod9737.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
}
export function withIsolationScope() {
  items = [...arguments];
  const mainCarrier = _mod9749.getMainCarrier();
  const asyncContextStrategy = _mod9750.getAsyncContextStrategy(mainCarrier);
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
  const mainCarrier = _mod9749.getMainCarrier();
  const asyncContextStrategy = _mod9750.getAsyncContextStrategy(mainCarrier);
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
