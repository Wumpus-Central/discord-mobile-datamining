// === Module 7765: getClient ===

// Module 7765 (getClient)
import getGlobalSingleton from "getGlobalSingleton" /* 7739 */;
import addNonEnumerableProperty from "addNonEnumerableProperty" /* 7744 */;
import getMainCarrier from "getMainCarrier" /* 7756 */;
import getAsyncContextStrategy from "getAsyncContextStrategy" /* 7757 */;

require = arg1;
const dependencyMap = arg6;
arg5.getClient = function getClient() {
  const mainCarrier = getMainCarrier.getMainCarrier();
  const asyncContextStrategy = getAsyncContextStrategy.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
};
arg5.getCurrentScope = function getCurrentScope() {
  const mainCarrier = getMainCarrier.getMainCarrier();
  const asyncContextStrategy = getAsyncContextStrategy.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
};
arg5.getGlobalScope = function getGlobalScope() {
  return getGlobalSingleton.getGlobalSingleton("globalScope", () => {
    const scope = new callback(table[3]).Scope();
    return scope;
  });
};
arg5.getIsolationScope = function getIsolationScope() {
  const mainCarrier = getMainCarrier.getMainCarrier();
  const asyncContextStrategy = getAsyncContextStrategy.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
};
arg5.getTraceContextFromScope = function getTraceContextFromScope(getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  ({ traceId, spanId, parentSpanId } = propagationContext);
  return addNonEnumerableProperty.dropUndefinedKeys({ trace_id, span_id, parent_span_id });
};
arg5.withIsolationScope = function withIsolationScope() {
  const items = [...arguments];
  const mainCarrier = getMainCarrier.getMainCarrier();
  const asyncContextStrategy = getAsyncContextStrategy.getAsyncContextStrategy(mainCarrier);
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
arg5.withScope = function withScope() {
  const items = [...arguments];
  const mainCarrier = getMainCarrier.getMainCarrier();
  const asyncContextStrategy = getAsyncContextStrategy.getAsyncContextStrategy(mainCarrier);
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