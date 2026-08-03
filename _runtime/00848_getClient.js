const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getClient = function getClient() {
  const mainCarrier = require(825) /* getGlobalSingleton */.getMainCarrier();
  const obj = require(825) /* getGlobalSingleton */;
  const asyncContextStrategy = require(841) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
};
arg5.getCurrentScope = function getCurrentScope() {
  const mainCarrier = require(825) /* getGlobalSingleton */.getMainCarrier();
  const obj = require(825) /* getGlobalSingleton */;
  const asyncContextStrategy = require(841) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
};
arg5.getGlobalScope = function getGlobalScope() {
  return require(825) /* getGlobalSingleton */.getGlobalSingleton("globalScope", () => {
    const scope = new callback(table[2]).Scope();
    return scope;
  });
};
arg5.getIsolationScope = function getIsolationScope() {
  const mainCarrier = require(825) /* getGlobalSingleton */.getMainCarrier();
  const obj = require(825) /* getGlobalSingleton */;
  const asyncContextStrategy = require(841) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
};
arg5.getTraceContextFromScope = function getTraceContextFromScope(getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  const parentSpanId = propagationContext.parentSpanId;
  const obj = { trace_id: propagationContext.traceId, span_id: null };
  let propagationSpanId = propagationContext.propagationSpanId;
  if (!propagationSpanId) {
    propagationSpanId = require(829) /* generateSpanId */.generateSpanId();
    const obj2 = require(829) /* generateSpanId */;
  }
  obj[1] = propagationSpanId;
  if (parentSpanId) {
    obj.parent_span_id = parentSpanId;
  }
  return obj;
};
arg5.withIsolationScope = function withIsolationScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const mainCarrier = require(825) /* getGlobalSingleton */.getMainCarrier();
  const obj = require(825) /* getGlobalSingleton */;
  const asyncContextStrategy = require(841) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
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
  const obj2 = require(841) /* getAsyncContextStrategy */;
};
arg5.withScope = function withScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const mainCarrier = require(825) /* getGlobalSingleton */.getMainCarrier();
  const obj = require(825) /* getGlobalSingleton */;
  const asyncContextStrategy = require(841) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
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
  const obj2 = require(841) /* getAsyncContextStrategy */;
};