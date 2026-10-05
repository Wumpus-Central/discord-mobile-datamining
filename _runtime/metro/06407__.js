// _runtime/metro/06407__.js
import autoScroll from "../06403_autoScroll.js";
import _asyncToGenerator from "06385__asyncToGenerator.js";
import _slicedToArray from "06342__slicedToArray.js";
import react from "../00019_react.js";

let c2;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function runScrollBenchmark(arg0, arg1, arg2, arg3) {
  return obj(...arguments);
}
let obj = function _runScrollBenchmark() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    const ref = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c6 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let tmp;
      if (c7 === 2) {
        c7 = 3;
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
          let num11;
          let num12;
          let scrollNow;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp4;
              closure_4 = tmp;
              closure_1 = closure_2;
              closure_2 = closure_3;
              let c3;
              num11 = undefined;
              num12 = undefined;
              scrollNow = undefined;
              if (ref.current) {
                const props = tmp31.current.props;
                let horizontal;
                const _Boolean = Boolean;
                if (props != null) {
                  horizontal = props.horizontal;
                }
                const _BooleanResult = _Boolean(horizontal);
                c3 = _BooleanResult;
                num11 = 0;
                if (_BooleanResult) {
                  num11 = num12;
                }
                if (_BooleanResult) {
                  num12 = 0;
                }
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
                c6 = 1;
                c7 = 1;
                const obj5 = autoScroll;
                const obj6 = {
                  value: obj5.autoScroll(scrollNow, 0, 0, num11, num12, closure_3, closure_2),
                  done: false,
                };
                return obj6;
              }
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              c6 = 2;
              c7 = 1;
              const obj2 = closure_133_0(closure_133_1[3]);
              const obj8 = { value: obj2.autoScroll(scrollNow, num11, num12, 0, 0, closure_2, closure_1), done: false };
              return obj8;
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
          return { value: "IconComponent", done: null };
        } catch (tmp27) {
          c7 = 3;
          throw tmp27;
        }
      }
    })();
  });
  return obj(...arguments);
};
({ useCallback: closure_4, useEffect: hasOwnProperty, useRef: metroRequire, useState: metroImportDefault } = react);

export const useFlatListBenchmark = function useFlatListBenchmark(arg0, arg1, arg2) {
  let isBenchmarkRunning;
  let startBenchmark;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  const tmp = isBenchmarkRunning(closure_7(false), 2);
  isBenchmarkRunning = tmp[0];
  let closure_4 = tmp[1];
  let closure_5 = startBenchmark(null);
  const items = [arg1, arg0, isBenchmarkRunning, , ,];
  ({ repeatCount: arr[3], speedMultiplier: arr[4], targetOffset: arr[5] } = arg2);
  startBenchmark = closure_4(function () {
    function runBenchmark() {
      return closure_0(...arguments);
    }
    if (!isBenchmarkRunning) {
      let self = this;
      let self2 = this;
      const cancellable = new closure_0(closure_1[3]).Cancellable();
      closure_5.current = cancellable;
      const tmp2 = closure_0;
      if (cancellable.current) {
        if (cancellable.current.props) {
          const data = tmp7.current.props.data;
          let length;
          const _Number = Number;
          if (data != null) {
            length = data.length;
          }
          if (_Number(length) <= 0) {
            const _Error = Error;
            const self3 = this;
            const self4 = this;
            const error = new Error(tmp2(closure_1[4]).ErrorMessages.dataEmptyCannotRunBenchmark);
            throw error;
          }
        }
      }
      closure_4(true);
      closure_0 = closure_2(function* () {
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
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let obj5;
                const self = this;
                const self2 = this;
                const jSFPSMonitor = new cancellable(closure_3_1[5]).JSFPSMonitor();
                jSFPSMonitor.startTracking();
                closure_1 = 0;
                let num8 = closure_2_2.repeatCount;
                const tmp46 = closure_1;
                if (!num8) {
                  num8 = 1;
                }
                if (tmp46 >= num8) {
                  obj5 = { js: jSFPSMonitor.stopAndGetData(), suggestions: [], interrupted: tmp.isCancelled() };
                  if (!tmp.isCancelled()) {
                    const obj3 = cancellable(closure_3_1[6]);
                    obj5.formattedString = obj3.getFormattedString(obj5);
                  }
                  closure_2_1(obj5);
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
            const targetOffset = closure_2_2.targetOffset;
            const num10 = closure_2_2.speedMultiplier || 1;
            c2 = 1;
            c3 = 1;
            const obj6 = { value: runScrollBenchmark(tmp, targetOffset, tmp, num10), done: false };
            return obj6;
          } catch (tmp38) {
            c3 = 3;
            throw tmp38;
          }
        }
      });
      runBenchmark();
    }
  }, items);
  const tmp4 = closure_5(() => {
    let ref;
    if (!closure_2.startManually) {
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
