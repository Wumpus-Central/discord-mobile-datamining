// _runtime/00961_browserProfilingIntegration.js
import _mod963 from "metro/00963__.js";
import registerSpanErrorInstrumentation from "metro/00681__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const browserProfilingIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "BrowserProfiling",
  setup(getOptions) {
    const options = getOptions.getOptions();
    uIProfiler = new uIProfiler(962).UIProfiler();
    const obj2 = uIProfiler(963);
    if (!tmp4) {
      options.profileLifecycle = "manual";
    }
    tmp4 = uIProfiler(963).hasLegacyProfiling(options) || options.profileLifecycle;
    if (tmp2Result.hasLegacyProfiling(options)) {
      if (!options.profilesSampleRate) {
        if (tmp2(934).DEBUG_BUILD) {
          let debug = tmp2(681).debug;
          debug.log("[Profiling] Profiling disabled, no profiling options found.");
        }
      }
    }
    tmp2Result = uIProfiler(963);
    let activeSpan = uIProfiler(681).getActiveSpan();
    let rootSpan = activeSpan;
    if (activeSpan) {
      rootSpan = tmp2(681).getRootSpan(activeSpan);
      const tmp2Result10 = tmp2(681);
    }
    const tmp2Result9 = uIProfiler(681);
    const tmp2Result11 = uIProfiler(963);
    if (tmp8) {
      let debug2 = tmp2(681).debug;
      debug2.warn(
        "[Profiling] Both legacy profiling (`profilesSampleRate`) and UI profiling settings are defined. `profileSessionSampleRate` has no effect when legacy profiling is enabled.",
      );
    }
    tmp8 =
      uIProfiler(963).hasLegacyProfiling(options) &&
      undefined !== options.profileSessionSampleRate &&
      uIProfiler(934).DEBUG_BUILD;
    if (tmp2Result12.hasLegacyProfiling(options)) {
      let result = rootSpan;
      if (rootSpan) {
        result = tmp2(963).isAutomatedPageLoadSpan(rootSpan);
        const tmp2Result13 = tmp2(963);
      }
      if (result) {
        result = tmp2(963).shouldProfileSpanLegacy(rootSpan);
        const tmp2Result14 = tmp2(963);
      }
      if (result) {
        tmp2(964).startProfileForSpan(rootSpan);
        const tmp2Result15 = tmp2(964);
      }
      getOptions.on("spanStart", (rootSpan) => {
        let result = rootSpan === uIProfiler(681).getRootSpan(rootSpan);
        if (result) {
          result = uIProfiler(963).shouldProfileSpanLegacy(rootSpan);
          const tmpResult = uIProfiler(963);
        }
        if (result) {
          uIProfiler(964).startProfileForSpan(rootSpan);
          const tmpResult2 = uIProfiler(964);
        }
        const obj = uIProfiler(681);
      });
      getOptions.on("beforeEnvelope", (arg0) => {
        if (obj.getActiveProfilesCount()) {
          const result = uIProfiler(963).findProfiledTransactionsFromEnvelope(arg0);
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
                  let obj3 = uIProfiler(963);
                  let result1 = obj3.takeProfileFromGlobalCache(tmp20);
                  if (result1) {
                    let tmp39Result = uIProfiler(963);
                    let profilingEvent = tmp39Result.createProfilingEvent(tmp20, tmp22, tmp44, tmp16);
                    if (profilingEvent) {
                      let arr = items.push(tmp57);
                    }
                  } else if (uIProfiler(934).DEBUG_BUILD) {
                    let debug3 = uIProfiler(681).debug;
                    let _HermesInternal = HermesInternal;
                    let logResult = debug3.log("[Profiling] Could not retrieve profile for span: " + tmp20);
                  }
                } else if (uIProfiler(934).DEBUG_BUILD) {
                  let debug2 = uIProfiler(681).debug;
                  let logResult1 = debug2.log("[Profiling] cannot find profile for a span without a profile context");
                }
              } else if (uIProfiler(934).DEBUG_BUILD) {
                let debug = uIProfiler(681).debug;
                let logResult2 = debug.log("[Profiling] cannot find profile for a span without a profile context");
              }
              continue;
            }
            const result2 = uIProfiler(963).addProfilesToEnvelope(arg0, items);
            const obj5 = uIProfiler(963);
          }
          const tmp4Result = uIProfiler(963);
        }
        obj = uIProfiler(963);
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
          const WINDOW = tmp2(890).WINDOW;
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
        } else if (tmp2(934).DEBUG_BUILD) {
          let debug3 = tmp2(681).debug;
          debug3.warn(
            "[Profiling] `profileLifecycle` is 'trace' but tracing is disabled. Set a `tracesSampleRate` or `tracesSampler` to enable span tracing.",
          );
        }
        tmp2Result16 = tmp2(681);
      }
    }
    tmp2Result12 = uIProfiler(963);
  },
  processEvent(contexts) {
    return _mod963.attachProfiledThreadToEvent(contexts);
  },
}));
