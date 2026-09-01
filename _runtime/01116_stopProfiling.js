// _runtime/01116_stopProfiling.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import NativeModules from "01001_NativeModules.js";

function stopProfiling(arg0) {
  const NATIVE = NativeModules.NATIVE;
  const stopProfilingResult = NATIVE.stopProfiling();
  if (stopProfilingResult) {
    const _Date = Date;
    const result = Date.now() * c2;
    let tmpResult = tmp(1124);
    const result1 = tmpResult.convertToSentryProfile(stopProfilingResult.hermesProfile);
    if (result1) {
      tmpResult = tmp(1118);
      const hermesProfilingEvent = tmpResult.createHermesProfilingEvent(result1);
      if (hermesProfilingEvent) {
        if (stopProfilingResult.androidProfile) {
          const _Object3 = Object;
          const _Object4 = Object;
          let obj = { platform: "android", js_profile: null, duration_ns: null, active_thread_id: null };
          obj[1] = hermesProfilingEvent.profile;
          const merged = Object.assign({}, stopProfilingResult.androidProfile);
          obj[2] = result - arg0.toString(10);
          obj[3] = hermesProfilingEvent.transaction.active_thread_id;
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
          obj[0] = profile;
          let merged2 = Object.assign(merged1, obj);
          const debug_meta = measurements.debug_meta;
          let images;
          if (null !== debug_meta) {
            if (undefined !== debug_meta) {
              images = debug_meta.images;
            }
          }
          if (images) {
            obj1 = { debug_meta: null };
            const obj2 = { images: null };
            obj2[0] = measurements.debug_meta.images;
            obj1[0] = obj2;
            let obj3 = obj1;
          } else {
            obj3 = {};
          }
          merged2 = Object.assign(merged2, obj3);
          const obj4 = { measurements: null };
          measurements = measurements.measurements;
          obj4[0] = measurements;
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
      let obj = { function: null, instruction_addr: null, platform: "r" };
      ({ function: obj[0], instruction_addr: obj[1] } = item10032);
      let arr = frames.push(obj);
      continue;
    }
  }
  const items = [...(profile.stacks || []), ...arr3.map((arr) => arr.map((arg0) => arg0 + closure_1))];
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
const Platform = get_ActivityIndicator.Platform;
let c2 = 1000000;
let closure_3 = { platformProfilers: true };

export const hermesProfilingIntegration = () => {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = c3;
  }
  c0 = undefined;
  c1 = undefined;
  closure_2 = undefined;
  c3 = undefined;
  let _startCurrentProfileForActiveTransaction;
  let _startCurrentProfile;
  let _shouldStartProfiling;
  let _startNewProfile;
  let _finishCurrentProfileForSpan;
  let _finishCurrentProfile;
  let _createProfileEventFor;
  let _clearCurrentProfileTimeout;
  const platformProfilers = tmp.platformProfilers;
  closure_2 = null === platformProfilers || undefined === platformProfilers || platformProfilers;
  c3 = false;
  _startCurrentProfileForActiveTransaction = function _startCurrentProfileForActiveTransaction(startTimestampNs) {};
  _startCurrentProfile = function _startCurrentProfile(activeSpan) {
    if (obj.isRootSpan(activeSpan)) {
      _finishCurrentProfile();
      if (typeof _shouldStartProfiling !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let tmpResult = tmp(tmp2[2]);
      tmpResult = tmp(tmp2[2]);
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
          const debug3 = tmp(tmp2[2]).debug;
          debug3.log(
            "[Profiling] Profiling disabled, enable it by setting `profilesSampleRate` option to SDK init call.",
          );
          let flag2 = false;
        } else {
          const _Math = Math;
          flag2 = Math.random() <= profilesSampleRate;
          if (!flag2) {
            const debug2 = tmp(tmp2[2]).debug;
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
    }
  };
  _shouldStartProfiling = function _shouldStartProfiling(arg0) {};
  _startNewProfile = function _startNewProfile(arg0) {};
  _finishCurrentProfileForSpan = function _finishCurrentProfileForSpan(spanContext) {
    if (obj.isRootSpan(spanContext)) {
      let span_id;
      if (null != _undefined) {
        span_id = _undefined.span_id;
      }
      if (spanContext.spanContext().spanId === span_id) {
        _finishCurrentProfile();
      } else {
        const debug = _undefined(_undefined2[2]).debug;
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
  };
  _finishCurrentProfile = function _finishCurrentProfile() {
    if (typeof _clearCurrentProfileTimeout !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (undefined !== c1) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c1);
    }
    c1 = undefined;
    if (undefined !== _undefined) {
      const tmp12 = _startCurrentProfileForActiveTransaction(tmp4.startTimestampNs);
      if (tmp12) {
        const PROFILE_QUEUE = tmp13(tmp14[3]).PROFILE_QUEUE;
        PROFILE_QUEUE.add(_undefined.profile_id, tmp12);
        const debug2 = tmp13(tmp14[2]).debug;
        debug2.log("[Profiling] finished profiling: ", _undefined.profile_id);
        _undefined = undefined;
      } else {
        const debug = tmp13(tmp14[2]).debug;
        debug.warn("[Profiling] Stop failed. Cleaning up...");
        _undefined = undefined;
      }
    }
  };
  _createProfileEventFor = function _createProfileEventFor(contexts) {
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
      const value = PROFILE_QUEUE.get(profile_id);
      const PROFILE_QUEUE2 = _undefined(_undefined2[3]).PROFILE_QUEUE;
      PROFILE_QUEUE2.delete(profile_id);
      if (value) {
        const result = tmp11(tmp12[4]).enrichCombinedProfileWithEventContext(profile_id, value, contexts);
        const debug2 = tmp11(tmp12[2]).debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("[Profiling] Created profile " + profile_id + " for transaction " + contexts.event_id);
        return result;
      } else {
        const debug = tmp11(tmp12[2]).debug;
        const _HermesInternal = HermesInternal;
        debug.log("[Profiling] cannot find profile " + profile_id + " for transaction " + contexts.event_id);
        return null;
      }
    }
  };
  _clearCurrentProfileTimeout = function _clearCurrentProfileTimeout() {};
  return {
    name: "HermesProfiling",
    setupOnce() {
      if (!c3) {
        c3 = true;
        const obj = _undefined(_undefined2[1]);
        const tmp = _undefined;
        const tmp2 = _undefined2;
        let obj2 = _undefined(_undefined2[2]);
        if (isHermesEnabledResult) {
          const client = obj2.getClient();
          let tmp5 = client;
          if (client) {
            tmp5 = typeof client.on === "function";
          }
          if (tmp5) {
            if (typeof _startCurrentProfileForActiveTransaction !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (!_undefined) {
              const activeSpan = tmp(tmp2[2]).getActiveSpan();
              if (activeSpan) {
                _startCurrentProfile(activeSpan);
              }
              let tmpResult = tmp(tmp2[2]);
            }
            client.on("spanStart", _startCurrentProfile);
            client.on("spanEnd", _finishCurrentProfileForSpan);
            client.on("beforeEnvelope", (arg0) => {
              const PROFILE_QUEUE = closure_1_0(closure_1_1[3]).PROFILE_QUEUE;
              if (PROFILE_QUEUE.size()) {
                const result = tmp(tmp2[4]).findProfiledTransactionsFromEnvelope(arg0);
                if (result.length) {
                  const items = [];
                  const tmp6 = result[Symbol.iterator]();
                  while (tmp6 !== undefined) {
                    let tmp10 = callback;
                    let tmp11 = callback(tmp8);
                    if (tmp11) {
                      let tmp13 = tmp11;
                      let arr = items.push(tmp12);
                    }
                    continue;
                  }
                  const result1 = closure_1_0(closure_1_1[4]).addProfilesToEnvelope(arg0, items);
                  const obj2 = closure_1_0(closure_1_1[4]);
                } else {
                  const debug = tmp(tmp2[2]).debug;
                  debug.log("[Profiling] no profiled transactions found in envelope");
                }
                const tmpResult = tmp(tmp2[4]);
              }
            });
          }
        } else {
          let debug = obj2.debug;
          debug.log("[Profiling] Hermes is not enabled, not adding profiling integration.");
        }
        isHermesEnabledResult = _undefined(_undefined2[1]).isHermesEnabled();
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
export const createAndroidWithHermesProfile = function createAndroidWithHermesProfile(js_profile) {
  const obj = { platform: "android", js_profile: js_profile.profile, duration_ns: null, active_thread_id: null };
  const merged = Object.assign({}, arg1);
  obj[2] = arg2.toString(10);
  obj[3] = js_profile.transaction.active_thread_id;
  return Object.assign(merged, obj);
};
export const addNativeProfileToHermesProfile = function addNativeProfileToHermesProfile(profile, measurements) {
  let obj = { profile: null };
  profile = profile.profile;
  const merged = Object.assign({}, profile);
  addNativeThreadCpuProfileToHermes(profile, measurements.profile, profile.transaction.active_thread_id);
  obj[0] = profile;
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
    obj = { images: null };
    obj[0] = measurements.debug_meta.images;
    obj[0] = obj;
    obj1 = obj;
  } else {
    obj1 = {};
  }
  return Object.assign(Object.assign(merged1, obj1), { measurements: measurements.measurements });
};
export { addNativeThreadCpuProfileToHermes };
