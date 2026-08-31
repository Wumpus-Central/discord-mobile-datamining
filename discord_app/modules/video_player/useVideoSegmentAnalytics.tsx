// === Module 14703: useVideoSegmentAnalytics ===

// Module 14703 (useVideoSegmentAnalytics)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import noop from "noop" /* 19 */;

const require = arg1;
({ useRef: c4, useCallback: c5, useEffect: closure_6 } = noop);
const result = require("set").fileFinishedImporting("modules/video_player/useVideoSegmentAnalytics.tsx");

export default function useVideoSegmentAnalytics(getCurrentVideoTime) {
  getCurrentVideoTime = getCurrentVideoTime.getCurrentVideoTime;
  const onAnalytics = getCurrentVideoTime.onAnalytics;
  const emitIntervalMs = getCurrentVideoTime.emitIntervalMs;
  const minSegmentDurationMs = getCurrentVideoTime.minSegmentDurationMs;
  let first;
  let callback;
  let first1;
  closure_7 = undefined;
  let first2;
  closure_9 = undefined;
  let first3;
  closure_11 = undefined;
  closure_12 = undefined;
  closure_13 = undefined;
  closure_14 = undefined;
  closure_15 = undefined;
  closure_16 = undefined;
  closure_17 = undefined;
  closure_18 = undefined;
  let tmp = emitIntervalMs(minSegmentDurationMs.useState(null), 2);
  first = tmp[0];
  callback = tmp[1];
  let tmp3 = emitIntervalMs(minSegmentDurationMs.useState(false), 2);
  first1 = tmp3[0];
  closure_7 = tmp3[1];
  const tmp5 = emitIntervalMs(minSegmentDurationMs.useState(false), 2);
  first2 = tmp5[0];
  closure_9 = tmp5[1];
  const tmp7 = emitIntervalMs(minSegmentDurationMs.useState(false), 2);
  first3 = tmp7[0];
  closure_11 = tmp7[1];
  closure_12 = first(null);
  closure_13 = first(Date.now());
  closure_14 = first(false);
  const items = [onAnalytics];
  const tmp9 = callback((segmentEndSec) => {
    if (segmentEndSec.segmentEndSec >= segmentEndSec.segmentStartSec) {
      const obj = { start_time: null, end_time: null, duration: null, segment_start_sec: null, segment_end_sec: null, segment_duration_sec: null };
      ({ startTimeMs: obj[0], endTimeMs: obj[1] } = segmentEndSec);
      obj[2] = segmentEndSec.endTimeMs - segmentEndSec.startTimeMs;
      ({ segmentStartSec: obj[3], segmentEndSec: obj[4] } = segmentEndSec);
      obj[5] = segmentEndSec.segmentEndSec - segmentEndSec.segmentStartSec;
      onAnalytics(obj);
    }
  }, items);
  closure_15 = tmp9;
  const items1 = [getCurrentVideoTime, first2, first3];
  const tmp10 = callback(() => {
    const tmp = getCurrentVideoTime();
    if (null != tmp) {
      if (first2) {
        if (first3) {
          const _Date = Date;
          const timestamp = Date.now();
          const obj = { startTimeMs: null, endTimeMs: null, segmentStartSec: null, segmentEndSec: null };
          obj[0] = timestamp;
          obj[1] = timestamp;
          obj[2] = tmp;
          obj[3] = tmp;
          callback(obj);
          closure_14.current = true;
        }
      }
    }
  }, items1);
  closure_16 = tmp10;
  const items2 = [first, tmp9, emitIntervalMs, minSegmentDurationMs, getCurrentVideoTime];
  const tmp11 = callback(() => {
    const tmp = getCurrentVideoTime();
    if (null != tmp) {
      if (null != first) {
        const _Date = Date;
        const timestamp = Date.now();
        let tmp3 = timestamp - ref2.current < emitIntervalMs;
        if (!tmp3) {
          tmp3 = tmp - tmp11.segmentStartSec < minSegmentDurationMs / 1000;
        }
        if (!tmp3) {
          let obj = {};
          const merged = Object.assign(tmp11);
          obj.endTimeMs = timestamp;
          obj.segmentEndSec = tmp;
          callback5(obj);
          obj = { startTimeMs: null, endTimeMs: null, segmentStartSec: null, segmentEndSec: null };
          obj[0] = timestamp;
          obj[1] = timestamp;
          obj[2] = tmp;
          obj[3] = tmp;
          callback(obj);
          tmp14.current = timestamp;
        }
        tmp14 = ref2;
      }
    }
  }, items2);
  closure_17 = tmp11;
  const items3 = [first2, first3];
  first1(() => {
    let tmp = first2;
    if (first2) {
      tmp = first3;
    }
    if (!tmp) {
      callback(null);
      closure_14.current = false;
    }
  }, items3);
  const items4 = [first1, first2, first3, first, tmp11, tmp9, tmp10, getCurrentVideoTime];
  first1(() => {
    if (first1) {
      if (first2) {
        if (first3) {
          if (!ref3.current) {
            callback6();
          }
          const _window = window;
          ref.current = window.setInterval(() => {
            callback();
          }, 200);
        }
        return () => {
          if (null != ref.current) {
            const _clearInterval = clearInterval;
            clearInterval(tmp.current);
            tmp.current = null;
          }
        };
      }
    }
    const tmp3 = getCurrentVideoTime();
    if (null != first) {
      if (null != tmp3) {
        const _Date = Date;
        if (tmp3 - tmp4.segmentStartSec > 0.2) {
          const obj = {};
          const merged = Object.assign(tmp4);
          obj.endTimeMs = tmp6;
          obj.segmentEndSec = tmp3;
          callback5(obj);
        }
      }
    }
    callback(null);
    ref3.current = false;
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(tmp13.current);
      tmp13.current = null;
    }
  }, items4);
  const items5 = [first, tmp9, getCurrentVideoTime];
  let tmp14 = callback(() => {
    const tmp = getCurrentVideoTime();
    if (null != first) {
      if (null != tmp) {
        const _Date = Date;
        if (tmp - tmp2.segmentStartSec > 0.2) {
          const obj = {};
          const merged = Object.assign(tmp2);
          obj.endTimeMs = tmp4;
          obj.segmentEndSec = tmp;
          callback5(obj);
        }
        callback(null);
        closure_14.current = false;
      }
    }
  }, items5);
  const tmp15 = first(tmp14);
  closure_18 = tmp15;
  tmp15.current = tmp14;
  return {
    handlePlayerStateChange: callback((arg0) => {
      if (getCurrentVideoTime(onAnalytics[2]).VideoPlayerState.PLAYING === arg0) {
        callback2(true);
      } else if (tmp(tmp2[2]).VideoPlayerState.PAUSED === arg0) {
        ref4.current();
        callback2(false);
      }
    }, []),
    handleLoadEnd: callback(() => {
      callback3(true);
    }, []),
    handleFirstFrame: callback(() => {
      callback4(true);
    }, []),
    handleSeek: callback(() => {
      ref4.current();
    }, [])
  };
};
export const SEGMENT_ANALYTICS_EMIT_INTERVAL_MS = 4000;
export const SEGMENT_ANALYTICS_MIN_DURATION_MS = 2000;