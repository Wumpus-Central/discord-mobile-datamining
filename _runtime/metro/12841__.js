// === Module 12841: ? ===

// Module 12841
import _mod12798 from "module_12798" /* 12798 */;
import _mod12803 from "module_12803" /* 12803 */;
import _mod12842 from "module_12842" /* 12842 */;
import _mod12844 from "module_12844" /* 12844 */;
import _slicedToArray from "module_32" /* 32 */;

function forEachEnvelopeItem(arg0, fn) {
  for (const item10007 of tmp) {
    if (arg1(item10007, item10007[0].type)) {
      obj.return();
      let flag = true;
      return true;
    }
  }
  return false;
}
let closure_4 = { session: "session", sessions: "session", attachment: "attachment", transaction: "transaction", event: "error", client_report: "internal", user_report: "default", profile: "profile", profile_chunk: "profile", replay_event: "replay", replay_recording: "replay", check_in: "monitor", feedback: "feedback", span: "span", statsd: "metric_bucket", raw_security: "security" };

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
    let __SENTRY__ = require;
    let encodePolyfill = dependencyMap;
    if (!_mod12798.GLOBAL_OBJ.__SENTRY__) {
      const _TextEncoder = TextEncoder;
      const encoder = new TextEncoder();
      let encodeResult = encoder.encode(data);
    }
    __SENTRY__ = __SENTRY__(12798).GLOBAL_OBJ.__SENTRY__;
    encodePolyfill = __SENTRY__.encodePolyfill;
    encodeResult = encodePolyfill(data);
  } else {
    data = data.data;
    const obj = { type: "attachment", length: data.length, filename: null, content_type: null, attachment_type: null };
    ({ filename: obj2.filename, contentType: obj2.content_type, attachmentType: obj2.attachment_type } = data);
    const items = [obj.dropUndefinedKeys(obj), data];
    return items;
  }
};
export function createEnvelope(eventEnvelopeHeaders) {
  let items = items1;
  if (items1 === undefined) {
    items = [];
  }
  items1 = [eventEnvelopeHeaders, items];
  return items1;
}
export const createEventEnvelopeHeaders = function createEventEnvelopeHeaders(event_id, sdk, arg2, url) {
  let obj = { event_id: event_id.event_id, sent_at: new Date().toISOString() };
  let tmp2 = sdk;
  if (sdk) {
    obj = { sdk };
    tmp2 = obj;
  }
  const merged = Object.assign(tmp2);
  let tmp4 = arg2 && url;
  if (tmp4) {
    obj = { dsn: _mod12844.dsnToString(url) };
    tmp4 = obj;
  }
  const merged1 = Object.assign(tmp4);
  let tmp8 = tmp;
  if (event_id.sdkProcessingMetadata && event_id.sdkProcessingMetadata.dynamicSamplingContext) {
    const obj1 = { trace: null };
    const obj2 = {};
    const merged2 = Object.assign(tmp);
    obj1.trace = _mod12803.dropUndefinedKeys(obj2);
    tmp8 = obj1;
  }
  const merged3 = Object.assign(tmp8);
  return obj;
};
export function createSpanEnvelopeItem(arg0) {
  const items = [{ type: "span" }, arg0];
  return items;
}
export const envelopeContainsItemType = function envelopeContainsItemType(arg0, arg1) {
  closure_0 = arg1;
  return forEachEnvelopeItem(arg0, (arg0, arg1) => closure_0.includes(arg1));
};
export const envelopeItemTypeToDataCategory = function envelopeItemTypeToDataCategory(arg0) {
  return closure_4[arg0];
};
export { forEachEnvelopeItem };
export const getSdkMetadataForEnvelopeHeader = function getSdkMetadataForEnvelopeHeader(sdk) {
  if (sdk) {
    if (sdk.sdk) {
      const obj = { name: null, version: null };
      ({ name: obj.name, version: obj.version } = sdk.sdk);
      return obj;
    }
  }
};
export const parseEnvelope = function parseEnvelope(arr) {
  if (typeof arr !== "string") {
    function readJson() {
      let length = closure_0.indexOf(10);
      if (length < 0) {
        length = closure_0.length;
      }
      const subarrayResult = closure_0.subarray(0, length);
      closure_0 = closure_0.subarray(length + 1);
      if (_mod12798.GLOBAL_OBJ.__SENTRY__) {
        if (_mod12798.GLOBAL_OBJ.__SENTRY__.decodePolyfill) {
          const __SENTRY__ = _mod12798.GLOBAL_OBJ.__SENTRY__;
          let decodePolyfillResult = __SENTRY__.decodePolyfill(subarrayResult);
        }
        return JSON.parse(decodePolyfillResult);
      }
      const decoder = new TextDecoder();
      decodePolyfillResult = decoder.decode(subarrayResult);
    }
    _require = arr;
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
        let subarrayResult = require("Discord");
        _require = _require.subarray(length + 1);
      } else {
        subarrayResult = readJson();
      }
      items1[1] = subarrayResult;
      arr = items.push(items1);
    }
    const items2 = [json, items];
    return items2;
  } else {
    let __SENTRY__ = _require;
    let encodePolyfill = dependencyMap;
    if (!require("module_12798").GLOBAL_OBJ.__SENTRY__) {
      const _TextEncoder = TextEncoder;
      const encoder = new TextEncoder();
      let encodeResult = encoder.encode(arr);
    }
    __SENTRY__ = __SENTRY__(12798).GLOBAL_OBJ.__SENTRY__;
    encodePolyfill = __SENTRY__.encodePolyfill;
    encodeResult = encodePolyfill(arr);
  }
};
export const serializeEnvelope = function serializeEnvelope(dependencyMap) {
  function append(json) {
    let arr = sum;
    if (typeof sum === "string") {
      if (typeof json === "string") {
        sum = arr + json;
      } else {
        if (_mod12798.GLOBAL_OBJ.__SENTRY__) {
          if (_mod12798.GLOBAL_OBJ.__SENTRY__.encodePolyfill) {
            const __SENTRY__2 = _mod12798.GLOBAL_OBJ.__SENTRY__;
            let encodePolyfillResult = __SENTRY__2.encodePolyfill(arr);
          }
          sum = [encodePolyfillResult, json];
        }
        const _TextEncoder2 = TextEncoder;
        const encoder2 = new TextEncoder();
        encodePolyfillResult = encoder2.encode(arr);
      }
    } else if (typeof json !== "string") {
      arr = arr.push(json);
    } else {
      let __SENTRY__ = require;
      let encodePolyfill = dependencyMap;
      if (!_mod12798.GLOBAL_OBJ.__SENTRY__) {
        const _TextEncoder = TextEncoder;
        const encoder = new TextEncoder();
        let encodeResult = encoder.encode(json);
      }
      __SENTRY__ = __SENTRY__(12798).GLOBAL_OBJ.__SENTRY__;
      encodePolyfill = __SENTRY__.encodePolyfill;
      encodeResult = encodePolyfill(json);
    }
  }
  const tmp4 = _slicedToArray(dependencyMap, 2);
  const require = JSON.stringify(tmp4[0]);
  if (tmp5 === undefined) {
    let tmp22 = require;
    if (typeof require !== "string") {
      tmp22 = (function concatBuffers(arr) {
        const uint8Array = new Uint8Array(arr.reduce((acc, item) => acc + item.length, 0));
        let num = 0;
        const iter = arr[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
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
          const normalizer = _mod12842;
          json = _JSON3.stringify(normalizer.normalize(tmp3));
        }
      }
    }
    append(tmp8[1]);
  }
  tmp5 = tmp4[1][Symbol.iterator]();
};