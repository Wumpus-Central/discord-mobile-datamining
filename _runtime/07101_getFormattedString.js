// _runtime/07101_getFormattedString.js
import closure_2 from "asyncGeneratorStep" /* 7084 */;
import closure_3 from "_slicedToArray" /* 7041 */;
import noop from "noop" /* 19 */;

const require = arg1;
function getFormattedString(c2) {
  const js = c2.js;
  let averageFPS;
  if (js != null) {
    averageFPS = js.averageFPS;
  }
  const js2 = c2.js;
  let minFPS;
  if (js2 != null) {
    minFPS = js2.minFPS;
  }
  const js3 = c2.js;
  let maxFPS;
  if (js3 != null) {
    maxFPS = js3.maxFPS;
  }
  let str = "";
  const combined = "Results:\n\nJS FPS: Avg: " + averageFPS + " | Min: " + minFPS + " | Max: " + maxFPS + "\n\n";
  if (c2.suggestions.length > 0) {
    const suggestions = c2.suggestions;
    const mapped = suggestions.map((arg0, arg1) => "" + arg1 + 1 + ". " + arg0);
    const _HermesInternal = HermesInternal;
    str = "Suggestions:\n\n" + mapped.join("\n");
  }
  return combined + str;
}
function runScrollBenchmark(arg0, arg1, arg2) {
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
  let tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c4 = tmp5;
              let horizontal = tmp2;
              horizontal = undefined;
              c4 = undefined;
              c5 = undefined;
              c6 = undefined;
              if (ref.current) {
                horizontal = tmp32.current.props.horizontal;
                let current = tmp32.current;
                if (current) {
                  const size = current.getWindowSize();
                  const size2 = current.getChildContainerDimensions();
                  const diff = size2.width - size.width;
                  c4 = diff;
                  const diff1 = size2.height - size.height;
                  c5 = diff1;
                  function scrollNow(arg0, arg1) {
                    const current = ref.current;
                    if (current != null) {
                      let tmp = arg1;
                      if (horizontal) {
                        tmp = arg0;
                      }
                      const obj = { offset: null, animated: false };
                      obj[0] = tmp;
                      current.scrollToOffset(obj);
                    }
                  }
                  c6 = scrollNow;
                  const obj5 = ref(7102);
                  c5 = 1;
                  c6 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = obj5.autoScroll(scrollNow, 0, 0, diff, diff1, tmp34, tmp33);
                  return obj1;
                }
              }
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              obj1 = ref(7102);
              c5 = 2;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = obj1.autoScroll(c6, c4, c5, 0, 0, closure_2, dependencyMap);
              return obj3;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c6 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp26) {
          c6 = tmp;
          throw tmp26;
        }
      }
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ useEffect: c4, useState: c5, useCallback: closure_6, useRef: error } = noop);

export const useBenchmark = function useBenchmark(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let callback2;
  let callback3;
  let callback4;
  let startBenchmark;
  let tmp = callback2(callback4(false), 2);
  const isBenchmarkRunning = tmp[0];
  callback2 = isBenchmarkRunning;
  callback3 = tmp[1];
  callback4 = callback5(null);
  const items = [arg1, arg0, isBenchmarkRunning, , ];
  ({ repeatCount: arr[3], speedMultiplier: arr[4] } = obj);
  startBenchmark = startBenchmark(() => {
    if (!closure_3) {
      const cancellable = new ref(table[3]).Cancellable();
      ref = cancellable;
      closure_5.current = cancellable;
      table = [];
      if (ref.current) {
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
      callback(true);
      ref = undefined;
      ref = obj(function*() {
        if (c3 === 2) {
          c3 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c3 = 2;
            if (0 === averageFPS) {
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
                averageFPS = undefined;
                c3 = undefined;
                jSFPSMonitor = new callback(7103).JSFPSMonitor();
                jSFPSMonitor.startTracking();
                dependencyMap = 0;
                let num8 = closure_2_2.repeatCount;
                if (!num8) {
                  num8 = 1;
                }
                if (tmp55 >= num8) {
                  averageFPS = jSFPSMonitor.stopAndGetData();
                  if (averageFPS.averageFPS < 35) {
                    closure_1_1.push("Your average JS FPS is low. This can indicate that your components are doing too much work. Try to optimize your components and reduce re-renders if any");
                  }
                  (function computeSuggestions(closure_0, closure_1_1) {
                    let current = closure_0.current;
                    if (current) {
                      current = closure_0.current.props.data.length < 200;
                    }
                    if (current) {
                      closure_1_1.push("Data count is low. Try to increase it to a large number (e.g 200) using the 'useDataMultiplier' hook.");
                    }
                  })(callback, closure_1_1);
                  closure_3 = (function generateResult(js, closure_1_1, closure_1_0) {
                    return { js, suggestions: closure_1_1, interrupted: closure_1_0.isCancelled() };
                  })(obj, closure_1_1, closure_1_0);
                  if (!closure_1_0.isCancelled()) {
                    c3.formattedString = closure_3_8(c3);
                  }
                  dependencyMap(closure_2_3);
                  closure_2_4(false);
                  c3 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                }
                tmp55 = dependencyMap;
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
            let num11 = closure_2_2.speedMultiplier;
            if (!num11) {
              num11 = 1;
            }
            averageFPS = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_3_9(callback, closure_1_0, num11);
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
      tmp2 = table;
    }
  }, items);
  callback3(() => {
    if (!obj.startManually) {
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
export { getFormattedString };