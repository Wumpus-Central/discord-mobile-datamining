// === Module 10491: useAutoPlay ===

// Module 10491 (useAutoPlay)
import closure_0 from "noop" /* 19 */;


export const useAutoPlay = function useAutoPlay(autoPlay) {
  autoPlay = autoPlay.autoPlay;
  const React = tmp;
  const autoPlayReverse = autoPlay.autoPlayReverse;
  closure_1 = tmp2;
  const autoPlayInterval = autoPlay.autoPlayInterval;
  const prev = iter.prev;
  const next = iter.next;
  closure_5 = React.useRef();
  closure_6 = React.useRef(!tmp);
  const items = [undefined !== autoPlayReverse && autoPlayReverse, autoPlayInterval, prev, next];
  const callback = React.useCallback(() => {
    if (!ref2.current) {
      if (ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        if (closure_1) {
          let obj = { onFinished: null };
          obj[0] = closure_7;
          callback(obj);
        } else {
          obj = { onFinished: null };
          obj[0] = closure_7;
          callback2(obj);
        }
      }, autoPlayInterval);
    }
  }, items);
  const items1 = [undefined !== autoPlay && autoPlay];
  const pause = React.useCallback(() => {
    if (closure_0) {
      if (ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      closure_6.current = true;
    }
  }, items1);
  const items2 = [callback, undefined !== autoPlay && autoPlay];
  const start = React.useCallback(() => {
    if (closure_0) {
      closure_6.current = false;
      callback();
    }
  }, items2);
  const items3 = [pause, start, undefined !== autoPlay && autoPlay];
  const effect = React.useEffect(() => {
    if (closure_0) {
      start();
    } else {
      pause();
    }
    return pause;
  }, items3);
  return { pause, start };
};