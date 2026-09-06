// _runtime/metro/10778__.js
import noop from "00019__.js";

export const useAutoPlay = function useAutoPlay(autoPlay) {
  autoPlay = autoPlay.autoPlay;
  closure_0 = tmp;
  const autoPlayReverse = autoPlay.autoPlayReverse;
  closure_1 = tmp2;
  const autoPlayInterval = autoPlay.autoPlayInterval;
  const prev = iter.prev;
  const next = iter.next;
  noop.useRef();
  noop.useRef(!(undefined !== autoPlay && autoPlay));
  const items = [undefined !== autoPlayReverse && autoPlayReverse, autoPlayInterval, prev, next];
  const callback = noop.useCallback(() => {
    if (!ref2.current) {
      if (ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        if (closure_1_1) {
          let obj = { onFinished };
          prev(obj);
        } else {
          obj = { onFinished };
          next(obj);
        }
      }, autoPlayInterval);
    }
  }, items);
  const items1 = [undefined !== autoPlay && autoPlay];
  const pause = noop.useCallback(() => {
    if (closure_0) {
      if (ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      closure_6.current = true;
    }
  }, items1);
  const items2 = [callback, undefined !== autoPlay && autoPlay];
  const start = noop.useCallback(() => {
    if (closure_0) {
      closure_6.current = false;
      callback();
    }
  }, items2);
  const items3 = [pause, start, undefined !== autoPlay && autoPlay];
  const effect = noop.useEffect(() => {
    if (closure_0) {
      start();
    } else {
      pause();
    }
    return pause;
  }, items3);
  return { pause, start };
};
