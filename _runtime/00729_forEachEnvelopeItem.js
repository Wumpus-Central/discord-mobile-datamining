// === Module 729: forEachEnvelopeItem ===

// Module 729 (forEachEnvelopeItem)
import _mod686 from "module_686" /* 686 */;
import _mod690 from "module_690" /* 690 */;
import _mod702 from "module_702" /* 702 */;
import normalize from "normalize" /* 730 */;
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
    let obj = _mod690;
    const sentryCarrier = obj.getSentryCarrier(_mod686.GLOBAL_OBJ);
    if (sentryCarrier.encodePolyfill) {
      let encodePolyfillResult = sentryCarrier.encodePolyfill(data);
    } else {
      const _TextEncoder = TextEncoder;
      const encoder = new TextEncoder();
      encodePolyfillResult = encoder.encode(data);
    }
  } else {
    data = data.data;
    obj = { type: "attachment", length: data.length, filename: null, content_type: null, attachment_type: null };
    ({ filename: obj3.filename, contentType: obj3.content_type, attachmentType: obj3.attachment_type } = data);
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
export const createEventEnvelopeHeaders = function createEventEnvelopeHeaders(event_id, sdk, arg2, arg3) {
  const sdkProcessingMetadata = event_id.sdkProcessingMetadata;
  let prop;
  if (sdkProcessingMetadata != null) {
    prop = sdkProcessingMetadata.dynamicSamplingContext;
  }
  let obj = { event_id: event_id.event_id, sent_at: new Date().toISOString() };
  let tmp2 = sdk;
  if (sdk) {
    obj = { sdk };
    tmp2 = obj;
  }
  const merged = Object.assign(tmp2);
  let tmp4 = arg2 && arg3;
  if (tmp4) {
    obj = { dsn: _mod702.dsnToString(arg3) };
    tmp4 = obj;
  }
  const merged1 = Object.assign(tmp4);
  let tmp8 = prop;
  if (prop) {
    const obj1 = { trace: prop };
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
  closure_0 = arg1;
  return forEachEnvelopeItem(arg0, (arg0, arg1) => closure_0.includes(arg1));
};
export const envelopeItemTypeToDataCategory = function envelopeItemTypeToDataCategory(arg0) {
  return closure_4[arg0];
};
export { forEachEnvelopeItem };
export const getSdkMetadataForEnvelopeHeader = function getSdkMetadataForEnvelopeHeader(sdk) {
  sdk = undefined;
  if (sdk != null) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    const obj = { name: null, version: null };
    ({ name: obj.name, version: obj.version } = sdk.sdk);
    return obj;
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
      const sentryCarrier = _mod690.getSentryCarrier(_mod686.GLOBAL_OBJ);
      if (sentryCarrier.decodePolyfill) {
        let decodePolyfillResult = sentryCarrier.decodePolyfill(subarrayResult);
      } else {
        const _TextDecoder = TextDecoder;
        const decoder = new TextDecoder();
        decodePolyfillResult = decoder.decode(subarrayResult);
      }
      return JSON.parse(decodePolyfillResult);
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
    let sentryCarrier = require("module_690").getSentryCarrier(require("module_686").GLOBAL_OBJ);
    if (sentryCarrier.encodePolyfill) {
      let encodePolyfillResult = sentryCarrier.encodePolyfill(arr);
    } else {
      const _TextEncoder = TextEncoder;
      const encoder = new TextEncoder();
      encodePolyfillResult = encoder.encode(arr);
    }
    const obj = require("module_690");
  }
};
export const serializeEnvelope = function serializeEnvelope(arg0) {
  function append(json) {
    let arr = sum;
    if (typeof sum === "string") {
      if (typeof json === "string") {
        sum = arr + json;
      } else {
        const sentryCarrier = _mod690.getSentryCarrier(_mod686.GLOBAL_OBJ);
        if (sentryCarrier.encodePolyfill) {
          let encodePolyfillResult = sentryCarrier.encodePolyfill(arr);
        } else {
          const _TextEncoder2 = TextEncoder;
          const encoder2 = new TextEncoder();
          encodePolyfillResult = encoder2.encode(arr);
        }
        sum = [encodePolyfillResult, json];
      }
    } else if (typeof json !== "string") {
      arr = arr.push(json);
    } else {
      const sentryCarrier1 = _mod690.getSentryCarrier(_mod686.GLOBAL_OBJ);
      if (sentryCarrier1.encodePolyfill) {
        let encodePolyfillResult1 = sentryCarrier1.encodePolyfill(json);
      } else {
        const _TextEncoder = TextEncoder;
        const encoder = new TextEncoder();
        encodePolyfillResult1 = encoder.encode(json);
      }
    }
  }
  const tmp4 = _slicedToArray(arg0, 2);
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
          const normalizer = normalize;
          json = _JSON3.stringify(normalizer.normalize(tmp3));
        }
      }
    }
    append(tmp8[1]);
  }
};