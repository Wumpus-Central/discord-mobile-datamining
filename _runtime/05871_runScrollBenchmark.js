// _runtime/05871_runScrollBenchmark.js
import closure_2 from "05849_asyncGeneratorStep.js";
import closure_3 from "metro/05806__slicedToArray.js";
import noop from "00019_noop.js";

const require = arg1;
function runScrollBenchmark(arg0, arg1, arg2, arg3) {
  const self = this;
  const apply = _runScrollBenchmark.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _runScrollBenchmark() {
  const self = this;
  let tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c6 = 0;
    c7 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let num12 = tmp5;
              let num11 = tmp2;
              num12 = dependencyMap;
              dependencyMap = closure_2;
              closure_2 = c3;
              c3 = undefined;
              num11 = undefined;
              num12 = undefined;
              c6 = undefined;
              if (ref.current) {
                const props = tmp34.current.props;
                let horizontal;
                if (props != null) {
                  horizontal = props.horizontal;
                }
                const BooleanResult = Boolean(horizontal);
                c3 = BooleanResult;
                num11 = 0;
                if (BooleanResult) {
                  num11 = num12;
                }
                if (BooleanResult) {
                  num12 = 0;
                }
                function scrollNow(arg0, arg1) {
                  const current = ref.current;
                  if (current != null) {
                    let tmp = arg1;
                    if (c3) {
                      tmp = arg0;
                    }
                    const obj = { offset: null, animated: false };
                    obj[0] = tmp;
                    current.scrollToOffset(obj);
                  }
                }
                c6 = scrollNow;
                const obj5 = ref(5867);
                c6 = 1;
                c7 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj5.autoScroll(scrollNow, 0, 0, num11, num12, tmp36, tmp35);
                return obj1;
              }
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              obj1 = ref(5867);
              c6 = 2;
              c7 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = obj1.autoScroll(c6, num11, num12, 0, 0, closure_2, dependencyMap);
              return obj3;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c7 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp28) {
          c7 = tmp;
          throw tmp28;
        }
      }
    })();
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ useCallback: c4, useEffect: c5, useRef: closure_6, useState: error } = noop);

export const useFlatListBenchmark = function useFlatListBenchmark(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  let tmp = isBenchmarkRunning(callback4(false), 2);
  isBenchmarkRunning = tmp[0];
  const callback2 = tmp[1];
  const callback3 = startBenchmark(null);
  const items = [arg1, arg0, isBenchmarkRunning, , , ];
  ({ repeatCount: arr[3], speedMultiplier: arr[4], targetOffset: arr[5] } = arg2);
  startBenchmark = callback2(() => {
    if (!isBenchmarkRunning) {
      const cancellable = new ref(table[3]).Cancellable();
      ref = cancellable;
      closure_5.current = cancellable;
      if (ref.current) {
        if (tmp8.current.props) {
          const data = tmp8.current.props.data;
          let length;
          if (data != null) {
            length = data.length;
          }
          if (Number(length) <= 0) {
            const _Error = Error;
            error = new Error(tmp(tmp2[4]).ErrorMessages.dataEmptyCannotRunBenchmark);
            throw error;
          }
        }
      }
      callback(true);
      ref = undefined;
      ref = lib(function*() {
        if (c3 === 2) {
          c3 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
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
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                dependencyMap = tmp5;
                let jSFPSMonitor = tmp2;
                jSFPSMonitor = undefined;
                dependencyMap = undefined;
                c2 = undefined;
                jSFPSMonitor = new callback(5868).JSFPSMonitor();
                jSFPSMonitor.startTracking();
                dependencyMap = 0;
                let num8 = closure_2_2.repeatCount;
                if (!num8) {
                  num8 = 1;
                }
                if (tmp51 >= num8) {
                  obj1 = { js: null, suggestions: null, interrupted: null };
                  obj1[0] = jSFPSMonitor.stopAndGetData();
                  obj1[1] = [];
                  obj1[2] = closure_1_0.isCancelled();
                  c2 = obj1;
                  if (!closure_1_0.isCancelled()) {
                    let obj2 = callback(5866);
                    c2.formattedString = obj2.getFormattedString(c2);
                  }
                  closure_2_1(c2);
                  closure_2_4(false);
                  c3 = 3;
                  return { value: "HermesInternal", done: null };
                }
                tmp51 = dependencyMap;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = dependencyMap + 1;
              let num4 = closure_2_2.repeatCount;
              if (!num4) {
                num4 = 1;
              }
              const tmp9 = dependencyMap;
            }
            const targetOffset = closure_2_2.targetOffset;
            let num10 = closure_2_2.speedMultiplier;
            if (!num10) {
              num10 = 1;
            }
            c2 = 1;
            c3 = 1;
            obj2 = { value: null, done: false };
            obj2[0] = closure_3_8(callback, targetOffset, closure_1_0, num10);
            return obj2;
          } catch (tmp39) {
            c3 = tmp;
            throw tmp39;
          }
        }
      });
      (function runBenchmark() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
      tmp = ref;
      tmp2 = table;
    }
  }, items);
  callback3(() => {
    if (!lib.startManually) {
      let num = tmp.startDelayInMs;
      if (!num) {
        num = 3000;
      }
      const timeout = setTimeout(() => {
        callback();
      }, num);
      return () => {
        clearTimeout(closure_0);
        if (closure_1_5.current) {
          const current = closure_1_5.current;
          current.cancel();
        }
      };
    }
  }, []);
  return { startBenchmark, isBenchmarkRunning };
};