// === Module 12608: ? ===

// Module 12608
import _mod12570 from "module_12570" /* 12570 */;
import _mod12609 from "module_12609" /* 12609 */;
import _mod12612 from "module_12612" /* 12612 */;
import DEBUG_BUILD from "module_12564" /* 12564 */;
import CONSOLE_LEVELS from "module_12565" /* 12565 */;

const require = globalThis.__r;
let _require, integrations;


export const createEventEnvelope = function createEventEnvelope(type, _dsn, sdk, tunnel) {
  const obj = _mod12609;
  const sdkMetadataForEnvelopeHeader = obj.getSdkMetadataForEnvelopeHeader(sdk);
  let str = "event";
  const tmp2 = type;
  if (type.type) {
    str = "event";
    if ("replay_event" !== type.type) {
      str = type.type;
    }
  }
  if (sdk && sdk.sdk) {
    type.sdk = type.sdk || {};
    let name = type.sdk.name;
    sdk = type.sdk;
    if (!name) {
      name = tmp6.name;
    }
    sdk.name = name;
    let version = type.sdk.version;
    const sdk2 = type.sdk;
    if (!version) {
      version = tmp6.version;
    }
    sdk2.version = version;
    integrations = type.sdk.integrations;
    const sdk3 = type.sdk;
    if (!integrations) {
      integrations = [];
    }
    const items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items, integrations, 0);
    const tmp10 = (sdk && sdk.sdk).integrations || [];
    HermesBuiltin.arraySpread(items, tmp10, arraySpreadResult);
    sdk3.integrations = items;
    let packages = type.sdk.packages;
    const sdk4 = type.sdk;
    if (!packages) {
      packages = [];
    }
    const items1 = [];
    const arraySpreadResult5 = HermesBuiltin.arraySpread(items1, packages, 0);
    const tmp18 = (sdk && sdk.sdk).packages || [];
    HermesBuiltin.arraySpread(items1, tmp18, arraySpreadResult5);
    sdk4.packages = items1;
  }
  const tmp3Result = _mod12609;
  const eventEnvelopeHeaders = tmp3Result.createEventEnvelopeHeaders(type, sdkMetadataForEnvelopeHeader, tunnel, _dsn);
  delete tmp2["sdkProcessingMetadata"];
  const items2 = [{ type: str }, type];
  const items3 = [items2];
  const tmp3Result2 = _mod12609;
  return tmp3Result2.createEnvelope(eventEnvelopeHeaders, items3);
};
export const createSessionEnvelope = function createSessionEnvelope(toJSON, _dsn, _metadata, tunnel) {
  let date;
  let items1;
  let tmpResult;
  const obj = _mod12609;
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
    tmpResult = _mod12612;
  }
  const merged1 = Object.assign(tmp6);
  if ("aggregates" in toJSON) {
    const items = [{ type: "sessions" }, toJSON];
    items1 = items;
  } else {
    items1 = [{ type: "session" }, toJSON.toJSON()];
  }
  const items2 = [items1];
  const tmpResult2 = _mod12609;
  return tmpResult2.createEnvelope(obj2, items2);
};
export const createSpanEnvelope = function createSpanEnvelope(items, getDsn) {
  let closure_0;
  let date;
  let tmp2Result;
  function dscHasRequiredProps(dynamicSamplingContextFromSpan) {
    return dynamicSamplingContextFromSpan.trace_id && dynamicSamplingContextFromSpan.public_key;
  }
  let obj = require("module_12601");
  const dynamicSamplingContextFromSpan = obj.getDynamicSamplingContextFromSpan(items[0]);
  const tmp6 = getDsn && getDsn.getDsn();
  const obj2 = { sent_at: date.toISOString() };
  const tmp7 = getDsn && getDsn.getOptions().tunnel;
  date = new Date();
  let tmp8 = dscHasRequiredProps(dynamicSamplingContextFromSpan);
  const tmp2 = _require;
  if (tmp8) {
    tmp8 = { trace: dynamicSamplingContextFromSpan };
    const obj3 = { trace: dynamicSamplingContextFromSpan };
  }
  const merged = Object.assign(tmp8);
  let tmp10 = tmp7 && tmp6;
  if (tmp10) {
    const obj4 = { dsn: tmp2Result.dsnToString(tmp6) };
    tmp10 = obj4;
    tmp2Result = tmp2(12612);
  }
  const merged1 = Object.assign(tmp10);
  const tmp14 = getDsn && getDsn.getOptions().beforeSendSpan;
  _require = tmp14;
  items = [];
  const tmp15 = tmp14 ? ((arg0) => {
    const obj = _mod12570;
    const tmp3 = closure_0(obj.spanToJSON(arg0));
    if (!tmp3) {
      const tmpResult = _mod12570;
      tmpResult.showSpanDropWarning();
    }
    return tmp3;
  }) : ((arg0) => {
    const obj = closure_0(dependencyMap[5]);
    return obj.spanToJSON(arg0);
  });
  const iter = items[Symbol.iterator]();
  while (iter !== undefined) {
    let tmp15Result = tmp15(iter.next());
    if (tmp15Result) {
      let push = items.push;
      let obj7 = require("module_12609");
      let arr = push(obj7.createSpanEnvelopeItem(tmp17));
    }
    continue;
  }
  const obj8 = require("module_12609");
  return obj8.createEnvelope(obj2, items);
};