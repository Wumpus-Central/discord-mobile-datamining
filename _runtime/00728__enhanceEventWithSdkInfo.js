// === Module 728: _enhanceEventWithSdkInfo ===

// Module 728 (_enhanceEventWithSdkInfo)
import forEachEnvelopeItem from "forEachEnvelopeItem" /* 729 */;

require = arg1;
const dependencyMap = arg6;
function _enhanceEventWithSdkInfo(sdk, name) {
  if (name) {
    const tmp = sdk.sdk || {};
    let obj = {};
    const merged = Object.assign(tmp);
    obj.name = tmp.name || name.name;
    obj.version = tmp.version || name.version;
    sdk = sdk.sdk;
    let integrations;
    if (sdk != null) {
      integrations = sdk.integrations;
    }
    if (!integrations) {
      integrations = [];
    }
    const items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(integrations, 0);
    const tmp9 = name.integrations || [];
    arraySpreadResult = HermesBuiltin.arraySpread(tmp9, arraySpreadResult);
    obj.integrations = items;
    const sdk2 = sdk.sdk;
    let packages;
    if (sdk2 != null) {
      packages = sdk2.packages;
    }
    if (!packages) {
      packages = [];
    }
    const items1 = [];
    const arraySpreadResult1 = HermesBuiltin.arraySpread(packages, 0);
    const tmp17 = name.packages || [];
    HermesBuiltin.arraySpread(tmp17, arraySpreadResult1);
    obj.packages = items1;
    const sdk3 = sdk.sdk;
    let settings;
    if (sdk3 != null) {
      settings = sdk3.settings;
    }
    if (settings) {
      const sdk4 = sdk.sdk;
      let settings1;
      if (sdk4 != null) {
        settings1 = sdk4.settings;
      }
      obj = {};
      const merged1 = Object.assign(settings1);
      const merged2 = Object.assign(name.settings);
      const tmp23 = obj;
    }
    obj.settings = tmp23;
    sdk.sdk = obj;
    return sdk;
  } else {
    return sdk;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5._enhanceEventWithSdkInfo = _enhanceEventWithSdkInfo;
arg5.createEventEnvelope = function createEventEnvelope(type, arg1, sdk) {
  const sdkMetadataForEnvelopeHeader = forEachEnvelopeItem.getSdkMetadataForEnvelopeHeader(sdk);
  let str = "event";
  if (type.type) {
    str = "event";
    if ("replay_event" !== type.type) {
      str = type.type;
    }
  }
  sdk = undefined;
  if (sdk != null) {
    sdk = sdk.sdk;
  }
  _enhanceEventWithSdkInfo(type, sdk);
  let tmp3Result = tmp3(729);
  const eventEnvelopeHeaders = tmp3Result.createEventEnvelopeHeaders(type, sdkMetadataForEnvelopeHeader, arg3, arg1);
  delete tmp[tmp2];
  const items = [{ type: str }, type];
  tmp3Result = tmp3(729);
  const items1 = [items];
  return tmp3Result.createEnvelope(eventEnvelopeHeaders, items1);
};
arg5.createSessionEnvelope = function createSessionEnvelope(toJSON) {
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
    let tmpResult = tmp(702);
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
  tmpResult = tmp(729);
  const items2 = [items1];
  return tmpResult.createEnvelope(obj, items2);
};
arg5.createSpanEnvelope = function createSpanEnvelope(arr, getDsn) {
  let obj = beforeSendSpan(ignoreSpans[2]);
  const dynamicSamplingContextFromSpan = obj.getDynamicSamplingContextFromSpan(arr[0]);
  let dsn;
  if (getDsn != null) {
    dsn = getDsn.getDsn();
  }
  let tunnel;
  if (getDsn != null) {
    tunnel = getDsn.getOptions().tunnel;
  }
  obj = { sent_at: new Date().toISOString() };
  let tmp8 = (function dscHasRequiredProps(dynamicSamplingContextFromSpan) {
    return dynamicSamplingContextFromSpan.trace_id && dynamicSamplingContextFromSpan.public_key;
  })(dynamicSamplingContextFromSpan);
  if (tmp8) {
    obj = { trace: null };
    obj[0] = dynamicSamplingContextFromSpan;
    tmp8 = obj;
  }
  const merged = Object.assign(tmp8);
  let tmp10 = tunnel && dsn;
  if (tmp10) {
    obj1 = { dsn: null };
    obj1[0] = tmp2(tmp4[1]).dsnToString(dsn);
    tmp10 = obj1;
    const tmp2Result = tmp2(tmp4[1]);
  }
  const merged1 = Object.assign(tmp10);
  let options;
  if (getDsn != null) {
    options = getDsn.getOptions();
  }
  if (!options) {
    options = {};
  }
  beforeSendSpan = options.beforeSendSpan;
  ignoreSpans = options.ignoreSpans;
  let length;
  if (ignoreSpans != null) {
    length = ignoreSpans.length;
  }
  let found = arr;
  if (length) {
    found = arr.filter((arg0) => {
      const obj = beforeSendSpan(ignoreSpans[3]);
      return !obj.shouldIgnoreSpan(beforeSendSpan(ignoreSpans[4]).spanToJSON(arg0), ignoreSpans);
    });
  }
  const diff = arr.length - found.length;
  if (diff) {
    if (getDsn != null) {
      getDsn.recordDroppedEvent("before_send", "span", diff);
    }
  }
  if (beforeSendSpan) {
    const fn = (arg0) => {
      const spanToJSONResult = beforeSendSpan(ignoreSpans[4]).spanToJSON(arg0);
      let tmp4 = beforeSendSpan(spanToJSONResult);
      if (!tmp4) {
        beforeSendSpan(ignoreSpans[4]).showSpanDropWarning();
        tmp4 = spanToJSONResult;
        const tmpResult = beforeSendSpan(ignoreSpans[4]);
      }
      return tmp4;
    };
  } else {
    const spanToJSON = tmp2(tmp4[4]).spanToJSON;
  }
  found[Symbol.iterator]();
};