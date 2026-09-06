// === Module 6917: ? ===

// Module 6917
import Cancellable from "Cancellable" /* 6918 */;
import asyncGeneratorStep from "module_6900" /* 6900 */;
import _slicedToArray from "module_6857" /* 6857 */;

require = fn;
function getFormattedString(js) {
  js = js.js;
  let averageFPS;
  if (js != null) {
    averageFPS = js.averageFPS;
  }
  const js2 = js.js;
  let minFPS;
  if (js2 != null) {
    minFPS = js2.minFPS;
  }
  const js3 = js.js;
  let maxFPS;
  if (js3 != null) {
    maxFPS = js3.maxFPS;
  }
  let str = "";
  const combined = "Results:\n\nJS FPS: Avg: " + averageFPS + " | Min: " + minFPS + " | Max: " + maxFPS + "\n\n";
  if (js.suggestions.length > 0) {
    const suggestions = js.suggestions;
    const mapped = suggestions.map((item, index) => "" + index + 1 + ". " + item);
    const _HermesInternal = HermesInternal;
    str = "Suggestions:\n\n" + mapped.join("\n");
  }
  return combined + str;
}
function runScrollBenchmark(arg0, arg1, arg2) {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _runScrollBenchmark(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = ref;
          closure_131_1 = closure_1;
          closure_131_2 = closure_2;
          let horizontal;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          closure_131_6 = undefined;
          if (ref.current) {
            horizontal = tmp31.current.props.horizontal;
            let current = tmp31.current;
            if (current) {
              const size = current.getWindowSize();
              const size2 = current.getChildContainerDimensions();
              const diff = size2.width - size.width;
              closure_131_4 = diff;
              const diff1 = size2.height - size.height;
              closure_131_5 = diff1;
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
              closure_131_6 = scrollNow;
              const obj5 = Cancellable;
              c5 = 1;
              c6 = 1;
              let obj1 = { value: obj5.autoScroll(scrollNow, 0, 0, diff, diff1, tmp33, tmp32), done: false };
              return obj1;
            }
          }
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          obj1 = closure_132_0(closure_132_1[3]);
          c5 = 2;
          c6 = 1;
          const obj3 = { value: obj1.autoScroll(closure_131_6, closure_131_4, closure_131_5, 0, 0, closure_131_2, closure_131_1), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        obj = { value, done: true };
        return obj;
      }
      c6 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp26) {
      c6 = tmp;
      throw tmp26;
    }
  }
};
const noop = fn(19);
({ useEffect: closure_4, useState: hasOwnProperty, useCallback: metroRequire, useRef: closure_7 } = noop);

export const useBenchmark = function useBenchmark(arg0, arg1) {
  closure_1 = arg1;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let isBenchmarkRunning;
  closure_5 = undefined;
  let startBenchmark;
  let tmp = isBenchmarkRunning(closure_5(false), 2);
  isBenchmarkRunning = tmp[0];
  closure_4 = tmp[1];
  closure_5 = closure_7(null);
  const items = [arg1, arg0, isBenchmarkRunning, , ];
  ({ repeatCount: arr[3], speedMultiplier: arr[4] } = obj);
  startBenchmark = startBenchmark(() => {
    if (!isBenchmarkRunning) {
      const cancellable = new ref(closure_1[3]).Cancellable();
      ref = cancellable;
      closure_5.current = cancellable;
      closure_1 = [];
      if (ref.current) {
        const data = tmp8.current.props.data;
        let length;
        if (data != null) {
          length = data.length;
        }
        if (Number(length) <= 0) {
          const _Error = Error;
          const error = new Error(tmp(tmp2[4]).ErrorMessages.dataEmptyCannotRunBenchmark);
          throw error;
        }
      }
      closure_4(true);
      ref = obj(function*(arg0, value) {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            obj = { value, done: true };
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
                closure_128_3 = undefined;
                const jSFPSMonitor = new tmp2(tmp5[5]).JSFPSMonitor();
                closure_128_0 = jSFPSMonitor;
                jSFPSMonitor.startTracking();
                closure_128_1 = 0;
                let num8 = closure_2_2.repeatCount;
                if (!num8) {
                  num8 = 1;
                }
                if (tmp54 >= num8) {
                  closure_128_2 = closure_128_0.stopAndGetData();
                  if (closure_128_2.averageFPS < 35) {
                    tmp5.push("Your average JS FPS is low. This can indicate that your components are doing too much work. Try to optimize your components and reduce re-renders if any");
                  }
                  (function computeSuggestions(current, arr) {
                    current = current.current;
                    if (current) {
                      current = current.current.props.data.length < 200;
                    }
                    if (current) {
                      arr.push("Data count is low. Try to increase it to a large number (e.g 200) using the 'useDataMultiplier' hook.");
                    }
                  })(tmp2, tmp5);
                  closure_128_3 = (function generateResult(js, suggestions, isCancelled) {
                    return { js, suggestions, interrupted: isCancelled.isCancelled() };
                  })(closure_128_2, tmp5, tmp2);
                  if (!tmp2.isCancelled()) {
                    closure_128_3.formattedString = getFormattedString(closure_128_3);
                  }
                  tmp5(closure_128_3);
                  closure_2_4(false);
                  c3 = 3;
                  return { value: "HermesInternal", done: null };
                }
                tmp54 = closure_128_1;
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
            let num11 = closure_2_2.speedMultiplier;
            if (!num11) {
              num11 = 1;
            }
            c2 = 1;
            c3 = 1;
            const obj1 = { value: runScrollBenchmark(tmp2, tmp2, num11), done: false };
            return obj1;
          } catch (tmp43) {
            c3 = tmp;
            throw tmp43;
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
      tmp2 = closure_1;
    }
  }, items);
  closure_4(() => {
    if (!obj.startManually) {
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
export { getFormattedString };