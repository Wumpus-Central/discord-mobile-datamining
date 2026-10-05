// === Module 978: startProfileForSpan ===

// Module 978 (startProfileForSpan)
import _mod693 from "module_693" /* 693 */;
import _mod948 from "module_948" /* 948 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;

const require = globalThis.__r;
let _require, c4, dependencyMap;

let _asyncToGenerator = _asyncToGenerator_mod;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const startProfileForSpan = function startProfileForSpan(rootSpan) {
  let closure_4;
  let result;
  _require = rootSpan;
  function onProfileHandler() {
    return obj(...arguments);
  }
  let obj = function _onProfileHandler() {
    obj = _asyncToGenerator(async () => {
      let nextPromise;
      let v3;
      if (v3 === 2) {
        v3 = 3;
        const str3 = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
              if (startJSSelfProfileResult) {
                if (closure_2_3) {
                  const tmp4 = v3;
                  if (v3(closure_1_1[3]).DEBUG_BUILD) {
                    let debug = tmp4(closure_1_1[2]).debug;
                    let log = debug.log;
                    const str = "already exists, returning early";
                    const str2 = "[Profiling] profile for:";
                    const tmp4Result = tmp4(closure_1_1[2]);
                    const logResult = log("[Profiling] profile for:", tmp4Result.spanToJSON(tmp11).description, "already exists, returning early");
                  }
                } else {
                  const stopResult = startJSSelfProfileResult.stop();
                  v3 = 3;
                  const obj4 = {
                    value: nextPromise.catch((error) => {
                                  if (v3(closure_1_1[3]).DEBUG_BUILD) {
                                    const debug = v3(closure_1_1[2]).debug;
                                    debug.log("[Profiling] error while stopping profiler:", error);
                                  }
                                }),
                    done: true
                  };
                  nextPromise = stopResult.then((result) => {
                    const tmp = c4;
                    if (tmp) {
                      const WINDOW = c0(closure_2_1[4]).WINDOW;
                      WINDOW.clearTimeout(c4);
                      c4 = undefined;
                    }
                    if (c0(closure_2_1[3]).DEBUG_BUILD) {
                      const debug = c0(closure_2_1[2]).debug;
                      const log = debug.log;
                      const _HermesInternal = HermesInternal;
                      obj = c0(closure_2_1[2]);
                      log("[Profiling] stopped profiling of span: " + obj.spanToJSON(v3).description);
                    }
                    const tmp13 = result;
                    if (tmp13) {
                      let closure_1_3 = result;
                      const obj3 = c0(closure_2_1[1]);
                      result = obj3.addProfileToGlobalCache(closure_1_2, result);
                    } else if (c0(closure_2_1[3]).DEBUG_BUILD) {
                      const debug2 = c0(closure_2_1[2]).debug;
                      const log2 = debug2.log;
                      const _HermesInternal2 = HermesInternal;
                      const obj2 = c0(closure_2_1[2]);
                      log2("[Profiling] profiler returned null profile for: " + obj2.spanToJSON(v3).description, "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started");
                    }
                  });
                  return obj4;
                }
              }
            }
            v3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp7) {
          v3 = 3;
          throw tmp7;
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = _require;
  const tmp2 = dependencyMap;
  obj = require("MAX_PROFILE_DURATION_MS");
  if (obj.isAutomatedPageLoadSpan(rootSpan)) {
    let tmpResult = tmp(693);
    result = 1000 * tmpResult.timestampInSeconds();
  }
  const tmpResult5 = tmp(977);
  dependencyMap = tmpResult5.startJSSelfProfile();
  const startJSSelfProfileResult = tmpResult5.startJSSelfProfile();
  if (dependencyMap) {
    if (tmp(948).DEBUG_BUILD) {
      let debug = tmp(693).debug;
      let log = debug.log;
      let _HermesInternal = HermesInternal;
      let str = "[Profiling] started profiling span: ";
      const tmpResult6 = tmp(693);
      let logResult = log("[Profiling] started profiling span: " + tmpResult6.spanToJSON(rootSpan).description);
    }
    const tmpResult7 = tmp(693);
    const uuid4Result = tmpResult7.uuid4();
    _asyncToGenerator = uuid4Result;
    let c3 = null;
    const tmpResult8 = tmp(693);
    const currentScope = tmpResult8.getCurrentScope();
    let obj2 = { profile_id: uuid4Result, start_timestamp: result };
    let str2 = "profile";
    currentScope.setContext("profile", obj2);
    let WINDOW = tmp(904).WINDOW;
    const timeout = WINDOW.setTimeout(() => {
      if (_mod948.DEBUG_BUILD) {
        const debug = _mod693.debug;
        const log = debug.log;
        const tmpResult = _mod693;
        log("[Profiling] max profile duration elapsed, stopping profiling for:", tmpResult.spanToJSON(rootSpan).description);
      }
      onProfileHandler();
    }, tmp(977).MAX_PROFILE_DURATION_MS);
    const end = rootSpan.end;
    let closure_5 = end.bind(rootSpan);
    rootSpan.end = function profilingWrappedSpanEnd() {
      let tmp3;
      if (rootSpan) {
        const promise = onProfileHandler();
        promise.then(() => {
          closure_1_5();
        }, () => {
          closure_1_5();
        });
        tmp3 = tmp;
      } else {
        tmp3 = closure_5();
      }
      return tmp3;
    };
  }
};