// discord_common/js/packages/design/components/Rive/native/useRivePlayback.tsx
import closure_0 from "noop" /* 19 */;
import { AppState } from "get ActivityIndicator" /* 17 */;

const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/useRivePlayback.tsx");

export const useRivePlayback = function useRivePlayback(riveViewRef, isReady) {
  const React = riveViewRef;
  isReady = isReady.isReady;
  const appStatePlaybackEnabled = isReady.appStatePlaybackEnabled;
  const shouldShortLoopForReducedMotion = isReady.shouldShortLoopForReducedMotion;
  closure_4 = undefined;
  closure_5 = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  closure_8 = undefined;
  closure_9 = undefined;
  let callback;
  let pause;
  let callback2;
  let play;
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
  callback = React.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
  }, []);
  const items = [callback, riveViewRef];
  pause = React.useCallback(() => {
    callback();
    if (closure_0 != null) {
      closure_0.pause();
    }
    closure_4.current = false;
  }, items);
  const items1 = [callback, shouldShortLoopForReducedMotion, pause];
  callback2 = React.useCallback(() => {
    callback();
    if (shouldShortLoopForReducedMotion) {
      const _setTimeout = setTimeout;
      closure_7.current = setTimeout(() => callback(), 5000);
    }
  }, items1);
  const items2 = [riveViewRef, callback2];
  play = React.useCallback(() => {
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
            obj.playIfNeeded();
          }
          closure_4.current = true;
          callback();
          obj = closure_0;
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
      closure_0 = isReady.addEventListener("change", (arg0) => {
        if ("background" === arg0) {
          closure_5.current = true;
          let current2 = closure_1;
          if (closure_1) {
            current2 = ref.current;
          }
          if (current2) {
            ref2.current = true;
            callback();
          }
        } else if ("active" === arg0) {
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