// _runtime/00739__enhanceEventWithSdkInfo.js
import TRACE_FLAG_NONE from "00695_TRACE_FLAG_NONE.js";
import _mod713 from "metro/00713__.js";
import reparentChildSpans from "00735_reparentChildSpans.js";
import _mod740 from "metro/00740__.js";

let integrations;

function _enhanceEventWithSdkInfo(sdk, name) {
  let items;
  let items1;
  let tmp25;
  const tmp2 = name;
  if (tmp2) {
    const tmp3 = sdk.sdk || {};
    const obj = {
      name: tmp3.name || name.name,
      version: tmp3.version || name.version,
      integrations: items,
      packages: items1,
      settings: tmp25,
    };
    const merged = Object.assign(tmp3);
    sdk = sdk.sdk;
    integrations = undefined;
    if (sdk != null) {
      integrations = sdk.integrations;
    }
    if (!integrations) {
      integrations = [];
    }
    items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items, integrations, 0);
    const tmp11 = name.integrations || [];
    HermesBuiltin.arraySpread(items, tmp11, arraySpreadResult);
    const sdk2 = sdk.sdk;
    let packages;
    if (sdk2 != null) {
      packages = sdk2.packages;
    }
    if (!packages) {
      packages = [];
    }
    items1 = [];
    const arraySpreadResult5 = HermesBuiltin.arraySpread(items1, packages, 0);
    const tmp19 = name.packages || [];
    HermesBuiltin.arraySpread(items1, tmp19, arraySpreadResult5);
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
      const obj2 = {};
      const merged1 = Object.assign(settings1);
      const merged2 = Object.assign(name.settings);
      tmp25 = obj2;
    }
    sdk.sdk = obj;
    return sdk;
  } else {
    return sdk;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { _enhanceEventWithSdkInfo };
export const createEventEnvelope = function createEventEnvelope(type, _dsn, sdk, tunnel) {
  const obj = _mod740;
  const sdkMetadataForEnvelopeHeader = obj.getSdkMetadataForEnvelopeHeader(sdk);
  let str = "event";
  const tmp = type;
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
  const tmp2Result = _mod740;
  const eventEnvelopeHeaders = tmp2Result.createEventEnvelopeHeaders(type, sdkMetadataForEnvelopeHeader, tunnel, _dsn);
  delete tmp["sdkProcessingMetadata"];
  const items = [{ type: str }, type];
  const items1 = [items];
  const tmp2Result2 = _mod740;
  return tmp2Result2.createEnvelope(eventEnvelopeHeaders, items1);
};
export const createSessionEnvelope = function createSessionEnvelope(toJSON, _dsn, _metadata, tunnel) {
  let date;
  let items1;
  let tmpResult;
  const obj = _mod740;
  const sdkMetadataForEnvelopeHeader = obj.getSdkMetadataForEnvelopeHeader(_metadata);
  const obj2 = { sent_at: date.toISOString() };
  let tmp4 = sdkMetadataForEnvelopeHeader;
  date = new Date();
  if (tmp4) {
    tmp4 = { sdk: sdkMetadataForEnvelopeHeader };
    const obj3 = { sdk: sdkMetadataForEnvelopeHeader };
  }
  const merged = Object.assign(tmp4);
  let tmp6 = tunnel && _dsn;
  if (tmp6) {
    const obj4 = { dsn: tmpResult.dsnToString(_dsn) };
    tmp6 = obj4;
    tmpResult = _mod713;
  }
  const merged1 = Object.assign(tmp6);
  if ("aggregates" in toJSON) {
    const items = [{ type: "sessions" }, toJSON];
    items1 = items;
  } else {
    items1 = [{ type: "session" }, toJSON.toJSON()];
  }
  const items2 = [items1];
  const tmpResult2 = _mod740;
  return tmpResult2.createEnvelope(obj2, items2);
};
export const createSpanEnvelope = function createSpanEnvelope(arr, getDsn) {
  let beforeSendSpan;
  let date;
  let fn;
  let ignoreSpans;
  let tmp2Result;
  function dscHasRequiredProps(dynamicSamplingContextFromSpan) {
    return dynamicSamplingContextFromSpan.trace_id && dynamicSamplingContextFromSpan.public_key;
  }
  let tmp4 = ignoreSpans;
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
  const obj2 = { sent_at: date.toISOString() };
  date = new Date();
  let tmp8 = dscHasRequiredProps(dynamicSamplingContextFromSpan);
  if (tmp8) {
    tmp8 = { trace: dynamicSamplingContextFromSpan };
    const obj3 = { trace: dynamicSamplingContextFromSpan };
  }
  const merged = Object.assign(tmp8);
  let tmp10 = tunnel && dsn;
  if (tmp10) {
    const obj4 = { dsn: tmp2Result.dsnToString(dsn) };
    tmp10 = obj4;
    tmp2Result = beforeSendSpan(tmp4[1]);
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
    found = arr.filter((item) => {
      const shouldIgnoreSpan = reparentChildSpans.shouldIgnoreSpan;
      reparentChildSpans;
      const obj = TRACE_FLAG_NONE;
      return !shouldIgnoreSpan(obj.spanToJSON(item), ignoreSpans);
    });
  }
  const diff = arr.length - found.length;
  if (diff) {
    if (getDsn != null) {
      getDsn.recordDroppedEvent("before_send", "span", diff);
    }
  }
  if (beforeSendSpan) {
    fn = (item10074) => {
      const obj = TRACE_FLAG_NONE;
      const spanToJSONResult = obj.spanToJSON(item10074);
      let tmp4 = beforeSendSpan(spanToJSONResult);
      if (!tmp4) {
        const tmpResult = TRACE_FLAG_NONE;
        tmpResult.showSpanDropWarning();
        tmp4 = spanToJSONResult;
      }
      return tmp4;
    };
  } else {
    fn = tmp2(tmp4[4]).spanToJSON;
  }
  const items = [];
  for (const item10074 of found) {
    let fnResult = fn(item10074);
    if (fnResult) {
      let push = items.push;
      let obj8 = beforeSendSpan(ignoreSpans[0]);
      arr = push(obj8.createSpanEnvelopeItem(tmp20));
    }
    continue;
  }
  const obj9 = beforeSendSpan(ignoreSpans[0]);
  return obj9.createEnvelope(obj2, items);
};
