// === Module 12609: ? ===

// Module 12609
import _mod12566 from "module_12566" /* 12566 */;
import _mod12571 from "module_12571" /* 12571 */;
import _mod12610 from "module_12610" /* 12610 */;
import _mod12612 from "module_12612" /* 12612 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

let _require;

function forEachEnvelopeItem(arg0, fn) {
  const tmp = arg0[1];
  for (const item10007 of tmp) {
    if (fn(item10007, item10007[0].type)) {
      obj.return();
      let flag = true;
      return true;
    }
  }
  return false;
}
let closure_4 = { session: "session", sessions: "session", attachment: "attachment", transaction: "transaction", event: "error", client_report: "internal", user_report: "default", profile: "profile", profile_chunk: "profile", replay_event: "replay", replay_recording: "replay", check_in: "monitor", feedback: "feedback", span: "span", statsd: "metric_bucket", raw_security: "security" };

export const addItemToEnvelope = function addItemToEnvelope(arg0, arg1) {
  const tmp2 = _slicedToArray(arg0, 2);
  const items = [tmp2[0], ];
  const items1 = [];
  items1[HermesBuiltin.arraySpread(items1, tmp2[1], 0)] = arg1;
  items[1] = items1;
  return items;
};
export const createAttachmentEnvelopeItem = function createAttachmentEnvelopeItem(data) {
  let data1;
  if (typeof data.data === "string") {
    data = data.data;
    if (_mod12566.GLOBAL_OBJ.__SENTRY__) {
      let encodePolyfillResult;
      if (_mod12566.GLOBAL_OBJ.__SENTRY__.encodePolyfill) {
        const __SENTRY__ = _mod12566.GLOBAL_OBJ.__SENTRY__;
        encodePolyfillResult = __SENTRY__.encodePolyfill(data);
      }
      data1 = encodePolyfillResult;
    }
    const _TextEncoder = TextEncoder;
    const self = this;
    const self2 = this;
    const encoder = new TextEncoder();
    encodePolyfillResult = encoder.encode(data);
  } else {
    data1 = data.data;
  }
  const items = [, ];
  const obj = _mod12571;
  const obj2 = { type: "attachment", length: data1.length, filename: data.filename, content_type: data.contentType, attachment_type: data.attachmentType };
  items[0] = obj.dropUndefinedKeys(obj2);
  items[1] = data1;
  return items;
};
export function createEnvelope(eventEnvelopeHeaders) {
  let items1;
  let items = items1;
  if (items1 === undefined) {
    items = [];
  }
  items1 = [eventEnvelopeHeaders, items];
  return items1;
}
export const createEventEnvelopeHeaders = function createEventEnvelopeHeaders(event_id, sdk, tunnel, _dsn) {
  let date;
  let dropUndefinedKeys;
  let obj5;
  let obj6;
  const obj = { event_id: event_id.event_id, sent_at: date.toISOString() };
  let tmp2 = sdk;
  date = new Date();
  if (tmp2) {
    tmp2 = { sdk };
    const obj2 = { sdk };
  }
  const merged = Object.assign(tmp2);
  let tmp4 = tunnel && _dsn;
  if (tmp4) {
    const obj3 = { dsn: obj5.dsnToString(_dsn) };
    tmp4 = obj3;
    obj5 = _mod12612;
  }
  const merged1 = Object.assign(tmp4);
  let tmp8 = tmp;
  if (tmp8) {
    const obj4 = { trace: dropUndefinedKeys(obj6) };
    obj6 = {};
    dropUndefinedKeys = _mod12571.dropUndefinedKeys;
    _mod12571;
    const merged2 = Object.assign(tmp);
    tmp8 = obj4;
  }
  const merged3 = Object.assign(tmp8);
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
  return closure_4[arg0];
};
export { forEachEnvelopeItem };
export const getSdkMetadataForEnvelopeHeader = function getSdkMetadataForEnvelopeHeader(sdk) {
  const tmp = sdk;
  if (tmp) {
    if (sdk.sdk) {
      const obj = { name: null, version: null };
      ({ name: obj.name, version: obj.version } = sdk.sdk);
      return obj;
    }
  }
};
export const parseEnvelope = function parseEnvelope(arr) {
  let tmp = arr;
  if (typeof arr === "string") {
    if (require("module_12566").GLOBAL_OBJ.__SENTRY__) {
      let encodePolyfillResult;
      if (require("module_12566").GLOBAL_OBJ.__SENTRY__.encodePolyfill) {
        let __SENTRY__ = tmp12(12566).GLOBAL_OBJ.__SENTRY__;
        encodePolyfillResult = __SENTRY__.encodePolyfill(arr);
      }
      tmp = encodePolyfillResult;
    }
    const _TextEncoder = TextEncoder;
    const self = this;
    const self2 = this;
    const encoder = new TextEncoder();
    encodePolyfillResult = encoder.encode(arr);
  }
  function readJson() {
    let length = closure_0.indexOf(10);
    if (length < 0) {
      length = closure_0.length;
    }
    const _JSON = JSON;
    const subarrayResult = closure_0.subarray(0, length);
    closure_0 = closure_0.subarray(length + 1);
    if (_mod12566.GLOBAL_OBJ.__SENTRY__) {
      let decodePolyfillResult;
      if (_mod12566.GLOBAL_OBJ.__SENTRY__.decodePolyfill) {
        const __SENTRY__ = _mod12566.GLOBAL_OBJ.__SENTRY__;
        decodePolyfillResult = __SENTRY__.decodePolyfill(subarrayResult);
      }
      return parse(decodePolyfillResult);
    }
    const decoder = new TextDecoder();
    decodePolyfillResult = decoder.decode(subarrayResult);
  }
  _require = tmp;
  const items = [];
  const json = readJson();
  while (_require.length) {
    let subarrayResult;
    let json1 = readJson();
    let length;
    if (typeof json1.length === "number") {
      length = json1.length;
    }
    let items1 = [json1, ];
    let push = items.push;
    if (length) {
      subarrayResult = require("Discord");
      _require = _require.subarray(length + 1);
    } else {
      subarrayResult = readJson();
    }
    items1[1] = subarrayResult;
    arr = push(items1);
  }
  const items2 = [json, items];
  return items2;
};
export const serializeEnvelope = function serializeEnvelope(arg0) {
  let sum;
  let tmp4;
  function concatBuffers(arr) {
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
  }
  function append(json) {
    let require;
    if (typeof require === "string") {
      if (typeof json === "string") {
        require = arr + json;
      } else {
        if (_mod12566.GLOBAL_OBJ.__SENTRY__) {
          let encodePolyfillResult;
          if (_mod12566.GLOBAL_OBJ.__SENTRY__.encodePolyfill) {
            const __SENTRY__2 = tmp11(12566).GLOBAL_OBJ.__SENTRY__;
            encodePolyfillResult = __SENTRY__2.encodePolyfill(arr);
          }
          require = [encodePolyfillResult, json];
        }
        const _TextEncoder2 = TextEncoder;
        const self3 = this;
        const self4 = this;
        const encoder2 = new TextEncoder();
        encodePolyfillResult = encoder2.encode(arr);
      }
    } else {
      let tmp4 = json;
      const push = arr.push;
      if (typeof json === "string") {
        if (_mod12566.GLOBAL_OBJ.__SENTRY__) {
          let encodePolyfillResult1;
          if (_mod12566.GLOBAL_OBJ.__SENTRY__.encodePolyfill) {
            const __SENTRY__ = tmp9(12566).GLOBAL_OBJ.__SENTRY__;
            encodePolyfillResult1 = __SENTRY__.encodePolyfill(json);
          }
          tmp4 = encodePolyfillResult1;
        }
        const _TextEncoder = TextEncoder;
        const self = this;
        const self2 = this;
        const encoder = new TextEncoder();
        encodePolyfillResult1 = encoder.encode(json);
      }
      push(tmp4);
    }
  }
  let tmp = _slicedToArray(arg0, 2);
  const tmp2 = tmp[1];
  let require = JSON.stringify(tmp[0]);
  const tmp3 = tmp2[Symbol.iterator]();
  if (tmp3 === undefined) {
    let tmp20 = require;
    if (typeof require !== "string") {
      tmp20 = concatBuffers(tmp19);
    }
    return tmp20;
  } else {
    const tmp6 = _slicedToArray(tmp4, 2);
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    append("\n" + JSON.stringify(tmp6[0]) + "\n");
    if (typeof tmp6[1] !== "string") {
      const _Uint8Array = Uint8Array;
      if (!(tmp6[1] instanceof Uint8Array)) {
        let json;
        try {
          const _JSON2 = JSON;
          json = JSON.stringify(tmp8);
        } catch (err) {
          const _JSON3 = JSON;
          const normalizer = _mod12610;
          json = stringify(normalizer.normalize(tmp8));
        }
        append(json);
      }
    }
    append(tmp6[1]);
  }
};