// === Module 1029: stallTrackingIntegration ===

// Module 1029 (stallTrackingIntegration)
import _mod682 from "module_682" /* 682 */;
import _mod987 from "module_987" /* 987 */;
import _mod1021 from "module_1021" /* 1021 */;
import APP_START_WARM from "APP_START_WARM" /* 1024 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const AppState = fn(17).AppState;

export const stallTrackingIntegration = () => {
  let _internalState = arg0;
  if (arg0 === undefined) {
    _internalState = {};
  }
  let num = _internalState.minimumStallThresholdMs;
  if (num === undefined) {
    num = 50;
  }
  const map = new Map();
  _internalState = {
    isTracking: false,
    timeout: null,
    isBackground: false,
    lastIntervalMs: 0,
    totalStallTime: 0,
    stallCount: 0,
    backgroundEventListener(arg0) {
      if ("active" === arg0) {
        obj.isBackground = false;
        if (null != obj.timeout) {
          obj.lastIntervalMs = 1000 * _mod682.timestampInSeconds();
          obj.iteration();
        }
      } else {
        obj.isBackground = true;
        if (null !== obj.timeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp.timeout);
        }
      }
    },
    iteration() {
      obj = _mod682;
      const result = 1000 * obj.timestampInSeconds();
      const diff = result - obj.lastIntervalMs;
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
          obj = { longestStallTime: bound };
          let result1 = map.set(tmp9, Object.assign(Object.assign({}, tmp10), obj));
          continue;
        }
      }
      obj.lastIntervalMs = result;
      if (tmp20) {
        const _setTimeout = setTimeout;
        tmp19.timeout = setTimeout(tmp19.iteration, 50);
      }
      tmp20 = obj.isTracking && !obj.isBackground;
    }
  };
  function _onSpanStart(activeSpan) {
    let atStart = _mod987;
    if (atStart.isRootSpan(activeSpan)) {
      let obj1 = map;
      if (map.has(activeSpan)) {
        const debug = _mod682.debug;
        debug.error("[StallTracking] Tried to start stall tracking on a transaction already being tracked. Measurements might be lost.");
      } else if (typeof _startTracking === "function") {
        let obj2 = atStart;
        if (!atStart.isTracking) {
          obj2.isTracking = true;
          const _Math = Math;
          obj2.lastIntervalMs = Math.floor(1000 * _mod682.timestampInSeconds());
          obj2.iteration();
          const tmpResult = _mod682;
        }
        if (typeof _getCurrentStats === "function") {
          atStart = { stall_count: null, stall_total_time: null, stall_longest_time: null };
          atStart = { value: obj2.stallCount, unit: "none" };
          atStart.stall_count = atStart;
          obj1 = { value: obj2.totalStallTime, unit: "millisecond" };
          atStart.stall_total_time = obj1;
          value = obj1.get(activeSpan);
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
          obj2 = { longestStallTime: 0, atTimestamp: null, atStart: null };
          const obj3 = { value: num3, unit: "millisecond" };
          atStart.stall_longest_time = obj3;
          obj2.atStart = atStart;
          tmp6(activeSpan, obj2);
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
    let stall_count = _mod987;
    if (stall_count.isRootSpan(activeSpan)) {
      value = map.get(activeSpan);
      let tmpResult = _mod682;
      if (value) {
        const timestamp2 = tmpResult.spanToJSON(activeSpan).timestamp;
        tmpResult = _mod1021;
        if (tmpResult.isNearToNow(timestamp2)) {
          if (typeof _getCurrentStats === "function") {
            stall_count = { stall_count: null, stall_total_time: null, stall_longest_time: null };
            stall_count = { value: null, unit: "none" };
            stall_count.value = stall_count.stallCount;
            stall_count.stall_count = stall_count;
            const obj1 = { value: stall_count.totalStallTime, unit: "millisecond" };
            stall_count.stall_total_time = obj1;
            value = map.get(activeSpan);
            let longestStallTime;
            if (null !== value) {
              if (undefined !== value) {
                longestStallTime = value.longestStallTime;
              }
            }
            let num4 = 0;
            if (null !== longestStallTime) {
              num4 = 0;
              if (undefined !== longestStallTime) {
                num4 = longestStallTime;
              }
            }
            const obj2 = { value: num4, unit: "millisecond" };
            stall_count.stall_longest_time = obj2;
            let stats = stall_count;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          const latestChildSpanEndTimestamp = _mod1021.getLatestChildSpanEndTimestamp(activeSpan);
          if (latestChildSpanEndTimestamp !== timestamp2) {
            const debug3 = _mod682.debug;
            debug3.log("[StallTracking] Stall measurements not added due to a custom `endTimestamp` (root end is not equal to the latest child span end).");
          }
          if (!value.atTimestamp) {
            const debug4 = _mod682.debug;
            debug4.log("[StallTracking] Stall measurements not added due to `endTimestamp` not being close to now. And no previous stats from child end were found.");
          }
          if (tmp29) {
            stats = value.atTimestamp.stats;
          }
          tmp29 = latestChildSpanEndTimestamp === timestamp2 && value.atTimestamp;
          const tmpResult1 = _mod1021;
        }
        map.delete(activeSpan);
        if (typeof _shouldStopTracking === "function") {
          if (0 === map.size) {
            stall_count.isTracking = false;
            if (null !== stall_count.timeout) {
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
            const tmpResult2 = _mod1021;
            tmpResult2.setSpanMeasurement(activeSpan, APP_START_WARM.STALL_COUNT, stats.stall_count.value - value.atStart.stall_count.value, value.atStart.stall_count.unit);
            const tmpResult3 = _mod1021;
            tmpResult3.setSpanMeasurement(activeSpan, APP_START_WARM.STALL_TOTAL_TIME, stats.stall_total_time.value - value.atStart.stall_total_time.value, value.atStart.stall_total_time.unit);
            const tmpResult4 = _mod1021;
            tmpResult4.setSpanMeasurement(activeSpan, APP_START_WARM.STALL_LONGEST_TIME, stats.stall_longest_time.value, stats.stall_longest_time.unit);
          } else if (undefined !== timestamp2) {
            const debug5 = _mod682.debug;
            debug5.log("[StallTracking] Stall measurements not added due to `endTimestamp` not being close to now.", "endTimestamp", timestamp2, "now", _mod682.timestampInSeconds());
            const tmpResult5 = _mod682;
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
            stall_count.isTracking = false;
            if (null !== stall_count.timeout) {
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
      const tmpResult6 = _mod682;
      const timestamp = _mod682.spanToJSON(activeSpan).timestamp;
      if (timestamp) {
        if (typeof _markSpanFinish === "function") {
          let obj3 = map;
          const value1 = map.get(rootSpan);
          if (value1) {
            const _Math = Math;
            if (Math.abs(tmpResult8.timestampInSeconds() - timestamp) > 0.02) {
              const debug = _mod682.debug;
              debug.log("[StallTracking] Span end not logged due to end timestamp being outside the margin of error from now.");
              if (tmp14) {
                const _Object = Object;
                const _Object2 = Object;
                const result = obj3.set(rootSpan, Object.assign(Object.assign({}, value1), { atTimestamp: null }));
              }
              tmp14 = value1.atTimestamp && value1.atTimestamp.timestamp < timestamp;
            } else {
              const _Object3 = Object;
              obj3 = { timestamp, stats: null };
              if (typeof _getCurrentStats === "function") {
                const obj4 = { stall_count: null, stall_total_time: null, stall_longest_time: null };
                const obj5 = { value: stall_count.stallCount, unit: "none" };
                obj4.stall_count = obj5;
                const obj6 = { value: stall_count.totalStallTime, unit: "millisecond" };
                obj4.stall_total_time = obj6;
                value2 = obj3.get(rootSpan);
                let longestStallTime1;
                if (null !== value2) {
                  if (undefined !== value2) {
                    longestStallTime1 = value2.longestStallTime;
                  }
                }
                let num2 = 0;
                if (null !== longestStallTime1) {
                  num2 = 0;
                  if (undefined !== longestStallTime1) {
                    num2 = longestStallTime1;
                  }
                }
                const obj7 = { atTimestamp: null };
                const obj8 = { value: num2, unit: "millisecond" };
                obj4.stall_longest_time = obj8;
                obj3.stats = obj4;
                obj7.atTimestamp = obj3;
                const result1 = obj3.set(rootSpan, Object.assign(tmp52, obj7));
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            tmpResult8 = _mod682;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const tmpResult7 = _mod682;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  function _onChildSpanEnd(arg0) {

  }
  function _markSpanFinish(arg0, arg1) {

  }
  function _getCurrentStats(arg0) {

  }
  function _startTracking() {

  }
  function _shouldStopTracking() {

  }
  function _reset() {

  }
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
    const listener = obj3.addEventListener("change", _internalState.backgroundEventListener);
  }
  _internalState = {
    name: "StallTracking",
    setup(on) {
      on.on("spanStart", _onSpanStart);
      on.on("spanEnd", _onSpanEnd);
    },
    _internalState
  };
  return _internalState;
};