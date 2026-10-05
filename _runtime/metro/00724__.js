// _runtime/metro/00724__.js
import _mod701 from "00701__.js";
import generateSpanId from "../00705_generateSpanId.js";
import _mod717 from "00717__.js";
import Scope from "../00719_Scope.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getClient = function getClient() {
  const obj = _mod701;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod717;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const currentScope = asyncContextStrategy.getCurrentScope();
  return currentScope.getClient();
};
export const getCurrentScope = function getCurrentScope() {
  const obj = _mod701;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod717;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getCurrentScope();
};
export const getGlobalScope = function getGlobalScope() {
  const obj = _mod701;
  return obj.getGlobalSingleton("globalScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
};
export const getIsolationScope = function getIsolationScope() {
  const obj = _mod701;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod717;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  return asyncContextStrategy.getIsolationScope();
};
export const getTraceContextFromScope = function getTraceContextFromScope(getPropagationContext) {
  let propagationSpanId;
  const propagationContext = getPropagationContext.getPropagationContext();
  const parentSpanId = propagationContext.parentSpanId;
  const obj = { trace_id: propagationContext.traceId, span_id: propagationSpanId };
  propagationSpanId = propagationContext.propagationSpanId;
  if (!propagationSpanId) {
    const obj2 = generateSpanId;
    propagationSpanId = obj2.generateSpanId();
  }
  if (parentSpanId) {
    obj.parent_span_id = parentSpanId;
  }
  return obj;
};
export const withIsolationScope = function withIsolationScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod701;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod717;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (2 === items.length) {
    let result;
    [tmp2, tmp3] = items;
    if (tmp2) {
      result = asyncContextStrategy.withSetIsolationScope(tmp2, tmp3);
    } else {
      result = asyncContextStrategy.withIsolationScope(tmp3);
    }
    return result;
  } else {
    return asyncContextStrategy.withIsolationScope(items[0]);
  }
};
export const withScope = function withScope() {
  let tmp2;
  let tmp3;
  const items = [...arguments];
  const obj = _mod701;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod717;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (2 === items.length) {
    let withSetScopeResult;
    [tmp2, tmp3] = items;
    if (tmp2) {
      withSetScopeResult = asyncContextStrategy.withSetScope(tmp2, tmp3);
    } else {
      withSetScopeResult = asyncContextStrategy.withScope(tmp3);
    }
    return withSetScopeResult;
  } else {
    return asyncContextStrategy.withScope(items[0]);
  }
};
