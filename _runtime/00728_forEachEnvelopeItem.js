// _runtime/00728_forEachEnvelopeItem.js
import _mod685 from "metro/00685__.js";
import _mod689 from "metro/00689__.js";
import _mod701 from "metro/00701__.js";
import normalize from "00729_normalize.js";
import _slicedToArray from "metro/00032__.js";

function forEachEnvelopeItem(dependencyMap, fn) {
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
let closure_4 = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  profile_chunk: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  feedback: "feedback",
  span: "span",
  raw_security: "security",
  log: "log_item",
  metric: "metric",
  trace_metric: "metric",
};

export function addItemToEnvelope(eventEnvelope, attachmentEnvelopeItem) {
  const tmp = _slicedToArray(eventEnvelope, 2);
  items = [tmp[0]];
  const items1 = [];
  items1[HermesBuiltin.arraySpread(tmp[1], 0)] = attachmentEnvelopeItem;
  items[1] = items1;
  return items;
}
export function createAttachmentEnvelopeItem(item10025) {
  if (typeof item10025.data === "string") {
    const data = item10025.data;
    const sentryCarrier = _mod689.getSentryCarrier(_mod685.GLOBAL_OBJ);
    if (sentryCarrier.encodePolyfill) {
      let encodePolyfillResult = sentryCarrier.encodePolyfill(data);
    } else {
      const _TextEncoder = TextEncoder;
      const encoder = new TextEncoder();
      encodePolyfillResult = encoder.encode(data);
    }
  } else {
    const data1 = item10025.data;
    const obj2 = {
      type: "attachment",
      length: data1.length,
      filename: null,
      content_type: null,
      attachment_type: null,
    };
    ({ filename: obj3.filename, contentType: obj3.content_type, attachmentType: obj3.attachment_type } = item10025);
    items = [obj2, data1];
    return items;
  }
}
export function createEnvelope(eventEnvelopeHeaders) {
  items = items1;
  if (items1 === undefined) {
    items = [];
  }
  items1 = [eventEnvelopeHeaders, items];
  return items1;
}
export function createEventEnvelopeHeaders(event_id, sdkMetadataForEnvelopeHeader, tunnel, _dsn) {
  const sdkProcessingMetadata = event_id.sdkProcessingMetadata;
  let prop;
  if (sdkProcessingMetadata != null) {
    prop = sdkProcessingMetadata.dynamicSamplingContext;
  }
  const obj = { event_id: event_id.event_id, sent_at: new Date().toISOString() };
  let tmp2 = sdkMetadataForEnvelopeHeader;
  if (sdkMetadataForEnvelopeHeader) {
    const obj2 = { sdk: sdkMetadataForEnvelopeHeader };
    tmp2 = obj2;
  }
  const merged = Object.assign(tmp2);
  let tmp4 = tunnel && _dsn;
  if (tmp4) {
    const obj3 = { dsn: _mod701.dsnToString(_dsn) };
    tmp4 = obj3;
  }
  const merged1 = Object.assign(tmp4);
  let tmp8 = prop;
  if (prop) {
    const obj4 = { trace: prop };
    tmp8 = obj4;
  }
  const merged2 = Object.assign(tmp8);
  return obj;
}
export function createSpanEnvelopeItem(arg0) {
  items = [{ type: "span" }, arg0];
  return items;
}
export function envelopeContainsItemType(dependencyMap, arg1) {
  closure_0 = arg1;
  return forEachEnvelopeItem(dependencyMap, (arg0, arg1) => closure_0.includes(arg1));
}
export function envelopeItemTypeToDataCategory(arg0) {
  return closure_4[arg0];
}
export { forEachEnvelopeItem };
export function getSdkMetadataForEnvelopeHeader(sdkMetadata) {
  let sdk;
  if (sdkMetadata != null) {
    sdk = sdkMetadata.sdk;
  }
  if (sdk) {
    const obj = { name: null, version: null };
    ({ name: obj.name, version: obj.version } = sdkMetadata.sdk);
    return obj;
  }
}
export function parseEnvelope(arr) {
  if (typeof arr !== "string") {
    function readJson() {
      length = closure_0.indexOf(10);
      if (length < 0) {
        length = closure_0.length;
      }
      const subarrayResult = closure_0.subarray(0, length);
      closure_0 = closure_0.subarray(length + 1);
      const sentryCarrier = _mod689.getSentryCarrier(_mod685.GLOBAL_OBJ);
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
    items = [];
    const json = readJson();
    while (_require.length) {
      let json1 = readJson();
      length = undefined;
      if (typeof json1.length === "number") {
        length = json1.length;
      }
      let items1 = [json1];
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
    let sentryCarrier = require("metro/00689__.js").getSentryCarrier(require("metro/00685__.js").GLOBAL_OBJ);
    if (sentryCarrier.encodePolyfill) {
      let encodePolyfillResult = sentryCarrier.encodePolyfill(arr);
    } else {
      const _TextEncoder = TextEncoder;
      const encoder = new TextEncoder();
      encodePolyfillResult = encoder.encode(arr);
    }
    const obj = require("metro/00689__.js");
  }
}
export function serializeEnvelope(items) {
  function append(json) {
    if (typeof sum === "string") {
      if (typeof json === "string") {
        sum = arr + json;
      } else {
        const sentryCarrier = _mod689.getSentryCarrier(_mod685.GLOBAL_OBJ);
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
      arr.push(json);
    } else {
      const sentryCarrier1 = _mod689.getSentryCarrier(_mod685.GLOBAL_OBJ);
      if (sentryCarrier1.encodePolyfill) {
        let encodePolyfillResult1 = sentryCarrier1.encodePolyfill(json);
      } else {
        const _TextEncoder = TextEncoder;
        const encoder = new TextEncoder();
        encodePolyfillResult1 = encoder.encode(json);
      }
    }
  }
  const tmp4 = _slicedToArray(items, 2);
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
  tmp5 = tmp4[1][Symbol.iterator]();
}
