// === Module 966: ? ===

// Module 966
import _mod682 from "module_682" /* 682 */;
import ignoreNextOnError from "ignoreNextOnError" /* 893 */;
import _mod937 from "module_937" /* 937 */;

function createProfilePayload(event_id, arg1, resources, type) {
  if ("transaction" !== type.type) {
    const _TypeError2 = TypeError;
    const typeError = new TypeError("Profiling events may only be attached to transactions, this should never occur.");
    throw typeError;
  } else if (null == resources) {
    const _TypeError = TypeError;
    const _HermesInternal2 = HermesInternal;
    const typeError1 = new TypeError("Cannot construct profiling event envelope without a valid profile. Got " + resources + " instead.");
    throw typeError1;
  } else {
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
      DEBUG_BUILD = _mod937.DEBUG_BUILD;
    }
    if (DEBUG_BUILD) {
      const debug = _mod682.debug;
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
    if (arg1) {
      if (typeof type.timestamp === "number") {
        let result = 1000 * type.timestamp;
      } else {
        result = 1000 * _mod682.timestampInSeconds();
      }
      let obj = { event_id, timestamp: null, platform: "javascript", version: "1", release: null, environment: null, runtime: null, os: null, device: null, debug_meta: null, profile: null, transactions: null };
      const _Date = Date;
      const date = new Date(arg1);
      obj.timestamp = date.toISOString();
      obj.release = type.release || "";
      let DEFAULT_ENVIRONMENT = type.environment;
      if (!DEFAULT_ENVIRONMENT) {
        DEFAULT_ENVIRONMENT = _mod682.DEFAULT_ENVIRONMENT;
      }
      obj.environment = DEFAULT_ENVIRONMENT;
      obj = { name: "javascript", version: ignoreNextOnError.WINDOW.navigator.userAgent };
      obj.runtime = obj;
      obj = { name, version, build_number: manufacturer };
      obj.os = obj;
      const obj1 = { locale: str3, model, manufacturer, architecture, is_emulator: false };
      obj.device = obj1;
      const client = _mod682.getClient();
      let options;
      if (client != null) {
        options = client.getOptions();
      }
      let stackParser;
      if (options != null) {
        stackParser = options.stackParser;
      }
      if (stackParser) {
        let tmp22Result = _mod682;
        let debugImagesForResources = tmp22Result.getDebugImagesForResources(stackParser, resources.resources);
      } else {
        debugImagesForResources = [];
      }
      const obj2 = { images: debugImagesForResources };
      obj.debug_meta = obj2;
      obj.profile = tmp8;
      const obj3 = { name: type.transaction || "", id: null, trace_id: null, active_thread_id: null, relative_start_ns: "0", relative_end_ns: null };
      event_id = type.event_id;
      if (!event_id) {
        tmp22Result = _mod682;
        event_id = tmp22Result.uuid4();
      }
      obj3.id = event_id;
      obj3.trace_id = str4;
      obj3.active_thread_id = StringResult;
      const result1 = 1000000 * (result - arg1);
      obj3.relative_end_ns = result1.toFixed(0);
      const items = [obj3];
      obj.transactions = items;
      return obj;
    } else if (typeof type.start_timestamp === "number") {
      let result2 = 1000 * type.start_timestamp;
    } else {
      result2 = 1000 * _mod682.timestampInSeconds();
    }
  }
}
function convertJSSelfProfileToSampledFormat(samples) {
  _require = samples;
  let stack_id2 = 0;
  let obj = { samples: [], stacks: [], frames: [], thread_metadata: null };
  obj = { name: timestamp };
  obj.thread_metadata = { [closure_3]: obj };
  const first = samples.samples[0];
  if (first) {
    timestamp = first.timestamp;
    let result = require("module_682").browserPerformanceTimeOrigin();
    const _performance = performance;
    if (typeof performance.timeOrigin === "number") {
      const _performance2 = performance;
      let num = performance.timeOrigin;
    } else {
      num = result;
      if (!result) {
        num = 0;
      }
    }
    if (!result) {
      result = num;
    }
    closure_5 = num - result;
    samples = samples.samples;
    const item = samples.forEach((stackId, index) => {
      let tmp9;
      if (undefined === stackId.stackId) {
        if (undefined === stack_id) {
          stack_id = stack_id2;
          obj.stacks[stack_id] = [];
          stack_id2 = stack_id2 + 1;
        }
        obj = { elapsed_since_start_ns: null, stack_id: null, thread_id: null };
        const result = (stackId.timestamp + closure_5 - timestamp) * c2;
        obj.elapsed_since_start_ns = result.toFixed(0);
        obj.stack_id = stack_id;
        obj.thread_id = StringResult;
        obj.samples[index] = obj;
      } else {
        let tmp10 = samples.stacks[stackId.stackId];
        const items = [];
        if (tmp10) {
          do {
            let arr = items.push(tmp10.frameId);
            let tmp3 = samples.frames[tmp10.frameId];
            let tmp5 = tmp3;
            if (tmp3) {
              tmp5 = undefined === obj.frames[tmp10.frameId];
            }
            if (tmp5) {
              obj = { function: tmp3.name, abs_path: null, lineno: null, colno: null };
              let tmp8;
              if (typeof tmp3.resourceId === "number") {
                tmp8 = samples.resources[tmp3.resourceId];
              }
              obj.abs_path = tmp8;
              ({ line: obj.lineno, column: obj.colno } = tmp3);
              obj.frames[tmp10.frameId] = obj;
            }
            tmp9 = undefined;
            if (undefined !== tmp10.parentId) {
              tmp9 = samples.stacks[tmp10.parentId];
            }
            tmp10 = tmp9;
          } while (tmp9);
        }
        obj = { elapsed_since_start_ns: null, stack_id: null, thread_id: null };
        const result1 = (stackId.timestamp + closure_5 - timestamp) * c2;
        obj.elapsed_since_start_ns = result1.toFixed(0);
        obj.stack_id = stack_id2;
        obj.thread_id = StringResult;
        obj.stacks[stack_id2] = items;
        obj.samples[index] = obj;
        stack_id2 = stack_id2 + 1;
      }
    });
    return obj;
  } else {
    return obj;
  }
}
function isValidSampleRate(concat) {
  if (typeof concat === "number") {
    if (typeof concat === "number") {
      const _isNaN = isNaN;
      return flag2;
    }
    flag2 = true === concat;
    if (!flag2) {
      flag2 = false === concat;
    }
    if (!flag2) {
      let tmp = concat < 0;
      if (!tmp) {
        tmp = concat > 1;
      }
      let flag4 = !tmp;
      if (tmp) {
        flag4 = false;
        if (_mod937.DEBUG_BUILD) {
          const debug = _mod682.debug;
          const _HermesInternal = HermesInternal;
          debug.warn("[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got " + concat + ".");
          flag4 = false;
        }
      }
      flag2 = flag4;
    }
  }
  flag2 = false;
  if (_mod937.DEBUG_BUILD) {
    const debug2 = _mod682.debug;
    const _JSON = JSON;
    const json = JSON.stringify(concat);
    const _JSON2 = JSON;
    const _HermesInternal2 = HermesInternal;
    debug2.warn("[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got " + json + " of type " + JSON.stringify(typeof concat) + ".");
    flag2 = false;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c2 = 1000000;
let tmp2 = "window" in _mod682.GLOBAL_OBJ;
if (tmp2) {
  tmp2 = _mod682.GLOBAL_OBJ.window === _mod682.GLOBAL_OBJ;
}
if (tmp2) {
  tmp2 = typeof globalThis.importScripts === "undefined";
}
const StringResult = String(0);
let c3 = StringResult;
let str = "worker";
if (tmp2) {
  str = "main";
}
const _navigator = ignoreNextOnError.WINDOW.navigator;
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
  tmp6 = "getHighEntropyValues" in userAgentData;
}
if (tmp6) {
  const highEntropyValues = userAgentData.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]);
  highEntropyValues.then((platform) => {
    closure_5 = platform.platform || "";
    closure_7 = platform.architecture || "";
    closure_9 = platform.model || "";
    closure_6 = platform.platformVersion || "";
    const fullVersionList = platform.fullVersionList;
    let length;
    if (fullVersionList != null) {
      length = fullVersionList.length;
    }
    if (length) {
      const _HermesInternal = HermesInternal;
      closure_8 = "" + tmp2.brand + " " + tmp2.version;
    }
  }).catch((error) => {

  });
  const nextPromise = highEntropyValues.then((platform) => {
    closure_5 = platform.platform || "";
    closure_7 = platform.architecture || "";
    closure_9 = platform.model || "";
    closure_6 = platform.platformVersion || "";
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
  const client = _mod682.getClient();
  let options;
  if (client != null) {
    options = client.getOptions();
  }
  let stackParser;
  if (options != null) {
    stackParser = options.stackParser;
  }
  if (stackParser) {
    let debugImagesForResources = _mod682.getDebugImagesForResources(stackParser, arg0);
    const tmpResult = _mod682;
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
    value = map.keys().next().value;
    if (undefined !== value) {
      map.delete(value);
    }
    const iter = map.keys();
  }
};
export const addProfilesToEnvelope = function addProfilesToEnvelope(arg0, arg1) {
  if (arg1.length) {
    const tmp2 = arg1[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let arr = arg0[1];
      let items = [{ type: "profile" }, tmp4];
      arr = arr.push(items);
      continue;
    }
    return arg0;
  } else {
    return arg0;
  }
};
export { applyDebugMetadata };
export const attachProfiledThreadToEvent = function attachProfiledThreadToEvent(contexts) {
  let profile;
  if (contexts != null) {
    contexts = contexts.contexts;
    if (contexts != null) {
      profile = contexts.profile;
    }
  }
  if (profile) {
    if (contexts.contexts) {
      const contexts2 = contexts.contexts;
      let trace;
      if (contexts2 != null) {
        trace = contexts2.trace;
      }
      if (trace == null) {
        trace = {};
      }
      let obj = {};
      let merged = Object.assign(trace);
      const contexts3 = contexts.contexts;
      let data;
      if (contexts3 != null) {
        trace = contexts3.trace;
        if (trace != null) {
          data = trace.data;
        }
      }
      if (data == null) {
        data = {};
      }
      obj = {};
      const merged1 = Object.assign(data);
      obj["thread.id"] = StringResult;
      obj["thread.name"] = str;
      obj.data = obj;
      contexts.contexts.trace = obj;
      const spans = contexts.spans;
      if (spans != null) {
        const item = spans.forEach((data) => {
          const obj = {};
          const merged = Object.assign(data.data || {});
          obj["thread.id"] = closure_1_3;
          obj["thread.name"] = str;
          data.data = obj;
        });
      }
    }
  }
  return contexts;
};
export { convertJSSelfProfileToSampledFormat };
export const createProfileChunkPayload = function createProfileChunkPayload(frames, _client, _profilerId) {
  if (null == frames) {
    const _TypeError = TypeError;
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError("Cannot construct profiling event envelope without a valid profile. Got " + frames + " instead.");
    throw typeError;
  } else {
    const items = [];
    for (let num = 0; num < frames.frames.length; num = num + 1) {
      let tmp = frames.frames[num];
      if (tmp) {
        let obj = { function: tmp.name, abs_path: null, lineno: null, colno: null };
        let tmp3;
        if (typeof tmp.resourceId === "number") {
          tmp3 = frames.resources[tmp.resourceId];
        }
        obj.abs_path = tmp3;
        ({ line: obj.lineno, column: obj.colno } = tmp);
        items[num] = obj;
      }
    }
    const items1 = [];
    for (let num2 = 0; num2 < frames.stacks.length; num2 = num2 + 1) {
      let tmp4 = frames.stacks[num2];
      if (tmp4) {
        let items2 = [];
        if (tmp4) {
          do {
            let arr = items2.push(tmp4.frameId);
            tmp8 = undefined;
            if (undefined !== tmp4.parentId) {
              tmp8 = frames.stacks[tmp4.parentId];
            }
            tmp4 = tmp8;
          } while (tmp8);
        }
        items1[num2] = items2;
      }
    }
    let obj1 = _mod682;
    let result = obj1.browserPerformanceTimeOrigin();
    const _performance = performance;
    if (typeof performance.timeOrigin === "number") {
      const _performance2 = performance;
      let num3 = performance.timeOrigin;
    } else {
      num3 = result;
      if (!result) {
        num3 = 0;
      }
    }
    if (!result) {
      result = num3;
    }
    const items3 = [];
    for (let num5 = 0; num5 < frames.samples.length; num5 = num5 + 1) {
      let tmp14 = frames.samples[num5];
      if (tmp14) {
        let num6 = tmp14.stackId;
        let result1 = (num3 + (tmp14.timestamp - tmp13)) / 1000;
        if (num6 == null) {
          num6 = 0;
        }
        obj = { stack_id: num6, thread_id: StringResult, timestamp: result1 };
        items3[num5] = obj;
      }
    }
    obj = { frames: items, stacks: items1, samples: items3, thread_metadata: null };
    obj1 = {};
    const obj2 = { name: str };
    obj1[StringResult] = obj2;
    obj.thread_metadata = obj1;
    const options = _client.getOptions();
    const getSdkMetadata = _client.getSdkMetadata;
    let sdk;
    if (getSdkMetadata != null) {
      const sdkMetadata = getSdkMetadata();
      if (sdkMetadata != null) {
        sdk = sdkMetadata.sdk;
      }
    }
    const obj3 = { chunk_id: _mod682.uuid4(), client_sdk: null, profiler_id: null, platform: "javascript", version: "2", release: null, environment: null, debug_meta: null, profile: null };
    str = undefined;
    if (sdk != null) {
      str = sdk.name;
    }
    if (str == null) {
      str = "sentry.javascript.browser";
    }
    const obj4 = { name: str, version: null };
    let str2;
    if (sdk != null) {
      str2 = sdk.version;
    }
    if (str2 == null) {
      str2 = "0.0.0";
    }
    let uuid4Result = _profilerId;
    obj4.version = str2;
    obj3.client_sdk = obj4;
    if (!_profilerId) {
      let tmp24Result = _mod682;
      uuid4Result = tmp24Result.uuid4();
    }
    obj3.profiler_id = uuid4Result;
    str3 = options.release;
    if (str3 == null) {
      str3 = "";
    }
    obj3.release = str3;
    let str4 = options.environment;
    if (str4 == null) {
      str4 = "production";
    }
    obj3.environment = str4;
    tmp24Result = _mod682;
    const client = tmp24Result.getClient();
    let options1;
    if (client != null) {
      options1 = client.getOptions();
    }
    let stackParser;
    if (options1 != null) {
      stackParser = options1.stackParser;
    }
    if (stackParser) {
      let debugImagesForResources = _mod682.getDebugImagesForResources(stackParser, frames.resources);
      const tmp24Result1 = _mod682;
    } else {
      debugImagesForResources = [];
    }
    const obj5 = { images: debugImagesForResources };
    obj3.debug_meta = obj5;
    obj3.profile = obj;
    return obj3;
  }
};
export { createProfilePayload };
export const createProfilingEvent = function createProfilingEvent(event_id, arg1, samples, type) {
  if (samples.samples.length < 2) {
    let flag = false;
    if (_mod937.DEBUG_BUILD) {
      const debug2 = _mod682.debug;
      debug2.log("[Profiling] Discarding profile because it contains less than 2 samples");
      flag = false;
    }
  } else {
    flag = samples.frames.length;
    if (!flag) {
      flag = false;
      if (_mod937.DEBUG_BUILD) {
        const debug = _mod682.debug;
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
  _mod682.forEachEnvelopeItem(arg0, (arg0, arg1) => {
    if ("transaction" === arg1) {
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
  return "pageload" === _mod682.spanToJSON(rootSpan).op;
};
export { isValidSampleRate };
export const shouldProfileSession = function shouldProfileSession(options) {
  if (c14) {
    if (_mod937.DEBUG_BUILD) {
      const debug4 = _mod682.debug;
      debug4.log("[Profiling] Profiling has been disabled for the duration of the current user session as the JS Profiler could not be started.");
    }
    return false;
  } else {
    if ("trace" !== options.profileLifecycle) {
      if ("manual" !== options.profileLifecycle) {
        if (_mod937.DEBUG_BUILD) {
          const debug3 = _mod682.debug;
          debug3.warn("[Profiling] Session not sampled. Invalid `profileLifecycle` option.");
        }
        return false;
      }
    }
    const profileSessionSampleRate = options.profileSessionSampleRate;
    if (isValidSampleRate(profileSessionSampleRate)) {
      if (profileSessionSampleRate) {
        const _Math = Math;
        let flag2 = Math.random() <= profileSessionSampleRate;
      } else {
        flag2 = false;
        if (_mod937.DEBUG_BUILD) {
          const debug2 = _mod682.debug;
          debug2.log("[Profiling] Discarding profile because profileSessionSampleRate is not defined or set to 0");
          flag2 = false;
        }
      }
    } else {
      let flag = false;
      if (_mod937.DEBUG_BUILD) {
        const debug = _mod682.debug;
        debug.warn("[Profiling] Discarding profile because of invalid profileSessionSampleRate.");
        flag = false;
      }
      return flag;
    }
  }
};
export const shouldProfileSpanLegacy = function shouldProfileSpanLegacy(rootSpan) {
  if (c14) {
    if (_mod937.DEBUG_BUILD) {
      const debug6 = _mod682.debug;
      debug6.log("[Profiling] Profiling has been disabled for the duration of the current user session.");
    }
    return false;
  } else {
    let log = require;
    if (rootSpan.isRecording()) {
      const client = log(682).getClient();
      let options;
      if (client != null) {
        options = client.getOptions();
      }
      if (options) {
        let concat = options.profilesSampleRate;
        if (isValidSampleRate(concat)) {
          if (concat) {
            let tmp10 = true === concat;
            if (!tmp10) {
              const _Math = Math;
              tmp10 = Math.random() < concat;
            }
            let flag6 = tmp10;
            if (!flag6) {
              flag6 = false;
              if (log(937).DEBUG_BUILD) {
                const debug5 = log(682).debug;
                log = debug5.log;
                const _Number = Number;
                const _HermesInternal = HermesInternal;
                concat = HermesInternal.concat;
                log(concat(Number(concat), ")"));
                flag6 = false;
                const NumberResult = Number(concat);
              }
            }
            let flag4 = flag6;
          } else {
            flag4 = false;
            if (log(937).DEBUG_BUILD) {
              const debug4 = log(682).debug;
              debug4.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0");
              flag4 = false;
            }
          }
        } else {
          let flag3 = false;
          if (log(937).DEBUG_BUILD) {
            const debug3 = log(682).debug;
            debug3.warn("[Profiling] Discarding profile because of invalid sample rate.");
            flag3 = false;
          }
          return flag3;
        }
      } else {
        if (log(937).DEBUG_BUILD) {
          const debug2 = log(682).debug;
          debug2.log("[Profiling] Profiling disabled, no options found.");
        }
        return false;
      }
      const logResult1 = log(682);
    } else {
      if (log(937).DEBUG_BUILD) {
        const debug = log(682).debug;
        debug.log("[Profiling] Discarding profile because root span was not sampled.");
      }
      return false;
    }
  }
};
export const startJSSelfProfile = function startJSSelfProfile() {
  const Profiler = ignoreNextOnError.WINDOW.Profiler;
  if ((function isJSProfilerSupported(Profiler) {
    return typeof Profiler === "function";
  })(Profiler)) {
    const _Math = Math;
    try {
      const obj = { sampleInterval: 10, maxBufferSize: tmp8 };
      const profiler = new Profiler(obj);
      return profiler;
    } catch (err) {
      if (tmp3(tmp2[2]).DEBUG_BUILD) {
        const debug2 = tmp3(tmp2[0]).debug;
        debug2.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header.");
        const debug3 = tmp3(tmp2[0]).debug;
        debug3.log("[Profiling] Disabling profiling for current user session.");
      }
      c14 = true;
    }
  } else if (_mod937.DEBUG_BUILD) {
    const debug = _mod682.debug;
    debug.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.");
  }
};
export const takeProfileFromGlobalCache = function takeProfileFromGlobalCache(arg0) {
  value = map.get(arg0);
  if (value) {
    map.delete(arg0);
  }
  return value;
};
export const validateProfileChunk = function validateProfileChunk(profiler_id) {
  try {
    if (profiler_id) {
      if (typeof profiler_id === "object") {
        function isHex32(profiler_id) {
          let isMatch = typeof profiler_id === "string";
          if (typeof profiler_id === "string") {
            isMatch = /^[a-f0-9]{32}$/.test(profiler_id);
            const obj = /^[a-f0-9]{32}$/;
          }
          return isMatch;
        }
        if (isHex32(profiler_id.profiler_id)) {
          if (tmp13(profiler_id.chunk_id)) {
            if (profiler_id.client_sdk) {
              const profile = profiler_id.profile;
              if (profile) {
                const _Array = Array;
                if (!Array.isArray(tmp3.frames)) {
                  let obj = { reason: "profile has no frames" };
                }
                const _Array2 = Array;
                if (!Array.isArray(tmp3.stacks)) {
                  obj = { reason: "profile has no stacks" };
                }
                const _Array3 = Array;
                if (!Array.isArray(tmp3.samples)) {
                  obj = { reason: "profile has no samples" };
                }
                obj = { valid: true };
              } else {
                return { reason: "missing profile data" };
              }
            } else {
              return { reason: "missing client_sdk metadata" };
            }
          } else {
            return { reason: "missing or invalid chunk_id" };
          }
        } else {
          return { reason: "missing or invalid profiler_id" };
        }
        tmp13 = isHex32;
      }
    }
    return { reason: "chunk is not an object" };
  } catch (tmp11) {
    const obj1 = { reason: null };
    const _HermesInternal = HermesInternal;
    obj1.reason = "unknown validation error: " + tmp11;
    return obj1;
  }
};