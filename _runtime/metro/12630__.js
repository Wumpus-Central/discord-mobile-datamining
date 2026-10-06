// _runtime/metro/12630__.js
import _mod12585 from "12585__.js";
import _mod12586 from "12586__.js";
import _mod12605 from "12605__.js";
import _mod12616 from "12616__.js";

export const applyScopeDataToEvent = function applyScopeDataToEvent(extra, arg1) {
  let breadcrumbs;
  let contexts;
  let fingerprint;
  let items1;
  let level;
  let sdkProcessingMetadata;
  let span;
  let tags;
  let tmpResult10;
  let tmpResult9;
  let transactionName;
  let user;
  ({ fingerprint, span, breadcrumbs, sdkProcessingMetadata, level, transactionName } = arg1);
  ({ extra, tags, user, contexts } = arg1);
  const obj = _mod12586;
  const dropUndefinedKeysResult = obj.dropUndefinedKeys(extra);
  let length = dropUndefinedKeysResult;
  if (length) {
    const _Object = Object;
    length = Object.keys(dropUndefinedKeysResult).length;
  }
  const tmp5 = extra;
  if (length) {
    const obj2 = {};
    const merged = Object.assign(dropUndefinedKeysResult);
    const merged1 = Object.assign(extra.extra);
    extra.extra = obj2;
  }
  const tmpResult = _mod12586;
  const dropUndefinedKeysResult1 = tmpResult.dropUndefinedKeys(tags);
  let length2 = dropUndefinedKeysResult1;
  if (length2) {
    const _Object2 = Object;
    length2 = Object.keys(dropUndefinedKeysResult1).length;
  }
  if (length2) {
    const obj3 = {};
    const merged2 = Object.assign(dropUndefinedKeysResult1);
    const merged3 = Object.assign(extra.tags);
    extra.tags = obj3;
  }
  const tmpResult7 = _mod12586;
  const dropUndefinedKeysResult2 = tmpResult7.dropUndefinedKeys(user);
  let length3 = dropUndefinedKeysResult2;
  if (length3) {
    const _Object3 = Object;
    length3 = Object.keys(dropUndefinedKeysResult2).length;
  }
  if (length3) {
    const obj4 = {};
    const merged4 = Object.assign(dropUndefinedKeysResult2);
    const merged5 = Object.assign(extra.user);
    extra.user = obj4;
  }
  const tmpResult8 = _mod12586;
  const dropUndefinedKeysResult3 = tmpResult8.dropUndefinedKeys(contexts);
  let length4 = dropUndefinedKeysResult3;
  if (length4) {
    const _Object4 = Object;
    length4 = Object.keys(dropUndefinedKeysResult3).length;
  }
  if (length4) {
    const obj5 = {};
    const merged6 = Object.assign(dropUndefinedKeysResult3);
    const merged7 = Object.assign(extra.contexts);
    extra.contexts = obj5;
  }
  if (level) {
    extra.level = level;
  }
  const tmp32 = transactionName && "transaction" !== extra.type;
  if (tmp32) {
    extra.transaction = transactionName;
  }
  if (span) {
    const obj6 = { trace: tmpResult9.spanToTraceContext(span) };
    tmpResult9 = _mod12585;
    const merged8 = Object.assign(extra.contexts);
    extra.contexts = obj6;
    const obj7 = { dynamicSamplingContext: tmpResult10.getDynamicSamplingContextFromSpan(span) };
    tmpResult10 = _mod12616;
    const merged9 = Object.assign(extra.sdkProcessingMetadata);
    extra.sdkProcessingMetadata = obj7;
    const tmpResult11 = _mod12585;
    const rootSpan = tmpResult11.getRootSpan(span);
    const tmpResult12 = _mod12585;
    const description = tmpResult12.spanToJSON(rootSpan).description;
    const tmp38 = description && !extra.transaction && "transaction" === extra.type;
    if (tmp38) {
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
  const tmp40 = extra.fingerprint && !extra.fingerprint.length;
  if (tmp40) {
    delete tmp5["fingerprint"];
  }
  const items2 = [...breadcrumbs];
  let tmp42;
  if (items2.length) {
    tmp42 = items2;
  }
  extra.breadcrumbs = tmp42;
  const obj8 = {};
  const merged10 = Object.assign(extra.sdkProcessingMetadata);
  const merged11 = Object.assign(sdkProcessingMetadata);
  extra.sdkProcessingMetadata = obj8;
};
export const mergeAndOverwriteScopeData = function mergeAndOverwriteScopeData(arg0, arg1, arg2) {
  const obj = _mod12605;
  arg0[arg1] = obj.merge(arg0[arg1], arg2, 1);
};
export const mergeScopeData = function mergeScopeData(extra, arg1) {
  let attachments;
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
  ({ extra, tags, user, contexts, sdkProcessingMetadata } = arg1);
  const obj = _mod12605;
  extra.extra = obj.merge(extra.extra, extra, 1);
  const obj2 = _mod12605;
  extra.tags = obj2.merge(extra.tags, tags, 1);
  const obj3 = _mod12605;
  extra.user = obj3.merge(extra.user, user, 1);
  const obj4 = _mod12605;
  extra.contexts = obj4.merge(extra.contexts, contexts, 1);
  const obj5 = _mod12605;
  extra.sdkProcessingMetadata = obj5.merge(extra.sdkProcessingMetadata, sdkProcessingMetadata, 2);
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
  const obj6 = {};
  const merged = Object.assign(extra.propagationContext);
  const merged1 = Object.assign(propagationContext);
  extra.propagationContext = obj6;
};
