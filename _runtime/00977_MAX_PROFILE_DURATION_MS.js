// === Module 977: MAX_PROFILE_DURATION_MS ===

// Module 977 (MAX_PROFILE_DURATION_MS)
import _mod693 from "module_693" /* 693 */;
import _mod904 from "module_904" /* 904 */;
import _mod948 from "module_948" /* 948 */;

const require = globalThis.__r;
let _require, stack_id;

function createProfilePayload(event_id, arg1, resources, type) {
  let DEFAULT_ENVIRONMENT;
  let date;
  let items;
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let result2;
  let tmp29;
  if ("transaction" !== type.type) {
    const _TypeError2 = TypeError;
    const self5 = this;
    const self6 = this;
    const typeError = new TypeError("Profiling events may only be attached to transactions, this should never occur.");
    throw typeError;
  } else if (null == resources) {
    const _TypeError = TypeError;
    const _HermesInternal2 = HermesInternal;
    const self3 = this;
    const self4 = this;
    const typeError1 = new TypeError("Cannot construct profiling event envelope without a valid profile. Got " + resources + " instead.");
    throw typeError1;
  } else {
    let result1;
    let debugImagesForResources;
    const contexts = type.contexts;
    let trace_id;
    if (contexts != null) {
      const trace = contexts.trace;
      if (trace != null) {
        trace_id = trace.trace_id;
      }
    }
    let DEBUG_BUILD = typeof trace_id === "string";
    if (typeof trace_id === "string") {
      DEBUG_BUILD = 32 !== trace_id.length;
    }
    if (DEBUG_BUILD) {
      DEBUG_BUILD = _mod948.DEBUG_BUILD;
    }
    if (DEBUG_BUILD) {
      const debug = _mod693.debug;
      const _HermesInternal = HermesInternal;
      debug.log("[Profiling] Invalid traceId: " + trace_id + " on profiled event");
    }
    let str4 = "";
    if (typeof trace_id === "string") {
      str4 = trace_id;
    }
    let tmp8 = resources;
    if (!("thread_metadata" in resources)) {
      tmp8 = convertJSSelfProfileToSampledFormat(resources);
    }
    let tmp10 = arg1;
    if (!tmp10) {
      let result;
      if (typeof type.start_timestamp === "number") {
        result = 1000 * type.start_timestamp;
      } else {
        const obj13 = _mod693;
        result = 1000 * obj13.timestampInSeconds();
      }
      tmp10 = result;
    }
    if (typeof type.timestamp === "number") {
      result1 = 1000 * type.timestamp;
    } else {
      const obj14 = _mod693;
      result1 = 1000 * obj14.timestampInSeconds();
    }
    const _Date = Date;
    const self = this;
    const self2 = this;
    const obj = { event_id, timestamp: date.toISOString(), platform: "javascript", version: "1", release: type.release || "", environment: DEFAULT_ENVIRONMENT, runtime: obj2, os: obj3, device: obj4, debug_meta: obj5, profile: tmp8, transactions: items };
    date = new Date(tmp10);
    DEFAULT_ENVIRONMENT = type.environment || _mod693.DEFAULT_ENVIRONMENT;
    resources = resources.resources;
    obj2 = { name: "javascript", version: _mod904.WINDOW.navigator.userAgent };
    obj3 = { name, version, build_number: manufacturer };
    obj4 = { locale: "", model, manufacturer, architecture, is_emulator: false };
    const obj6 = _mod693;
    const client = obj6.getClient();
    let options;
    if (client != null) {
      options = client.getOptions();
    }
    let stackParser;
    if (options != null) {
      stackParser = options.stackParser;
    }
    if (stackParser) {
      const tmp19Result = _mod693;
      debugImagesForResources = tmp19Result.getDebugImagesForResources(stackParser, resources);
    } else {
      debugImagesForResources = [];
    }
    obj5 = { images: debugImagesForResources };
    const obj7 = { name: tmp29, id: event_id, trace_id: str4, active_thread_id: StringResult, relative_start_ns: "0", relative_end_ns: result2.toFixed(0) };
    event_id = type.event_id;
    tmp29 = type.transaction || "";
    if (!event_id) {
      const tmp19Result2 = _mod693;
      event_id = tmp19Result2.uuid4();
    }
    result2 = 1000000 * (result1 - tmp10);
    items = [obj7];
    return obj;
  }
}
function convertJSSelfProfileToSampledFormat(samples) {
  let obj2;
  let thread_id;
  let timestamp;
  _require = samples;
  let stack_id2 = 0;
  let obj = { samples: [], stacks: [], frames: [], thread_metadata: { [closure_3]: obj2 } };
  obj2 = { name: timestamp };
  const first = samples.samples[0];
  if (first) {
    let timeOrigin;
    timestamp = first.timestamp;
    let tmp2 = _require;
    let obj3 = require("module_693");
    let result = obj3.browserPerformanceTimeOrigin();
    let tmp5 = globalThis;
    const _performance = performance;
    if (typeof performance.timeOrigin === "number") {
      const _performance2 = performance;
      timeOrigin = performance.timeOrigin;
    } else {
      timeOrigin = result || 0;
    }
    if (!result) {
      result = timeOrigin;
    }
    let closure_5 = timeOrigin - result;
    samples = samples.samples;
    const item = samples.forEach((stackId, index) => {
      let obj;
      let result;
      let result1;
      let tmp8;
      if (undefined === stackId.stackId) {
        if (undefined === stack_id) {
          stack_id = stack_id2;
          obj.stacks[stack_id] = [];
          stack_id2 = stack_id2 + 1;
        }
        const obj2 = { elapsed_since_start_ns: result.toFixed(0), stack_id, thread_id };
        result = (stackId.timestamp + closure_5 - timestamp) * c2;
        samples = obj.samples;
        samples[index] = obj2;
      } else {
        let tmp10 = samples.stacks[stackId.stackId];
        const items = [];
        while (tmp10) {
          let arr = items.push(tmp10.frameId);
          let tmp2 = samples;
          let tmp3 = samples.frames[tmp10.frameId];
          let tmp5 = tmp3;
          if (tmp5) {
            tmp5 = undefined === obj.frames[tmp10.frameId];
          }
          if (tmp5) {
            obj = { function: tmp3.name, abs_path: tmp8, lineno: null, colno: null };
            tmp8 = undefined;
            let frames = obj.frames;
            let frameId = tmp10.frameId;
            if (typeof tmp3.resourceId === "number") {
              tmp8 = tmp2.resources[tmp3.resourceId];
            }
            ({ line: obj.lineno, column: obj.colno } = tmp3);
            frames[frameId] = obj;
          }
          let tmp9;
          if (undefined !== tmp10.parentId) {
            tmp9 = tmp2.stacks[tmp10.parentId];
          }
          tmp10 = tmp9;
        }
        const obj3 = { elapsed_since_start_ns: result1.toFixed(0), stack_id: stack_id2, thread_id };
        result1 = (stackId.timestamp + closure_5 - timestamp) * c2;
        obj.stacks[stack_id2] = items;
        obj.samples[index] = obj3;
        stack_id2 = stack_id2 + 1;
      }
    });
    return obj;
  } else {
    return obj;
  }
}
function isValidSampleRate(profileSessionSampleRate) {
  let flag2;
  if (typeof profileSessionSampleRate === "number") {
    if (typeof profileSessionSampleRate === "number") {
      const _isNaN = isNaN;
      return flag2;
    }
    flag2 = true === profileSessionSampleRate || false === profileSessionSampleRate;
    if (!flag2) {
      let flag4 = !tmp;
      if (profileSessionSampleRate < 0 || profileSessionSampleRate > 1) {
        flag4 = false;
        if (_mod948.DEBUG_BUILD) {
          const debug = _mod693.debug;
          const _HermesInternal = HermesInternal;
          debug.warn("[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got " + profileSessionSampleRate + ".");
          flag4 = false;
        }
      }
      flag2 = flag4;
    }
  }
  flag2 = false;
  if (_mod948.DEBUG_BUILD) {
    const debug2 = _mod693.debug;
    const _JSON = JSON;
    const warn = debug2.warn;
    const json = JSON.stringify(profileSessionSampleRate);
    const _JSON2 = JSON;
    const _HermesInternal2 = HermesInternal;
    warn("[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got " + json + " of type " + JSON.stringify(typeof profileSessionSampleRate) + ".");
    flag2 = false;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c2 = 1000000;
let tmp2 = "window" in _mod693.GLOBAL_OBJ && _mod693.GLOBAL_OBJ.window === _mod693.GLOBAL_OBJ;
if (tmp2) {
  tmp2 = typeof globalThis.importScripts === "undefined";
}
const StringResult = String(0);
let c3 = StringResult;
let str = "worker";
if (tmp2) {
  str = "main";
}
const _navigator = _mod904.WINDOW.navigator;
const name = "";
const version = "";
const architecture = "";
let str2;
if (_navigator != null) {
  str2 = _navigator.userAgent;
}
if (!str2) {
  str2 = "";
}
let closure_8 = str2;
const model = "";
let str3;
if (_navigator != null) {
  str3 = _navigator.language;
}
if (!str3) {
  let first;
  if (_navigator != null) {
    const languages = _navigator.languages;
    if (languages != null) {
      first = languages[0];
    }
  }
  str3 = first;
}
if (!str3) {
  str3 = "";
}
let userAgentData;
if (_navigator != null) {
  userAgentData = _navigator.userAgentData;
}
let tmp6 = typeof userAgentData === "object";
if (typeof userAgentData === "object") {
  tmp6 = null !== userAgentData;
}
if (tmp6) {
  let str4 = "getHighEntropyValues";
  tmp6 = "getHighEntropyValues" in userAgentData;
}
if (tmp6) {
  const highEntropyValues = userAgentData.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]);
  const nextPromise = highEntropyValues.then((platform) => {
    let closure_5 = platform.platform || "";
    let closure_7 = platform.architecture || "";
    let closure_9 = platform.model || "";
    let closure_6 = platform.platformVersion || "";
    const fullVersionList = platform.fullVersionList;
    let length;
    if (fullVersionList != null) {
      length = fullVersionList.length;
    }
    if (length) {
      const _HermesInternal = HermesInternal;
      closure_8 = "" + tmp2.brand + " " + tmp2.version;
    }
  });
  nextPromise.catch((error) => {

  });
}
let c14 = false;
function enrichWithThreadInformation(samples) {
  let tmp = samples;
  if (!("thread_metadata" in samples)) {
    tmp = convertJSSelfProfileToSampledFormat(samples);
  }
  return tmp;
}
function applyDebugMetadata(arg0) {
  let debugImagesForResources;
  const obj = _mod693;
  const client = obj.getClient();
  let options;
  if (client != null) {
    options = client.getOptions();
  }
  let stackParser;
  if (options != null) {
    stackParser = options.stackParser;
  }
  if (stackParser) {
    const tmpResult = _mod693;
    debugImagesForResources = tmpResult.getDebugImagesForResources(stackParser, arg0);
  } else {
    debugImagesForResources = [];
  }
  return debugImagesForResources;
}
const map = new Map();

export const MAX_PROFILE_DURATION_MS = 30000;
export const PROFILER_THREAD_ID_STRING = StringResult;
export const PROFILER_THREAD_NAME = str;
export const addProfileToGlobalCache = function addProfileToGlobalCache(arg0, result) {
  result = map.set(arg0, result);
  if (map.size > 30) {
    const iter = map.keys();
    const value = iter.next().value;
    if (undefined !== value) {
      map.delete(value);
    }
  }
};
export const addProfilesToEnvelope = function addProfilesToEnvelope(arg0, arg1) {
  if (arg1.length) {
    const tmp2 = arg1[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let arr = arg0[1];
      let items = [{ type: "profile" }, tmp4];
      let arr2 = arr.push(items);
      continue;
    }
    return arg0;
  } else {
    return arg0;
  }
};
export { applyDebugMetadata };
export const attachProfiledThreadToEvent = function attachProfiledThreadToEvent(contexts) {
  let obj2;
  let profile;
  if (contexts != null) {
    contexts = contexts.contexts;
    if (contexts != null) {
      profile = contexts.profile;
    }
  }
  if (profile) {
    if (contexts.contexts) {
      const contexts3 = contexts.contexts;
      let trace1;
      const contexts2 = contexts.contexts;
      if (contexts3 != null) {
        trace1 = contexts3.trace;
      }
      if (trace1 == null) {
        trace1 = {};
      }
      let obj = { data: obj2 };
      let merged = Object.assign(trace1);
      const contexts4 = contexts.contexts;
      let data;
      if (contexts4 != null) {
        const trace = contexts4.trace;
        if (trace != null) {
          data = trace.data;
        }
      }
      if (data == null) {
        data = {};
      }
      obj2 = { "thread.id": StringResult, "thread.name": str };
      const merged1 = Object.assign(data);
      contexts2.trace = obj;
      const spans = contexts.spans;
      if (spans != null) {
        const item = spans.forEach((data) => {
          const obj = { "thread.id": closure_1_3, "thread.name": str };
          const tmp = data.data || {};
          const merged = Object.assign(tmp);
          data.data = obj;
        });
      }
    }
  }
  return contexts;
};
export { convertJSSelfProfileToSampledFormat };
export const createProfileChunkPayload = function createProfileChunkPayload(frames, _client, _profilerId) {
  let obj5;
  let obj8;
  let obj9;
  let str2;
  let str4;
  let tmp3;
  let uuid4Result;
  if (null == frames) {
    const _TypeError = TypeError;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("Cannot construct profiling event envelope without a valid profile. Got " + frames + " instead.");
    throw typeError;
  } else {
    let num;
    let num2;
    let timeOrigin;
    let num4;
    const items = [];
    for (let num = 0; num < frames.frames.length; num = num + 1) {
      let tmp = frames.frames[num];
      if (tmp) {
        let obj = { function: tmp.name, abs_path: tmp3, lineno: null, colno: null };
        tmp3 = undefined;
        if (typeof tmp.resourceId === "number") {
          tmp3 = frames.resources[tmp.resourceId];
        }
        ({ line: obj.lineno, column: obj.colno } = tmp);
        items[num] = obj;
      }
    }
    const items1 = [];
    for (let num2 = 0; num2 < frames.stacks.length; num2 = num2 + 1) {
      let tmp4 = frames.stacks[num2];
      if (tmp4) {
        let items2 = [];
        while (tmp4) {
          let arr = items2.push(tmp4.frameId);
          let tmp8;
          if (undefined !== tmp4.parentId) {
            tmp8 = frames.stacks[tmp4.parentId];
          }
          tmp4 = tmp8;
        }
        items1[num2] = items2;
      }
    }
    const obj2 = _mod693;
    let result = obj2.browserPerformanceTimeOrigin();
    const _performance = performance;
    if (typeof performance.timeOrigin === "number") {
      const _performance2 = performance;
      timeOrigin = performance.timeOrigin;
    } else {
      timeOrigin = result || 0;
    }
    if (!result) {
      result = timeOrigin;
    }
    const items3 = [];
    for (let num4 = 0; num4 < frames.samples.length; num4 = num4 + 1) {
      let tmp14 = frames.samples[num4];
      if (tmp14) {
        let num5 = tmp14.stackId;
        let result1 = (timeOrigin + (tmp14.timestamp - tmp13)) / 1000;
        if (num5 == null) {
          num5 = 0;
        }
        let obj3 = { stack_id: num5, thread_id: StringResult, timestamp: result1 };
        items3[num4] = obj3;
      }
    }
    const obj4 = { frames: items, stacks: items1, samples: items3, thread_metadata: obj5 };
    obj5 = {};
    const obj6 = { name: str };
    obj5[StringResult] = obj6;
    const options = _client.getOptions();
    const getSdkMetadata = _client.getSdkMetadata;
    let sdk;
    if (getSdkMetadata != null) {
      const sdkMetadata = getSdkMetadata();
      if (sdkMetadata != null) {
        sdk = sdkMetadata.sdk;
      }
    }
    const obj7 = { chunk_id: obj8.uuid4(), client_sdk: obj9, profiler_id: uuid4Result, platform: "javascript", version: "2", release: str3, environment: str4, debug_meta: obj10, profile: obj4 };
    str = undefined;
    obj8 = _mod693;
    if (sdk != null) {
      str = sdk.name;
    }
    if (str == null) {
      str = "sentry.javascript.browser";
    }
    obj9 = { name: str, version: str2 };
    str2 = undefined;
    if (sdk != null) {
      str2 = sdk.version;
    }
    if (str2 == null) {
      str2 = "0.0.0";
    }
    uuid4Result = _profilerId;
    if (!uuid4Result) {
      const tmp24Result = _mod693;
      uuid4Result = tmp24Result.uuid4();
    }
    str3 = options.release;
    if (str3 == null) {
      str3 = "";
    }
    str4 = options.environment;
    if (str4 == null) {
      str4 = "production";
    }
    const resources = frames.resources;
    const tmp24Result3 = _mod693;
    const client = tmp24Result3.getClient();
    let options1;
    if (client != null) {
      options1 = client.getOptions();
    }
    let stackParser;
    if (options1 != null) {
      stackParser = options1.stackParser;
    }
    if (stackParser) {
      const tmp24Result4 = _mod693;
      let debugImagesForResources = tmp24Result4.getDebugImagesForResources(stackParser, resources);
    } else {
      debugImagesForResources = [];
    }
    return obj7;
  }
};
export { createProfilePayload };
export const createProfilingEvent = function createProfilingEvent(event_id, arg1, samples, type) {
  let flag;
  if (samples.samples.length < 2) {
    flag = false;
    if (_mod948.DEBUG_BUILD) {
      const debug2 = _mod693.debug;
      debug2.log("[Profiling] Discarding profile because it contains less than 2 samples");
      flag = false;
    }
  } else {
    flag = samples.frames.length;
    if (!flag) {
      flag = false;
      if (_mod948.DEBUG_BUILD) {
        const debug = _mod693.debug;
        debug.log("[Profiling] Discarding profile because it contains no frames");
        flag = false;
      }
    }
  }
  let tmp7 = null;
  if (flag) {
    tmp7 = createProfilePayload(event_id, arg1, samples, type);
  }
  return tmp7;
};
export { enrichWithThreadInformation };
export const findProfiledTransactionsFromEnvelope = function findProfiledTransactionsFromEnvelope(arg0) {
  const items = [];
  const obj = _mod693;
  obj.forEachEnvelopeItem(arg0, (arg0, arg1) => {
    if ("transaction" === arg1) {
      let num2;
      for (let num2 = 1; num2 < arg0.length; num2 = num2 + 1) {
        let tmp3 = arg0[num2];
        let profile_id;
        if (tmp3 != null) {
          let contexts = tmp3.contexts;
          if (contexts != null) {
            let profile = contexts.profile;
            if (profile != null) {
              profile_id = profile.profile_id;
            }
          }
        }
        if (profile_id) {
          let arr = items.push(arg0[num2]);
        }
      }
    }
  });
  return items;
};
export const getActiveProfilesCount = function getActiveProfilesCount() {
  return map.size;
};
export const hasLegacyProfiling = function hasLegacyProfiling(options) {
  return undefined !== options.profilesSampleRate;
};
export const isAutomatedPageLoadSpan = function isAutomatedPageLoadSpan(rootSpan) {
  const obj = _mod693;
  return "pageload" === obj.spanToJSON(rootSpan).op;
};
export { isValidSampleRate };
export const shouldProfileSession = function shouldProfileSession(options) {
  if (c14) {
    if (_mod948.DEBUG_BUILD) {
      const debug4 = _mod693.debug;
      debug4.log("[Profiling] Profiling has been disabled for the duration of the current user session as the JS Profiler could not be started.");
    }
    return false;
  } else {
    let flag;
    if ("trace" !== options.profileLifecycle) {
      if ("manual" !== options.profileLifecycle) {
        if (_mod948.DEBUG_BUILD) {
          const debug3 = _mod693.debug;
          debug3.warn("[Profiling] Session not sampled. Invalid `profileLifecycle` option.");
        }
        return false;
      }
    }
    const profileSessionSampleRate = options.profileSessionSampleRate;
    if (isValidSampleRate(profileSessionSampleRate)) {
      let flag2;
      if (profileSessionSampleRate) {
        const _Math = Math;
        flag2 = Math.random() <= profileSessionSampleRate;
      } else {
        flag2 = false;
        if (_mod948.DEBUG_BUILD) {
          const debug2 = _mod693.debug;
          debug2.log("[Profiling] Discarding profile because profileSessionSampleRate is not defined or set to 0");
          flag2 = false;
        }
      }
      flag = flag2;
    } else {
      flag = false;
      if (_mod948.DEBUG_BUILD) {
        const debug = _mod693.debug;
        debug.warn("[Profiling] Discarding profile because of invalid profileSessionSampleRate.");
        flag = false;
      }
    }
    return flag;
  }
};
export const shouldProfileSpanLegacy = function shouldProfileSpanLegacy(rootSpan) {
  if (c14) {
    if (_mod948.DEBUG_BUILD) {
      const debug6 = _mod693.debug;
      debug6.log("[Profiling] Profiling has been disabled for the duration of the current user session.");
    }
    return false;
  } else if (rootSpan.isRecording()) {
    const tmp3Result = _mod693;
    const client = tmp3Result.getClient();
    let options;
    if (client != null) {
      options = client.getOptions();
    }
    if (options) {
      let flag3;
      const profilesSampleRate = options.profilesSampleRate;
      if (isValidSampleRate(profilesSampleRate)) {
        let flag4;
        if (profilesSampleRate) {
          let tmp12 = true === profilesSampleRate;
          if (!tmp12) {
            const _Math = Math;
            tmp12 = Math.random() < profilesSampleRate;
          }
          let flag6 = tmp12;
          if (!flag6) {
            flag6 = false;
            if (_mod948.DEBUG_BUILD) {
              const debug5 = _mod693.debug;
              const _Number = Number;
              const _HermesInternal = HermesInternal;
              debug5.log("[Profiling] Discarding profile because it's not included in the random sample (sampling rate = " + Number(profilesSampleRate) + ")");
              flag6 = false;
            }
          }
          flag4 = flag6;
        } else {
          flag4 = false;
          if (_mod948.DEBUG_BUILD) {
            const debug4 = _mod693.debug;
            debug4.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0");
            flag4 = false;
          }
        }
        flag3 = flag4;
      } else {
        flag3 = false;
        if (_mod948.DEBUG_BUILD) {
          const debug3 = _mod693.debug;
          debug3.warn("[Profiling] Discarding profile because of invalid sample rate.");
          flag3 = false;
        }
      }
      return flag3;
    } else {
      if (_mod948.DEBUG_BUILD) {
        const debug2 = _mod693.debug;
        debug2.log("[Profiling] Profiling disabled, no options found.");
      }
      return false;
    }
  } else {
    if (_mod948.DEBUG_BUILD) {
      const debug = _mod693.debug;
      debug.log("[Profiling] Discarding profile because root span was not sampled.");
    }
    return false;
  }
};
export const startJSSelfProfile = function startJSSelfProfile() {
  function isJSProfilerSupported(Profiler) {
    return typeof Profiler === "function";
  }
  const Profiler = _mod904.WINDOW.Profiler;
  if (isJSProfilerSupported(Profiler)) {
    const _Math = Math;
    try {
      const self = this;
      const self2 = this;
      const obj = { sampleInterval: 10, maxBufferSize: tmp5 };
      const profiler = new Profiler(obj);
      return profiler;
    } catch (err) {
      if (_mod948.DEBUG_BUILD) {
        const debug2 = _mod693.debug;
        debug2.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header.");
        const debug3 = _mod693.debug;
        debug3.log("[Profiling] Disabling profiling for current user session.");
      }
      c14 = true;
    }
  } else if (_mod948.DEBUG_BUILD) {
    const debug = _mod693.debug;
    debug.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.");
  }
};
export const takeProfileFromGlobalCache = function takeProfileFromGlobalCache(arg0) {
  const value = map.get(arg0);
  if (value) {
    map.delete(arg0);
  }
  return value;
};
export const validateProfileChunk = function validateProfileChunk(profiler_id) {
  try {
    const tmp = profiler_id;
    if (tmp) {
      if (typeof profiler_id === "object") {
        function isHex32(profiler_id) {
          let isMatch = typeof profiler_id === "string";
          if (typeof profiler_id === "string") {
            const obj = /^[a-f0-9]{32}$/;
            isMatch = obj.test(profiler_id);
          }
          return isMatch;
        }
        const tmp12 = isHex32;
        if (isHex32(profiler_id.profiler_id)) {
          if (tmp12(profiler_id.chunk_id)) {
            if (profiler_id.client_sdk) {
              let obj;
              const profile = profiler_id.profile;
              if (profile) {
                const _Array = Array;
                if (Array.isArray(profile.frames)) {
                  let obj4;
                  if (profile.frames.length) {
                    const _Array2 = Array;
                    if (Array.isArray(profile.stacks)) {
                      let obj3;
                      if (profile.stacks.length) {
                        const _Array3 = Array;
                        if (Array.isArray(profile.samples)) {
                          let obj2;
                          if (profile.samples.length) {
                            obj2 = { valid: true };
                          }
                          obj3 = obj2;
                        }
                        obj2 = { reason: "profile has no samples" };
                      }
                      obj4 = obj3;
                    }
                    obj3 = { reason: "profile has no stacks" };
                  }
                  obj = obj4;
                }
                obj4 = { reason: "profile has no frames" };
              } else {
                obj = { reason: "missing profile data" };
              }
              return obj;
            } else {
              return { reason: "missing client_sdk metadata" };
            }
          } else {
            return { reason: "missing or invalid chunk_id" };
          }
        } else {
          return { reason: "missing or invalid profiler_id" };
        }
      }
    }
    return { reason: "chunk is not an object" };
  } catch (tmp10) {
    const _HermesInternal = HermesInternal;
    const obj5 = { reason: "unknown validation error: " + tmp10 };
    return obj5;
  }
};