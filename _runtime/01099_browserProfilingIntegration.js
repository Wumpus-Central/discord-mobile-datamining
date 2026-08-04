// _runtime/01099_browserProfilingIntegration.js
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const browserProfilingIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "BrowserProfiling",
  setup(getOptions) {
    const options = getOptions.getOptions();
    uIProfiler = new uIProfiler(1100).UIProfiler();
    const obj2 = uIProfiler(1101);
    if (!tmp4) {
      options.profileLifecycle = "manual";
    }
    let tmp2Result = tmp2(1101);
    if (tmp2Result.hasLegacyProfiling(options)) {
      if (!options.profilesSampleRate) {
        if (tmp2(1072).DEBUG_BUILD) {
          let debug = tmp2(817).debug;
          debug.log("[Profiling] Profiling disabled, no profiling options found.");
        }
      }
    }
    tmp2Result = tmp2(817);
    let activeSpan = tmp2Result.getActiveSpan();
    let rootSpan = activeSpan;
    if (activeSpan) {
      rootSpan = tmp2(817).getRootSpan(activeSpan);
      const tmp2Result1 = tmp2(817);
    }
    tmp4 = uIProfiler(1101).hasLegacyProfiling(options) || options.profileLifecycle;
    const tmp2Result2 = uIProfiler(1101);
    if (tmp8) {
      let debug2 = tmp2(817).debug;
      debug2.warn("[Profiling] Both legacy profiling (`profilesSampleRate`) and UI profiling settings are defined. `profileSessionSampleRate` has no effect when legacy profiling is enabled.");
    }
    tmp8 = uIProfiler(1101).hasLegacyProfiling(options) && undefined !== options.profileSessionSampleRate && uIProfiler(1072).DEBUG_BUILD;
    if (tmp2Result3.hasLegacyProfiling(options)) {
      let result = rootSpan;
      if (rootSpan) {
        result = tmp2(1101).isAutomatedPageLoadSpan(rootSpan);
        const tmp2Result4 = tmp2(1101);
      }
      if (result) {
        result = tmp2(1101).shouldProfileSpanLegacy(rootSpan);
        const tmp2Result5 = tmp2(1101);
      }
      if (result) {
        tmp2(1102).startProfileForSpan(rootSpan);
        const tmp2Result6 = tmp2(1102);
      }
      getOptions.on("spanStart", (rootSpan) => {
        let result = rootSpan === uIProfiler(817).getRootSpan(rootSpan);
        if (result) {
          let tmpResult = tmp(1101);
          result = tmpResult.shouldProfileSpanLegacy(rootSpan);
        }
        if (result) {
          tmpResult = tmp(1102);
          tmpResult.startProfileForSpan(rootSpan);
        }
      });
      getOptions.on("beforeEnvelope", (arg0) => {
        if (obj.getActiveProfilesCount()) {
          const result = uIProfiler(1101).findProfiledTransactionsFromEnvelope(arg0);
          if (result.length) {
            const items = [];
            const iter = result[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let contexts;
              let tmp16 = nextResult;
              if (nextResult != null) {
                contexts = nextResult.contexts;
              }
              let tmp18 = contexts;
              let profile_id;
              if (contexts != null) {
                let profile = contexts.profile;
                if (profile != null) {
                  profile_id = profile.profile_id;
                }
              }
              let tmp20 = profile_id;
              let tmp21 = contexts;
              if (tmp18 != null) {
                let profile2 = tmp18.profile;
                if (profile2 != null) {
                  let start_timestamp = profile2.start_timestamp;
                }
              }
              let tmp23 = profile_id;
              if (typeof tmp20 === "y") {
                let tmp27 = profile_id;
                if (tmp20) {
                  let tmp35 = contexts;
                  profile = undefined;
                  if (tmp18 != null) {
                    profile = tmp18.profile;
                  }
                  if (profile) {
                    let tmp37 = contexts;
                    delete tmp2[tmp];
                  }
                  let tmp39 = uIProfiler;
                  let tmp41 = dependencyMap;
                  let tmp38 = uIProfiler;
                  let tmp40 = dependencyMap;
                  let obj3 = uIProfiler(1101);
                  let tmp42 = profile_id;
                  let result1 = obj3.takeProfileFromGlobalCache(tmp20);
                  let tmp45 = uIProfiler;
                  let tmp46 = dependencyMap;
                  if (result1) {
                    let tmp39Result = tmp39(1101);
                    let tmp51 = profile_id;
                    let tmp52 = start_timestamp;
                    let tmp53 = result1;
                    let tmp54 = nextResult;
                    let tmp55 = tmp39Result;
                    let profilingEvent = tmp39Result.createProfilingEvent(tmp20, tmp22, tmp44, tmp16);
                    if (profilingEvent) {
                      let tmp58 = profilingEvent;
                      let arr = items.push(tmp57);
                    }
                  } else if (tmp39(1072).DEBUG_BUILD) {
                    let tmp47 = tmp38;
                    let tmp48 = tmp40;
                    let debug3 = tmp39(817).debug;
                    let tmp49 = profile_id;
                    let _HermesInternal = HermesInternal;
                    let logResult = debug3.log("[Profiling] Could not retrieve profile for span: " + tmp20);
                  }
                } else {
                  let tmp28 = uIProfiler;
                  let tmp29 = uIProfiler;
                  let tmp30 = dependencyMap;
                  let tmp31 = dependencyMap;
                  if (uIProfiler(1072).DEBUG_BUILD) {
                    let tmp32 = tmp28;
                    let tmp33 = tmp30;
                    let debug2 = tmp29(817).debug;
                    let logResult1 = debug2.log("[Profiling] cannot find profile for a span without a profile context");
                  }
                }
              } else {
                let tmp65 = uIProfiler;
                let tmp66 = uIProfiler;
                let tmp67 = dependencyMap;
                let tmp68 = dependencyMap;
                if (uIProfiler(1072).DEBUG_BUILD) {
                  let tmp24 = tmp65;
                  let tmp25 = tmp67;
                  let debug = tmp66(817).debug;
                  let logResult2 = debug.log("[Profiling] cannot find profile for a span without a profile context");
                }
              }
              continue;
            }
            const result2 = uIProfiler(1101).addProfilesToEnvelope(arg0, items);
            const obj5 = uIProfiler(1101);
          }
          const tmp4Result = uIProfiler(1101);
        }
      });
    } else {
      const profileLifecycle = options.profileLifecycle;
      getOptions.on("startUIProfiler", () => uIProfiler.start());
      getOptions.on("stopUIProfiler", () => uIProfiler.stop());
      if ("manual" === profileLifecycle) {
        uIProfiler.initialize(getOptions);
      } else if ("trace" === profileLifecycle) {
        if (tmp2Result7.hasSpansEnabled(options)) {
          uIProfiler.initialize(getOptions);
          if (rootSpan) {
            uIProfiler.notifyRootSpanActive(rootSpan);
          }
          const WINDOW = tmp2(1028).WINDOW;
          const timerId = WINDOW.setTimeout(() => {
            const activeSpan = uIProfiler(outer1_1[3]).getActiveSpan();
            let rootSpan = activeSpan;
            if (activeSpan) {
              rootSpan = uIProfiler(outer1_1[3]).getRootSpan(activeSpan);
              const tmpResult = uIProfiler(outer1_1[3]);
            }
            if (rootSpan) {
              uIProfiler.notifyRootSpanActive(rootSpan);
            }
          }, 0);
        } else if (tmp2(1072).DEBUG_BUILD) {
          let debug3 = tmp2(817).debug;
          debug3.warn("[Profiling] `profileLifecycle` is 'trace' but tracing is disabled. Set a `tracesSampleRate` or `tracesSampler` to enable span tracing.");
        }
        tmp2Result7 = tmp2(817);
      }
    }
  },
  processEvent(contexts) {
    return callback(1101).attachProfiledThreadToEvent(contexts);
  }
}));