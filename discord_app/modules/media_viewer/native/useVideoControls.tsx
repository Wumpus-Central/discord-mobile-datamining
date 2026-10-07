// discord_app/modules/media_viewer/native/useVideoControls.tsx
import ReactBatchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import useMediaViewerSources from "useMediaViewerSources.tsx";
import MediaPlayerMuteManager from "MediaPlayerMuteManager.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const module_570 = fn(570);
const obj5 = module_570.create(() => ({ controls: "Reflect", paused: true }));
const createStyles = fn(4896);
let closure_8 = createStyles.createStyles({ slider: { marginBottom: 8 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useVideoControls.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, portal, controls) => {
      _require = arg0;
      importDefault = controls;
      const cResult = require("c").c(19);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [useReducedMotion];
        const fn = function f() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const obj = require("c");
      stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
      const obj3 = mediaItemHasSpoiler;
      const tmpResult = require("initialize");
      [tmp10, tmp11] = mediaItemHasSpoiler.useState(false);
      _slicedToArray = tmp11;
      const tmp9 = _slicedToArray(mediaItemHasSpoiler.useState(false), 2);
      mediaItemHasSpoiler = require("useMediaItemHasSpoiler").useMediaItemHasSpoiler(arg0);
      const tmp14 = require("usePrevious")(arg0);
      useReducedMotion = tmp14;
      let result = null != controls;
      if (result) {
        result = tmp(tmp2[13]).supportOverlayVideoControls(portal);
        const tmpResult4 = tmp(tmp2[13]);
      }
      let videoURI = portal.portal;
      if (videoURI == null) {
        videoURI = portal.videoURI;
      }
      const tmp16 = require("usePrevious")(videoURI);
      closure_7 = tmp16;
      if (cResult[2] === controls) {
        if (cResult[3] === mediaItemHasSpoiler) {
          if (cResult[4] === arg0) {
            if (cResult[5] === tmp14) {
              if (cResult[6] === tmp16) {
                if (cResult[7] === videoURI) {
                  if (cResult[8] === stateFromStores) {
                    let tmp17 = cResult[9];
                    let tmp18 = cResult[10];
                  }
                  const effect = obj3.useEffect(tmp17, tmp18);
                  if (cResult[11] !== arg0) {
                    class V {
                      constructor() {
                        obj = closure_0(closure_2[14]);
                        removeSpoilerResult = obj.removeSpoiler(closure_0);
                        return;
                      }
                    }
                    cResult[11] = arg0;
                    cResult[12] = V;
                  } else {
                    class V {
                      constructor() {
                        obj = closure_0(closure_2[14]);
                        removeSpoilerResult = obj.removeSpoiler(closure_0);
                        return;
                      }
                    }
                  }
                  if (result) {
                    class V {
                      constructor() {
                        obj = closure_0(closure_2[14]);
                        removeSpoilerResult = obj.removeSpoiler(closure_0);
                        return;
                      }
                    }
                    const obj2 = { style: tmp4.slider, controls, paused: tmp10, setPaused: tmp11, onPlayPress: V };
                    const tmp23 = videoURI(tmp13(tmp2[15]), obj2, videoURI);
                    cResult[13] = controls;
                    cResult[14] = V;
                    cResult[15] = tmp10;
                    cResult[16] = tmp4.slider;
                    cResult[17] = videoURI;
                    cResult[18] = tmp23;
                  } else {
                    class V {
                      constructor() {
                        obj = closure_0(closure_2[14]);
                        removeSpoilerResult = obj.removeSpoiler(closure_0);
                        return;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const fn2 = function y() {
        if (closure_5 !== closure_0) {
          if (null != tmp) {
            if (null != videoURI) {
              if (closure_7 !== tmp3) {
                controls.seek(0);
                let tmp6 = mediaItemHasSpoiler;
                if (!mediaItemHasSpoiler) {
                  tmp6 = stateFromStores;
                }
                controls.pause(tmp6);
                tmp11(tmp6);
              }
            }
          }
        }
      };
      const items1 = [controls, videoURI, stateFromStores, tmp16, mediaItemHasSpoiler, tmp14, arg0];
      cResult[2] = controls;
      cResult[3] = mediaItemHasSpoiler;
      cResult[4] = arg0;
      cResult[5] = tmp14;
      cResult[6] = tmp16;
      cResult[7] = videoURI;
      cResult[8] = stateFromStores;
      cResult[9] = fn2;
      cResult[10] = items1;
      tmp18 = items1;
      tmp17 = fn2;
      const tmpResult3 = require("useMediaItemHasSpoiler");
    }
  : (arg0, portal, controls) => {
      _require = arg0;
      importDefault = controls;
      const tmp = closure_8();
      const tmp2 = _require;
      const items = [useReducedMotion];
      stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const tmp5 = _slicedToArray(mediaItemHasSpoiler.useState(false), 2);
      _slicedToArray = tmp6;
      const obj = require("initialize");
      const obj2 = mediaItemHasSpoiler;
      mediaItemHasSpoiler = require("useMediaItemHasSpoiler").useMediaItemHasSpoiler(arg0);
      const tmp9 = require("usePrevious")(arg0);
      useReducedMotion = tmp9;
      let result = null != controls;
      if (result) {
        result = tmp2(tmp3[13]).supportOverlayVideoControls(portal);
        const tmp2Result = tmp2(tmp3[13]);
      }
      let videoURI = portal.portal;
      if (videoURI == null) {
        videoURI = portal.videoURI;
      }
      const tmp11 = require("usePrevious")(videoURI);
      closure_7 = tmp11;
      const items1 = [controls, videoURI, stateFromStores, tmp11, mediaItemHasSpoiler, tmp9, arg0];
      const effect = obj2.useEffect(() => {
        if (closure_5 !== closure_0) {
          if (null != tmp) {
            if (null != videoURI) {
              if (closure_7 !== tmp3) {
                controls.seek(0);
                let tmp6 = mediaItemHasSpoiler;
                if (!mediaItemHasSpoiler) {
                  tmp6 = stateFromStores;
                }
                controls.pause(tmp6);
                closure_3(tmp6);
              }
            }
          }
        }
      }, items1);
      [][0] = arg0;
      if (result) {
        const obj4 = { style: tmp.slider, controls, paused: tmp5[0], setPaused: tmp6, onPlayPress: tmp13 };
        return videoURI(tmp8(tmp3[15]), obj4, videoURI);
      }
      const obj3 = require("useMediaItemHasSpoiler");
    };
export const useVideoStateStore = obj5;
export const initVideoStateStore = function initVideoStateStore() {
  ReactBatchUpdates.batchUpdates(() => {
    state.setState({ controls: "Reflect", paused: true });
  });
};
export const setMuted = function setMuted(isMuted) {
  _require = isMuted;
  require("ReactBatchUpdates").batchUpdates(() => {
    const useMediaPlayerMutedStore = MediaPlayerMuteManager.useMediaPlayerMutedStore;
    useMediaPlayerMutedStore.setState({ isMuted });
  });
};
export const toggleMuted = function toggleMuted() {
  ReactBatchUpdates.batchUpdates(() => {
    const useMediaPlayerMutedStore = require("MediaPlayerMuteManager").useMediaPlayerMutedStore;
    useMediaPlayerMutedStore.setState((isMuted) => ({ isMuted: !isMuted.isMuted }));
  });
};
export const setVideoStateControls = function setVideoStateControls(videoControls) {
  _require = videoControls;
  require("ReactBatchUpdates").batchUpdates(() => obj5.setState({ controls }));
};
export const setPausedState = function setPausedState(paused) {
  _require = paused;
  require("ReactBatchUpdates").batchUpdates(() => obj5.setState({ paused }));
};
export const tryPauseCurrentVideo = function tryPauseCurrentVideo() {
  const controls = obj5.getState().controls;
  if (controls != null) {
    controls.pause(true);
  }
};
export const unpauseCurrentVideoIfNeeded = function unpauseCurrentVideoIfNeeded() {
  if (!obj5.getState().paused) {
    const controls = obj5.getState().controls;
    if (controls != null) {
      controls.pause(false);
    }
  }
};
