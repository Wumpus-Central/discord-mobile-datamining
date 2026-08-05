import { spanToJSON } from "00819_spanToJSON.js";
import { merge } from "00846_merge.js";
import { getClient } from "00848_getClient.js";
import { getDynamicSamplingContextFromSpan } from "00857_getDynamicSamplingContextFromSpan.js";
// _runtime/00871_mergeScopeData.js
const require = arg1;
const dependencyMap = arg6;
function mergeScopeData(extra) {
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
  let obj = merge /* merge */;
  extra.extra = obj.merge(extra.extra, extra, 1);
  extra.tags = merge /* merge */.merge(extra.tags, tags, 1);
  const obj2 = merge /* merge */;
  extra.attributes = merge /* merge */.merge(extra.attributes, attributes, 1);
  const obj3 = merge /* merge */;
  extra.user = merge /* merge */.merge(extra.user, user, 1);
  const obj4 = merge /* merge */;
  extra.contexts = merge /* merge */.merge(extra.contexts, contexts, 1);
  const obj5 = merge /* merge */;
  extra.sdkProcessingMetadata = merge /* merge */.merge(extra.sdkProcessingMetadata, sdkProcessingMetadata, 2);
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
arg5.applyScopeDataToEvent = function applyScopeDataToEvent(extra) {
  let breadcrumbs;
  let contexts;
  let fingerprint;
  let level;
  let sdkProcessingMetadata;
  let span;
  let tags;
  let transactionName;
  let user;
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
    const obj2 = { trace: null };
    obj2[0] = spanToJSON /* spanToJSON */.spanToTraceContext(span);
    const merged8 = Object.assign(extra.contexts);
    extra.contexts = obj2;
    const obj3 = { dynamicSamplingContext: null };
    const obj6 = spanToJSON /* spanToJSON */;
    obj3[0] = getDynamicSamplingContextFromSpan /* getDynamicSamplingContextFromSpan */.getDynamicSamplingContextFromSpan(span);
    const merged9 = Object.assign(extra.sdkProcessingMetadata);
    extra.sdkProcessingMetadata = obj3;
    const obj8 = getDynamicSamplingContextFromSpan /* getDynamicSamplingContextFromSpan */;
    const rootSpan = spanToJSON /* spanToJSON */.getRootSpan(span);
    const obj9 = spanToJSON /* spanToJSON */;
    const description = spanToJSON /* spanToJSON */.spanToJSON(rootSpan).description;
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
    const obj10 = spanToJSON /* spanToJSON */;
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
arg5.getCombinedScopeData = function getCombinedScopeData(isolationScope, currentScope) {
  const globalScope = getClient /* getClient */.getGlobalScope();
  const scopeData = globalScope.getScopeData();
  if (isolationScope) {
    mergeScopeData(scopeData, isolationScope.getScopeData());
  }
  if (currentScope) {
    mergeScopeData(scopeData, currentScope.getScopeData());
  }
  return scopeData;
};
arg5.mergeAndOverwriteScopeData = function mergeAndOverwriteScopeData(arg0, arg1, arg2) {
  arg0[arg1] = merge /* merge */.merge(arg0[arg1], arg2, 1);
};
arg5.mergeScopeData = mergeScopeData;