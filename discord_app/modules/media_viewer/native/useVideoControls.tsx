// === Module 7936: useVideoControls ===

// Module 7936 (useVideoControls)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 1259 */;
import useMediaViewerSources from "useMediaViewerSources" /* 7934 */;
import MediaPlayerMuteManager from "MediaPlayerMuteManager" /* 7937 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import module_570 from "module_570" /* 570 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let _slicedToArray = _slicedToArray_mod;
const jsx = Fragment.jsx;
const useVideoStateStore = module_570.create(() => ({ controls: "Set", paused: true }));
let closure_8 = createStyles.createStyles({ slider: { marginBottom: 8 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, portal, controls) => {
  let closure_0;
  let closure_3;
  let mediaItemHasSpoiler;
  let stateFromStores;
  let tmp10;
  let tmp11;
  let tmp5;
  let tmp6;
  let useReducedMotion;
  _require = arg0;
  importDefault = controls;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(19);
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
  const tmpResult = tmp(stateFromStores[10]);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  [tmp10, tmp11] = _slicedToArray(mediaItemHasSpoiler.useState(false), 2);
  const tmp9 = _slicedToArray(mediaItemHasSpoiler.useState(false), 2);
  _slicedToArray = tmp11;
  const obj3 = mediaItemHasSpoiler;
  const tmpResult3 = tmp(stateFromStores[11]);
  mediaItemHasSpoiler = tmpResult3.useMediaItemHasSpoiler(arg0);
  const tmp14 = require("usePrevious")(arg0);
  useReducedMotion = tmp14;
  let result = null != controls;
  if (result) {
    const tmpResult4 = tmp(stateFromStores[13]);
    result = tmpResult4.supportOverlayVideoControls(portal);
  }
  let videoURI = portal.portal;
  if (videoURI == null) {
    videoURI = portal.videoURI;
  }
  const tmp16 = require("usePrevious")(videoURI);
  let closure_7 = tmp16;
  if (cResult[2] === controls) {
    if (cResult[3] === mediaItemHasSpoiler) {
      if (cResult[4] === arg0) {
        if (cResult[5] === tmp14) {
          if (cResult[6] === tmp16) {
            if (cResult[7] === videoURI) {
              let tmp17;
              let tmp18;
              if (cResult[8] === stateFromStores) {
                tmp17 = cResult[9];
                tmp18 = cResult[10];
              }
              const effect = obj3.useEffect(tmp17, tmp18);
              if (cResult[11] !== arg0) {
                class V {
                  constructor() {
                    const obj = useMediaViewerSources;
                    obj.removeSpoiler(closure_0);
                  }
                }
                cResult[11] = arg0;
                cResult[12] = V;
              } else {
                class V {
                  constructor() {
                    const obj = useMediaViewerSources;
                    obj.removeSpoiler(closure_0);
                  }
                }
              }
              if (result) {
                class V {
                  constructor() {
                    const obj = useMediaViewerSources;
                    obj.removeSpoiler(closure_0);
                  }
                }
                const obj2 = { style: tmp4.slider, controls, paused: tmp10, setPaused: tmp11, onPlayPress: V };
                cResult[13] = controls;
                cResult[14] = V;
                cResult[15] = tmp10;
                cResult[16] = tmp4.slider;
                cResult[17] = videoURI;
                cResult[18] = videoURI(require("MediaSlider"), obj2, videoURI);
                const tmp23 = videoURI(require("MediaSlider"), obj2, videoURI);
              } else {
                class V {
                  constructor() {
                    const obj = useMediaViewerSources;
                    obj.removeSpoiler(closure_0);
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
    if (useReducedMotion !== closure_0) {
      if (null != tmp) {
        if (null != videoURI) {
          if (closure_7 !== tmp3) {
            controls.seek(0);
            controls.pause(mediaItemHasSpoiler || stateFromStores);
            tmp11(mediaItemHasSpoiler || stateFromStores);
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
}) : ((arg0, portal, controls) => {
  let closure_0;
  let closure_3;
  let mediaItemHasSpoiler;
  let stateFromStores;
  let useReducedMotion;
  _require = arg0;
  importDefault = controls;
  const tmp3 = stateFromStores;
  const tmp = closure_8();
  let obj = require("get initialized");
  const items = [useReducedMotion];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = _slicedToArray(mediaItemHasSpoiler.useState(false), 2);
  _slicedToArray = tmp7;
  const first = tmp5[0];
  const obj2 = mediaItemHasSpoiler;
  const obj3 = require("useMediaItemHasSpoiler");
  mediaItemHasSpoiler = obj3.useMediaItemHasSpoiler(arg0);
  const tmp10 = require("usePrevious")(arg0);
  useReducedMotion = tmp10;
  let result = null != controls;
  const tmp2 = _require;
  if (result) {
    const tmp2Result = tmp2(tmp3[13]);
    result = tmp2Result.supportOverlayVideoControls(portal);
  }
  let videoURI = portal.portal;
  if (videoURI == null) {
    videoURI = portal.videoURI;
  }
  const tmp12 = require("usePrevious")(videoURI);
  let closure_7 = tmp12;
  const items1 = [controls, videoURI, stateFromStores, tmp12, mediaItemHasSpoiler, tmp10, arg0];
  const effect = obj2.useEffect(() => {
    if (useReducedMotion !== closure_0) {
      if (null != tmp) {
        if (null != videoURI) {
          if (closure_7 !== tmp3) {
            controls.seek(0);
            controls.pause(mediaItemHasSpoiler || stateFromStores);
            closure_3(mediaItemHasSpoiler || stateFromStores);
          }
        }
      }
    }
  }, items1);
  [][0] = arg0;
  if (result) {
    const obj4 = { style: tmp.slider, controls, paused: first, setPaused: tmp5[1], onPlayPress: tmp14 };
    return videoURI(require("MediaSlider"), obj4, videoURI);
  }
});
let result = size.fileFinishedImporting("modules/media_viewer/native/useVideoControls.tsx");

export default tmp3;
export { useVideoStateStore };
export const initVideoStateStore = function initVideoStateStore() {
  let state;
  const obj = react_native;
  obj.batchUpdates(() => {
    state.setState({ controls: "Set", paused: true });
  });
};
export const setMuted = function setMuted(isMuted) {
  _require = isMuted;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const useMediaPlayerMutedStore = MediaPlayerMuteManager.useMediaPlayerMutedStore;
    const obj = { isMuted };
    useMediaPlayerMutedStore.setState(obj);
  });
};
export const toggleMuted = function toggleMuted() {
  const obj = react_native;
  obj.batchUpdates(() => {
    const useMediaPlayerMutedStore = require("MediaPlayerMuteManager").useMediaPlayerMutedStore;
    useMediaPlayerMutedStore.setState((isMuted) => ({ isMuted: !isMuted.isMuted }));
  });
};
export const setVideoStateControls = function setVideoStateControls(videoControls) {
  let controls;
  _require = videoControls;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { controls };
    return obj.setState(obj);
  });
};
export const setPausedState = function setPausedState(paused) {
  _require = paused;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { paused };
    return obj.setState(obj);
  });
};
export const tryPauseCurrentVideo = function tryPauseCurrentVideo() {
  const controls = obj.getState().controls;
  if (controls != null) {
    controls.pause(true);
  }
};
export const unpauseCurrentVideoIfNeeded = function unpauseCurrentVideoIfNeeded() {
  if (!obj.getState().paused) {
    const controls = obj.getState().controls;
    if (controls != null) {
      controls.pause(false);
    }
  }
};