// _runtime/metro/13031__.js
import _mod13005 from "13005__.js";
import _mod13010 from "13010__.js";
import _mod13022 from "13022__.js";
import _mod13023 from "13023__.js";
import ScopeClass from "../13025_ScopeClass.js";

require = arg1;
const dependencyMap = arg6;

export function getClient() {
  const mainCarrier = _mod13022.getMainCarrier();
  const asyncContextStrategy = _mod13023.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
}
export function getCurrentScope() {
  const mainCarrier = _mod13022.getMainCarrier();
  const asyncContextStrategy = _mod13023.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
export function getGlobalScope() {
  return _mod13005.getGlobalSingleton("globalScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}
export function getIsolationScope() {
  const mainCarrier = _mod13022.getMainCarrier();
  const asyncContextStrategy = _mod13023.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
}
export function getTraceContextFromScope(getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  return _mod13010.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
}
export function withIsolationScope() {
  const items = [...arguments];
  const mainCarrier = _mod13022.getMainCarrier();
  const asyncContextStrategy = _mod13023.getAsyncContextStrategy(mainCarrier);
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
  const mainCarrier = _mod13022.getMainCarrier();
  const asyncContextStrategy = _mod13023.getAsyncContextStrategy(mainCarrier);
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
