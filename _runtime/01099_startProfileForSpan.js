// === Module 1099: startProfileForSpan ===

// Module 1099 (startProfileForSpan)
import closure_2 from "asyncGeneratorStep" /* 5 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const startProfileForSpan = function startProfileForSpan(rootSpan) {
  const _require = rootSpan;
  function onProfileHandler() {
    const self = this;
    const apply = _onProfileHandler.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function _onProfileHandler() {
    const self = this;
    const tmp = uuid4Result(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            if (v0) {
              obj = closure_1_1;
              if (closure_1_1) {
                if (closure_1_3) {
                  if (v0(closure_1_1[3]).DEBUG_BUILD) {
                    let debug = tmp5(tmp6[2]).debug;
                    debug.log("[Profiling] profile for:", tmp5(tmp6[2]).spanToJSON(tmp14).description, "already exists, returning early");
                    const tmp5Result = tmp5(tmp6[2]);
                  }
                } else {
                  const stopResult = obj.stop();
                  v0 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = obj.stop().then((arg0) => {
                    if (c4) {
                      const WINDOW = v3(closure_1_1[4]).WINDOW;
                      WINDOW.clearTimeout(c4);
                      c4 = undefined;
                    }
                    if (v3(closure_1_1[3]).DEBUG_BUILD) {
                      const debug = v3(closure_1_1[2]).debug;
                      const _HermesInternal = HermesInternal;
                      debug.log("[Profiling] stopped profiling of span: " + v3(closure_1_1[2]).spanToJSON(v3).description);
                      const obj = v3(closure_1_1[2]);
                    }
                    if (arg0) {
                      closure_3 = arg0;
                      const result = v3(closure_1_1[1]).addProfileToGlobalCache(closure_2, arg0);
                      const obj3 = v3(closure_1_1[1]);
                    } else if (v3(closure_1_1[3]).DEBUG_BUILD) {
                      const debug2 = v3(closure_1_1[2]).debug;
                      const _HermesInternal2 = HermesInternal;
                      debug2.log("[Profiling] profiler returned null profile for: " + v3(closure_1_1[2]).spanToJSON(v3).description, "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started");
                      const obj2 = v3(closure_1_1[2]);
                    }
                  }).catch((arg0) => {
                    if (v3(table[3]).DEBUG_BUILD) {
                      const debug = v3(table[2]).debug;
                      debug.log("[Profiling] error while stopping profiler:", arg0);
                    }
                  });
                  return obj1;
                }
              }
            }
            v0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp8) {
          v0 = tmp;
          throw tmp8;
        }
      }
    });
    closure_7 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let obj = _require(1098);
  if (obj.isAutomatedPageLoadSpan(rootSpan)) {
    let tmpResult = tmp(814);
    let result = 1000 * tmpResult.timestampInSeconds();
  }
  tmpResult = tmp(1098);
  const startJSSelfProfileResult = tmpResult.startJSSelfProfile();
  dependencyMap = startJSSelfProfileResult;
  if (startJSSelfProfileResult) {
    if (tmp(1069).DEBUG_BUILD) {
      let debug = tmp(814).debug;
      let _HermesInternal = HermesInternal;
      debug.log("[Profiling] started profiling span: " + tmp(814).spanToJSON(rootSpan).description);
      const tmpResult1 = tmp(814);
    }
    const uuid4Result = tmp(814).uuid4();
    closure_2 = uuid4Result;
    c3 = null;
    const tmpResult2 = tmp(814);
    const currentScope = tmp(814).getCurrentScope();
    obj = { profile_id: null, start_timestamp: null };
    obj[0] = uuid4Result;
    obj[1] = result;
    currentScope.setContext("profile", obj);
    let WINDOW = tmp(1025).WINDOW;
    const timeout = WINDOW.setTimeout(() => {
      if (callback(startJSSelfProfileResult[3]).DEBUG_BUILD) {
        const debug = tmp(tmp2[2]).debug;
        debug.log("[Profiling] max profile duration elapsed, stopping profiling for:", tmp(tmp2[2]).spanToJSON(callback).description);
        const tmpResult = tmp(tmp2[2]);
      }
      onProfileHandler();
    }, tmp(1098).MAX_PROFILE_DURATION_MS);
    const end = rootSpan.end;
    closure_5 = end.bind(rootSpan);
    rootSpan.end = function profilingWrappedSpanEnd() {
      if (closure_0) {
        onProfileHandler().then(() => {
          callback();
        }, () => {
          callback();
        });
        let tmp3 = tmp;
        const promise = onProfileHandler();
      } else {
        tmp3 = callback2();
      }
      return tmp3;
    };
    const tmpResult3 = tmp(814);
  }
};