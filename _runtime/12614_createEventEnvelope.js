// === Module 12614: createEventEnvelope ===

// Module 12614 (createEventEnvelope)
import forEachEnvelopeItem from "forEachEnvelopeItem" /* 12615 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 12570 */;
import consoleSandbox from "consoleSandbox" /* 12571 */;


export const createEventEnvelope = function createEventEnvelope(type, arg1, sdk) {
  const sdkMetadataForEnvelopeHeader = forEachEnvelopeItem.getSdkMetadataForEnvelopeHeader(sdk);
  let str = "event";
  if (type.type) {
    str = "event";
    if ("replay_event" !== type.type) {
      str = type.type;
    }
  }
  if (sdk) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    type.sdk = type.sdk || {};
    let name = type.sdk.name;
    if (!name) {
      name = sdk.name;
    }
    type.sdk.name = name;
    let version = type.sdk.version;
    if (!version) {
      version = sdk.version;
    }
    type.sdk.version = version;
    let integrations = type.sdk.integrations;
    if (!integrations) {
      integrations = [];
    }
    const items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(integrations, 0);
    const tmp9 = sdk.integrations || [];
    arraySpreadResult = HermesBuiltin.arraySpread(tmp9, arraySpreadResult);
    type.sdk.integrations = items;
    let packages = type.sdk.packages;
    if (!packages) {
      packages = [];
    }
    const items1 = [];
    const arraySpreadResult1 = HermesBuiltin.arraySpread(packages, 0);
    const tmp17 = sdk.packages || [];
    HermesBuiltin.arraySpread(tmp17, arraySpreadResult1);
    type.sdk.packages = items1;
  }
  let tmp3Result = tmp3(12615);
  const eventEnvelopeHeaders = tmp3Result.createEventEnvelopeHeaders(type, sdkMetadataForEnvelopeHeader, arg3, arg1);
  delete tmp[tmp2];
  const items2 = [{ type: str }, type];
  tmp3Result = tmp3(12615);
  const items3 = [items2];
  return tmp3Result.createEnvelope(eventEnvelopeHeaders, items3);
};
export const createSessionEnvelope = function createSessionEnvelope(toJSON) {
  let obj = forEachEnvelopeItem;
  const sdkMetadataForEnvelopeHeader = obj.getSdkMetadataForEnvelopeHeader(arg2);
  obj = { sent_at: new Date().toISOString() };
  let tmp4 = sdkMetadataForEnvelopeHeader;
  if (sdkMetadataForEnvelopeHeader) {
    obj = { sdk: null };
    obj[0] = sdkMetadataForEnvelopeHeader;
    tmp4 = obj;
  }
  const merged = Object.assign(tmp4);
  let tmp6 = arg3 && arg1;
  if (tmp6) {
    obj1 = { dsn: null };
    let tmpResult = tmp(12618);
    obj1[0] = tmpResult.dsnToString(arg1);
    tmp6 = obj1;
  }
  const merged1 = Object.assign(tmp6);
  if ("aggregates" in toJSON) {
    const items = [{ type: "sessions" }, toJSON];
    let items1 = items;
  } else {
    items1 = [{ type: "session" }, toJSON.toJSON()];
  }
  tmpResult = tmp(12615);
  const items2 = [items1];
  return tmpResult.createEnvelope(obj, items2);
};
export const createSpanEnvelope = function createSpanEnvelope(arg0, getDsn) {
  let obj = beforeSendSpan(12607);
  const dynamicSamplingContextFromSpan = obj.getDynamicSamplingContextFromSpan(arg0[0]);
  let dsn = getDsn;
  if (getDsn) {
    dsn = getDsn.getDsn();
  }
  let tunnel = getDsn;
  if (getDsn) {
    tunnel = getDsn.getOptions().tunnel;
  }
  obj = { sent_at: new Date().toISOString() };
  let tmp7 = (function dscHasRequiredProps(dynamicSamplingContextFromSpan) {
    return dynamicSamplingContextFromSpan.trace_id && dynamicSamplingContextFromSpan.public_key;
  })(dynamicSamplingContextFromSpan);
  if (tmp7) {
    obj = { trace: null };
    obj[0] = dynamicSamplingContextFromSpan;
    tmp7 = obj;
  }
  const merged = Object.assign(tmp7);
  let tmp9 = tunnel && dsn;
  if (tmp9) {
    obj1 = { dsn: null };
    obj1[0] = beforeSendSpan(12618).dsnToString(dsn);
    tmp9 = obj1;
    const tmp2Result = beforeSendSpan(12618);
  }
  const merged1 = Object.assign(tmp9);
  beforeSendSpan = getDsn;
  if (getDsn) {
    beforeSendSpan = getDsn.getOptions().beforeSendSpan;
  }
  if (beforeSendSpan) {
    const fn2 = (arg0) => {
      const tmp3 = beforeSendSpan(beforeSendSpan(closure_1_1[5]).spanToJSON(arg0));
      if (!tmp3) {
        beforeSendSpan(closure_1_1[5]).showSpanDropWarning();
        const tmpResult = beforeSendSpan(closure_1_1[5]);
      }
      return tmp3;
    };
  } else {
    const fn = (arg0) => beforeSendSpan(table[5]).spanToJSON(arg0);
  }
  arg0[Symbol.iterator]();
};