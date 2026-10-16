// === Module 976: browserProfilingIntegration ===

// Module 976 (browserProfilingIntegration)
import _mod978 from "module_978" /* 978 */;
import registerSpanErrorInstrumentation from "module_693" /* 693 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const browserProfilingIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "BrowserProfiling",
  setup(getOptions) {
    const options = getOptions.getOptions();
    uIProfiler = new uIProfiler(977).UIProfiler();
    const obj2 = uIProfiler(978);
    if (!tmp4) {
      options.profileLifecycle = "manual";
    }
    tmp4 = uIProfiler(978).hasLegacyProfiling(options) || options.profileLifecycle;
    if (tmp2Result.hasLegacyProfiling(options)) {
      if (!options.profilesSampleRate) {
        if (tmp2(949).DEBUG_BUILD) {
          let debug = tmp2(693).debug;
          debug.log("[Profiling] Profiling disabled, no profiling options found.");
        }
      }
    }
    tmp2Result = uIProfiler(978);
    let activeSpan = uIProfiler(693).getActiveSpan();
    let rootSpan = activeSpan;
    if (activeSpan) {
      rootSpan = tmp2(693).getRootSpan(activeSpan);
      const tmp2Result10 = tmp2(693);
    }
    const tmp2Result9 = uIProfiler(693);
    const tmp2Result11 = uIProfiler(978);
    if (tmp8) {
      let debug2 = tmp2(693).debug;
      debug2.warn("[Profiling] Both legacy profiling (`profilesSampleRate`) and UI profiling settings are defined. `profileSessionSampleRate` has no effect when legacy profiling is enabled.");
    }
    tmp8 = uIProfiler(978).hasLegacyProfiling(options) && undefined !== options.profileSessionSampleRate && uIProfiler(949).DEBUG_BUILD;
    if (tmp2Result12.hasLegacyProfiling(options)) {
      let result = rootSpan;
      if (rootSpan) {
        result = tmp2(978).isAutomatedPageLoadSpan(rootSpan);
        const tmp2Result13 = tmp2(978);
      }
      if (result) {
        result = tmp2(978).shouldProfileSpanLegacy(rootSpan);
        const tmp2Result14 = tmp2(978);
      }
      if (result) {
        tmp2(979).startProfileForSpan(rootSpan);
        const tmp2Result15 = tmp2(979);
      }
      getOptions.on("spanStart", (rootSpan) => {
        let result = rootSpan === uIProfiler(693).getRootSpan(rootSpan);
        if (result) {
          result = uIProfiler(978).shouldProfileSpanLegacy(rootSpan);
          const tmpResult = uIProfiler(978);
        }
        if (result) {
          uIProfiler(979).startProfileForSpan(rootSpan);
          const tmpResult2 = uIProfiler(979);
        }
        const obj = uIProfiler(693);
      });
      getOptions.on("beforeEnvelope", (arg0) => {
        if (obj.getActiveProfilesCount()) {
          const result = uIProfiler(978).findProfiledTransactionsFromEnvelope(arg0);
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
              if (tmp18 != null) {
                let profile2 = tmp18.profile;
                if (profile2 != null) {
                  let start_timestamp = profile2.start_timestamp;
                }
              }
              if (typeof tmp20 === "string") {
                if (tmp20) {
                  let profile1;
                  if (tmp18 != null) {
                    profile1 = tmp18.profile;
                  }
                  if (profile1) {
                    delete tmp2[tmp];
                  }
                  let obj3 = uIProfiler(978);
                  let result1 = obj3.takeProfileFromGlobalCache(tmp20);
                  if (result1) {
                    let tmp39Result = uIProfiler(978);
                    let profilingEvent = tmp39Result.createProfilingEvent(tmp20, tmp22, tmp44, tmp16);
                    if (profilingEvent) {
                      let arr = items.push(tmp57);
                    }
                  } else if (uIProfiler(949).DEBUG_BUILD) {
                    let debug3 = uIProfiler(693).debug;
                    let _HermesInternal = HermesInternal;
                    let logResult = debug3.log("[Profiling] Could not retrieve profile for span: " + tmp20);
                  }
                } else if (uIProfiler(949).DEBUG_BUILD) {
                  let debug2 = uIProfiler(693).debug;
                  let logResult1 = debug2.log("[Profiling] cannot find profile for a span without a profile context");
                }
              } else if (uIProfiler(949).DEBUG_BUILD) {
                let debug = uIProfiler(693).debug;
                let logResult2 = debug.log("[Profiling] cannot find profile for a span without a profile context");
              }
              continue;
            }
            const result2 = uIProfiler(978).addProfilesToEnvelope(arg0, items);
            const obj5 = uIProfiler(978);
          }
          const tmp4Result = uIProfiler(978);
        }
        obj = uIProfiler(978);
      });
    } else {
      const profileLifecycle = options.profileLifecycle;
      getOptions.on("startUIProfiler", () => uIProfiler.start());
      getOptions.on("stopUIProfiler", () => uIProfiler.stop());
      if ("manual" === profileLifecycle) {
        uIProfiler.initialize(getOptions);
      } else if ("trace" === profileLifecycle) {
        if (tmp2Result16.hasSpansEnabled(options)) {
          uIProfiler.initialize(getOptions);
          if (rootSpan) {
            uIProfiler.notifyRootSpanActive(rootSpan);
          }
          const WINDOW = tmp2(905).WINDOW;
          const timerId = WINDOW.setTimeout(() => {
            const activeSpan = registerSpanErrorInstrumentation.getActiveSpan();
            let rootSpan = activeSpan;
            if (activeSpan) {
              rootSpan = registerSpanErrorInstrumentation.getRootSpan(activeSpan);
              const tmpResult = registerSpanErrorInstrumentation;
            }
            if (rootSpan) {
              uIProfiler.notifyRootSpanActive(rootSpan);
            }
          }, 0);
        } else if (tmp2(949).DEBUG_BUILD) {
          let debug3 = tmp2(693).debug;
          debug3.warn("[Profiling] `profileLifecycle` is 'trace' but tracing is disabled. Set a `tracesSampleRate` or `tracesSampler` to enable span tracing.");
        }
        tmp2Result16 = tmp2(693);
      }
    }
    tmp2Result12 = uIProfiler(978);
  },
  processEvent(contexts) {
    return _mod978.attachProfiledThreadToEvent(contexts);
  }
}));