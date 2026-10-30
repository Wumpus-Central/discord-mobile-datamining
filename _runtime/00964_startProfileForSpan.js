// === Module 964: startProfileForSpan ===

// Module 964 (startProfileForSpan)
import _mod681 from "module_681" /* 681 */;
import _mod934 from "module_934" /* 934 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function startProfileForSpan(rootSpan) {
  _require = rootSpan;
  function onProfileHandler() {
    const self = this;
    const apply = closure_7.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_7 = async function _onProfileHandler() {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          if (rootSpan) {
            if (dependencyMap) {
              if (React3) {
                if (v3(934).DEBUG_BUILD) {
                  let debug = tmp5(681).debug;
                  debug.log("[Profiling] profile for:", tmp5(681).spanToJSON(tmp13).description, "already exists, returning early");
                  const tmp5Result = tmp5(681);
                }
              } else {
                const stopResult = dependencyMap.stop();
                v3 = 3;
                const obj4 = {
                  value: dependencyMap.stop().then((result) => {
                                if (c4) {
                                  const WINDOW = c0(890).WINDOW;
                                  WINDOW.clearTimeout(c4);
                                  c4 = undefined;
                                }
                                if (c0(934).DEBUG_BUILD) {
                                  const debug = c0(681).debug;
                                  const _HermesInternal = HermesInternal;
                                  debug.log("[Profiling] stopped profiling of span: " + c0(681).spanToJSON(v3).description);
                                  const obj = c0(681);
                                }
                                if (result) {
                                  closure_3 = result;
                                  result = c0(963).addProfileToGlobalCache(closure_1_2, result);
                                  const obj3 = c0(963);
                                } else if (c0(934).DEBUG_BUILD) {
                                  const debug2 = c0(681).debug;
                                  const _HermesInternal2 = HermesInternal;
                                  debug2.log("[Profiling] profiler returned null profile for: " + c0(681).spanToJSON(v3).description, "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started");
                                  const obj2 = c0(681);
                                }
                              }).catch((error) => {
                                if (v3(dependencyMap[3]).DEBUG_BUILD) {
                                  const debug = v3(dependencyMap[2]).debug;
                                  debug.log("[Profiling] error while stopping profiler:", error);
                                }
                              }),
                  done: true
                };
                return obj4;
              }
            }
          }
          v3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp8) {
        v3 = tmp;
        throw tmp8;
      }
    }
  };
  if (obj.isAutomatedPageLoadSpan(rootSpan)) {
    let result = 1000 * tmp(681).timestampInSeconds();
    let tmpResult = tmp(681);
  }
  obj = require("module_963");
  const startJSSelfProfileResult = require("module_963").startJSSelfProfile();
  dependencyMap = startJSSelfProfileResult;
  if (startJSSelfProfileResult) {
    if (tmp(934).DEBUG_BUILD) {
      let debug = tmp(681).debug;
      let _HermesInternal = HermesInternal;
      debug.log("[Profiling] started profiling span: " + tmp(681).spanToJSON(rootSpan).description);
      const tmpResult6 = tmp(681);
    }
    const uuid4Result = tmp(681).uuid4();
    asyncGeneratorStep = uuid4Result;
    c3 = null;
    const tmpResult7 = tmp(681);
    const currentScope = tmp(681).getCurrentScope();
    let obj2 = { profile_id: uuid4Result, start_timestamp: result };
    currentScope.setContext("profile", obj2);
    let WINDOW = tmp(890).WINDOW;
    const timeout = WINDOW.setTimeout(() => {
      if (_mod934.DEBUG_BUILD) {
        const debug = _mod681.debug;
        debug.log("[Profiling] max profile duration elapsed, stopping profiling for:", _mod681.spanToJSON(closure_0).description);
        const tmpResult = _mod681;
      }
      onProfileHandler();
    }, tmp(963).MAX_PROFILE_DURATION_MS);
    const end = rootSpan.end;
    closure_5 = end.bind(rootSpan);
    rootSpan.end = function profilingWrappedSpanEnd() {
      if (closure_0) {
        onProfileHandler().then(() => {
          closure_1_5();
        }, () => {
          closure_1_5();
        });
        let tmp3 = tmp;
        const promise = onProfileHandler();
      } else {
        tmp3 = closure_5();
      }
      return tmp3;
    };
    const tmpResult8 = tmp(681);
  }
}