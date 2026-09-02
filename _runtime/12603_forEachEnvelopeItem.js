// _runtime/12603_forEachEnvelopeItem.js
import getGlobalSingleton from "12560_getGlobalSingleton.js";
import addNonEnumerableProperty from "12565_addNonEnumerableProperty.js";
import dsnFromString from "12606_dsnFromString.js";
import closure_2 from "metro/00032__slicedToArray.js";
import { normalize } from "12604_normalize.js";

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
  statsd: "metric_bucket",
  raw_security: "security",
};

export const addItemToEnvelope = function addItemToEnvelope(arg0, arg1) {
  const tmp = callback(arg0, 2);
  const items = [tmp[0]];
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
    if (!getGlobalSingleton.GLOBAL_OBJ.__SENTRY__) {
      const _TextEncoder = TextEncoder;
      const textEncoder = new TextEncoder();
      let encodeResult = textEncoder.encode(data);
    }
    __SENTRY__ = __SENTRY__(12560).GLOBAL_OBJ.__SENTRY__;
    encodePolyfill = __SENTRY__.encodePolyfill;
    encodeResult = encodePolyfill(data);
  } else {
    data = data.data;
    const obj = { type: "attachment", length: null, filename: null, content_type: null, attachment_type: null };
    obj[1] = data.length;
    ({ filename: obj3[2], contentType: obj3[3], attachmentType: obj3[4] } = data);
    const items = [addNonEnumerableProperty.dropUndefinedKeys(obj), data];
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
  let obj = { event_id: event_id.event_id, sent_at: new Date().toISOString() };
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
    obj[0] = dsnFromString.dsnToString(arg3);
    tmp4 = obj;
    const obj5 = dsnFromString;
  }
  const merged1 = Object.assign(tmp4);
  let tmp8 = tmp;
  if (event_id.sdkProcessingMetadata && event_id.sdkProcessingMetadata.dynamicSamplingContext) {
    obj1 = { trace: null };
    const obj2 = {};
    const merged2 = Object.assign(tmp);
    obj1[0] = addNonEnumerableProperty.dropUndefinedKeys(obj2);
    tmp8 = obj1;
    const obj7 = addNonEnumerableProperty;
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
  return table[arg0];
};
export { forEachEnvelopeItem };
export const getSdkMetadataForEnvelopeHeader = function getSdkMetadataForEnvelopeHeader(sdk) {
  if (sdk) {
    if (sdk.sdk) {
      const obj = { name: null, version: null };
      ({ name: obj[0], version: obj[1] } = sdk.sdk);
      return obj;
    }
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
      if (lib(closure_1_1[1]).GLOBAL_OBJ.__SENTRY__) {
        if (tmp3(tmp4[1]).GLOBAL_OBJ.__SENTRY__.decodePolyfill) {
          const __SENTRY__ = tmp3(tmp4[1]).GLOBAL_OBJ.__SENTRY__;
          let decodePolyfillResult = __SENTRY__.decodePolyfill(subarrayResult);
        }
        return JSON.parse(decodePolyfillResult);
      }
      const textDecoder = new TextDecoder();
      decodePolyfillResult = textDecoder.decode(subarrayResult);
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
      let items1 = [json1];
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
    let __SENTRY__ = _require;
    let encodePolyfill = dependencyMap;
    if (!require("12560_getGlobalSingleton.js").GLOBAL_OBJ.__SENTRY__) {
      const _TextEncoder = TextEncoder;
      const textEncoder = new TextEncoder();
      let encodeResult = textEncoder.encode(arr);
    }
    __SENTRY__ = __SENTRY__(12560).GLOBAL_OBJ.__SENTRY__;
    encodePolyfill = __SENTRY__.encodePolyfill;
    encodeResult = encodePolyfill(arr);
  }
};
export const serializeEnvelope = function serializeEnvelope(arg0) {
  function append(json) {
    let arr = callback;
    if (typeof callback === "string") {
      if (typeof json === "string") {
        let sum = arr + json;
      } else {
        if (callback(closure_1_1[1]).GLOBAL_OBJ.__SENTRY__) {
          if (tmp14(tmp15[1]).GLOBAL_OBJ.__SENTRY__.encodePolyfill) {
            const __SENTRY__2 = tmp14(tmp15[1]).GLOBAL_OBJ.__SENTRY__;
            let encodePolyfillResult = __SENTRY__2.encodePolyfill(arr);
          }
          sum = [encodePolyfillResult, json];
        }
        const _TextEncoder2 = TextEncoder;
        const textEncoder = new TextEncoder();
        encodePolyfillResult = textEncoder.encode(arr);
      }
      callback = sum;
    } else if (typeof json !== "string") {
      arr = arr.push(json);
    } else {
      let __SENTRY__ = callback;
      let encodePolyfill = closure_1_1;
      if (!callback(closure_1_1[1]).GLOBAL_OBJ.__SENTRY__) {
        const _TextEncoder = TextEncoder;
        const textEncoder1 = new TextEncoder();
        let encodeResult = textEncoder1.encode(json);
      }
      __SENTRY__ = __SENTRY__(encodePolyfill[1]).GLOBAL_OBJ.__SENTRY__;
      encodePolyfill = __SENTRY__.encodePolyfill;
      encodeResult = encodePolyfill(json);
    }
  }
  const tmp4 = callback(arg0, 2);
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
    const tmp8 = callback(tmp6, 2);
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
          json = _JSON3.stringify(require("12604_normalize.js").normalize(tmp3));
          const obj = normalize;
        }
      }
    }
    append(tmp8[1]);
  }
};
