// === Module 6409: ? ===

// Module 6409
import autoScroll from "autoScroll" /* 6410 */;
import _asyncToGenerator from "_asyncToGenerator" /* 6392 */;
import _slicedToArray from "_slicedToArray" /* 6349 */;
import react from "react" /* 19 */;

let c2, c3, size;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
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
  return obj(...arguments);
}
let obj = function _runScrollBenchmark() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    const ref = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let tmp;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let c4;
          let diff1;
          let scrollNow;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp4;
              closure_3 = tmp;
              let horizontal;
              c4 = undefined;
              diff1 = undefined;
              scrollNow = undefined;
              if (ref.current) {
                horizontal = ref.current.props.horizontal;
                let current = ref.current;
                if (current) {
                  size = current.getWindowSize();
                  const size2 = current.getChildContainerDimensions();
                  const diff = size2.width - size.width;
                  c4 = diff;
                  diff1 = size2.height - size.height;
                  scrollNow = function scrollNow(arg0, arg1) {
                    const current = ref.current;
                    if (current != null) {
                      let tmp = arg1;
                      const scrollToOffset = current.scrollToOffset;
                      if (closure_1_3) {
                        tmp = arg0;
                      }
                      obj = { offset: tmp, animated: false };
                      scrollToOffset(obj);
                    }
                  };
                  c5 = 1;
                  c6 = 1;
                  const obj5 = autoScroll;
                  const obj6 = { value: obj5.autoScroll(scrollNow, 0, 0, diff, diff1, closure_2, closure_1), done: false };
                  return obj6;
                }
              }
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              c5 = 2;
              c6 = 1;
              const obj2 = closure_132_0(closure_132_1[3]);
              const obj8 = { value: obj2.autoScroll(scrollNow, c4, diff1, 0, 0, closure_2, closure_1), done: false };
              return obj8;
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
          return { value: "IconComponent", done: null };
        } catch (tmp25) {
          c6 = 3;
          throw tmp25;
        }
      }
    })();
  });
  return obj(...arguments);
};
({ useEffect: closure_4, useState: hasOwnProperty, useCallback: metroRequire, useRef: metroImportDefault } = react);

export const useBenchmark = function useBenchmark(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let isBenchmarkRunning;
  let closure_5;
  let startBenchmark;
  const tmp = isBenchmarkRunning(closure_5(false), 2);
  isBenchmarkRunning = tmp[0];
  let closure_4 = tmp[1];
  closure_5 = closure_7(null);
  const items = [arg1, arg0, isBenchmarkRunning, , ];
  ({ repeatCount: arr[3], speedMultiplier: arr[4] } = obj);
  startBenchmark = startBenchmark(function() {
    function runBenchmark() {
      return closure_0(...arguments);
    }
    if (!isBenchmarkRunning) {
      const tmp3 = closure_1;
      let self = this;
      let self2 = this;
      const cancellable = new closure_0(closure_1[3]).Cancellable();
      closure_5.current = cancellable;
      closure_1 = [];
      const tmp2 = closure_0;
      if (cancellable.current) {
        const data = tmp7.current.props.data;
        let length;
        const _Number = Number;
        if (data != null) {
          length = data.length;
        }
        let num = 0;
        if (_Number(length) <= 0) {
          const _Error = Error;
          const self3 = this;
          const self4 = this;
          const error = new Error(tmp2(tmp3[4]).ErrorMessages.dataEmptyCannotRunBenchmark);
          throw error;
        }
      }
      closure_4(true);
      closure_0 = obj(function*() {
        function computeSuggestions(current, arr) {
          current = current.current && current.current.props.data.length < 200;
          if (current) {
            arr = arr.push("Data count is low. Try to increase it to a large number (e.g 200) using the 'useDataMultiplier' hook.");
          }
        }
        function generateResult(js, suggestions, isCancelled) {
          obj = { js, suggestions, interrupted: isCancelled.isCancelled() };
          return obj;
        }
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let cancelled;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                cancelled = tmp;
                closure_1 = undefined;
                let averageFPS;
                let closure_3;
                const self = this;
                const self2 = this;
                const jSFPSMonitor = new cancellable(closure_1[5]).JSFPSMonitor();
                jSFPSMonitor.startTracking();
                closure_1 = 0;
                let num8 = closure_2_2.repeatCount;
                const tmp50 = closure_1;
                if (!num8) {
                  num8 = 1;
                }
                if (tmp50 >= num8) {
                  averageFPS = jSFPSMonitor.stopAndGetData();
                  if (averageFPS.averageFPS < 35) {
                    const str = "Your average JS FPS is low. This can indicate that your components are doing too much work. Try to optimize your components and reduce re-renders if any";
                    let arr = closure_1.push("Your average JS FPS is low. This can indicate that your components are doing too much work. Try to optimize your components and reduce re-renders if any");
                  }
                  computeSuggestions(cancelled, closure_1);
                  closure_3 = generateResult(averageFPS, closure_1, cancelled);
                  if (!cancelled.isCancelled()) {
                    closure_3.formattedString = getFormattedString(closure_3);
                  }
                  closure_2_1(closure_3);
                  closure_2_4(false);
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = closure_1 + 1;
              const num4 = closure_2_2.repeatCount || 1;
            }
            let num11 = closure_2_2.speedMultiplier;
            const tmp39 = cancelled;
            const tmp40 = cancelled;
            if (!num11) {
              num11 = 1;
            }
            c2 = 1;
            c3 = 1;
            const obj4 = { value: runScrollBenchmark(tmp39, tmp40, num11), done: false };
            return obj4;
          } catch (tmp42) {
            c3 = 3;
            throw tmp42;
          }
        }
      });
      runBenchmark();
    }
  }, items);
  const tmp4 = closure_4(() => {
    let ref;
    if (!obj.startManually) {
      let num = tmp.startDelayInMs;
      const _setTimeout = setTimeout;
      if (!num) {
        num = 3000;
      }
      closure_0 = _setTimeout(() => {
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