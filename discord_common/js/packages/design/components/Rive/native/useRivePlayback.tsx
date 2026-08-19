// === Module 4161: useRivePlayback ===

// Module 4161 (useRivePlayback)
import noop from "noop" /* 19 */;
import { AppState } from "get ActivityIndicator" /* 17 */;

const result = require("obj132").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/useRivePlayback.tsx");

export const useRivePlayback = function useRivePlayback(riveViewRef, isReady) {
  const React = riveViewRef;
  isReady = isReady.isReady;
  const appStatePlaybackEnabled = isReady.appStatePlaybackEnabled;
  const shouldShortLoopForReducedMotion = isReady.shouldShortLoopForReducedMotion;
  closure_4 = React.useRef(false);
  closure_5 = React.useRef("background" === isReady.currentState);
  closure_6 = React.useRef(false);
  closure_7 = React.useRef(null);
  closure_8 = React.useRef(false);
  closure_9 = React.useRef(true);
  const effect = React.useEffect(() => {
    closure_9.current = true;
    return () => {
      closure_9.current = false;
    };
  }, []);
  const callback = React.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, []);
  const items = [callback, riveViewRef];
  const pause = React.useCallback(() => {
    callback();
    if (closure_0 != null) {
      closure_0.pause();
    }
    closure_4.current = false;
  }, items);
  const items1 = [callback, shouldShortLoopForReducedMotion, pause];
  const callback2 = React.useCallback(() => {
    callback();
    if (shouldShortLoopForReducedMotion) {
      const _setTimeout = setTimeout;
      closure_7.current = setTimeout(() => callback(), 5000);
    }
  }, items1);
  const items2 = [riveViewRef, callback2];
  const play = React.useCallback(() => {
    if (closure_0 != null) {
      closure_0.play();
    }
    closure_4.current = true;
    callback2();
  }, items2);
  const items3 = [appStatePlaybackEnabled, riveViewRef, callback2];
  const items4 = [isReady];
  const playIfNeeded = React.useCallback(() => {
    if (!ref2.current) {
      tmp.current = true;
      const _queueMicrotask = queueMicrotask;
      queueMicrotask(() => {
        closure_8.current = false;
        if (ref2.current) {
          if (closure_2) {
            if (ref.current) {
              closure_6.current = true;
            }
          }
          if (closure_0 != null) {
            closure_0.playIfNeeded();
          }
          closure_4.current = true;
          callback();
        }
      });
    }
  }, items3);
  const effect1 = React.useEffect(() => {
    if (isReady) {
      closure_4.current = true;
    }
  }, items4);
  const items5 = [isReady, callback2, callback];
  const effect2 = React.useEffect(() => {
    if (isReady) {
      callback2();
      return callback;
    }
  }, items5);
  const items6 = [appStatePlaybackEnabled, isReady, play, pause];
  const effect3 = React.useEffect(() => {
    if (appStatePlaybackEnabled) {
      closure_0 = isReady.addEventListener("change", (event) => {
        if ("background" === event) {
          closure_5.current = true;
          let current2 = closure_1;
          if (closure_1) {
            current2 = ref.current;
          }
          if (current2) {
            ref2.current = true;
            callback();
          }
        } else if ("active" === event) {
          closure_5.current = false;
          let current = closure_1;
          if (closure_1) {
            current = ref2.current;
          }
          if (current) {
            ref2.current = false;
            callback2();
          }
        }
      });
      return () => closure_0.remove();
    }
  }, items6);
  return { play, pause, playIfNeeded };
};