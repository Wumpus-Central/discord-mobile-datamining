// _runtime/10116_useAutoPlay.js
import noop from "noop";


export const useAutoPlay = function useAutoPlay(autoPlay) {
  autoPlay = autoPlay.autoPlay;
  const React = tmp;
  const autoPlayReverse = autoPlay.autoPlayReverse;
  let closure_1 = tmp2;
  const autoPlayInterval = autoPlay.autoPlayInterval;
  const prev = iter.prev;
  const next = iter.next;
  let closure_5 = React.useRef();
  let closure_6 = React.useRef(!tmp);
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
    if (noop) {
      if (ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      closure_6.current = true;
    }
  }, items1);
  const items2 = [callback, undefined !== autoPlay && autoPlay];
  const start = React.useCallback(() => {
    if (noop) {
      closure_6.current = false;
      callback();
    }
  }, items2);
  const items3 = [pause, start, undefined !== autoPlay && autoPlay];
  const effect = React.useEffect(() => {
    if (noop) {
      start();
    } else {
      pause();
    }
    return pause;
  }, items3);
  return { pause, start };
};