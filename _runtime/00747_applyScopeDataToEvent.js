// === Module 747: applyScopeDataToEvent ===

// Module 747 (applyScopeDataToEvent)
import TRACE_FLAG_NONE from "TRACE_FLAG_NONE" /* 695 */;
import merge from "merge" /* 722 */;
import _mod724 from "module_724" /* 724 */;
import freezeDscOnSpan from "freezeDscOnSpan" /* 733 */;

function mergeScopeData(extra, arg1) {
  let attachments;
  let attributes;
  let breadcrumbs;
  let contexts;
  let eventProcessors;
  let fingerprint;
  let level;
  let propagationContext;
  let sdkProcessingMetadata;
  let span;
  let tags;
  let transactionName;
  let user;
  ({ level, breadcrumbs, fingerprint, eventProcessors, attachments, propagationContext, transactionName, span } = arg1);
  ({ extra, tags, attributes, user, contexts, sdkProcessingMetadata } = arg1);
  const obj = merge;
  extra.extra = obj.merge(extra.extra, extra, 1);
  const obj2 = merge;
  extra.tags = obj2.merge(extra.tags, tags, 1);
  const obj3 = merge;
  extra.attributes = obj3.merge(extra.attributes, attributes, 1);
  const obj4 = merge;
  extra.user = obj4.merge(extra.user, user, 1);
  const obj5 = merge;
  extra.contexts = obj5.merge(extra.contexts, contexts, 1);
  const obj6 = merge;
  extra.sdkProcessingMetadata = obj6.merge(extra.sdkProcessingMetadata, sdkProcessingMetadata, 2);
  if (level) {
    extra.level = level;
  }
  if (transactionName) {
    extra.transactionName = transactionName;
  }
  if (span) {
    extra.span = span;
  }
  if (breadcrumbs.length) {
    const items = [];
    HermesBuiltin.arraySpread(items, breadcrumbs, HermesBuiltin.arraySpread(items, extra.breadcrumbs, 0));
    extra.breadcrumbs = items;
  }
  if (fingerprint.length) {
    const items1 = [];
    HermesBuiltin.arraySpread(items1, fingerprint, HermesBuiltin.arraySpread(items1, extra.fingerprint, 0));
    extra.fingerprint = items1;
  }
  if (eventProcessors.length) {
    const items2 = [];
    HermesBuiltin.arraySpread(items2, eventProcessors, HermesBuiltin.arraySpread(items2, extra.eventProcessors, 0));
    extra.eventProcessors = items2;
  }
  if (attachments.length) {
    const items3 = [];
    HermesBuiltin.arraySpread(items3, attachments, HermesBuiltin.arraySpread(items3, extra.attachments, 0));
    extra.attachments = items3;
  }
  const obj7 = {};
  const merged = Object.assign(extra.propagationContext);
  const merged1 = Object.assign(propagationContext);
  extra.propagationContext = obj7;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const applyScopeDataToEvent = function applyScopeDataToEvent(extra, arg1) {
  let breadcrumbs;
  let contexts;
  let fingerprint;
  let items1;
  let level;
  let obj6;
  let obj8;
  let sdkProcessingMetadata;
  let span;
  let tags;
  let transactionName;
  let user;
  ({ fingerprint, span, breadcrumbs, sdkProcessingMetadata, extra, tags, user, contexts, level, transactionName } = arg1);
  const tmp = extra;
  if (Object.keys(extra).length) {
    const obj = {};
    const merged = Object.assign(extra);
    const merged1 = Object.assign(extra.extra);
    extra.extra = obj;
  }
  if (Object.keys(tags).length) {
    const obj2 = {};
    const merged2 = Object.assign(tags);
    const merged3 = Object.assign(extra.tags);
    extra.tags = obj2;
  }
  if (Object.keys(user).length) {
    const obj3 = {};
    const merged4 = Object.assign(user);
    const merged5 = Object.assign(extra.user);
    extra.user = obj3;
  }
  if (Object.keys(contexts).length) {
    const obj4 = {};
    const merged6 = Object.assign(contexts);
    const merged7 = Object.assign(extra.contexts);
    extra.contexts = obj4;
  }
  if (level) {
    extra.level = level;
  }
  const tmp22 = transactionName && "transaction" !== extra.type;
  if (tmp22) {
    extra.transaction = transactionName;
  }
  if (span) {
    const obj5 = { trace: obj6.spanToTraceContext(span) };
    obj6 = TRACE_FLAG_NONE;
    const merged8 = Object.assign(extra.contexts);
    extra.contexts = obj5;
    const obj7 = { dynamicSamplingContext: obj8.getDynamicSamplingContextFromSpan(span) };
    obj8 = freezeDscOnSpan;
    const merged9 = Object.assign(extra.sdkProcessingMetadata);
    extra.sdkProcessingMetadata = obj7;
    const obj9 = TRACE_FLAG_NONE;
    const rootSpan = obj9.getRootSpan(span);
    const obj10 = TRACE_FLAG_NONE;
    const description = obj10.spanToJSON(rootSpan).description;
    const tmp30 = description && !extra.transaction && "transaction" === extra.type;
    if (tmp30) {
      extra.transaction = description;
    }
  }
  if (extra.fingerprint) {
    let items;
    const _Array = Array;
    const fingerprint2 = extra.fingerprint;
    if (Array.isArray(extra.fingerprint)) {
      items = fingerprint2;
    } else {
      items = [fingerprint2];
    }
    items1 = items;
  } else {
    items1 = [];
  }
  extra.fingerprint = items1;
  if (fingerprint) {
    const fingerprint3 = extra.fingerprint;
    extra.fingerprint = fingerprint3.concat(fingerprint);
  }
  if (!extra.fingerprint.length) {
    delete tmp["fingerprint"];
  }
  const items2 = [...breadcrumbs];
  let tmp32;
  if (items2.length) {
    tmp32 = items2;
  }
  extra.breadcrumbs = tmp32;
  const obj11 = {};
  const merged10 = Object.assign(extra.sdkProcessingMetadata);
  const merged11 = Object.assign(sdkProcessingMetadata);
  extra.sdkProcessingMetadata = obj11;
};
export const getCombinedScopeData = function getCombinedScopeData(isolationScope, cloneResult) {
  const obj = _mod724;
  const globalScope = obj.getGlobalScope();
  const scopeData = globalScope.getScopeData();
  if (isolationScope) {
    mergeScopeData(scopeData, isolationScope.getScopeData());
  }
  const tmp4 = cloneResult;
  if (tmp4) {
    mergeScopeData(scopeData, cloneResult.getScopeData());
  }
  return scopeData;
};
export const mergeAndOverwriteScopeData = function mergeAndOverwriteScopeData(arg0, arg1, arg2) {
  const obj = merge;
  arg0[arg1] = obj.merge(arg0[arg1], arg2, 1);
};
export { mergeScopeData };