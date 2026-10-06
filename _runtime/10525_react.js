// _runtime/10525_react.js
import react from "00019_react.js";

export const useAutoPlay = function useAutoPlay(autoPlay) {
  autoPlay = autoPlay.autoPlay;
  let closure_0 = tmp;
  const autoPlayReverse = autoPlay.autoPlayReverse;
  const tmp2 = undefined !== autoPlayReverse && autoPlayReverse;
  let closure_1 = tmp2;
  const autoPlayInterval = autoPlay.autoPlayInterval;
  const prev = iter.prev;
  const next = iter.next;
  let closure_5 = react.useRef();
  let closure_6 = react.useRef(!tmp);
  const items = [tmp2, autoPlayInterval, prev, next];
  const callback = react.useCallback(() => {
    let onFinished;
    if (!ref2.current) {
      if (ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        if (closure_1_1) {
          const obj2 = { onFinished };
          prev(obj2);
        } else {
          const obj = { onFinished };
          next(obj);
        }
      }, autoPlayInterval);
    }
  }, items);
  const items1 = [undefined !== autoPlay && autoPlay];
  const pause = react.useCallback(() => {
    if (closure_0) {
      if (ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp2.current);
      }
      ref2.current = true;
    }
  }, items1);
  const items2 = [callback, undefined !== autoPlay && autoPlay];
  const start = react.useCallback(() => {
    if (closure_0) {
      ref2.current = false;
      callback();
    }
  }, items2);
  const items3 = [pause, start, undefined !== autoPlay && autoPlay];
  const effect = react.useEffect(() => {
    if (closure_0) {
      start();
    } else {
      pause();
    }
    return pause;
  }, items3);
  return { pause, start };
};
