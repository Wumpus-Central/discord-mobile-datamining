// _runtime/00975_browserProfilingIntegration.js
import MAX_PROFILE_DURATION_MS from "00977_MAX_PROFILE_DURATION_MS.js";
import registerSpanErrorInstrumentation from "metro/00693__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const browserProfilingIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = {
    name: "BrowserProfiling",
    setup(getOptions) {
      let uIProfiler;
      const options = getOptions.getOptions();
      uIProfiler = new uIProfiler(closure_1[0]).UIProfiler();
      const obj2 = uIProfiler(closure_1[1]);
      const tmp4 = obj2.hasLegacyProfiling(options) || options.profileLifecycle;
      if (!tmp4) {
        options.profileLifecycle = "manual";
      }
      let tmp2Result = tmp2(closure_1[1]);
      if (tmp2Result.hasLegacyProfiling(options)) {
        if (!options.profilesSampleRate) {
          if (uIProfiler(closure_1[2]).DEBUG_BUILD) {
            let debug = tmp2(closure_1[3]).debug;
            const str2 = "[Profiling] Profiling disabled, no profiling options found.";
            let logResult = debug.log("[Profiling] Profiling disabled, no profiling options found.");
          }
        }
      }
      const tmp2Result9 = uIProfiler(closure_1[3]);
      let activeSpan = tmp2Result9.getActiveSpan();
      let rootSpan = activeSpan;
      if (rootSpan) {
        const tmp2Result10 = uIProfiler(closure_1[3]);
        rootSpan = tmp2Result10.getRootSpan(activeSpan);
      }
      const tmp2Result11 = uIProfiler(closure_1[1]);
      const tmp8 =
        tmp2Result11.hasLegacyProfiling(options) &&
        undefined !== options.profileSessionSampleRate &&
        tmp2(closure_1[2]).DEBUG_BUILD;
      if (tmp8) {
        let debug2 = tmp2(closure_1[3]).debug;
        debug2.warn(
          "[Profiling] Both legacy profiling (`profilesSampleRate`) and UI profiling settings are defined. `profileSessionSampleRate` has no effect when legacy profiling is enabled.",
        );
      }
      const tmp2Result12 = uIProfiler(closure_1[1]);
      if (tmp2Result12.hasLegacyProfiling(options)) {
        let result = rootSpan;
        if (result) {
          const tmp2Result13 = uIProfiler(closure_1[1]);
          result = tmp2Result13.isAutomatedPageLoadSpan(rootSpan);
        }
        if (result) {
          const tmp2Result14 = uIProfiler(closure_1[1]);
          result = tmp2Result14.shouldProfileSpanLegacy(rootSpan);
        }
        if (result) {
          const tmp2Result15 = uIProfiler(closure_1[5]);
          tmp2Result15.startProfileForSpan(rootSpan);
        }
        getOptions.on("spanStart", (rootSpan) => {
          const obj = uIProfiler(closure_1_1[3]);
          let result = rootSpan === obj.getRootSpan(rootSpan);
          if (result) {
            const tmpResult = uIProfiler(closure_1_1[1]);
            result = tmpResult.shouldProfileSpanLegacy(rootSpan);
          }
          if (result) {
            const tmpResult2 = uIProfiler(closure_1_1[5]);
            tmpResult2.startProfileForSpan(rootSpan);
          }
        });
        getOptions.on("beforeEnvelope", (arg0) => {
          const obj = uIProfiler(closure_1_1[1]);
          if (obj.getActiveProfilesCount()) {
            const tmp2Result = uIProfiler(closure_1_1[1]);
            const result = tmp2Result.findProfiledTransactionsFromEnvelope(arg0);
            if (result.length) {
              const items = [];
              const iter = result[Symbol.iterator]();
              const nextResult = iter.next();
              while (iter !== undefined) {
                let contexts;
                let tmp14 = nextResult;
                if (nextResult != null) {
                  contexts = nextResult.contexts;
                }
                let tmp16 = contexts;
                let profile_id;
                if (contexts != null) {
                  let profile = contexts.profile;
                  if (profile != null) {
                    profile_id = profile.profile_id;
                  }
                }
                let tmp18 = profile_id;
                if (tmp16 != null) {
                  let profile2 = tmp16.profile;
                  if (profile2 != null) {
                    let start_timestamp = profile2.start_timestamp;
                  }
                }
                if (typeof tmp18 === "string") {
                  if (tmp18) {
                    let profile1;
                    if (tmp16 != null) {
                      profile1 = tmp16.profile;
                    }
                    if (profile1) {
                      delete tmp15[str2];
                    }
                    let obj3 = uIProfiler(closure_1_1[1]);
                    let result1 = obj3.takeProfileFromGlobalCache(tmp18);
                    if (result1) {
                      let tmp36Result = uIProfiler(closure_1_1[1]);
                      let profilingEvent = tmp36Result.createProfilingEvent(tmp18, tmp20, tmp41, tmp14);
                      if (profilingEvent) {
                        let arr = items.push(tmp54);
                      }
                    } else if (uIProfiler(closure_1_1[2]).DEBUG_BUILD) {
                      let debug3 = uIProfiler(closure_1_1[3]).debug;
                      let _HermesInternal = HermesInternal;
                      let logResult = debug3.log("[Profiling] Could not retrieve profile for span: " + tmp18);
                    }
                  } else if (uIProfiler(closure_1_1[2]).DEBUG_BUILD) {
                    let debug2 = uIProfiler(closure_1_1[3]).debug;
                    let logResult1 = debug2.log("[Profiling] cannot find profile for a span without a profile context");
                  }
                } else if (uIProfiler(closure_1_1[2]).DEBUG_BUILD) {
                  let debug = uIProfiler(closure_1_1[3]).debug;
                  let logResult2 = debug.log("[Profiling] cannot find profile for a span without a profile context");
                }
                continue;
              }
              const obj5 = uIProfiler(closure_1_1[1]);
              const result2 = obj5.addProfilesToEnvelope(arg0, items);
            }
          }
        });
      } else {
        const profileLifecycle = options.profileLifecycle;
        getOptions.on("startUIProfiler", () => uIProfiler.start());
        getOptions.on("stopUIProfiler", () => uIProfiler.stop());
        if ("manual" === profileLifecycle) {
          uIProfiler.initialize(getOptions);
        } else if ("trace" === profileLifecycle) {
          const tmp2Result16 = uIProfiler(closure_1[3]);
          if (tmp2Result16.hasSpansEnabled(options)) {
            uIProfiler.initialize(getOptions);
            if (rootSpan) {
              uIProfiler.notifyRootSpanActive(rootSpan);
            }
            const WINDOW = tmp2(closure_1[4]).WINDOW;
            const timerId = WINDOW.setTimeout(() => {
              const obj = registerSpanErrorInstrumentation;
              const activeSpan = obj.getActiveSpan();
              let rootSpan = activeSpan;
              if (rootSpan) {
                const tmpResult = registerSpanErrorInstrumentation;
                rootSpan = tmpResult.getRootSpan(activeSpan);
              }
              if (rootSpan) {
                uIProfiler.notifyRootSpanActive(rootSpan);
              }
            }, 0);
          } else if (uIProfiler(closure_1[2]).DEBUG_BUILD) {
            let debug3 = tmp2(closure_1[3]).debug;
            debug3.warn(
              "[Profiling] `profileLifecycle` is 'trace' but tracing is disabled. Set a `tracesSampleRate` or `tracesSampler` to enable span tracing.",
            );
          }
        }
      }
    },
    processEvent(contexts) {
      const obj = MAX_PROFILE_DURATION_MS;
      return obj.attachProfiledThreadToEvent(contexts);
    },
  };
  return obj;
});
