// === Module 9215: allowableMinInterval ===

// Module 9215 (allowableMinInterval)
import closure_2 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/collectibles/profile_effects/useClock.tsx");

export default function _default(arg0) {
  importDefault = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let num = obj.minInterval;
  if (num === undefined) {
    num = 41.666666666666664;
  }
  const allowableMinInterval = obj.allowableMinInterval;
  const droppedFramesCallbackThreshold = obj.droppedFramesCallbackThreshold;
  const droppedFramesCallback = obj.droppedFramesCallback;
  let num2 = obj.droppedFramesResetTime;
  if (num2 === undefined) {
    num2 = 3000;
  }
  closure_6 = undefined;
  closure_7 = undefined;
  closure_8 = undefined;
  closure_9 = undefined;
  let ticking;
  closure_11 = undefined;
  closure_12 = undefined;
  let callback;
  let stop;
  let callback2;
  closure_6 = allowableMinInterval.useRef(num);
  closure_7 = allowableMinInterval.useRef(0);
  closure_8 = allowableMinInterval.useRef(undefined);
  closure_9 = allowableMinInterval.useRef(undefined);
  ticking = allowableMinInterval.useRef(true);
  closure_11 = allowableMinInterval.useRef(0);
  closure_12 = allowableMinInterval.useRef(undefined);
  callback = allowableMinInterval.useCallback(() => {
    closure_11.current = 0;
    if (null != ref6.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = undefined;
    }
  }, []);
  stop = allowableMinInterval.useCallback(() => {
    ticking.current = false;
    cancelAnimationFrame(ref2.current);
    clearTimeout(ref6.current);
  }, []);
  const items = [allowableMinInterval, callback, num2, droppedFramesCallbackThreshold, droppedFramesCallback, arg0];
  callback2 = allowableMinInterval.useCallback((current) => {
    if (ticking.current) {
      if (null == ref3.current) {
        tmp2.current = current;
      }
      if (null == ref4.current) {
        tmp4.current = current;
      }
      const diff = current - tmp4.current;
      num = allowableMinInterval;
      const diff1 = current - tmp2.current;
      if (allowableMinInterval == null) {
        num = 120;
      }
      if (diff1 > 1.5 * Math.min(num, ref.current)) {
        ref5.current = ref5.current + 1;
        if (null != ref6.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp22.current);
        }
        const _setTimeout = setTimeout;
        ref6.current = setTimeout(callback, num2);
        if (null != droppedFramesCallbackThreshold) {
          if (tmp21.current > tmp12) {
            callback(num[1])(null != droppedFramesCallback, "useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit");
            if (droppedFramesCallback()) {
              tmp21.current = 0;
            }
          }
        }
      }
      ref3.current = current;
      if (diff >= tmp8.current - 3) {
        tmp4.current = current;
        callback(diff);
      }
      const _requestAnimationFrame = requestAnimationFrame;
      closure_7.current = requestAnimationFrame(callback2);
      tmp8 = ref;
    }
  }, items);
  const items1 = [callback2];
  const items2 = [num];
  const reset = allowableMinInterval.useCallback(() => {
    ticking.current = true;
    closure_9.current = undefined;
    cancelAnimationFrame(ref2.current);
    ref2.current = requestAnimationFrame(callback2);
  }, items1);
  const effect = allowableMinInterval.useEffect(() => {
    closure_6.current = num;
  }, items2);
  importDefault(num[2])(() => {
    closure_7.current = requestAnimationFrame(callback2);
    return () => callback();
  });
  return { stop, reset, ticking };
};