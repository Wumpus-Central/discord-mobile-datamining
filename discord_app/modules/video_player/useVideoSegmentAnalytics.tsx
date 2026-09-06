// === Module 15135: useVideoSegmentAnalytics ===

// Module 15135 (useVideoSegmentAnalytics)
import DiscordVideoPlayerTypes from "DiscordVideoPlayerTypes" /* 7706 */;
import _slicedToArray from "module_32" /* 32 */;
import "module_19";

require = fn;
const noop = fn(19);
({ useRef: closure_4, useCallback: hasOwnProperty, useEffect: metroRequire } = noop);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_player/useVideoSegmentAnalytics.tsx");

export default function useVideoSegmentAnalytics(getCurrentVideoTime) {
  getCurrentVideoTime = getCurrentVideoTime.getCurrentVideoTime;
  const onAnalytics = getCurrentVideoTime.onAnalytics;
  const emitIntervalMs = getCurrentVideoTime.emitIntervalMs;
  const minSegmentDurationMs = getCurrentVideoTime.minSegmentDurationMs;
  let tmp = emitIntervalMs(minSegmentDurationMs.useState(null), 2);
  const first = tmp[0];
  closure_5 = tmp[1];
  let tmp3 = emitIntervalMs(minSegmentDurationMs.useState(false), 2);
  const first1 = tmp3[0];
  closure_7 = tmp3[1];
  const tmp5 = emitIntervalMs(minSegmentDurationMs.useState(false), 2);
  const first2 = tmp5[0];
  closure_9 = tmp5[1];
  const tmp7 = emitIntervalMs(minSegmentDurationMs.useState(false), 2);
  const first3 = tmp7[0];
  closure_11 = tmp7[1];
  first(null);
  first(Date.now());
  first(false);
  const items = [onAnalytics];
  const tmp9 = closure_5((segmentEndSec) => {
    if (segmentEndSec.segmentEndSec >= segmentEndSec.segmentStartSec) {
      const obj = { start_time: null, end_time: null, duration: null, segment_start_sec: null, segment_end_sec: null, segment_duration_sec: null };
      ({ startTimeMs: obj.start_time, endTimeMs: obj.end_time } = segmentEndSec);
      obj.duration = segmentEndSec.endTimeMs - segmentEndSec.startTimeMs;
      ({ segmentStartSec: obj.segment_start_sec, segmentEndSec: obj.segment_end_sec } = segmentEndSec);
      obj.segment_duration_sec = segmentEndSec.segmentEndSec - segmentEndSec.segmentStartSec;
      onAnalytics(obj);
    }
  }, items);
  closure_15 = tmp9;
  const items1 = [getCurrentVideoTime, first2, first3];
  const tmp10 = closure_5(() => {
    const tmp = getCurrentVideoTime();
    if (null != tmp) {
      if (first2) {
        if (first3) {
          const _Date = Date;
          const timestamp = Date.now();
          const obj = { startTimeMs: timestamp, endTimeMs: timestamp, segmentStartSec: tmp, segmentEndSec: tmp };
          closure_5(obj);
          closure_14.current = true;
        }
      }
    }
  }, items1);
  closure_16 = tmp10;
  const items2 = [first, tmp9, emitIntervalMs, minSegmentDurationMs, getCurrentVideoTime];
  const tmp11 = closure_5(() => {
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
          closure_15(obj);
          obj = { startTimeMs: timestamp, endTimeMs: timestamp, segmentStartSec: tmp, segmentEndSec: tmp };
          closure_5(obj);
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
      closure_5(null);
      closure_14.current = false;
    }
  }, items3);
  const items4 = [first1, first2, first3, first, tmp11, tmp9, tmp10, getCurrentVideoTime];
  first1(() => {
    if (first1) {
      if (first2) {
        if (first3) {
          if (!ref3.current) {
            closure_16();
          }
          const _window = window;
          ref.current = window.setInterval(() => {
            closure_1_17();
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
          closure_15(obj);
        }
      }
    }
    closure_5(null);
    ref3.current = false;
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(tmp13.current);
      tmp13.current = null;
    }
  }, items4);
  const items5 = [first, tmp9, getCurrentVideoTime];
  let tmp14 = closure_5(() => {
    const tmp = getCurrentVideoTime();
    if (null != first) {
      if (null != tmp) {
        const _Date = Date;
        if (tmp - tmp2.segmentStartSec > 0.2) {
          const obj = {};
          const merged = Object.assign(tmp2);
          obj.endTimeMs = tmp4;
          obj.segmentEndSec = tmp;
          closure_15(obj);
        }
        closure_5(null);
        closure_14.current = false;
      }
    }
  }, items5);
  const tmp15 = first(tmp14);
  tmp15.current = tmp14;
  return {
    handlePlayerStateChange: closure_5((arg0) => {
      if (DiscordVideoPlayerTypes.VideoPlayerState.PLAYING === arg0) {
        closure_7(true);
      } else if (tmp(7706).VideoPlayerState.PAUSED === arg0) {
        ref4.current();
        closure_7(false);
      }
    }, []),
    handleLoadEnd: closure_5(() => {
      closure_9(true);
    }, []),
    handleFirstFrame: closure_5(() => {
      closure_11(true);
    }, []),
    handleSeek: closure_5(() => {
      ref4.current();
    }, [])
  };
};
export const SEGMENT_ANALYTICS_EMIT_INTERVAL_MS = 4000;
export const SEGMENT_ANALYTICS_MIN_DURATION_MS = 2000;