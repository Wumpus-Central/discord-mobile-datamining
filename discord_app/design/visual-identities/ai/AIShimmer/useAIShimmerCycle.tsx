// === Module 14246: useAIShimmerCycle ===

// Module 14246 (useAIShimmerCycle)
import waveTransition from "waveTransition" /* 14245 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("design/visual-identities/ai/AIShimmer/useAIShimmerCycle.tsx");

export const linesKeyFor = function linesKeyFor(join) {
  let joined = join;
  if (Array.isArray(join)) {
    joined = join.join("\0");
  }
  return joined;
};
export const linesFromKey = function linesFromKey(str) {
  return str.split("\0");
};
export const useAIShimmerCycle = function useAIShimmerCycle(initialDelay) {
  ({ text, delay } = initialDelay);
  initialDelay = initialDelay.initialDelay;
  const duration = initialDelay.duration;
  const reducedMotion = initialDelay.reducedMotion;
  const trailingWidth = initialDelay.trailingWidth;
  const onComplete = initialDelay.onComplete;
  const onStart = initialDelay.onStart;
  const createController = initialDelay.createController;
  let lines;
  let first;
  closure_12 = undefined;
  closure_17 = undefined;
  closure_18 = undefined;
  let current;
  let play;
  reducedMotion.useRef(null);
  let joined = text;
  if (Array.isArray(text)) {
    joined = text.join("\0");
  }
  const items = [joined];
  lines = obj.useMemo(() => joined.split("\0"), items);
  const tmp2 = duration(reducedMotion.useState(0), 2);
  first = tmp2[0];
  closure_12 = tmp4;
  reducedMotion.useRef(0);
  reducedMotion.useRef(null);
  reducedMotion.useRef(null);
  reducedMotion.useRef(true);
  closure_17 = obj.useRef(onComplete);
  closure_18 = obj.useRef(onStart);
  reducedMotion.useRef(lines);
  reducedMotion.useRef(createController);
  reducedMotion.useRef(trailingWidth);
  reducedMotion.useRef(duration);
  reducedMotion.useRef(reducedMotion);
  const effect = obj.useEffect(() => {
    closure_17.current = onComplete;
    closure_18.current = onStart;
    closure_19.current = lines;
    closure_20.current = createController;
    closure_21.current = trailingWidth;
    closure_22.current = duration;
    closure_23.current = reducedMotion;
  });
  const tmp6 = duration(reducedMotion.useState(joined), 2);
  if (tmp6[0] !== joined) {
    tmp6[1](joined);
    tmp4(0);
  }
  let num = 0;
  if (lines.length > 0) {
    num = first % lines.length;
  }
  current = lines[num];
  if (current == null) {
    current = "";
  }
  play = obj.useCallback(() => {
    closure_12((arg0) => arg0 + 1);
  }, []);
  const items1 = [play];
  const imperativeHandle = obj.useImperativeHandle(initialDelay.ref, () => ({
    play,
    stop() {
      current = ref.current;
      let stopResult;
      if (current != null) {
        stopResult = current.stop();
      }
      return stopResult;
    }
  }), items1);
  const effect1 = obj.useEffect(() => {
    let str = ref6.current[0];
    if (str == null) {
      str = "";
    }
    let currentResult = ref7.current({
      to: str,
      trailingWidth: ref8.current,
      onStart() {
        current = ref2.current;
        currentResult = undefined;
        if (current != null) {
          currentResult = current();
        }
        return currentResult;
      },
      onComplete() {
        current = ref.current;
        currentResult = undefined;
        if (current != null) {
          currentResult = current();
        }
        return currentResult;
      }
    });
    delay = currentResult;
    closure_8.current = currentResult;
    return () => {
      currentResult.destroy();
      closure_8.current = null;
    };
  }, []);
  const items2 = [duration, reducedMotion, trailingWidth];
  const effect2 = obj.useEffect(() => {
    current = ref.current;
    if (current != null) {
      const obj = { duration, reducedMotion, trailingWidth };
      current.setOptions(obj);
    }
  }, items2);
  const items3 = [joined, first, num, current, delay, initialDelay];
  const effect3 = obj.useEffect(() => {
    current = ref.current;
    if (null != current) {
      const _HermesInternal = HermesInternal;
      const combined = "" + joined + ":" + first;
      if (ref4.current !== combined) {
        ref4.current = combined;
        const current2 = ref3.current;
        ref3.current = current;
        ref5.current = null == current2;
        if (null == current2) {
          current.setTransition(tmp2, tmp2);
        } else {
          current.setTransition(current2, tmp2);
          current.play();
        }
      }
      if (null != delay) {
        if (ref10.current) {
          let current3 = waveTransition.REDUCED_MOTION_PASS_MS;
        } else {
          current3 = ref9.current;
        }
        if (ref5.current) {
          let sum = delay + initialDelay;
        } else {
          sum = delay + current3;
        }
        closure_13.current = sum;
      }
    }
  }, items3);
  const items4 = [first, play, delay];
  const effect4 = obj.useEffect(() => {
    if (null != delay) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(callback, ref2.current);
      return () => clearTimeout(closure_0);
    }
  }, items4);
  return { current, lines };
};