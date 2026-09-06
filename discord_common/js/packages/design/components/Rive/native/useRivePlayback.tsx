// discord_common/js/packages/design/components/Rive/native/useRivePlayback.tsx
import noop from "../../../../../../../_runtime/metro/00019__.js";

const AppState = fn(17).AppState;
const size = fn(2);
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/Rive/native/useRivePlayback.tsx",
);

export const useRivePlayback = function useRivePlayback(riveViewRef, isReady) {
  noop = riveViewRef;
  isReady = isReady.isReady;
  const appStatePlaybackEnabled = isReady.appStatePlaybackEnabled;
  const shouldShortLoopForReducedMotion = isReady.shouldShortLoopForReducedMotion;
  closure_4 = noop.useRef(false);
  closure_5 = noop.useRef("background" === isReady.currentState);
  closure_6 = noop.useRef(false);
  noop.useRef(null);
  noop.useRef(false);
  closure_9 = noop.useRef(true);
  const effect = noop.useEffect(() => {
    closure_9.current = true;
    return () => {
      closure_1_9.current = false;
    };
  }, []);
  const callback = noop.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
  }, []);
  const items = [callback, riveViewRef];
  const pause = noop.useCallback(() => {
    callback();
    if (closure_0 != null) {
      closure_0.pause();
    }
    closure_4.current = false;
  }, items);
  const items1 = [callback, shouldShortLoopForReducedMotion, pause];
  const callback2 = noop.useCallback(() => {
    callback();
    if (shouldShortLoopForReducedMotion) {
      const _setTimeout = setTimeout;
      closure_7.current = setTimeout(() => pause(), 5000);
    }
  }, items1);
  const items2 = [riveViewRef, callback2];
  const play = noop.useCallback(() => {
    if (closure_0 != null) {
      closure_0.play();
    }
    closure_4.current = true;
    callback2();
  }, items2);
  const items3 = [appStatePlaybackEnabled, riveViewRef, callback2];
  const items4 = [isReady];
  const playIfNeeded = noop.useCallback(() => {
    if (!ref2.current) {
      tmp.current = true;
      const _queueMicrotask = queueMicrotask;
      queueMicrotask(() => {
        closure_1_8.current = false;
        if (ref2.current) {
          if (appStatePlaybackEnabled) {
            if (ref.current) {
              closure_1_6.current = true;
            }
          }
          if (riveViewRef != null) {
            obj.playIfNeeded();
          }
          closure_1_4.current = true;
          callback2();
          obj = riveViewRef;
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
  const items6 = [appStatePlaybackEnabled, isReady, play, pause];
  const effect3 = noop.useEffect(() => {
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
            pause();
          }
        } else if ("active" === event) {
          closure_1_5.current = false;
          let current = isReady;
          if (isReady) {
            current = ref2.current;
          }
          if (current) {
            ref2.current = false;
            play();
          }
        }
      });
      return () => closure_0.remove();
    }
  }, items6);
  return { play, pause, playIfNeeded };
};
