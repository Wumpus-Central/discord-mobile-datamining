// discord_app/modules/collectibles/profile_effects/useClock.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import react from "../../../../_runtime/00019_react.js";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importDefault;

const result = size.fileFinishedImporting("modules/collectibles/profile_effects/useClock.tsx");

export default function _default(arg0) {
  let closure_0;
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
  const ref = allowableMinInterval.useRef(num);
  const ref2 = allowableMinInterval.useRef(0);
  const ref3 = allowableMinInterval.useRef(undefined);
  const ref4 = allowableMinInterval.useRef(undefined);
  const ticking = allowableMinInterval.useRef(true);
  const ref5 = allowableMinInterval.useRef(0);
  const ref6 = allowableMinInterval.useRef(undefined);
  const callback = allowableMinInterval.useCallback(() => {
    ref5.current = 0;
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
      const _Math = Math;
      if (allowableMinInterval == null) {
        num = 120;
      }
      if (diff1 > 1.5 * min(num, ref.current)) {
        ref5.current = ref5.current + 1;
        if (null != ref6.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref6.current);
        }
        const _setTimeout = setTimeout;
        ref6.current = setTimeout(callback, 1.5);
        if (null != droppedFramesCallbackThreshold) {
          if (ref5.current > tmp12) {
            _modDef38(
              null != droppedFramesCallback,
              "useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit",
            );
            if (droppedFramesCallback()) {
              ref5.current = 0;
            }
          }
        }
      }
      ref3.current = current;
      if (diff >= ref.current - 3) {
        ref4.current = current;
        closure_0(diff);
      }
      const _requestAnimationFrame = requestAnimationFrame;
      ref2.current = requestAnimationFrame(callback2);
    }
  }, items);
  const items1 = [callback2];
  const items2 = [num];
  const reset = allowableMinInterval.useCallback(() => {
    ticking.current = true;
    ref4.current = undefined;
    cancelAnimationFrame(ref2.current);
    ref2.current = requestAnimationFrame(callback2);
  }, items1);
  const effect = allowableMinInterval.useEffect(() => {
    ref.current = num;
  }, items2);
  require("useMountEffect")(() => {
    ref2.current = requestAnimationFrame(callback2);
    return () => stop();
  });
  return { stop, reset, ticking };
}
