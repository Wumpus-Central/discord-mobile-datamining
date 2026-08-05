// _runtime/00864_forEachEnvelopeItem.js
import _slicedToArray from "_slicedToArray";

function forEachEnvelopeItem(arg0, arg1) {
  for (const item10007 of tmp) {
    if (arg1(item10007, item10007[0].type)) {
      let tmp2 = obj;
      obj.return();
      let flag = true;
      return true;
    }
  }
  return false;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_4 = { session: "session", sessions: "session", attachment: "attachment", transaction: "transaction", event: "error", client_report: "internal", user_report: "default", profile: "profile", profile_chunk: "profile", replay_event: "replay", replay_recording: "replay", check_in: "monitor", feedback: "feedback", span: "span", raw_security: "security", log: "log_item", metric: "metric", trace_metric: "metric" };

export const addItemToEnvelope = function addItemToEnvelope(arg0, arg1) {
  const tmp = _slicedToArray(arg0, 2);
  const items = [tmp[0], ];
  const items1 = [];
  items1[HermesBuiltin.arraySpread(tmp[1], 0)] = arg1;
  items[1] = items1;
  return items;
};
export const createAttachmentEnvelopeItem = function createAttachmentEnvelopeItem(data) {
  if (typeof data.data === "string") {
    data = data.data;
    let obj = require("00825_getGlobalSingleton.js") /* getGlobalSingleton */;
    const sentryCarrier = obj.getSentryCarrier(require("metro/00821__.js").GLOBAL_OBJ);
    if (sentryCarrier.encodePolyfill) {
      let encodePolyfillResult = sentryCarrier.encodePolyfill(data);
    } else {
      const _TextEncoder = TextEncoder;
      const textEncoder = new TextEncoder();
      encodePolyfillResult = textEncoder.encode(data);
    }
  } else {
    data = data.data;
    obj = { type: "attachment", length: null, filename: null, content_type: null, attachment_type: null };
    obj[1] = data.length;
    ({ filename: obj4[2], contentType: obj4[3], attachmentType: obj4[4] } = data);
    const items = [obj, data];
    return items;
  }
};
export function createEnvelope(arg0) {
  let items = arg1;
  if (arg1 === undefined) {
    items = [];
  }
  const items1 = [arg0, items];
  return items1;
}
export const createEventEnvelopeHeaders = function createEventEnvelopeHeaders(event_id) {
  const sdkProcessingMetadata = event_id.sdkProcessingMetadata;
  let prop;
  if (sdkProcessingMetadata != null) {
    prop = sdkProcessingMetadata.dynamicSamplingContext;
  }
  let obj = { event_id: event_id.event_id, sent_at: null };
  obj[1] = new Date().toISOString();
  let tmp2 = arg1;
  if (arg1) {
    obj = { sdk: null };
    obj[0] = arg1;
    tmp2 = obj;
  }
  const merged = Object.assign(tmp2);
  let tmp4 = arg2 && arg3;
  if (tmp4) {
    obj = { dsn: null };
    obj[0] = require("00837_dsnFromString.js") /* dsnFromString */.dsnToString(arg3);
    tmp4 = obj;
    const obj5 = require("00837_dsnFromString.js") /* dsnFromString */;
  }
  const merged1 = Object.assign(tmp4);
  let tmp8 = prop;
  if (prop) {
    const obj1 = { trace: null };
    obj1[0] = prop;
    tmp8 = obj1;
  }
  const merged2 = Object.assign(tmp8);
  return obj;
};
export function createSpanEnvelopeItem(arg0) {
  const items = [{ type: "span" }, arg0];
  return items;
}
export const envelopeContainsItemType = function envelopeContainsItemType(arg0, arg1) {
  let closure_0 = arg1;
  return forEachEnvelopeItem(arg0, (arg0, arg1) => closure_0.includes(arg1));
};
export const envelopeItemTypeToDataCategory = function envelopeItemTypeToDataCategory(arg0) {
  return table[arg0];
};
export { forEachEnvelopeItem };
export const getSdkMetadataForEnvelopeHeader = function getSdkMetadataForEnvelopeHeader(sdk) {
  sdk = undefined;
  if (sdk != null) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    const obj = { name: null, version: null };
    ({ name: obj[0], version: obj[1] } = sdk.sdk);
    return obj;
  }
};
export const parseEnvelope = function parseEnvelope(arr) {
  if (typeof arr !== "string") {
    function readJson() {
      let length = lib.indexOf(10);
      if (length < 0) {
        length = lib.length;
      }
      const subarrayResult = lib.subarray(0, length);
      lib = lib.subarray(length + 1);
      const sentryCarrier = lib(outer1_1[1]).getSentryCarrier(lib(outer1_1[2]).GLOBAL_OBJ);
      if (sentryCarrier.decodePolyfill) {
        let decodePolyfillResult = sentryCarrier.decodePolyfill(subarrayResult);
      } else {
        const _TextDecoder = TextDecoder;
        const textDecoder = new TextDecoder();
        decodePolyfillResult = textDecoder.decode(subarrayResult);
      }
      return JSON.parse(decodePolyfillResult);
    }
    let _require = arr;
    const items = [];
    const json = readJson();
    while (_require.length) {
      let json1 = readJson();
      let length;
      if (typeof json1.length === "number") {
        length = json1.length;
      }
      let items1 = [json1, ];
      if (length) {
        let tmp11 = _require;
        let subarrayResult = _require.subarray(0, length);
        let tmp12 = _require;
        _require = _require.subarray(length + 1);
      } else {
        subarrayResult = readJson();
      }
      items1[1] = subarrayResult;
      arr = items.push(items1);
      let tmp14 = _require;
    }
    const items2 = [json, items];
    return items2;
  } else {
    let sentryCarrier = _require("00825_getGlobalSingleton.js").getSentryCarrier(_require("metro/00821__.js").GLOBAL_OBJ);
    if (sentryCarrier.encodePolyfill) {
      let encodePolyfillResult = sentryCarrier.encodePolyfill(arr);
    } else {
      const _TextEncoder = TextEncoder;
      const textEncoder = new TextEncoder();
      encodePolyfillResult = textEncoder.encode(arr);
    }
    const obj2 = _require("00825_getGlobalSingleton.js");
  }
};
export const serializeEnvelope = function serializeEnvelope(arg0) {
  function append(json) {
    let arr = callback;
    if (typeof callback === "string") {
      if (typeof json === "string") {
        let sum = arr + json;
      } else {
        const sentryCarrier = callback(outer1_1[1]).getSentryCarrier(callback(outer1_1[2]).GLOBAL_OBJ);
        if (sentryCarrier.encodePolyfill) {
          let encodePolyfillResult = sentryCarrier.encodePolyfill(arr);
        } else {
          const _TextEncoder2 = TextEncoder;
          const textEncoder = new TextEncoder();
          encodePolyfillResult = textEncoder.encode(arr);
        }
        sum = [encodePolyfillResult, json];
        const obj5 = callback(outer1_1[1]);
      }
      callback = sum;
    } else if (typeof json !== "string") {
      arr = arr.push(json);
    } else {
      const sentryCarrier1 = callback(outer1_1[1]).getSentryCarrier(callback(outer1_1[2]).GLOBAL_OBJ);
      if (sentryCarrier1.encodePolyfill) {
        let encodePolyfillResult1 = sentryCarrier1.encodePolyfill(json);
      } else {
        const _TextEncoder = TextEncoder;
        const textEncoder1 = new TextEncoder();
        encodePolyfillResult1 = textEncoder1.encode(json);
      }
      const obj3 = callback(outer1_1[1]);
    }
  }
  const tmp4 = _slicedToArray(arg0, 2);
  const _require = JSON.stringify(tmp4[0]);
  if (tmp5 === undefined) {
    let tmp22 = _require;
    if (typeof _require !== "string") {
      tmp22 = (function concatBuffers(arr) {
        const uint8Array = new Uint8Array(arr.reduce((arg0, arg1) => arg0 + arg1.length, 0));
        let num = 0;
        const iter = arr[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp = num;
          let result = uint8Array.set(nextResult, num);
          num = num + nextResult.length;
          continue;
        }
        return uint8Array;
      })(tmp21);
    }
    return tmp22;
  } else {
    const tmp8 = _slicedToArray(tmp6, 2);
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    append("\n" + JSON.stringify(tmp8[0]) + "\n");
    if (typeof tmp8[1] !== "string") {
      const _Uint8Array = Uint8Array;
      if (!(tmp10 instanceof Uint8Array)) {
        try {
          const _JSON2 = JSON;
          let json = JSON.stringify(tmp10);
          append(json);
        } catch (err) {
          const _JSON3 = tmp2.JSON;
          json = _JSON3.stringify(_require("00865_normalize.js").normalize(tmp3));
          const obj = _require("00865_normalize.js");
        }
      }
    }
    append(tmp8[1]);
  }
};