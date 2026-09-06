// === Module 736: mergeScopeData ===

// Module 736 (mergeScopeData)
import spanToJSON from "spanToJSON" /* 684 */;
import _mod711 from "module_711" /* 711 */;
import _mod713 from "module_713" /* 713 */;
import _mod722 from "module_722" /* 722 */;

require = arg1;
const dependencyMap = arg6;
function mergeScopeData(extra, arg1) {
  ({ level, breadcrumbs, fingerprint, eventProcessors, attachments, propagationContext, transactionName, span } = arg1);
  ({ extra, tags, attributes, user, contexts, sdkProcessingMetadata } = arg1);
  let obj = _mod711;
  extra.extra = obj.merge(extra.extra, extra, 1);
  extra.tags = _mod711.merge(extra.tags, tags, 1);
  extra.attributes = _mod711.merge(extra.attributes, attributes, 1);
  extra.user = _mod711.merge(extra.user, user, 1);
  extra.contexts = _mod711.merge(extra.contexts, contexts, 1);
  extra.sdkProcessingMetadata = _mod711.merge(extra.sdkProcessingMetadata, sdkProcessingMetadata, 2);
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
    HermesBuiltin.arraySpread(breadcrumbs, HermesBuiltin.arraySpread(extra.breadcrumbs, 0));
    extra.breadcrumbs = items;
  }
  if (fingerprint.length) {
    const items1 = [];
    HermesBuiltin.arraySpread(fingerprint, HermesBuiltin.arraySpread(extra.fingerprint, 0));
    extra.fingerprint = items1;
  }
  if (eventProcessors.length) {
    const items2 = [];
    HermesBuiltin.arraySpread(eventProcessors, HermesBuiltin.arraySpread(extra.eventProcessors, 0));
    extra.eventProcessors = items2;
  }
  if (attachments.length) {
    const items3 = [];
    HermesBuiltin.arraySpread(attachments, HermesBuiltin.arraySpread(extra.attachments, 0));
    extra.attachments = items3;
  }
  obj = {};
  const merged = Object.assign(extra.propagationContext);
  const merged1 = Object.assign(propagationContext);
  extra.propagationContext = obj;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const applyScopeDataToEvent = function applyScopeDataToEvent(extra, arg1) {
  ({ fingerprint, span, breadcrumbs, sdkProcessingMetadata, extra, tags, user, contexts, level, transactionName } = arg1);
  if (Object.keys(extra).length) {
    let obj = {};
    const merged = Object.assign(extra);
    const merged1 = Object.assign(extra.extra);
    extra.extra = obj;
  }
  if (Object.keys(tags).length) {
    obj = {};
    const merged2 = Object.assign(tags);
    const merged3 = Object.assign(extra.tags);
    extra.tags = obj;
  }
  if (Object.keys(user).length) {
    obj = {};
    const merged4 = Object.assign(user);
    const merged5 = Object.assign(extra.user);
    extra.user = obj;
  }
  if (Object.keys(contexts).length) {
    const obj1 = {};
    const merged6 = Object.assign(contexts);
    const merged7 = Object.assign(extra.contexts);
    extra.contexts = obj1;
  }
  if (level) {
    extra.level = level;
  }
  let tmp23 = transactionName;
  if (transactionName) {
    tmp23 = "transaction" !== extra.type;
  }
  if (tmp23) {
    extra.transaction = transactionName;
  }
  if (span) {
    const obj2 = { trace: spanToJSON.spanToTraceContext(span) };
    const merged8 = Object.assign(extra.contexts);
    extra.contexts = obj2;
    const obj3 = { dynamicSamplingContext: null };
    obj3.dynamicSamplingContext = _mod722.getDynamicSamplingContextFromSpan(span);
    const merged9 = Object.assign(extra.sdkProcessingMetadata);
    extra.sdkProcessingMetadata = obj3;
    const rootSpan = spanToJSON.getRootSpan(span);
    const description = spanToJSON.spanToJSON(rootSpan).description;
    let tmp31 = description;
    if (description) {
      tmp31 = !extra.transaction;
    }
    if (tmp31) {
      tmp31 = "transaction" === extra.type;
    }
    if (tmp31) {
      extra.transaction = description;
    }
  }
  if (extra.fingerprint) {
    const _Array = Array;
    const fingerprint2 = extra.fingerprint;
    if (Array.isArray(extra.fingerprint)) {
      let items = fingerprint2;
    } else {
      items = [fingerprint2];
    }
  } else {
    extra.fingerprint = [];
    if (fingerprint) {
      const fingerprint3 = extra.fingerprint;
      extra.fingerprint = fingerprint3.concat(fingerprint);
    }
    if (!extra.fingerprint.length) {
      delete tmp[tmp2];
    }
    const tmp33 = extra.breadcrumbs || [];
    const items1 = [];
    HermesBuiltin.arraySpread(breadcrumbs, HermesBuiltin.arraySpread(tmp33, 0));
    let tmp39;
    if (items1.length) {
      tmp39 = items1;
    }
    extra.breadcrumbs = tmp39;
    const obj4 = {};
    const merged10 = Object.assign(extra.sdkProcessingMetadata);
    const merged11 = Object.assign(sdkProcessingMetadata);
    extra.sdkProcessingMetadata = obj4;
  }
};
export const getCombinedScopeData = function getCombinedScopeData(isolationScope, currentScope) {
  const globalScope = _mod713.getGlobalScope();
  const scopeData = globalScope.getScopeData();
  if (isolationScope) {
    mergeScopeData(scopeData, isolationScope.getScopeData());
  }
  if (currentScope) {
    mergeScopeData(scopeData, currentScope.getScopeData());
  }
  return scopeData;
};
export const mergeAndOverwriteScopeData = function mergeAndOverwriteScopeData(arg0, arg1, arg2) {
  arg0[arg1] = _mod711.merge(arg0[arg1], arg2, 1);
};
export { mergeScopeData };