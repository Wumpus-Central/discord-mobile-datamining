// discord_app/modules/media_viewer/native/useVideoControls.tsx
import ReactBatchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import useMediaViewerSources from "useMediaViewerSources.tsx";
import MediaPlayerMuteManager from "MediaPlayerMuteManager.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
const jsx = fn(21).jsx;
let module_560 = fn(560);
module_560 = module_560.create(() => ({ controls: "PX_16", paused: true }));
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ slider: { marginBottom: 8 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useVideoControls.tsx");

export default function useVideoControls(arg0, portal, controls) {
  _require = arg0;
  importDefault = controls;
  let obj = require("initialize");
  const items = [useReducedMotion];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = _slicedToArray(state.useState(false), 2);
  _slicedToArray = tmp6;
  const MediaViewerSourcesStore = require("useMediaViewerSources").MediaViewerSourcesStore;
  state = MediaViewerSourcesStore.useState((spoilerIndexes) => {
    spoilerIndexes = spoilerIndexes.spoilerIndexes;
    return spoilerIndexes.has(closure_0);
  });
  const tmp9 = require("usePrevious")(arg0);
  useReducedMotion = tmp9;
  let result = null != controls;
  if (result) {
    result = tmp2(tmp3[11]).supportOverlayVideoControls(portal);
    const tmp2Result = tmp2(tmp3[11]);
  }
  let videoURI = portal.portal;
  if (videoURI == null) {
    videoURI = portal.videoURI;
  }
  const tmp11 = require("usePrevious")(videoURI);
  closure_7 = tmp11;
  const items1 = [controls, videoURI, stateFromStores, tmp11, state, tmp9, arg0];
  const effect = state.useEffect(() => {
    if (closure_5 !== closure_0) {
      if (null != tmp) {
        if (null != videoURI) {
          if (closure_7 !== tmp3) {
            controls.seek(0);
            let tmp6 = state;
            if (!state) {
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
    obj = { style: tmp.slider, controls, paused: tmp5[0], setPaused: tmp6, onPlayPress: tmp13 };
    return videoURI(tmp8(tmp3[12]), obj, videoURI);
  }
  tmp = closure_8();
  tmp2 = _require;
}
export const useVideoStateStore = module_560;
export const initVideoStateStore = function initVideoStateStore() {
  ReactBatchUpdates.batchUpdates(() => {
    state.setState({ controls: "PX_16", paused: true });
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
  require("ReactBatchUpdates").batchUpdates(() => module_560.setState({ controls }));
};
export const setPausedState = function setPausedState(paused) {
  _require = paused;
  require("ReactBatchUpdates").batchUpdates(() => module_560.setState({ paused }));
};
export const tryPauseCurrentVideo = function tryPauseCurrentVideo() {
  const controls = module_560.getState().controls;
  if (controls != null) {
    controls.pause(true);
  }
};
export const unpauseCurrentVideoIfNeeded = function unpauseCurrentVideoIfNeeded() {
  if (!module_560.getState().paused) {
    const controls = module_560.getState().controls;
    if (controls != null) {
      controls.pause(false);
    }
  }
};
