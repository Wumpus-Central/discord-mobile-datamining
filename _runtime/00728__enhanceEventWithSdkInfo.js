// _runtime/00728__enhanceEventWithSdkInfo.js
import spanToJSON2 from "00684_spanToJSON.js";
import _mod702 from "metro/00702__.js";
import logIgnoredSpan from "00724_logIgnoredSpan.js";
import forEachEnvelopeItem from "00729_forEachEnvelopeItem.js";

require = arg1;
const dependencyMap = arg6;
function _enhanceEventWithSdkInfo(sdk, name) {
  if (name) {
    const tmp = sdk.sdk || {};
    const obj = {};
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
    const arraySpreadResult = HermesBuiltin.arraySpread(integrations, 0);
    const tmp9 = name.integrations || [];
    HermesBuiltin.arraySpread(tmp9, arraySpreadResult);
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
    const arraySpreadResult5 = HermesBuiltin.arraySpread(packages, 0);
    const tmp17 = name.packages || [];
    HermesBuiltin.arraySpread(tmp17, arraySpreadResult5);
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
      const obj2 = {};
      const merged1 = Object.assign(settings1);
      const merged2 = Object.assign(name.settings);
      const tmp23 = obj2;
    }
    obj.settings = tmp23;
    sdk.sdk = obj;
    return sdk;
  } else {
    return sdk;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export { _enhanceEventWithSdkInfo };
export const createEventEnvelope = function createEventEnvelope(type, url, sdk, arg3) {
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
  const eventEnvelopeHeaders = forEachEnvelopeItem.createEventEnvelopeHeaders(
    type,
    sdkMetadataForEnvelopeHeader,
    arg3,
    url,
  );
  delete tmp[tmp2];
  const items = [{ type: str }, type];
  const tmp3Result = forEachEnvelopeItem;
  const items1 = [items];
  return forEachEnvelopeItem.createEnvelope(eventEnvelopeHeaders, items1);
};
export const createSessionEnvelope = function createSessionEnvelope(toJSON, url, sdk, arg3) {
  const sdkMetadataForEnvelopeHeader = forEachEnvelopeItem.getSdkMetadataForEnvelopeHeader(sdk);
  const obj2 = { sent_at: null };
  obj2.sent_at = new Date().toISOString();
  let tmp4 = sdkMetadataForEnvelopeHeader;
  if (sdkMetadataForEnvelopeHeader) {
    const obj3 = { sdk: sdkMetadataForEnvelopeHeader };
    tmp4 = obj3;
  }
  const merged = Object.assign(tmp4);
  let tmp6 = arg3 && url;
  if (tmp6) {
    const obj4 = { dsn: _mod702.dsnToString(url) };
    tmp6 = obj4;
    const tmpResult = _mod702;
  }
  const merged1 = Object.assign(tmp6);
  if ("aggregates" in toJSON) {
    const items = [{ type: "sessions" }, toJSON];
    let items1 = items;
  } else {
    items1 = [{ type: "session" }, toJSON.toJSON()];
  }
  const date = new Date();
  const items2 = [items1];
  return forEachEnvelopeItem.createEnvelope(obj2, items2);
};
export const createSpanEnvelope = function createSpanEnvelope(arr, getDsn) {
  const dynamicSamplingContextFromSpan = beforeSendSpan(ignoreSpans[2]).getDynamicSamplingContextFromSpan(arr[0]);
  let dsn;
  if (getDsn != null) {
    dsn = getDsn.getDsn();
  }
  let tunnel;
  if (getDsn != null) {
    tunnel = getDsn.getOptions().tunnel;
  }
  let obj = beforeSendSpan(ignoreSpans[2]);
  const obj2 = { sent_at: new Date().toISOString() };
  let tmp8 = (function dscHasRequiredProps(dynamicSamplingContextFromSpan) {
    return dynamicSamplingContextFromSpan.trace_id && dynamicSamplingContextFromSpan.public_key;
  })(dynamicSamplingContextFromSpan);
  if (tmp8) {
    const obj3 = { trace: dynamicSamplingContextFromSpan };
    tmp8 = obj3;
  }
  const merged = Object.assign(tmp8);
  let tmp10 = tunnel && dsn;
  if (tmp10) {
    const obj4 = { dsn: tmp2(tmp4[1]).dsnToString(dsn) };
    tmp10 = obj4;
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
    found = arr.filter((item) => {
      const obj = logIgnoredSpan;
      return !obj.shouldIgnoreSpan(spanToJSON2.spanToJSON(item), ignoreSpans);
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
      const spanToJSONResult = spanToJSON2.spanToJSON(arg0);
      let tmp4 = beforeSendSpan(spanToJSONResult);
      if (!tmp4) {
        spanToJSON2.showSpanDropWarning();
        tmp4 = spanToJSONResult;
        const tmpResult = spanToJSON2;
      }
      return tmp4;
    };
  } else {
    const spanToJSON = tmp2(tmp4[4]).spanToJSON;
  }
  found[Symbol.iterator]();
};
