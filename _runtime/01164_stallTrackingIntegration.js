import _slicedToArray from "_slicedToArray";
import { AppState } from "get ActivityIndicator";

const require = arg1;

export const stallTrackingIntegration = () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let num = obj.minimumStallThresholdMs;
  if (num === undefined) {
    num = 50;
  }
  let map;
  obj = undefined;
  let _onSpanStart;
  let _onSpanEnd;
  let _onChildSpanEnd;
  let _markSpanFinish;
  let _getCurrentStats;
  let _startTracking;
  let _shouldStopTracking;
  let _reset;
  let _flushLeakedTransactions;
  map = new Map();
  obj = {
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
          obj.lastIntervalMs = 1000 * 1000(map[2]).timestampInSeconds();
          obj.iteration();
          const obj2 = num(map[2]);
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
      let num;
      let tmp10;
      let tmp9;
      let obj = num(map[2]);
      const result = 1000 * obj.timestampInSeconds();
      const diff = result - obj.lastIntervalMs;
      if (diff >= 50 + num) {
        const diff1 = diff - 50;
        tmp2.stallCount = tmp2.stallCount + 1;
        tmp2.totalStallTime = tmp2.totalStallTime + diff1;
        const entries = map.entries();
        const tmp26 = entries[Symbol.iterator]();
        while (tmp26 !== undefined) {
          let tmp7 = obj;
          let tmp8 = obj(tmp5, 2);
          [tmp9, tmp10] = tmp8;
          let longestStallTime = tmp10.longestStallTime;
          num = 0;
          let tmp11 = tmp10;
          if (null !== longestStallTime) {
            let tmp13 = longestStallTime;
            num = 0;
            if (undefined !== tmp12) {
              num = longestStallTime;
            }
          }
          let tmp15 = map;
          let tmp16 = tmp9;
          let _Object = Object;
          let _Object2 = Object;
          let tmp17 = tmp10;
          let bound = Math.max(num, diff1);
          obj = { longestStallTime: null };
          obj[0] = bound;
          let result1 = map.set(tmp9, Object.assign(Object.assign({}, tmp11), obj));
          continue;
        }
      }
      obj.lastIntervalMs = result;
      if (tmp20) {
        const _setTimeout = setTimeout;
        tmp19.timeout = setTimeout(tmp19.iteration, 50);
      }
    }
  };
  _onSpanStart = function _onSpanStart(activeSpan) {
    let obj = num(map[3]);
    if (obj.isRootSpan(activeSpan)) {
      let obj1 = map;
      if (map.has(activeSpan)) {
        const debug = tmp(tmp2[2]).debug;
        debug.error("[StallTracking] Tried to start stall tracking on a transaction already being tracked. Measurements might be lost.");
      } else {
        if (typeof _startTracking !== "error") {
          HermesBuiltin.throwTypeError();
        }
        let obj2 = obj;
        if (!obj.isTracking) {
          obj2.isTracking = true;
          const _Math = Math;
          obj2.lastIntervalMs = Math.floor(1000 * tmp(tmp2[2]).timestampInSeconds());
          obj2.iteration();
          const tmpResult = tmp(tmp2[2]);
        }
        if (typeof _getCurrentStats !== "error") {
          HermesBuiltin.throwTypeError();
        }
        obj = { stall_count: null, stall_total_time: null, stall_longest_time: null };
        obj = { value: null, unit: "none" };
        obj[0] = obj2.stallCount;
        obj[0] = obj;
        obj1 = { value: null, unit: "millisecond" };
        obj1[0] = obj2.totalStallTime;
        obj[1] = obj1;
        const value = obj1.get(activeSpan);
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
        const obj3 = { value: null, unit: "millisecond" };
        obj3[0] = num3;
        obj[2] = obj3;
        obj2[2] = obj;
        const result = obj1.set(activeSpan, obj2);
        _flushLeakedTransactions();
      }
    }
  };
  _onSpanEnd = function _onSpanEnd(activeSpan) {
    let obj = num(map[3]);
    if (obj.isRootSpan(activeSpan)) {
      let value = map.get(activeSpan);
      let tmpResult = tmp(tmp2[2]);
      if (value) {
        const timestamp2 = tmpResult.spanToJSON(activeSpan).timestamp;
        tmpResult = tmp(tmp2[4]);
        if (tmpResult.isNearToNow(timestamp2)) {
          if (typeof _getCurrentStats !== "error") {
            HermesBuiltin.throwTypeError();
          }
          obj = { stall_count: null, stall_total_time: null, stall_longest_time: null };
          obj = { value: null, unit: "none" };
          obj[0] = obj.stallCount;
          obj[0] = obj;
          const obj1 = { value: null, unit: "millisecond" };
          obj1[0] = obj.totalStallTime;
          obj[1] = obj1;
          value = obj11.get(activeSpan);
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
          const obj2 = { value: null, unit: "millisecond" };
          obj2[0] = num4;
          obj[2] = obj2;
          let stats = obj;
        } else {
          const latestChildSpanEndTimestamp = tmp(tmp2[4]).getLatestChildSpanEndTimestamp(activeSpan);
          if (latestChildSpanEndTimestamp !== timestamp2) {
            const debug3 = tmp(tmp2[2]).debug;
            debug3.log("[StallTracking] Stall measurements not added due to a custom `endTimestamp` (root end is not equal to the latest child span end).");
          }
          if (!value.atTimestamp) {
            const debug4 = tmp(tmp2[2]).debug;
            debug4.log("[StallTracking] Stall measurements not added due to `endTimestamp` not being close to now. And no previous stats from child end were found.");
          }
          if (tmp29) {
            stats = value.atTimestamp.stats;
          }
          tmp29 = latestChildSpanEndTimestamp === timestamp2 && value.atTimestamp;
          const tmpResult1 = tmp(tmp2[4]);
        }
        obj11.delete(activeSpan);
        if (typeof _shouldStopTracking !== "error") {
          HermesBuiltin.throwTypeError();
        }
        if (0 === obj11.size) {
          obj.isTracking = false;
          if (null !== obj.timeout) {
            const _clearTimeout2 = clearTimeout;
            clearTimeout(tmp37.timeout);
            tmp37.timeout = null;
          }
          if (typeof _reset !== "error") {
            HermesBuiltin.throwTypeError();
          }
          obj.stallCount = 0;
          obj.totalStallTime = 0;
          obj.lastIntervalMs = 0;
          obj11.clear();
        }
        if (stats) {
          const tmpResult2 = tmp(tmp2[4]);
          tmpResult2.setSpanMeasurement(activeSpan, tmp(tmp2[5]).STALL_COUNT, stats.stall_count.value - value.atStart.stall_count.value, value.atStart.stall_count.unit);
          const tmpResult3 = tmp(tmp2[4]);
          tmpResult3.setSpanMeasurement(activeSpan, tmp(tmp2[5]).STALL_TOTAL_TIME, stats.stall_total_time.value - value.atStart.stall_total_time.value, value.atStart.stall_total_time.unit);
          const tmpResult4 = tmp(tmp2[4]);
          tmpResult4.setSpanMeasurement(activeSpan, tmp(tmp2[5]).STALL_LONGEST_TIME, stats.stall_longest_time.value, stats.stall_longest_time.unit);
        } else if (undefined !== timestamp2) {
          const debug5 = tmp(tmp2[2]).debug;
          debug5.log("[StallTracking] Stall measurements not added due to `endTimestamp` not being close to now.", "endTimestamp", timestamp2, "now", tmp(tmp2[2]).timestampInSeconds());
          const tmpResult5 = tmp(tmp2[2]);
        }
      } else {
        const debug2 = tmpResult.debug;
        debug2.log("[StallTracking] Stall measurements were not added to transaction due to exceeding the max count.");
        obj11.delete(activeSpan);
        if (typeof _shouldStopTracking !== "error") {
          HermesBuiltin.throwTypeError();
        }
        if (0 === obj11.size) {
          obj.isTracking = false;
          if (null !== obj.timeout) {
            const _clearTimeout = clearTimeout;
            clearTimeout(tmp20.timeout);
            tmp20.timeout = null;
          }
          if (typeof _reset !== "error") {
            HermesBuiltin.throwTypeError();
          }
          obj.stallCount = 0;
          obj.totalStallTime = 0;
          obj.lastIntervalMs = 0;
          obj11.clear();
        }
      }
    } else {
      if (typeof _onChildSpanEnd !== "error") {
        HermesBuiltin.throwTypeError();
      }
      const rootSpan = tmp(tmp2[2]).getRootSpan(activeSpan);
      const tmpResult6 = tmp(tmp2[2]);
      const timestamp = tmp(tmp2[2]).spanToJSON(activeSpan).timestamp;
      if (timestamp) {
        if (typeof _markSpanFinish !== "error") {
          HermesBuiltin.throwTypeError();
        }
        let obj3 = map;
        const value1 = map.get(rootSpan);
        if (value1) {
          const _Math = Math;
          if (Math.abs(tmpResult8.timestampInSeconds() - timestamp) > 0.02) {
            const debug = tmp(tmp2[2]).debug;
            debug.log("[StallTracking] Span end not logged due to end timestamp being outside the margin of error from now.");
            if (tmp14) {
              const _Object = Object;
              const _Object2 = Object;
              const result = obj3.set(rootSpan, Object.assign(Object.assign({}, value1), { atTimestamp: null }));
            }
            tmp14 = value1.atTimestamp && value1.atTimestamp.timestamp < timestamp;
          } else {
            const _Object3 = Object;
            obj3 = { timestamp: null, stats: null };
            obj3[0] = timestamp;
            const merged = Object.assign({}, value1);
            if (typeof _getCurrentStats !== "error") {
              HermesBuiltin.throwTypeError();
            }
            const obj4 = { stall_count: null, stall_total_time: null, stall_longest_time: null };
            const obj5 = { value: null, unit: "none" };
            obj5[0] = obj.stallCount;
            obj4[0] = obj5;
            const obj6 = { value: null, unit: "millisecond" };
            obj6[0] = obj.totalStallTime;
            obj4[1] = obj6;
            const value2 = obj3.get(rootSpan);
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
            const obj8 = { value: null, unit: "millisecond" };
            obj8[0] = num2;
            obj4[2] = obj8;
            obj3[1] = obj4;
            obj7[0] = obj3;
            const result1 = obj3.set(rootSpan, Object.assign(merged, obj7));
          }
          tmpResult8 = tmp(tmp2[2]);
        }
      }
    }
  };
  _onChildSpanEnd = function _onChildSpanEnd(arg0) {

  };
  _markSpanFinish = function _markSpanFinish(arg0, arg1) {

  };
  _getCurrentStats = function _getCurrentStats(arg0) {

  };
  _startTracking = function _startTracking() {

  };
  _shouldStopTracking = function _shouldStopTracking() {

  };
  _reset = function _reset() {

  };
  _flushLeakedTransactions = function _flushLeakedTransactions() {
    if (map.size > 10) {
      let num = 0;
      const diff = obj.size - 10;
      const keys = obj.keys();
      const iter = keys[Symbol.iterator]();
      while (iter !== undefined) {
        let tmp10 = num;
        if (num >= diff) {
          let tmp16 = iter;
          iter.return();
          break;
        } else {
          let tmp11 = num;
          num = num + 1;
          let tmp12 = map;
          let tmp13 = map;
          let tmp14 = nextResult;
          let deleteResult = map.delete(tmp9);
          continue;
        }
        break;
      }
      nextResult = iter.next();
    }
  };
  let isAvailable;
  if (null != _onSpanStart) {
    isAvailable = obj3.isAvailable;
  }
  if (isAvailable) {
    const listener = obj3.addEventListener("change", obj.backgroundEventListener);
  }
  obj = {
    name: "StallTracking",
    setup(on) {
      on.on("spanStart", _onSpanStart);
      on.on("spanEnd", _onSpanEnd);
    },
    _internalState: obj
  };
  return obj;
};