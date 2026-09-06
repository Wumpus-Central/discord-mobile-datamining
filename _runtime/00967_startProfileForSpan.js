// === Module 967: startProfileForSpan ===

// Module 967 (startProfileForSpan)
import _mod937 from "module_937" /* 937 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const startProfileForSpan = function startProfileForSpan(rootSpan) {
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
  closure_7 = async function _onProfileHandler(arg0, value) {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          if (rootSpan) {
            obj = dependencyMap;
            if (dependencyMap) {
              if (React3) {
                if (v3(937).DEBUG_BUILD) {
                  let debug = tmp5(682).debug;
                  debug.log("[Profiling] profile for:", tmp5(682).spanToJSON(tmp13).description, "already exists, returning early");
                  const tmp5Result = tmp5(682);
                }
              } else {
                const stopResult = obj.stop();
                v3 = 3;
                const obj1 = {
                  value: obj.stop().then((result) => {
                                if (c4) {
                                  const WINDOW = c0(893).WINDOW;
                                  WINDOW.clearTimeout(c4);
                                  c4 = undefined;
                                }
                                if (c0(937).DEBUG_BUILD) {
                                  const debug = c0(682).debug;
                                  const _HermesInternal = HermesInternal;
                                  debug.log("[Profiling] stopped profiling of span: " + c0(682).spanToJSON(v3).description);
                                  const obj = c0(682);
                                }
                                if (result) {
                                  closure_3 = result;
                                  result = c0(966).addProfileToGlobalCache(closure_1_2, result);
                                  const obj3 = c0(966);
                                } else if (c0(937).DEBUG_BUILD) {
                                  const debug2 = c0(682).debug;
                                  const _HermesInternal2 = HermesInternal;
                                  debug2.log("[Profiling] profiler returned null profile for: " + c0(682).spanToJSON(v3).description, "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started");
                                  const obj2 = c0(682);
                                }
                              }).catch((error) => {
                                if (v3(dependencyMap[3]).DEBUG_BUILD) {
                                  const debug = v3(dependencyMap[2]).debug;
                                  debug.log("[Profiling] error while stopping profiler:", error);
                                }
                              }),
                  done: true
                };
                return obj1;
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
  let obj = require("module_966");
  if (obj.isAutomatedPageLoadSpan(rootSpan)) {
    let tmpResult = tmp(682);
    let result = 1000 * tmpResult.timestampInSeconds();
  }
  tmpResult = tmp(966);
  const startJSSelfProfileResult = tmpResult.startJSSelfProfile();
  dependencyMap = startJSSelfProfileResult;
  if (startJSSelfProfileResult) {
    if (tmp(937).DEBUG_BUILD) {
      let debug = tmp(682).debug;
      let _HermesInternal = HermesInternal;
      debug.log("[Profiling] started profiling span: " + tmp(682).spanToJSON(rootSpan).description);
      const tmpResult1 = tmp(682);
    }
    const uuid4Result = tmp(682).uuid4();
    asyncGeneratorStep = uuid4Result;
    c3 = null;
    const tmpResult2 = tmp(682);
    const currentScope = tmp(682).getCurrentScope();
    obj = { profile_id: uuid4Result, start_timestamp: result };
    currentScope.setContext("profile", obj);
    let WINDOW = tmp(893).WINDOW;
    const timeout = WINDOW.setTimeout(() => {
      if (_mod937.DEBUG_BUILD) {
        const debug = tmp(682).debug;
        debug.log("[Profiling] max profile duration elapsed, stopping profiling for:", tmp(682).spanToJSON(closure_0).description);
        const tmpResult = tmp(682);
      }
      onProfileHandler();
    }, tmp(966).MAX_PROFILE_DURATION_MS);
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
    const tmpResult3 = tmp(682);
  }
};