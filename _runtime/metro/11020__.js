// _runtime/metro/11020__.js
import _mod10994 from "10994__.js";
import _mod10999 from "10999__.js";
import _mod11011 from "11011__.js";
import _mod11012 from "11012__.js";
import ScopeClass from "../11014_ScopeClass.js";

require = arg1;
const dependencyMap = arg6;

export const getClient = function getClient() {
  const mainCarrier = _mod11011.getMainCarrier();
  const asyncContextStrategy = _mod11012.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
};
export const getCurrentScope = function getCurrentScope() {
  const mainCarrier = _mod11011.getMainCarrier();
  const asyncContextStrategy = _mod11012.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
};
export const getGlobalScope = function getGlobalScope() {
  return _mod10994.getGlobalSingleton("globalScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getIsolationScope = function getIsolationScope() {
  const mainCarrier = _mod11011.getMainCarrier();
  const asyncContextStrategy = _mod11012.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
};
export const getTraceContextFromScope = function getTraceContextFromScope(getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  return _mod10999.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
};
export const withIsolationScope = function withIsolationScope() {
  const items = [...arguments];
  const mainCarrier = _mod11011.getMainCarrier();
  const asyncContextStrategy = _mod11012.getAsyncContextStrategy(mainCarrier);
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
  const mainCarrier = _mod11011.getMainCarrier();
  const asyncContextStrategy = _mod11012.getAsyncContextStrategy(mainCarrier);
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
