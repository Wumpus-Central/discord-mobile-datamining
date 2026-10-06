// _runtime/00992_hermesProfilingIntegration.js
import react_native from "00017_react-native.js";
import _mod693 from "metro/00693__.js";
import _mod877 from "metro/00877__.js";
import _mod878 from "metro/00878__.js";
import PROFILE_QUEUE3 from "00993_PROFILE_QUEUE.js";
import _mod994 from "metro/00994__.js";
import _mod998 from "metro/00998__.js";
import _mod999 from "metro/00999__.js";
import convertToSentryProfile from "01000_convertToSentryProfile.js";

const require = globalThis.__r;
let _undefined, c3;

function stopProfiling(arg0) {
  let obj4;
  let profile;
  let str;
  const NATIVE = _mod877.NATIVE;
  const stopProfilingResult = NATIVE.stopProfiling();
  if (stopProfilingResult) {
    const _Date = Date;
    const result = Date.now() * c2;
    const tmpResult = convertToSentryProfile;
    const result1 = tmpResult.convertToSentryProfile(stopProfilingResult.hermesProfile);
    if (result1) {
      const tmpResult2 = _mod994;
      const hermesProfilingEvent = tmpResult2.createHermesProfilingEvent(result1);
      if (hermesProfilingEvent) {
        if (stopProfilingResult.androidProfile) {
          const _Object5 = Object;
          const _Object6 = Object;
          const assign4 = Object.assign;
          const obj = {
            platform: "android",
            js_profile: hermesProfilingEvent.profile,
            duration_ns: str.toString(10),
            active_thread_id: hermesProfilingEvent.transaction.active_thread_id,
          };
          str = result - arg0;
          const merged = Object.assign({}, stopProfilingResult.androidProfile);
          return assign4(merged, obj);
        } else {
          let obj7 = hermesProfilingEvent;
          if (stopProfilingResult.nativeProfile) {
            let obj5;
            const nativeProfile = stopProfilingResult.nativeProfile;
            const _Object3 = Object;
            const _Object4 = Object;
            const _Object = Object;
            const _Object2 = Object;
            const assign2 = Object.assign;
            const assign3 = Object.assign;
            const obj2 = { profile };
            profile = hermesProfilingEvent.profile;
            const merged1 = Object.assign({}, hermesProfilingEvent);
            addNativeThreadCpuProfileToHermes(
              profile,
              nativeProfile.profile,
              hermesProfilingEvent.transaction.active_thread_id,
            );
            const debug_meta = nativeProfile.debug_meta;
            let images;
            const assign3Result = assign3(merged1, obj2);
            if (null !== debug_meta) {
              if (undefined !== debug_meta) {
                images = debug_meta.images;
              }
            }
            if (images) {
              const obj3 = { debug_meta: obj4 };
              obj5 = obj3;
              obj4 = { images: nativeProfile.debug_meta.images };
            } else {
              obj5 = {};
            }
            const obj6 = { measurements: nativeProfile.measurements };
            obj7 = assign(assign2(assign3Result, obj5), obj6);
          }
          return obj7;
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
  let arr3;
  let closure_0 = active_thread_id;
  profile.thread_metadata = Object.assign(Object.assign({}, profile2.thread_metadata), profile.thread_metadata);
  profile.queue_metadata = Object.assign(Object.assign({}, profile2.queue_metadata), profile.queue_metadata);
  const length = profile.stacks.length;
  if (profile2.frames) {
    const frames = profile2.frames;
    for (const item10032 of frames) {
      let frames1 = profile.frames;
      let obj = { function: null, instruction_addr: null, platform: "Array" };
      ({ function: obj.function, instruction_addr: obj.instruction_addr } = item10032);
      let arr = frames1.push(obj);
      continue;
    }
  }
  const tmp5 = profile.stacks || [];
  const items = [...tmp5, ...arr3.map((arr) => arr.map((item) => item + length))];
  arr3 = profile2.stacks || [];
  profile.stacks = items;
  const items1 = [...(profile.samples || [])];
  const arr5 = profile2.samples || [];
  const found = arr5.filter((thread_id) => thread_id.thread_id !== active_thread_id);
  HermesBuiltin.arraySpread(
    items1,
    found.map((stack_id) => {
      const obj = { stack_id: length + stack_id.stack_id };
      return Object.assign(Object.assign({}, stack_id), obj);
    }),
    tmp7,
  );
  profile.samples = items1;
  return profile;
}
const Platform = react_native.Platform;
let c2 = 1000000;
let closure_3 = { platformProfilers: true };

export const hermesProfilingIntegration = () => {
  let _undefined2;
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = c3;
  }
  let c0;
  let c1;
  const platformProfilers = tmp.platformProfilers;
  let closure_2 = null === platformProfilers || undefined === platformProfilers || platformProfilers;
  c3 = false;
  function _startCurrentProfileForActiveTransaction() {}
  function _startCurrentProfile(activeSpan) {
    let tmpResult4;
    const obj = _mod998;
    if (obj.isRootSpan(activeSpan)) {
      _finishCurrentProfile();
      if (typeof _shouldStartProfiling === "function") {
        let flag;
        const tmpResult = _mod693;
        const spanIsSampledResult = tmpResult.spanIsSampled(activeSpan);
        const tmpResult3 = _mod693;
        if (spanIsSampledResult) {
          let flag2;
          const client = tmpResult3.getClient();
          let getOptions;
          if (null != client) {
            getOptions = client.getOptions;
          }
          let callResult;
          if (null !== getOptions) {
            if (undefined !== getOptions) {
              callResult = getOptions.call(client);
            }
          }
          let profilesSampleRate;
          if (callResult) {
            if (typeof callResult.profilesSampleRate === "number") {
              profilesSampleRate = callResult.profilesSampleRate;
            }
          }
          if (undefined === profilesSampleRate) {
            const debug3 = _mod693.debug;
            debug3.log(
              "[Profiling] Profiling disabled, enable it by setting `profilesSampleRate` option to SDK init call.",
            );
            flag2 = false;
          } else {
            const _Math = Math;
            flag2 = Math.random() <= profilesSampleRate;
            if (!flag2) {
              const debug2 = _mod693.debug;
              debug2.log("[Profiling] Skip profiling transaction due to sampling.");
              flag2 = false;
            }
          }
          flag = flag2;
        } else {
          const debug = tmpResult3.debug;
          debug.log("[Profiling] Transaction is not sampled, skipping profiling");
          flag = false;
        }
        if (flag) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(_finishCurrentProfile, _mod999.MAX_PROFILE_DURATION_MS);
          if (typeof _startNewProfile === "function") {
            const NATIVE = _mod877.NATIVE;
            let result = null;
            if (NATIVE.startProfiling(closure_2)) {
              const _Date = Date;
              result = Date.now() * c2;
            }
            if (result) {
              const obj2 = {
                span_id: activeSpan.spanContext().spanId,
                profile_id: tmpResult4.uuid4(),
                startTimestampNs: result,
              };
              _undefined = obj2;
              tmpResult4 = _mod693;
              const attr = activeSpan.setAttribute("profile_id", _undefined.profile_id);
              const debug4 = _mod693.debug;
              debug4.log("[Profiling] started profiling: ", _undefined.profile_id);
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  function _shouldStartProfiling(arg0) {}
  function _startNewProfile(arg0) {}
  function _finishCurrentProfileForSpan(spanContext) {
    const obj = _mod998;
    if (obj.isRootSpan(spanContext)) {
      let span_id;
      const spanId = spanContext.spanContext().spanId;
      if (null != _undefined) {
        span_id = _undefined.span_id;
      }
      if (spanId === span_id) {
        _finishCurrentProfile();
      } else {
        const debug = _mod693.debug;
        const log = debug.log;
        const spanId2 = spanContext.spanContext().spanId;
        let span_id1;
        if (null != _undefined) {
          span_id1 = _undefined.span_id;
        }
        const _HermesInternal = HermesInternal;
        log(
          "[Profiling] Span (" +
            spanId2 +
            ") ended is not the currently profiled span (" +
            span_id1 +
            "). Not stopping profiling.",
        );
      }
    }
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
          const debug2 = _mod693.debug;
          debug2.log("[Profiling] finished profiling: ", _undefined.profile_id);
          _undefined = undefined;
        } else {
          const debug = _mod693.debug;
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
      const debug3 = _undefined(c1[2]).debug;
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
        delete contexts.contexts.trace.data["profile_id"];
      }
      const PROFILE_QUEUE = _undefined(c1[3]).PROFILE_QUEUE;
      const value = PROFILE_QUEUE.get(profile_id);
      const PROFILE_QUEUE2 = _undefined(c1[3]).PROFILE_QUEUE;
      PROFILE_QUEUE2.delete(profile_id);
      if (value) {
        const tmp9Result = _undefined(c1[4]);
        const result = tmp9Result.enrichCombinedProfileWithEventContext(profile_id, value, contexts);
        const debug2 = _undefined(c1[2]).debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("[Profiling] Created profile " + profile_id + " for transaction " + contexts.event_id);
        return result;
      } else {
        const debug = _undefined(c1[2]).debug;
        const _HermesInternal = HermesInternal;
        debug.log("[Profiling] cannot find profile " + profile_id + " for transaction " + contexts.event_id);
        return null;
      }
    }
  }
  function _clearCurrentProfileTimeout() {}
  let obj = {
    name: "HermesProfiling",
    setupOnce() {
      const tmp = c3;
      if (!tmp) {
        c3 = true;
        const obj = _mod878;
        const isHermesEnabledResult = obj.isHermesEnabled();
        let obj2 = _mod693;
        if (isHermesEnabledResult) {
          const client = obj2.getClient();
          let tmp6 = client && typeof client.on === "function";
          if (tmp6) {
            if (typeof _startCurrentProfileForActiveTransaction === "function") {
              if (!c0) {
                const tmp2Result = _mod693;
                const activeSpan = tmp2Result.getActiveSpan();
                if (activeSpan) {
                  let tmp11 = _startCurrentProfile(activeSpan);
                }
              }
              client.on("spanStart", _startCurrentProfile);
              client.on("spanEnd", _finishCurrentProfileForSpan);
              client.on("beforeEnvelope", (arg0) => {
                const PROFILE_QUEUE = c0(c1[3]).PROFILE_QUEUE;
                if (PROFILE_QUEUE.size()) {
                  const tmpResult = c0(c1[4]);
                  const result = tmpResult.findProfiledTransactionsFromEnvelope(arg0);
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
                    const obj2 = c0(c1[4]);
                    const result1 = obj2.addProfilesToEnvelope(arg0, items);
                  } else {
                    const debug = c0(c1[2]).debug;
                    debug.log("[Profiling] no profiled transactions found in envelope");
                  }
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
      }
    },
  };
  return obj;
};
export const startProfiling = function startProfiling(arg0) {
  const NATIVE = _mod877.NATIVE;
  let result = null;
  if (NATIVE.startProfiling(arg0)) {
    const _Date = Date;
    result = Date.now() * c2;
  }
  return result;
};
export { stopProfiling };
export const createAndroidWithHermesProfile = function createAndroidWithHermesProfile(js_profile, arg1, arg2) {
  const obj = {
    platform: "android",
    js_profile: js_profile.profile,
    duration_ns: require("AppStartPerformance"),
    active_thread_id: js_profile.transaction.active_thread_id,
  };
  const merged = Object.assign({}, arg1);
  return assign(merged, obj);
};
export const addNativeProfileToHermesProfile = function addNativeProfileToHermesProfile(profile, measurements) {
  let obj3;
  let obj4;
  const _Object = Object;
  const _Object2 = Object;
  const assign2 = Object.assign;
  const assign3 = Object.assign;
  const obj = { profile };
  profile = profile.profile;
  const merged = Object.assign({}, profile);
  addNativeThreadCpuProfileToHermes(profile, measurements.profile, profile.transaction.active_thread_id);
  const debug_meta = measurements.debug_meta;
  let images;
  const assign3Result = assign3(merged, obj);
  if (null !== debug_meta) {
    if (undefined !== debug_meta) {
      images = debug_meta.images;
    }
  }
  if (images) {
    const obj2 = { debug_meta: obj3 };
    obj4 = obj2;
    obj3 = { images: measurements.debug_meta.images };
  } else {
    obj4 = {};
  }
  const obj5 = { measurements: measurements.measurements };
  return assign(assign2(assign3Result, obj4), obj5);
};
export { addNativeThreadCpuProfileToHermes };
