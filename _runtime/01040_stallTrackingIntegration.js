// _runtime/01040_stallTrackingIntegration.js
import react_native from "00017_react-native.js";
import _mod693 from "metro/00693__.js";
import _mod998 from "metro/00998__.js";
import defaultTransactionSource from "01032_defaultTransactionSource.js";
import APP_START_WARM from "01035_APP_START_WARM.js";
import _slicedToArray from "metro/00032__slicedToArray.js";

let map, set;

const AppState = react_native.AppState;

export const stallTrackingIntegration = () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let num = obj.minimumStallThresholdMs;
  if (num === undefined) {
    num = 50;
  }
  map = new Map();
  let obj2 = {
    isTracking: false,
    timeout: null,
    isBackground: false,
    lastIntervalMs: 0,
    totalStallTime: 0,
    stallCount: 0,
    backgroundEventListener(arg0) {
      if ("active" === arg0) {
        obj2.isBackground = false;
        if (null != obj2.timeout) {
          obj2 = _mod693;
          obj2.lastIntervalMs = 1000 * obj2.timestampInSeconds();
          obj2.iteration();
        }
      } else {
        obj2.isBackground = true;
        if (null !== obj2.timeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp.timeout);
        }
      }
    },
    iteration() {
      let tmp10;
      let tmp9;
      const obj = _mod693;
      const result = 1000 * obj.timestampInSeconds();
      const diff = result - obj2.lastIntervalMs;
      if (diff >= 50 + num) {
        const diff1 = diff - 50;
        obj2.stallCount = obj2.stallCount + 1;
        obj2.totalStallTime = obj2.totalStallTime + diff1;
        const entries = map.entries();
        const tmp26 = entries[Symbol.iterator]();
        while (tmp26 !== undefined) {
          let tmp8 = _slicedToArray(tmp5, 2);
          [tmp9, tmp10] = tmp8;
          let longestStallTime = tmp10.longestStallTime;
          num = 0;
          let _Math = Math;
          if (null !== longestStallTime) {
            num = 0;
            if (undefined !== tmp12) {
              num = longestStallTime;
            }
          }
          let _Object = Object;
          let _Object2 = Object;
          let maxResult = max(num, diff1);
          obj2 = { longestStallTime: maxResult };
          let result1 = map.set(tmp9, Object.assign(Object.assign({}, tmp10), obj2));
          continue;
        }
      }
      obj2.lastIntervalMs = result;
      const tmp20 = obj2.isTracking && !obj2.isBackground;
      if (tmp20) {
        const _setTimeout = setTimeout;
        obj2.timeout = setTimeout(obj2.iteration, 50);
      }
    },
  };
  function _onSpanStart(activeSpan) {
    let obj5;
    let obj6;
    let obj8;
    const obj = _mod998;
    if (obj.isRootSpan(activeSpan)) {
      if (map.has(activeSpan)) {
        const debug = _mod693.debug;
        debug.error(
          "[StallTracking] Tried to start stall tracking on a transaction already being tracked. Measurements might be lost.",
        );
      } else if (typeof _startTracking === "function") {
        if (!map.isTracking) {
          map.isTracking = true;
          const _Math = Math;
          const tmpResult = _mod693;
          map.lastIntervalMs = floor(1000 * tmpResult.timestampInSeconds());
          map.iteration();
        }
        if (typeof _getCurrentStats === "function") {
          const obj4 = { stall_count: obj5, stall_total_time: obj6, stall_longest_time: obj8 };
          obj5 = { value: map.stallCount, unit: "none" };
          obj6 = { value: map.totalStallTime, unit: "millisecond" };
          const value = map.get(activeSpan);
          let longestStallTime;
          if (null !== value) {
            if (undefined !== value) {
              longestStallTime = value.longestStallTime;
            }
          }
          let num3 = 0;
          if (null !== longestStallTime) {
            num3 = 0;
            if (undefined !== longestStallTime) {
              num3 = longestStallTime;
            }
          }
          const obj7 = { longestStallTime: 0, atTimestamp: null, atStart: obj4 };
          obj8 = { value: num3, unit: "millisecond" };
          tmp6(activeSpan, obj7);
          _flushLeakedTransactions();
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  function _onSpanEnd(activeSpan) {
    let obj10;
    let obj13;
    let obj3;
    let obj5;
    let obj6;
    let obj9;
    const obj = _mod998;
    if (obj.isRootSpan(activeSpan)) {
      const value = map.get(activeSpan);
      const tmpResult = _mod693;
      if (value) {
        let stats;
        const timestamp2 = tmpResult.spanToJSON(activeSpan).timestamp;
        const tmpResult10 = defaultTransactionSource;
        if (tmpResult10.isNearToNow(timestamp2)) {
          if (typeof _getCurrentStats === "function") {
            obj2 = { stall_count: obj3, stall_total_time: obj5, stall_longest_time: obj6 };
            obj3 = { value: obj2.stallCount, unit: "none" };
            obj5 = { value: obj2.totalStallTime, unit: "millisecond" };
            const value4 = map.get(activeSpan);
            let longestStallTime;
            if (null !== value4) {
              if (undefined !== value4) {
                longestStallTime = value4.longestStallTime;
              }
            }
            let num4 = 0;
            if (null !== longestStallTime) {
              num4 = 0;
              if (undefined !== longestStallTime) {
                num4 = longestStallTime;
              }
            }
            stats = obj2;
            obj6 = { value: num4, unit: "millisecond" };
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          const tmpResult11 = defaultTransactionSource;
          const latestChildSpanEndTimestamp = tmpResult11.getLatestChildSpanEndTimestamp(activeSpan);
          if (latestChildSpanEndTimestamp !== timestamp2) {
            const debug3 = _mod693.debug;
            debug3.log(
              "[StallTracking] Stall measurements not added due to a custom `endTimestamp` (root end is not equal to the latest child span end).",
            );
          }
          if (!value.atTimestamp) {
            const debug4 = _mod693.debug;
            debug4.log(
              "[StallTracking] Stall measurements not added due to `endTimestamp` not being close to now. And no previous stats from child end were found.",
            );
          }
          const tmp29 = latestChildSpanEndTimestamp === timestamp2 && value.atTimestamp;
          if (tmp29) {
            stats = value.atTimestamp.stats;
          }
        }
        map.delete(activeSpan);
        if (typeof _shouldStopTracking === "function") {
          if (0 === map.size) {
            obj2.isTracking = false;
            if (null !== obj2.timeout) {
              const _clearTimeout2 = clearTimeout;
              clearTimeout(obj2.timeout);
              obj2.timeout = null;
            }
            if (typeof _reset === "function") {
              obj2.stallCount = 0;
              obj2.totalStallTime = 0;
              obj2.lastIntervalMs = 0;
              map.clear();
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          if (stats) {
            const tmpResult12 = defaultTransactionSource;
            tmpResult12.setSpanMeasurement(
              activeSpan,
              APP_START_WARM.STALL_COUNT,
              stats.stall_count.value - value.atStart.stall_count.value,
              value.atStart.stall_count.unit,
            );
            const tmpResult13 = defaultTransactionSource;
            tmpResult13.setSpanMeasurement(
              activeSpan,
              APP_START_WARM.STALL_TOTAL_TIME,
              stats.stall_total_time.value - value.atStart.stall_total_time.value,
              value.atStart.stall_total_time.unit,
            );
            const tmpResult14 = defaultTransactionSource;
            tmpResult14.setSpanMeasurement(
              activeSpan,
              APP_START_WARM.STALL_LONGEST_TIME,
              stats.stall_longest_time.value,
              stats.stall_longest_time.unit,
            );
          } else if (undefined !== timestamp2) {
            const debug5 = _mod693.debug;
            const log = debug5.log;
            const tmpResult15 = _mod693;
            log(
              "[StallTracking] Stall measurements not added due to `endTimestamp` not being close to now.",
              "endTimestamp",
              timestamp2,
              "now",
              tmpResult15.timestampInSeconds(),
            );
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        const debug2 = tmpResult.debug;
        debug2.log("[StallTracking] Stall measurements were not added to transaction due to exceeding the max count.");
        map.delete(activeSpan);
        if (typeof _shouldStopTracking === "function") {
          if (0 === map.size) {
            obj2.isTracking = false;
            if (null !== obj2.timeout) {
              const _clearTimeout = clearTimeout;
              clearTimeout(obj2.timeout);
              obj2.timeout = null;
            }
            if (typeof _reset === "function") {
              obj2.stallCount = 0;
              obj2.totalStallTime = 0;
              obj2.lastIntervalMs = 0;
              map.clear();
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    } else if (typeof _onChildSpanEnd === "function") {
      const tmpResult16 = _mod693;
      const rootSpan = tmpResult16.getRootSpan(activeSpan);
      const tmpResult17 = _mod693;
      const timestamp = tmpResult17.spanToJSON(activeSpan).timestamp;
      if (timestamp) {
        if (typeof _markSpanFinish === "function") {
          const value5 = map.get(rootSpan);
          if (value5) {
            const _Math = Math;
            const tmpResult18 = _mod693;
            if (abs(tmpResult18.timestampInSeconds() - timestamp) > 0.02) {
              const debug = _mod693.debug;
              debug.log(
                "[StallTracking] Span end not logged due to end timestamp being outside the margin of error from now.",
              );
              const tmp14 = value5.atTimestamp && value5.atTimestamp.timestamp < timestamp;
              if (tmp14) {
                const _Object = Object;
                const _Object2 = Object;
                const result = map.set(rootSpan, Object.assign(Object.assign({}, value5), { atTimestamp: null }));
              }
            } else {
              const _Object4 = Object;
              const _Object3 = Object;
              const obj7 = { timestamp, stats: null };
              set = map.set;
              if (typeof _getCurrentStats === "function") {
                const obj8 = { stall_count: obj9, stall_total_time: obj10, stall_longest_time: obj13 };
                obj10 = { value: obj2.totalStallTime, unit: "millisecond" };
                obj9 = { value: obj2.stallCount, unit: "none" };
                const value6 = map.get(rootSpan);
                let longestStallTime1;
                if (null !== value6) {
                  if (undefined !== value6) {
                    longestStallTime1 = value6.longestStallTime;
                  }
                }
                let num2 = 0;
                if (null !== longestStallTime1) {
                  num2 = 0;
                  if (undefined !== longestStallTime1) {
                    num2 = longestStallTime1;
                  }
                }
                const obj12 = { atTimestamp: obj7 };
                obj13 = { value: num2, unit: "millisecond" };
                obj7.stats = obj8;
                const result1 = set(rootSpan, assign(tmp52, obj12));
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  function _onChildSpanEnd(arg0) {}
  function _markSpanFinish(arg0, arg1) {}
  function _getCurrentStats(arg0) {}
  function _startTracking() {}
  function _shouldStopTracking() {}
  function _reset() {}
  function _flushLeakedTransactions() {
    if (map.size > 10) {
      num = 0;
      const diff = map.size - 10;
      const keys = map.keys();
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (num >= diff) {
          iter.return();
          break;
        } else {
          num = num + 1;
          let deleteResult = map.delete(tmp9);
          continue;
        }
        break;
      }
    }
  }
  let obj3 = _onSpanStart;
  let isAvailable;
  if (null != _onSpanStart) {
    isAvailable = obj3.isAvailable;
  }
  if (isAvailable) {
    const listener = obj3.addEventListener("change", obj2.backgroundEventListener);
  }
  let obj4 = {
    name: "StallTracking",
    setup(on) {
      on.on("spanStart", _onSpanStart);
      on.on("spanEnd", _onSpanEnd);
    },
    _internalState: obj2,
  };
  return obj4;
};
