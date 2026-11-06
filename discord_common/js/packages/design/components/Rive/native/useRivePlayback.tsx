// === Module 5286: useRivePlayback ===

// Module 5286 (useRivePlayback)
import noop from "module_19" /* 19 */;

const AppState = fn(17).AppState;
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/useRivePlayback.tsx");

export function useRivePlayback(riveViewRef, isReady) {
  noop = riveViewRef;
  isReady = isReady.isReady;
  const appStatePlaybackEnabled = isReady.appStatePlaybackEnabled;
  const shouldShortLoopForReducedMotion = isReady.shouldShortLoopForReducedMotion;
  closure_4 = noop.useRef(false);
  closure_5 = noop.useRef("background" === isReady.currentState);
  closure_6 = noop.useRef(false);
  noop.useRef(false);
  noop.useRef(null);
  noop.useRef(false);
  closure_10 = noop.useRef(true);
  const effect = noop.useEffect(() => {
    closure_10.current = true;
    return () => {
      closure_1_10.current = false;
    };
  }, []);
  const callback = noop.useCallback(() => {
    if (null != ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
  }, []);
  items = [callback, riveViewRef];
  const callback1 = noop.useCallback(() => {
    callback();
    if (closure_0 != null) {
      closure_0.pause();
    }
    closure_4.current = false;
  }, items);
  const items1 = [callback, shouldShortLoopForReducedMotion, callback1];
  const callback2 = noop.useCallback(() => {
    callback();
    if (shouldShortLoopForReducedMotion) {
      const _setTimeout = setTimeout;
      closure_8.current = setTimeout(() => callback1(), 5000);
    }
  }, items1);
  const items2 = [riveViewRef, callback2];
  const callback3 = noop.useCallback(() => {
    if (closure_0 != null) {
      closure_0.play();
    }
    closure_4.current = true;
    callback2();
  }, items2);
  const items3 = [appStatePlaybackEnabled, riveViewRef, callback2];
  const items4 = [isReady];
  const callback4 = noop.useCallback(() => {
    if (!ref3.current) {
      tmp.current = true;
      const _queueMicrotask = queueMicrotask;
      queueMicrotask(() => {
        closure_1_9.current = false;
        if (ref3.current) {
          if (!ref2.current) {
            if (appStatePlaybackEnabled) {
              if (ref.current) {
                closure_1_6.current = true;
              }
            }
            if (riveViewRef != null) {
              riveViewRef.playIfNeeded();
            }
            closure_1_4.current = true;
            callback2();
          }
        }
      });
    }
  }, items3);
  const effect1 = noop.useEffect(() => {
    if (isReady) {
      closure_4.current = true;
    }
  }, items4);
  const items5 = [isReady, callback2, callback];
  const effect2 = noop.useEffect(() => {
    if (isReady) {
      callback2();
      return callback;
    }
  }, items5);
  const items6 = [isReady, callback1];
  const effect3 = noop.useEffect(() => {
    let current = isReady;
    if (isReady) {
      current = ref.current;
    }
    if (current) {
      callback1();
    }
  }, items6);
  const items7 = [appStatePlaybackEnabled, isReady, callback3, callback1];
  const effect4 = noop.useEffect(() => {
    if (appStatePlaybackEnabled) {
      closure_0 = isReady.addEventListener("change", (event) => {
        if ("background" === event) {
          closure_1_5.current = true;
          let current2 = isReady;
          if (isReady) {
            current2 = ref.current;
          }
          if (current2) {
            ref2.current = true;
            callback1();
          }
        } else if ("active" === event) {
          closure_1_5.current = false;
          let current = isReady;
          if (isReady) {
            current = ref2.current;
          }
          if (current) {
            ref2.current = false;
            if (!ref3.current) {
              callback3();
            }
          }
        }
      });
      return () => closure_0.remove();
    }
  }, items7);
  const items8 = [callback1];
  const obj = { play: null, pause: null, playIfNeeded: null };
  const items9 = [callback3];
  const callback5 = noop.useCallback(() => {
    closure_7.current = true;
    callback1();
  }, items8);
  obj.play = noop.useCallback(() => {
    closure_7.current = false;
    callback3();
  }, items9);
  obj.pause = callback5;
  obj.playIfNeeded = callback4;
  return obj;
}