// discord_app/modules/collectibles/profile_effects/useClock.tsx
import noop from "../../../../_runtime/00019_noop.js";

const result = require("obj132").fileFinishedImporting("modules/collectibles/profile_effects/useClock.tsx");

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
  closure_6 = allowableMinInterval.useRef(num);
  closure_7 = allowableMinInterval.useRef(0);
  closure_8 = allowableMinInterval.useRef(undefined);
  closure_9 = allowableMinInterval.useRef(undefined);
  const ticking = allowableMinInterval.useRef(true);
  closure_11 = allowableMinInterval.useRef(0);
  closure_12 = allowableMinInterval.useRef(undefined);
  const callback = allowableMinInterval.useCallback(() => {
    closure_11.current = 0;
    if (null != ref6.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref6.current);
      ref6.current = undefined;
    }
  }, []);
  const stop = allowableMinInterval.useCallback(() => {
    ticking.current = false;
    cancelAnimationFrame(ref2.current);
    clearTimeout(ref6.current);
  }, []);
  const items = [allowableMinInterval, callback, num2, droppedFramesCallbackThreshold, droppedFramesCallback, arg0];
  const callback2 = allowableMinInterval.useCallback((current) => {
    if (ticking.current) {
      if (null == ref3.current) {
        ref3.current = current;
      }
      if (null == ref4.current) {
        ref4.current = current;
      }
      const diff = current - ref4.current;
      num = allowableMinInterval;
      const diff1 = current - ref3.current;
      if (allowableMinInterval == null) {
        num = 120;
      }
      if (diff1 > 1.5 * Math.min(num, ref.current)) {
        ref5.current = ref5.current + 1;
        if (null != ref6.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref6.current);
        }
        const _setTimeout = setTimeout;
        ref6.current = setTimeout(callback, num2);
        if (null != droppedFramesCallbackThreshold) {
          if (ref5.current > tmp12) {
            callback(num[1])(null != droppedFramesCallback, "useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit");
            if (droppedFramesCallback()) {
              ref5.current = 0;
            }
          }
        }
      }
      ref3.current = current;
      if (diff >= ref.current - 3) {
        ref4.current = current;
        callback(diff);
      }
      const _requestAnimationFrame = requestAnimationFrame;
      closure_7.current = requestAnimationFrame(callback2);
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