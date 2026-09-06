// _runtime/00964_browserProfilingIntegration.js
import _mod966 from "metro/00966__.js";
import registerSpanErrorInstrumentation from "metro/00682__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const browserProfilingIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "BrowserProfiling",
  setup(getOptions) {
    const options = getOptions.getOptions();
    uIProfiler = new uIProfiler(965).UIProfiler();
    const obj2 = uIProfiler(966);
    if (!tmp4) {
      options.profileLifecycle = "manual";
    }
    let tmp2Result = tmp2(966);
    if (tmp2Result.hasLegacyProfiling(options)) {
      if (!options.profilesSampleRate) {
        if (tmp2(937).DEBUG_BUILD) {
          let debug = tmp2(682).debug;
          debug.log("[Profiling] Profiling disabled, no profiling options found.");
        }
      }
    }
    tmp2Result = tmp2(682);
    let activeSpan = tmp2Result.getActiveSpan();
    let rootSpan = activeSpan;
    if (activeSpan) {
      rootSpan = tmp2(682).getRootSpan(activeSpan);
      const tmp2Result1 = tmp2(682);
    }
    tmp4 = uIProfiler(966).hasLegacyProfiling(options) || options.profileLifecycle;
    const tmp2Result2 = uIProfiler(966);
    if (tmp8) {
      let debug2 = tmp2(682).debug;
      debug2.warn(
        "[Profiling] Both legacy profiling (`profilesSampleRate`) and UI profiling settings are defined. `profileSessionSampleRate` has no effect when legacy profiling is enabled.",
      );
    }
    tmp8 =
      uIProfiler(966).hasLegacyProfiling(options) &&
      undefined !== options.profileSessionSampleRate &&
      uIProfiler(937).DEBUG_BUILD;
    if (tmp2Result3.hasLegacyProfiling(options)) {
      let result = rootSpan;
      if (rootSpan) {
        result = tmp2(966).isAutomatedPageLoadSpan(rootSpan);
        const tmp2Result4 = tmp2(966);
      }
      if (result) {
        result = tmp2(966).shouldProfileSpanLegacy(rootSpan);
        const tmp2Result5 = tmp2(966);
      }
      if (result) {
        tmp2(967).startProfileForSpan(rootSpan);
        const tmp2Result6 = tmp2(967);
      }
      getOptions.on("spanStart", (rootSpan) => {
        let result = rootSpan === uIProfiler(682).getRootSpan(rootSpan);
        if (result) {
          let tmpResult = tmp(966);
          result = tmpResult.shouldProfileSpanLegacy(rootSpan);
        }
        if (result) {
          tmpResult = tmp(967);
          tmpResult.startProfileForSpan(rootSpan);
        }
      });
      getOptions.on("beforeEnvelope", (arg0) => {
        if (obj.getActiveProfilesCount()) {
          const result = uIProfiler(966).findProfiledTransactionsFromEnvelope(arg0);
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
                  profile = undefined;
                  if (tmp18 != null) {
                    profile = tmp18.profile;
                  }
                  if (profile) {
                    delete tmp2[tmp];
                  }
                  let tmp39 = uIProfiler;
                  let obj3 = uIProfiler(966);
                  let result1 = obj3.takeProfileFromGlobalCache(tmp20);
                  if (result1) {
                    let tmp39Result = tmp39(966);
                    let profilingEvent = tmp39Result.createProfilingEvent(tmp20, tmp22, tmp44, tmp16);
                    if (profilingEvent) {
                      let arr = items.push(tmp57);
                    }
                  } else if (tmp39(937).DEBUG_BUILD) {
                    let debug3 = tmp39(682).debug;
                    let _HermesInternal = HermesInternal;
                    let logResult = debug3.log("[Profiling] Could not retrieve profile for span: " + tmp20);
                  }
                } else {
                  let tmp29 = uIProfiler;
                  if (uIProfiler(937).DEBUG_BUILD) {
                    let debug2 = tmp29(682).debug;
                    let logResult1 = debug2.log("[Profiling] cannot find profile for a span without a profile context");
                  }
                }
              } else {
                let tmp66 = uIProfiler;
                if (uIProfiler(937).DEBUG_BUILD) {
                  let debug = tmp66(682).debug;
                  let logResult2 = debug.log("[Profiling] cannot find profile for a span without a profile context");
                }
              }
              continue;
            }
            const result2 = uIProfiler(966).addProfilesToEnvelope(arg0, items);
            const obj5 = uIProfiler(966);
          }
          const tmp4Result = uIProfiler(966);
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
          const WINDOW = tmp2(893).WINDOW;
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
        } else if (tmp2(937).DEBUG_BUILD) {
          let debug3 = tmp2(682).debug;
          debug3.warn(
            "[Profiling] `profileLifecycle` is 'trace' but tracing is disabled. Set a `tracesSampleRate` or `tracesSampler` to enable span tracing.",
          );
        }
        tmp2Result7 = tmp2(682);
      }
    }
  },
  processEvent(contexts) {
    return _mod966.attachProfiledThreadToEvent(contexts);
  },
}));
