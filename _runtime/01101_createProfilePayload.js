// === Module 1101: createProfilePayload ===

// Module 1101 (createProfilePayload)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;
import ignoreNextOnError from "ignoreNextOnError" /* 1028 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 1072 */;
import StringResult from "module_0" /* 0 */;

function createProfilePayload(arg0, arg1, resources, type) {
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
      DEBUG_BUILD = __SENTRY_DEBUG__.DEBUG_BUILD;
    }
    if (DEBUG_BUILD) {
      const debug = registerSpanErrorInstrumentation.debug;
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
        result = 1000 * registerSpanErrorInstrumentation.timestampInSeconds();
      }
      let obj = { event_id: null, timestamp: null, platform: "javascript", version: "1", release: null, environment: null, runtime: null, os: null, device: null, debug_meta: null, profile: null, transactions: null };
      obj[0] = arg0;
      const _Date = Date;
      const date = new Date(arg1);
      obj[1] = date.toISOString();
      obj[4] = type.release || "";
      let DEFAULT_ENVIRONMENT = type.environment;
      if (!DEFAULT_ENVIRONMENT) {
        DEFAULT_ENVIRONMENT = registerSpanErrorInstrumentation.DEFAULT_ENVIRONMENT;
      }
      obj[5] = DEFAULT_ENVIRONMENT;
      obj = { name: "javascript", version: null };
      obj[1] = ignoreNextOnError.WINDOW.navigator.userAgent;
      obj[6] = obj;
      obj = { name: null, version: null, build_number: null };
      obj[0] = c5;
      obj[1] = c6;
      obj[2] = str2;
      obj[7] = obj;
      obj1 = { locale: null, model: null, manufacturer: null, architecture: null, is_emulator: false };
      obj1[0] = str3;
      obj1[1] = c9;
      obj1[2] = str2;
      obj1[3] = c7;
      obj[8] = obj1;
      const client = registerSpanErrorInstrumentation.getClient();
      let options;
      if (client != null) {
        options = client.getOptions();
      }
      let stackParser;
      if (options != null) {
        stackParser = options.stackParser;
      }
      if (stackParser) {
        let tmp22Result = registerSpanErrorInstrumentation;
        let debugImagesForResources = tmp22Result.getDebugImagesForResources(stackParser, resources.resources);
      } else {
        debugImagesForResources = [];
      }
      const obj2 = { images: null };
      obj2[0] = debugImagesForResources;
      obj[9] = obj2;
      obj[10] = tmp8;
      const obj3 = { name: null, id: null, trace_id: null, active_thread_id: null, relative_start_ns: "0", relative_end_ns: null };
      obj3[0] = type.transaction || "";
      let event_id = type.event_id;
      if (!event_id) {
        tmp22Result = registerSpanErrorInstrumentation;
        event_id = tmp22Result.uuid4();
      }
      obj3[1] = event_id;
      obj3[2] = str4;
      obj3[3] = closure_3;
      const result1 = 1000000 * (result - arg1);
      obj3[5] = result1.toFixed(0);
      const items = [obj3];
      obj[11] = items;
      return obj;
    } else if (typeof type.start_timestamp === "number") {
      let result2 = 1000 * type.start_timestamp;
    } else {
      result2 = 1000 * registerSpanErrorInstrumentation.timestampInSeconds();
    }
  }
}
function convertJSSelfProfileToSampledFormat(samples) {
  const _require = samples;
  c2 = 0;
  let obj = { name: timestamp };
  const first = samples.samples[0];
  if (first) {
    timestamp = first.timestamp;
    let result = _require(817).browserPerformanceTimeOrigin();
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
    const item = samples.forEach((item, index) => {
      let tmp9;
      if (undefined === item.stackId) {
        if (undefined === closure_1) {
          closure_1 = closure_2;
          obj.stacks[closure_1] = [];
          closure_2 = closure_2 + 1;
        }
        obj = { elapsed_since_start_ns: null, stack_id: null, thread_id: null };
        const result = (item.timestamp + closure_5 - timestamp) * c2;
        obj[0] = result.toFixed(0);
        obj[1] = closure_1;
        obj[2] = obj;
        obj.samples[index] = obj;
      } else {
        let tmp10 = samples.stacks[item.stackId];
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
              obj = { function: null, abs_path: null, lineno: null, colno: null };
              obj[0] = tmp3.name;
              let tmp8;
              if (typeof tmp3.resourceId === "number") {
                tmp8 = samples.resources[tmp3.resourceId];
              }
              obj[1] = tmp8;
              ({ line: obj[2], column: obj[3] } = tmp3);
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
        const result1 = (item.timestamp + closure_5 - timestamp) * c2;
        obj[0] = result1.toFixed(0);
        obj[1] = closure_2;
        obj[2] = obj;
        obj.stacks[closure_2] = items;
        obj.samples[index] = obj;
        closure_2 = closure_2 + 1;
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
        if (__SENTRY_DEBUG__.DEBUG_BUILD) {
          const debug = registerSpanErrorInstrumentation.debug;
          const _HermesInternal = HermesInternal;
          debug.warn("[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got " + concat + ".");
          flag4 = false;
        }
      }
      flag2 = flag4;
    }
  }
  flag2 = false;
  if (__SENTRY_DEBUG__.DEBUG_BUILD) {
    const debug2 = registerSpanErrorInstrumentation.debug;
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
let tmp2 = "window" in registerSpanErrorInstrumentation.GLOBAL_OBJ;
if (tmp2) {
  tmp2 = registerSpanErrorInstrumentation.GLOBAL_OBJ.window === registerSpanErrorInstrumentation.GLOBAL_OBJ;
}
if (tmp2) {
  tmp2 = typeof globalThis.importScripts === "undefined";
}
let c3 = StringResult;
let str = "worker";
if (tmp2) {
  str = "main";
}
const _navigator = ignoreNextOnError.WINDOW.navigator;
let c5 = "";
let c6 = "";
let c7 = "";
let str2;
if (_navigator != null) {
  str2 = _navigator.userAgent;
}
if (!str2) {
  str2 = "";
}
let c9 = "";
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
  highEntropyValues.then((result) => {
    closure_5 = result.platform || "";
    closure_7 = result.architecture || "";
    closure_9 = result.model || "";
    closure_6 = result.platformVersion || "";
    const fullVersionList = result.fullVersionList;
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
  const nextPromise = highEntropyValues.then((result) => {
    closure_5 = result.platform || "";
    closure_7 = result.architecture || "";
    closure_9 = result.model || "";
    closure_6 = result.platformVersion || "";
    const fullVersionList = result.fullVersionList;
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
  const client = registerSpanErrorInstrumentation.getClient();
  let options;
  if (client != null) {
    options = client.getOptions();
  }
  let stackParser;
  if (options != null) {
    stackParser = options.stackParser;
  }
  if (stackParser) {
    let debugImagesForResources = registerSpanErrorInstrumentation.getDebugImagesForResources(stackParser, arg0);
    const tmpResult = registerSpanErrorInstrumentation;
  } else {
    debugImagesForResources = [];
  }
  return debugImagesForResources;
}
const map = new Map();

export const MAX_PROFILE_DURATION_MS = 30000;
export const PROFILER_THREAD_ID_STRING = StringResult;
export const PROFILER_THREAD_NAME = str;
export const addProfileToGlobalCache = function addProfileToGlobalCache(closure_2, result) {
  result = map.set(closure_2, result);
  if (map.size > 30) {
    const value = map.keys().next().value;
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
      obj["thread.id"] = closure_3;
      obj["thread.name"] = str;
      obj.data = obj;
      contexts.contexts.trace = obj;
      const spans = contexts.spans;
      if (spans != null) {
        const item = spans.forEach((item, index) => {
          const obj = {};
          const merged = Object.assign(item.data || {});
          obj["thread.id"] = closure_3;
          obj["thread.name"] = closure_4;
          item.data = obj;
        });
      }
    }
  }
  return contexts;
};
export { convertJSSelfProfileToSampledFormat };
export const createProfileChunkPayload = function createProfileChunkPayload(closure_0, _client, _profilerId) {
  if (null == _require) {
    const _TypeError = TypeError;
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError("Cannot construct profiling event envelope without a valid profile. Got " + _require + " instead.");
    throw typeError;
  } else {
    const items = [];
    for (let num = 0; num < _require.frames.length; num = num + 1) {
      let tmp = _require.frames[num];
      if (tmp) {
        let obj = { function: null, abs_path: null, lineno: null, colno: null };
        obj[0] = tmp.name;
        let tmp3;
        if (typeof tmp.resourceId === "number") {
          tmp3 = _require.resources[tmp.resourceId];
        }
        obj[1] = tmp3;
        ({ line: obj[2], column: obj[3] } = tmp);
        items[num] = obj;
      }
    }
    const items1 = [];
    for (let num2 = 0; num2 < _require.stacks.length; num2 = num2 + 1) {
      let tmp4 = _require.stacks[num2];
      if (tmp4) {
        let items2 = [];
        if (tmp4) {
          do {
            let arr = items2.push(tmp4.frameId);
            tmp8 = undefined;
            if (undefined !== tmp4.parentId) {
              tmp8 = _require.stacks[tmp4.parentId];
            }
            tmp4 = tmp8;
          } while (tmp8);
        }
        items1[num2] = items2;
      }
    }
    obj1 = registerSpanErrorInstrumentation;
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
    for (let num5 = 0; num5 < _require.samples.length; num5 = num5 + 1) {
      let tmp14 = _require.samples[num5];
      if (tmp14) {
        let num6 = tmp14.stackId;
        let result1 = (num3 + (tmp14.timestamp - tmp13)) / 1000;
        if (num6 == null) {
          num6 = 0;
        }
        obj = { stack_id: null, thread_id: null, timestamp: null };
        obj[0] = num6;
        obj[1] = closure_3;
        obj[2] = result1;
        items3[num5] = obj;
      }
    }
    obj = { frames: null, stacks: null, samples: null, thread_metadata: null };
    obj[0] = items;
    obj[1] = items1;
    obj[2] = items3;
    obj1 = {};
    const obj2 = { name: null };
    obj2[0] = str;
    obj1[closure_3] = obj2;
    obj[3] = obj1;
    const options = _client.getOptions();
    const getSdkMetadata = _client.getSdkMetadata;
    let sdk;
    if (getSdkMetadata != null) {
      const sdkMetadata = getSdkMetadata();
      if (sdkMetadata != null) {
        sdk = sdkMetadata.sdk;
      }
    }
    const obj3 = { chunk_id: null, client_sdk: null, profiler_id: null, platform: "javascript", version: "2", release: null, environment: null, debug_meta: null, profile: null };
    obj3[0] = registerSpanErrorInstrumentation.uuid4();
    str = undefined;
    if (sdk != null) {
      str = sdk.name;
    }
    if (str == null) {
      str = "sentry.javascript.browser";
    }
    const obj4 = { name: null, version: null };
    obj4[0] = str;
    str2 = undefined;
    if (sdk != null) {
      str2 = sdk.version;
    }
    if (str2 == null) {
      str2 = "0.0.0";
    }
    let uuid4Result = _profilerId;
    obj4[1] = str2;
    obj3[1] = obj4;
    if (!_profilerId) {
      let tmp24Result = registerSpanErrorInstrumentation;
      uuid4Result = tmp24Result.uuid4();
    }
    obj3[2] = uuid4Result;
    str3 = options.release;
    if (str3 == null) {
      str3 = "";
    }
    obj3[5] = str3;
    let str4 = options.environment;
    if (str4 == null) {
      str4 = "production";
    }
    obj3[6] = str4;
    tmp24Result = registerSpanErrorInstrumentation;
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
      let debugImagesForResources = registerSpanErrorInstrumentation.getDebugImagesForResources(stackParser, _require.resources);
      const tmp24Result1 = registerSpanErrorInstrumentation;
    } else {
      debugImagesForResources = [];
    }
    const obj5 = { images: null };
    obj5[0] = debugImagesForResources;
    obj3[7] = obj5;
    obj3[8] = obj;
    return obj3;
  }
};
export { createProfilePayload };
export const createProfilingEvent = function createProfilingEvent(arg0, arg1, samples, type) {
  if (samples.samples.length < 2) {
    let flag = false;
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug2 = registerSpanErrorInstrumentation.debug;
      debug2.log("[Profiling] Discarding profile because it contains less than 2 samples");
      flag = false;
    }
  } else {
    flag = samples.frames.length;
    if (!flag) {
      flag = false;
      if (__SENTRY_DEBUG__.DEBUG_BUILD) {
        const debug = registerSpanErrorInstrumentation.debug;
        debug.log("[Profiling] Discarding profile because it contains no frames");
        flag = false;
      }
    }
  }
  let tmp7 = null;
  if (flag) {
    tmp7 = createProfilePayload(arg0, arg1, samples, type);
  }
  return tmp7;
};
export { enrichWithThreadInformation };
export const findProfiledTransactionsFromEnvelope = function findProfiledTransactionsFromEnvelope(arg0) {
  const items = [];
  items(817).forEachEnvelopeItem(arg0, (arg0, arg1) => {
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
  return "pageload" === registerSpanErrorInstrumentation.spanToJSON(rootSpan).op;
};
export { isValidSampleRate };
export const shouldProfileSession = function shouldProfileSession(options) {
  if (c14) {
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug4 = registerSpanErrorInstrumentation.debug;
      debug4.log("[Profiling] Profiling has been disabled for the duration of the current user session as the JS Profiler could not be started.");
    }
    return false;
  } else {
    if ("trace" !== options.profileLifecycle) {
      if ("manual" !== options.profileLifecycle) {
        if (__SENTRY_DEBUG__.DEBUG_BUILD) {
          const debug3 = registerSpanErrorInstrumentation.debug;
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
        if (__SENTRY_DEBUG__.DEBUG_BUILD) {
          const debug2 = registerSpanErrorInstrumentation.debug;
          debug2.log("[Profiling] Discarding profile because profileSessionSampleRate is not defined or set to 0");
          flag2 = false;
        }
      }
    } else {
      let flag = false;
      if (__SENTRY_DEBUG__.DEBUG_BUILD) {
        const debug = registerSpanErrorInstrumentation.debug;
        debug.warn("[Profiling] Discarding profile because of invalid profileSessionSampleRate.");
        flag = false;
      }
      return flag;
    }
  }
};
export const shouldProfileSpanLegacy = function shouldProfileSpanLegacy(rootSpan) {
  if (c14) {
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug6 = registerSpanErrorInstrumentation.debug;
      debug6.log("[Profiling] Profiling has been disabled for the duration of the current user session.");
    }
    return false;
  } else {
    let log = require;
    if (rootSpan.isRecording()) {
      const client = log(817).getClient();
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
              if (log(1072).DEBUG_BUILD) {
                const debug5 = log(817).debug;
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
            if (log(1072).DEBUG_BUILD) {
              const debug4 = log(817).debug;
              debug4.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0");
              flag4 = false;
            }
          }
        } else {
          let flag3 = false;
          if (log(1072).DEBUG_BUILD) {
            const debug3 = log(817).debug;
            debug3.warn("[Profiling] Discarding profile because of invalid sample rate.");
            flag3 = false;
          }
          return flag3;
        }
      } else {
        if (log(1072).DEBUG_BUILD) {
          const debug2 = log(817).debug;
          debug2.log("[Profiling] Profiling disabled, no options found.");
        }
        return false;
      }
      const logResult1 = log(817);
    } else {
      if (log(1072).DEBUG_BUILD) {
        const debug = log(817).debug;
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
      const obj = { sampleInterval: 10, maxBufferSize: null };
      obj[1] = tmp8;
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
  } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
    const debug = registerSpanErrorInstrumentation.debug;
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
export const validateProfileChunk = function validateProfileChunk(closure_1) {
  try {
    if (dependencyMap) {
      if (typeof dependencyMap === "object") {
        function isHex32(profiler_id) {
          let isMatch = typeof profiler_id === "string";
          if (typeof profiler_id === "string") {
            isMatch = /^[a-f0-9]{32}$/.test(profiler_id);
          }
          return isMatch;
        }
        if (isHex32(dependencyMap.profiler_id)) {
          if (tmp13(dependencyMap.chunk_id)) {
            if (dependencyMap.client_sdk) {
              const profile = dependencyMap.profile;
              if (profile) {
                const _Array = Array;
                const _Array2 = Array;
                const _Array3 = Array;
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
    obj1 = { reason: null };
    const _HermesInternal = HermesInternal;
    obj1[0] = "unknown validation error: " + tmp11;
    return obj1;
  }
};