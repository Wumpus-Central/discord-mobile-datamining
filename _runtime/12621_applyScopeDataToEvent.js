// === Module 12621: applyScopeDataToEvent ===

// Module 12621 (applyScopeDataToEvent)
import addNonEnumerableProperty from "addNonEnumerableProperty" /* 12577 */;
import merge from "merge" /* 12596 */;

require = arg1;
const dependencyMap = arg6;
arg5.applyScopeDataToEvent = function applyScopeDataToEvent(extra) {
  ({ fingerprint, span, breadcrumbs, sdkProcessingMetadata, level, transactionName } = arg1);
  ({ extra, tags, user, contexts } = arg1);
  let obj = addNonEnumerableProperty;
  const dropUndefinedKeysResult = obj.dropUndefinedKeys(extra);
  let length = dropUndefinedKeysResult;
  if (dropUndefinedKeysResult) {
    const _Object = Object;
    length = Object.keys(dropUndefinedKeysResult).length;
  }
  if (length) {
    obj = {};
    const merged = Object.assign(dropUndefinedKeysResult);
    const merged1 = Object.assign(extra.extra);
    extra.extra = obj;
  }
  let tmp3Result = tmp3(12577);
  const dropUndefinedKeysResult1 = tmp3Result.dropUndefinedKeys(tags);
  let length2 = dropUndefinedKeysResult1;
  if (dropUndefinedKeysResult1) {
    const _Object2 = Object;
    length2 = Object.keys(dropUndefinedKeysResult1).length;
  }
  if (length2) {
    obj = {};
    const merged2 = Object.assign(dropUndefinedKeysResult1);
    const merged3 = Object.assign(extra.tags);
    extra.tags = obj;
  }
  tmp3Result = tmp3(12577);
  const dropUndefinedKeysResult2 = tmp3Result.dropUndefinedKeys(user);
  let length3 = dropUndefinedKeysResult2;
  if (dropUndefinedKeysResult2) {
    const _Object3 = Object;
    length3 = Object.keys(dropUndefinedKeysResult2).length;
  }
  if (length3) {
    obj1 = {};
    const merged4 = Object.assign(dropUndefinedKeysResult2);
    const merged5 = Object.assign(extra.user);
    extra.user = obj1;
  }
  const dropUndefinedKeysResult3 = addNonEnumerableProperty.dropUndefinedKeys(contexts);
  let length4 = dropUndefinedKeysResult3;
  if (dropUndefinedKeysResult3) {
    const _Object4 = Object;
    length4 = Object.keys(dropUndefinedKeysResult3).length;
  }
  if (length4) {
    const obj2 = {};
    const merged6 = Object.assign(dropUndefinedKeysResult3);
    const merged7 = Object.assign(extra.contexts);
    extra.contexts = obj2;
  }
  if (level) {
    extra.level = level;
  }
  let tmp33 = transactionName;
  if (transactionName) {
    tmp33 = "transaction" !== extra.type;
  }
  if (tmp33) {
    extra.transaction = transactionName;
  }
  if (span) {
    const obj3 = { trace: null };
    obj3[0] = tmp3(12576).spanToTraceContext(span);
    const merged8 = Object.assign(extra.contexts);
    extra.contexts = obj3;
    const obj4 = { dynamicSamplingContext: null };
    const tmp3Result2 = tmp3(12576);
    obj4[0] = tmp3(12607).getDynamicSamplingContextFromSpan(span);
    const merged9 = Object.assign(extra.sdkProcessingMetadata);
    extra.sdkProcessingMetadata = obj4;
    const tmp3Result3 = tmp3(12607);
    const rootSpan = tmp3(12576).getRootSpan(span);
    const tmp3Result4 = tmp3(12576);
    const description = tmp3(12576).spanToJSON(rootSpan).description;
    let tmp39 = description;
    if (description) {
      tmp39 = !extra.transaction;
    }
    if (tmp39) {
      tmp39 = "transaction" === extra.type;
    }
    if (tmp39) {
      extra.transaction = description;
    }
    const tmp3Result5 = tmp3(12576);
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
    if (tmp42) {
      delete tmp[tmp2];
    }
    const tmp43 = extra.breadcrumbs || [];
    const items1 = [];
    HermesBuiltin.arraySpread(breadcrumbs, HermesBuiltin.arraySpread(tmp43, 0));
    let tmp49;
    if (items1.length) {
      tmp49 = items1;
    }
    extra.breadcrumbs = tmp49;
    const obj5 = {};
    const merged10 = Object.assign(extra.sdkProcessingMetadata);
    const merged11 = Object.assign(sdkProcessingMetadata);
    extra.sdkProcessingMetadata = obj5;
  }
};
arg5.mergeAndOverwriteScopeData = function mergeAndOverwriteScopeData(arg0, arg1, arg2) {
  arg0[arg1] = merge.merge(arg0[arg1], arg2, 1);
};
arg5.mergeScopeData = function mergeScopeData(extra) {
  ({ level, breadcrumbs, fingerprint, eventProcessors, attachments, propagationContext, transactionName, span } = arg1);
  ({ extra, tags, user, contexts, sdkProcessingMetadata } = arg1);
  let obj = merge;
  extra.extra = obj.merge(extra.extra, extra, 1);
  extra.tags = merge.merge(extra.tags, tags, 1);
  const obj2 = merge;
  extra.user = merge.merge(extra.user, user, 1);
  const obj3 = merge;
  extra.contexts = merge.merge(extra.contexts, contexts, 1);
  const obj4 = merge;
  extra.sdkProcessingMetadata = merge.merge(extra.sdkProcessingMetadata, sdkProcessingMetadata, 2);
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
};