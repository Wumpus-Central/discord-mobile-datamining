// === Module 6922: runScrollBenchmark ===

// Module 6922 (runScrollBenchmark)
import Cancellable from "Cancellable" /* 6918 */;
import asyncGeneratorStep from "module_6900" /* 6900 */;
import _slicedToArray from "module_6857" /* 6857 */;

require = fn;
function runScrollBenchmark(arg0, arg1, arg2, arg3) {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_9 = async function _runScrollBenchmark(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = tmp5;
          closure_4 = tmp2;
          closure_132_0 = ref;
          let num12 = closure_1;
          closure_132_1 = closure_2;
          closure_132_2 = closure_3;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          closure_132_5 = undefined;
          closure_132_6 = undefined;
          if (ref.current) {
            const props = tmp33.current.props;
            let horizontal;
            if (props != null) {
              horizontal = props.horizontal;
            }
            const BooleanResult = Boolean(horizontal);
            closure_132_3 = BooleanResult;
            let num11 = 0;
            if (BooleanResult) {
              num11 = num12;
            }
            closure_132_4 = num11;
            if (BooleanResult) {
              num12 = 0;
            }
            closure_132_5 = num12;
            function scrollNow(arg0, arg1) {
              const current = ref.current;
              if (current != null) {
                let tmp = arg1;
                if (closure_1_3) {
                  tmp = arg0;
                }
                const obj = { offset: tmp, animated: false };
                current.scrollToOffset(obj);
              }
            }
            closure_132_6 = scrollNow;
            const obj5 = Cancellable;
            c6 = 1;
            c7 = 1;
            let obj1 = { value: obj5.autoScroll(scrollNow, 0, 0, num11, num12, closure_3, closure_2), done: false };
            return obj1;
          }
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          obj1 = closure_133_0(closure_133_1[3]);
          c6 = 2;
          c7 = 1;
          const obj3 = { value: obj1.autoScroll(closure_132_6, closure_132_4, closure_132_5, 0, 0, closure_132_2, closure_132_1), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        obj = { value, done: true };
        return obj;
      }
      c7 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp28) {
      c7 = tmp;
      throw tmp28;
    }
  }
};
const noop = fn(19);
({ useCallback: closure_4, useEffect: hasOwnProperty, useRef: metroRequire, useState: closure_7 } = noop);

export const useFlatListBenchmark = function useFlatListBenchmark(arg0, arg1, arg2) {
  dependencyMap = arg1;
  closure_2 = arg2;
  let tmp = isBenchmarkRunning(closure_7(false), 2);
  isBenchmarkRunning = tmp[0];
  closure_4 = tmp[1];
  closure_5 = startBenchmark(null);
  const items = [arg1, arg0, isBenchmarkRunning, , , ];
  ({ repeatCount: arr[3], speedMultiplier: arr[4], targetOffset: arr[5] } = arg2);
  startBenchmark = closure_4(() => {
    if (!isBenchmarkRunning) {
      const cancellable = new ref(dependencyMap[3]).Cancellable();
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
            const error = new Error(tmp(dependencyMap[4]).ErrorMessages.dataEmptyCannotRunBenchmark);
            throw error;
          }
        }
      }
      closure_4(true);
      ref = closure_2(function*() {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
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
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_128_0 = undefined;
                closure_128_1 = undefined;
                closure_128_2 = undefined;
                const jSFPSMonitor = new tmp2(tmp5[5]).JSFPSMonitor();
                closure_128_0 = jSFPSMonitor;
                jSFPSMonitor.startTracking();
                closure_128_1 = 0;
                let num8 = closure_2_2.repeatCount;
                if (!num8) {
                  num8 = 1;
                }
                if (tmp50 >= num8) {
                  const obj1 = { js: closure_128_0.stopAndGetData(), suggestions: [], interrupted: tmp2.isCancelled() };
                  closure_128_2 = obj1;
                  if (!tmp2.isCancelled()) {
                    let obj2 = tmp2(tmp5[6]);
                    closure_128_2.formattedString = obj2.getFormattedString(closure_128_2);
                  }
                  dependencyMap(closure_128_2);
                  closure_2_4(false);
                  c3 = 3;
                  return { value: "HermesInternal", done: null };
                }
                tmp50 = closure_128_1;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_1 = closure_128_1 + 1;
              let num4 = closure_2_2.repeatCount;
              if (!num4) {
                num4 = 1;
              }
            }
            const targetOffset = closure_2_2.targetOffset;
            let num10 = closure_2_2.speedMultiplier;
            if (!num10) {
              num10 = 1;
            }
            c2 = 1;
            c3 = 1;
            obj2 = { value: runScrollBenchmark(tmp2, targetOffset, tmp2, num10), done: false };
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
    }
  }, items);
  closure_5(() => {
    if (!closure_2.startManually) {
      let num = tmp.startDelayInMs;
      if (!num) {
        num = 3000;
      }
      const timeout = setTimeout(() => {
        startBenchmark();
      }, num);
      return () => {
        clearTimeout(closure_0);
        if (ref.current) {
          const current = ref.current;
          current.cancel();
        }
      };
    }
  }, []);
  return { startBenchmark, isBenchmarkRunning };
};