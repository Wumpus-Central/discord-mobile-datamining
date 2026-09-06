// _runtime/00981_stopProfiling.js
import _mod17 from "metro/00017__.js";
import _mod682 from "metro/00682__.js";
import NativeModules from "00866_NativeModules.js";
import _mod867 from "metro/00867__.js";
import PROFILE_QUEUE3 from "00982_PROFILE_QUEUE.js";
import enrichAndroidProfileWithEventContext from "00983_enrichAndroidProfileWithEventContext.js";
import _mod987 from "metro/00987__.js";
import mapSamples from "00989_mapSamples.js";

function stopProfiling(arg0) {
  const NATIVE = NativeModules.NATIVE;
  const stopProfilingResult = NATIVE.stopProfiling();
  if (stopProfilingResult) {
    const _Date = Date;
    const result = Date.now() * c2;
    let tmpResult = mapSamples;
    const result1 = tmpResult.convertToSentryProfile(stopProfilingResult.hermesProfile);
    if (result1) {
      tmpResult = enrichAndroidProfileWithEventContext;
      const hermesProfilingEvent = tmpResult.createHermesProfilingEvent(result1);
      if (hermesProfilingEvent) {
        if (stopProfilingResult.androidProfile) {
          const _Object3 = Object;
          const _Object4 = Object;
          let obj = {
            platform: "android",
            js_profile: hermesProfilingEvent.profile,
            duration_ns: null,
            active_thread_id: null,
          };
          const merged = Object.assign({}, stopProfilingResult.androidProfile);
          obj.duration_ns = result - arg0.toString(10);
          obj.active_thread_id = hermesProfilingEvent.transaction.active_thread_id;
          return Object.assign(merged, obj);
        } else if (!stopProfilingResult.nativeProfile) {
          return hermesProfilingEvent;
        } else {
          let measurements = stopProfilingResult.nativeProfile;
          const _Object = Object;
          const _Object2 = Object;
          obj = { profile: null };
          const profile = hermesProfilingEvent.profile;
          const merged1 = Object.assign({}, hermesProfilingEvent);
          addNativeThreadCpuProfileToHermes(
            profile,
            measurements.profile,
            hermesProfilingEvent.transaction.active_thread_id,
          );
          obj.profile = profile;
          let merged2 = Object.assign(merged1, obj);
          const debug_meta = measurements.debug_meta;
          let images;
          if (null !== debug_meta) {
            if (undefined !== debug_meta) {
              images = debug_meta.images;
            }
          }
          if (images) {
            const obj1 = { debug_meta: null };
            const obj2 = { images: measurements.debug_meta.images };
            obj1.debug_meta = obj2;
            let obj3 = obj1;
          } else {
            obj3 = {};
          }
          merged2 = Object.assign(merged2, obj3);
          const obj4 = { measurements: null };
          measurements = measurements.measurements;
          obj4.measurements = measurements;
          const merged3 = Object.assign(merged2, obj4);
        }
      } else {
        return null;
      }
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function addNativeThreadCpuProfileToHermes(profile, profile2, active_thread_id) {
  closure_0 = active_thread_id;
  profile.thread_metadata = Object.assign(Object.assign({}, profile2.thread_metadata), profile.thread_metadata);
  profile.queue_metadata = Object.assign(Object.assign({}, profile2.queue_metadata), profile.queue_metadata);
  if (profile2.frames) {
    let frames = profile2.frames;
    for (const item10032 of frames) {
      frames = arg0.frames;
      let obj = { function: null, instruction_addr: null, platform: "Array" };
      ({ function: obj.function, instruction_addr: obj.instruction_addr } = item10032);
      let arr = frames.push(obj);
      continue;
    }
  }
  const items = [...(profile.stacks || []), ...arr3.map((arr) => arr.map((item) => item + length))];
  profile.stacks = items;
  const items1 = [...(profile.samples || [])];
  const found = profile2.samples || [].filter((thread_id) => thread_id.thread_id !== closure_0);
  HermesBuiltin.arraySpread(
    found.map((stack_id) => Object.assign(Object.assign({}, stack_id), { stack_id: length + stack_id.stack_id })),
    tmp6,
  );
  profile.samples = items1;
  return profile;
}
const Platform = _mod17.Platform;
let c2 = 1000000;
let closure_3 = { platformProfilers: true };

export const hermesProfilingIntegration = () => {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = c3;
  }
  c0 = undefined;
  c1 = undefined;
  const platformProfilers = tmp.platformProfilers;
  closure_2 = null === platformProfilers || undefined === platformProfilers || platformProfilers;
  c3 = false;
  function _startCurrentProfileForActiveTransaction() {}
  function _startCurrentProfile(activeSpan) {
    if (obj.isRootSpan(activeSpan)) {
      _finishCurrentProfile();
      if (typeof _shouldStartProfiling === "function") {
        const tmpResult = _mod682;
        if (spanIsSampledResult) {
          const client = tmpResult.getClient();
          let getOptions;
          if (null != client) {
            getOptions = client.getOptions;
          }
          if (null !== getOptions) {
            if (undefined !== getOptions) {
              const call = getOptions.call;
              typeof call === "unknown" ? getOptions() : call(client);
            }
          }
          let profilesSampleRate;
          if (undefined) {
            if (typeof tmp11.profilesSampleRate === "number") {
              profilesSampleRate = tmp11.profilesSampleRate;
            }
          }
          if (undefined === profilesSampleRate) {
            const debug3 = _mod682.debug;
            debug3.log(
              "[Profiling] Profiling disabled, enable it by setting `profilesSampleRate` option to SDK init call.",
            );
            let flag2 = false;
          } else {
            const _Math = Math;
            flag2 = Math.random() <= profilesSampleRate;
            if (!flag2) {
              const debug2 = _mod682.debug;
              debug2.log("[Profiling] Skip profiling transaction due to sampling.");
              flag2 = false;
            }
          }
        } else {
          const debug = tmpResult.debug;
          debug.log("[Profiling] Transaction is not sampled, skipping profiling");
          // // eliminated: always false
        }
        spanIsSampledResult = tmpResult.spanIsSampled(activeSpan);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    obj = _mod987;
  }
  function _shouldStartProfiling(arg0) {}
  function _startNewProfile(arg0) {}
  function _finishCurrentProfileForSpan(spanContext) {
    if (obj.isRootSpan(spanContext)) {
      let span_id;
      if (null != _undefined) {
        span_id = _undefined.span_id;
      }
      if (spanContext.spanContext().spanId === span_id) {
        _finishCurrentProfile();
      } else {
        const debug = _mod682.debug;
        const spanId = spanContext.spanContext().spanId;
        let span_id1;
        if (null != _undefined) {
          span_id1 = _undefined.span_id;
        }
        const _HermesInternal = HermesInternal;
        debug.log(
          "[Profiling] Span (" +
            spanId +
            ") ended is not the currently profiled span (" +
            span_id1 +
            "). Not stopping profiling.",
        );
      }
    }
    obj = _mod987;
  }
  function _finishCurrentProfile() {
    if (typeof _clearCurrentProfileTimeout === "function") {
      if (undefined !== c1) {
        const _clearTimeout = clearTimeout;
        clearTimeout(c1);
      }
      c1 = undefined;
      if (undefined !== _undefined) {
        const tmp12 = stopProfiling(tmp5.startTimestampNs);
        if (tmp12) {
          const PROFILE_QUEUE = PROFILE_QUEUE3.PROFILE_QUEUE;
          PROFILE_QUEUE.add(_undefined.profile_id, tmp12);
          const debug2 = _mod682.debug;
          debug2.log("[Profiling] finished profiling: ", _undefined.profile_id);
          _undefined = undefined;
        } else {
          const debug = _mod682.debug;
          debug.warn("[Profiling] Stop failed. Cleaning up...");
          _undefined = undefined;
        }
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  function _createProfileEventFor(contexts) {
    contexts = undefined;
    if (null != contexts) {
      contexts = contexts.contexts;
    }
    let trace;
    if (null !== contexts) {
      if (undefined !== contexts) {
        trace = contexts.trace;
      }
    }
    let data;
    if (null !== trace) {
      if (undefined !== trace) {
        data = trace.data;
      }
    }
    let profile_id;
    if (null !== data) {
      if (undefined !== data) {
        profile_id = data.profile_id;
      }
    }
    if (typeof profile_id !== "string") {
      const debug3 = _undefined(_undefined2[2]).debug;
      debug3.log("[Profiling] cannot find profile for a transaction without a profile context");
      return null;
    } else {
      let contexts1;
      if (null != contexts) {
        contexts1 = contexts.contexts;
      }
      let trace1;
      if (null !== contexts1) {
        if (undefined !== contexts1) {
          trace1 = contexts1.trace;
        }
      }
      let data1;
      if (null !== trace1) {
        if (undefined !== trace1) {
          data1 = trace1.data;
        }
      }
      let profile_id1;
      if (null !== data1) {
        if (undefined !== data1) {
          profile_id1 = data1.profile_id;
        }
      }
      if (profile_id1) {
        data = contexts.contexts.trace.data;
        delete tmp2[tmp];
      }
      const PROFILE_QUEUE = _undefined(_undefined2[3]).PROFILE_QUEUE;
      value = PROFILE_QUEUE.get(profile_id);
      const PROFILE_QUEUE2 = _undefined(_undefined2[3]).PROFILE_QUEUE;
      PROFILE_QUEUE2.delete(profile_id);
      if (value) {
        const result = _undefined(_undefined2[4]).enrichCombinedProfileWithEventContext(profile_id, value, contexts);
        const debug2 = _undefined(_undefined2[2]).debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("[Profiling] Created profile " + profile_id + " for transaction " + contexts.event_id);
        return result;
      } else {
        const debug = _undefined(_undefined2[2]).debug;
        const _HermesInternal = HermesInternal;
        debug.log("[Profiling] cannot find profile " + profile_id + " for transaction " + contexts.event_id);
        return null;
      }
    }
  }
  function _clearCurrentProfileTimeout() {}
  return {
    name: "HermesProfiling",
    setupOnce() {
      if (!c3) {
        c3 = true;
        let obj2 = _mod682;
        if (isHermesEnabledResult) {
          const client = obj2.getClient();
          let tmp5 = client;
          if (client) {
            tmp5 = typeof client.on === "function";
          }
          if (tmp5) {
            if (typeof _startCurrentProfileForActiveTransaction === "function") {
              if (!c0) {
                const activeSpan = _mod682.getActiveSpan();
                if (activeSpan) {
                  _startCurrentProfile(activeSpan);
                }
                let tmpResult = _mod682;
              }
              client.on("spanStart", _startCurrentProfile);
              client.on("spanEnd", _finishCurrentProfileForSpan);
              client.on("beforeEnvelope", (arg0) => {
                const PROFILE_QUEUE = c0(982).PROFILE_QUEUE;
                if (PROFILE_QUEUE.size()) {
                  const result = c0(983).findProfiledTransactionsFromEnvelope(arg0);
                  if (result.length) {
                    const items = [];
                    const tmp6 = result[Symbol.iterator]();
                    while (tmp6 !== undefined) {
                      let tmp11 = _createProfileEventFor(tmp8);
                      if (tmp11) {
                        let arr = items.push(tmp12);
                      }
                      continue;
                    }
                    const result1 = c0(983).addProfilesToEnvelope(arg0, items);
                    const obj2 = c0(983);
                  } else {
                    const debug = c0(682).debug;
                    debug.log("[Profiling] no profiled transactions found in envelope");
                  }
                  const tmpResult = c0(983);
                }
              });
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        } else {
          let debug = obj2.debug;
          debug.log("[Profiling] Hermes is not enabled, not adding profiling integration.");
        }
        isHermesEnabledResult = _mod867.isHermesEnabled();
      }
    },
  };
};
export const startProfiling = function startProfiling(arg0) {
  const NATIVE = NativeModules.NATIVE;
  let result = null;
  if (NATIVE.startProfiling(arg0)) {
    const _Date = Date;
    result = Date.now() * c2;
  }
  return result;
};
export { stopProfiling };
export const createAndroidWithHermesProfile = function createAndroidWithHermesProfile(js_profile, arg1, arg2) {
  const obj = { platform: "android", js_profile: js_profile.profile, duration_ns: null, active_thread_id: null };
  const merged = Object.assign({}, arg1);
  obj.duration_ns = require("AppStartPerformance");
  obj.active_thread_id = js_profile.transaction.active_thread_id;
  return Object.assign(merged, obj);
};
export const addNativeProfileToHermesProfile = function addNativeProfileToHermesProfile(profile, measurements) {
  let obj = { profile: null };
  profile = profile.profile;
  const merged = Object.assign({}, profile);
  addNativeThreadCpuProfileToHermes(profile, measurements.profile, profile.transaction.active_thread_id);
  obj.profile = profile;
  const debug_meta = measurements.debug_meta;
  let images;
  const merged1 = Object.assign(merged, obj);
  if (null !== debug_meta) {
    if (undefined !== debug_meta) {
      images = debug_meta.images;
    }
  }
  if (images) {
    obj = { debug_meta: null };
    obj = { images: measurements.debug_meta.images };
    obj.debug_meta = obj;
    let obj1 = obj;
  } else {
    obj1 = {};
  }
  return Object.assign(Object.assign(merged1, obj1), { measurements: measurements.measurements });
};
export { addNativeThreadCpuProfileToHermes };
