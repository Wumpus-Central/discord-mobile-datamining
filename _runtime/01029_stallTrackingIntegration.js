// _runtime/01029_stallTrackingIntegration.js
import _mod682 from "metro/00682__.js";
import _mod987 from "metro/00987__.js";
import _mod1021 from "metro/01021__.js";
import APP_START_WARM from "01024_APP_START_WARM.js";
import _slicedToArray from "metro/00032__.js";

require = fn;
const AppState = fn(17).AppState;

export const stallTrackingIntegration = () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let num = obj.minimumStallThresholdMs;
  if (num === undefined) {
    num = 50;
  }
  const map = new Map();
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
          obj2 = _mod682;
          obj.lastIntervalMs = 1000 * obj2.timestampInSeconds();
          obj.iteration();
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
      const result = 1000 * _mod682.timestampInSeconds();
      const diff = result - obj2.lastIntervalMs;
      if (diff >= 50 + num) {
        const diff1 = diff - 50;
        tmp2.stallCount = tmp2.stallCount + 1;
        tmp2.totalStallTime = tmp2.totalStallTime + diff1;
        const entries = map.entries();
        const tmp26 = entries[Symbol.iterator]();
        while (tmp26 !== undefined) {
          let tmp8 = _slicedToArray(tmp5, 2);
          [tmp9, tmp10] = tmp8;
          let longestStallTime = tmp10.longestStallTime;
          num = 0;
          if (null !== longestStallTime) {
            num = 0;
            if (undefined !== tmp12) {
              num = longestStallTime;
            }
          }
          let _Object = Object;
          let _Object2 = Object;
          let bound = Math.max(num, diff1);
          obj2 = { longestStallTime: bound };
          let result1 = map.set(tmp9, Object.assign(Object.assign({}, tmp10), obj2));
          continue;
        }
      }
      obj2.lastIntervalMs = result;
      if (tmp20) {
        const _setTimeout = setTimeout;
        tmp19.timeout = setTimeout(tmp19.iteration, 50);
      }
      tmp20 = obj2.isTracking && !obj2.isBackground;
    },
  };
  function _onSpanStart(activeSpan) {
    if (obj.isRootSpan(activeSpan)) {
      if (map.has(activeSpan)) {
        const debug = _mod682.debug;
        debug.error(
          "[StallTracking] Tried to start stall tracking on a transaction already being tracked. Measurements might be lost.",
        );
      } else if (typeof _startTracking === "function") {
        if (!map.isTracking) {
          map.isTracking = true;
          const _Math = Math;
          map.lastIntervalMs = Math.floor(1000 * _mod682.timestampInSeconds());
          map.iteration();
          const tmpResult = _mod682;
        }
        if (typeof _getCurrentStats === "function") {
          const obj4 = { stall_count: null, stall_total_time: null, stall_longest_time: null };
          const obj5 = { value: map.stallCount, unit: "none" };
          obj4.stall_count = obj5;
          const obj6 = { value: map.totalStallTime, unit: "millisecond" };
          obj4.stall_total_time = obj6;
          value = map.get(activeSpan);
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
          const obj7 = { longestStallTime: 0, atTimestamp: null, atStart: null };
          const obj8 = { value: num3, unit: "millisecond" };
          obj4.stall_longest_time = obj8;
          obj7.atStart = obj4;
          tmp6(activeSpan, obj7);
          _flushLeakedTransactions();
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    obj = _mod987;
  }
  function _onSpanEnd(activeSpan) {
    if (obj.isRootSpan(activeSpan)) {
      value = map.get(activeSpan);
      const tmpResult = _mod682;
      if (value) {
        const timestamp2 = tmpResult.spanToJSON(activeSpan).timestamp;
        if (tmpResult10.isNearToNow(timestamp2)) {
          if (typeof _getCurrentStats === "function") {
            obj2 = { stall_count: null, stall_total_time: null, stall_longest_time: null };
            const obj3 = { value: obj2.stallCount, unit: "none" };
            obj2.stall_count = obj3;
            const obj5 = { value: obj2.totalStallTime, unit: "millisecond" };
            obj2.stall_total_time = obj5;
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
            const obj6 = { value: num4, unit: "millisecond" };
            obj2.stall_longest_time = obj6;
            let stats = obj2;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          const latestChildSpanEndTimestamp = _mod1021.getLatestChildSpanEndTimestamp(activeSpan);
          if (latestChildSpanEndTimestamp !== timestamp2) {
            const debug3 = _mod682.debug;
            debug3.log(
              "[StallTracking] Stall measurements not added due to a custom `endTimestamp` (root end is not equal to the latest child span end).",
            );
          }
          if (!value.atTimestamp) {
            const debug4 = _mod682.debug;
            debug4.log(
              "[StallTracking] Stall measurements not added due to `endTimestamp` not being close to now. And no previous stats from child end were found.",
            );
          }
          if (tmp29) {
            stats = value.atTimestamp.stats;
          }
          tmp29 = latestChildSpanEndTimestamp === timestamp2 && value.atTimestamp;
          const tmpResult11 = _mod1021;
        }
        map.delete(activeSpan);
        if (typeof _shouldStopTracking === "function") {
          if (0 === map.size) {
            obj2.isTracking = false;
            if (null !== obj2.timeout) {
              const _clearTimeout2 = clearTimeout;
              clearTimeout(tmp37.timeout);
              tmp37.timeout = null;
            }
            if (typeof _reset === "function") {
              tmp37.stallCount = 0;
              tmp37.totalStallTime = 0;
              tmp37.lastIntervalMs = 0;
              map.clear();
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          if (stats) {
            const tmpResult12 = _mod1021;
            tmpResult12.setSpanMeasurement(
              activeSpan,
              APP_START_WARM.STALL_COUNT,
              stats.stall_count.value - value.atStart.stall_count.value,
              value.atStart.stall_count.unit,
            );
            const tmpResult13 = _mod1021;
            tmpResult13.setSpanMeasurement(
              activeSpan,
              APP_START_WARM.STALL_TOTAL_TIME,
              stats.stall_total_time.value - value.atStart.stall_total_time.value,
              value.atStart.stall_total_time.unit,
            );
            const tmpResult14 = _mod1021;
            tmpResult14.setSpanMeasurement(
              activeSpan,
              APP_START_WARM.STALL_LONGEST_TIME,
              stats.stall_longest_time.value,
              stats.stall_longest_time.unit,
            );
          } else if (undefined !== timestamp2) {
            const debug5 = _mod682.debug;
            debug5.log(
              "[StallTracking] Stall measurements not added due to `endTimestamp` not being close to now.",
              "endTimestamp",
              timestamp2,
              "now",
              _mod682.timestampInSeconds(),
            );
            const tmpResult15 = _mod682;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        tmpResult10 = _mod1021;
      } else {
        const debug2 = tmpResult.debug;
        debug2.log("[StallTracking] Stall measurements were not added to transaction due to exceeding the max count.");
        map.delete(activeSpan);
        if (typeof _shouldStopTracking === "function") {
          if (0 === map.size) {
            obj2.isTracking = false;
            if (null !== obj2.timeout) {
              const _clearTimeout = clearTimeout;
              clearTimeout(tmp20.timeout);
              tmp20.timeout = null;
            }
            if (typeof _reset === "function") {
              tmp20.stallCount = 0;
              tmp20.totalStallTime = 0;
              tmp20.lastIntervalMs = 0;
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
      const rootSpan = _mod682.getRootSpan(activeSpan);
      const tmpResult16 = _mod682;
      const timestamp = _mod682.spanToJSON(activeSpan).timestamp;
      if (timestamp) {
        if (typeof _markSpanFinish === "function") {
          const value5 = map.get(rootSpan);
          if (value5) {
            const _Math = Math;
            if (Math.abs(tmpResult18.timestampInSeconds() - timestamp) > 0.02) {
              const debug = _mod682.debug;
              debug.log(
                "[StallTracking] Span end not logged due to end timestamp being outside the margin of error from now.",
              );
              if (tmp14) {
                const _Object = Object;
                const _Object2 = Object;
                const result = map.set(rootSpan, Object.assign(Object.assign({}, value5), { atTimestamp: null }));
              }
              tmp14 = value5.atTimestamp && value5.atTimestamp.timestamp < timestamp;
            } else {
              const _Object3 = Object;
              const obj7 = { timestamp, stats: null };
              if (typeof _getCurrentStats === "function") {
                const obj8 = { stall_count: null, stall_total_time: null, stall_longest_time: null };
                const obj9 = { value: obj2.stallCount, unit: "none" };
                obj8.stall_count = obj9;
                const obj10 = { value: obj2.totalStallTime, unit: "millisecond" };
                obj8.stall_total_time = obj10;
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
                const obj12 = { atTimestamp: null };
                const obj13 = { value: num2, unit: "millisecond" };
                obj8.stall_longest_time = obj13;
                obj7.stats = obj8;
                obj12.atTimestamp = obj7;
                const result1 = map.set(rootSpan, Object.assign(tmp52, obj12));
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            tmpResult18 = _mod682;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const tmpResult17 = _mod682;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    obj = _mod987;
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
      const nextResult = iter.next();
    }
  }
  let isAvailable;
  if (null != _onSpanStart) {
    isAvailable = obj3.isAvailable;
  }
  if (isAvailable) {
    const listener = obj3.addEventListener("change", obj2.backgroundEventListener);
  }
  return {
    name: "StallTracking",
    setup(on) {
      on.on("spanStart", _onSpanStart);
      on.on("spanEnd", _onSpanEnd);
    },
    _internalState: obj2,
  };
};
