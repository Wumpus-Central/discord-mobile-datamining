// === Module 712: ? ===

// Module 712
import _mod689 from "module_689" /* 689 */;
import generateSpanId from "generateSpanId" /* 693 */;
import _mod705 from "module_705" /* 705 */;
import Scope from "Scope" /* 707 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function getClient() {
  const mainCarrier = _mod689.getMainCarrier();
  const asyncContextStrategy = _mod705.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
}
export function getCurrentScope() {
  const mainCarrier = _mod689.getMainCarrier();
  const asyncContextStrategy = _mod705.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
}
export function getGlobalScope() {
  return _mod689.getGlobalSingleton("globalScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
}
export function getIsolationScope() {
  const mainCarrier = _mod689.getMainCarrier();
  const asyncContextStrategy = _mod705.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
}
export function getTraceContextFromScope(getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  const parentSpanId = propagationContext.parentSpanId;
  const obj = { trace_id: propagationContext.traceId, span_id: null };
  let propagationSpanId = propagationContext.propagationSpanId;
  if (!propagationSpanId) {
    propagationSpanId = generateSpanId.generateSpanId();
  }
  obj.span_id = propagationSpanId;
  if (parentSpanId) {
    obj.parent_span_id = parentSpanId;
  }
  return obj;
}
export function withIsolationScope() {
  const items = [...arguments];
  const mainCarrier = _mod689.getMainCarrier();
  const asyncContextStrategy = _mod705.getAsyncContextStrategy(mainCarrier);
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
  const mainCarrier = _mod689.getMainCarrier();
  const asyncContextStrategy = _mod705.getAsyncContextStrategy(mainCarrier);
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