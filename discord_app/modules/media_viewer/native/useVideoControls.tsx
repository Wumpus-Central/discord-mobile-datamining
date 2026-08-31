// discord_app/modules/media_viewer/native/useVideoControls.tsx
import batchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import closure_5 from "../../a11y/AccessibilityStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import keys from "../../../../_runtime/00644_keys.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
keys = keys.create(() => ({ controls: "Object", paused: true }));
let closure_8 = createCacheKey.createStyles({ slider: { marginBottom: 8 } });
let result = require("set").fileFinishedImporting("modules/media_viewer/native/useVideoControls.tsx");

export default function useVideoControls(arg0, portal) {
  const _require = arg0;
  importDefault = arg2;
  let obj = _require(stateFromStores[8]);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = callback(state.useState(false), 2);
  callback = tmp6;
  const MediaViewerSourcesStore = _require(stateFromStores[9]).MediaViewerSourcesStore;
  state = MediaViewerSourcesStore.useState((spoilerIndexes) => {
    spoilerIndexes = spoilerIndexes.spoilerIndexes;
    return spoilerIndexes.has(closure_0);
  });
  const tmp9 = importDefault(stateFromStores[10])(arg0);
  closure_5 = tmp9;
  let result = null != arg2;
  if (result) {
    result = tmp2(tmp3[11]).supportOverlayVideoControls(portal);
    const tmp2Result = tmp2(tmp3[11]);
  }
  let videoURI = portal.portal;
  if (videoURI == null) {
    videoURI = portal.videoURI;
  }
  const tmp11 = importDefault(stateFromStores[10])(videoURI);
  closure_7 = tmp11;
  const items1 = [arg2, videoURI, stateFromStores, tmp11, state, tmp9, arg0];
  const effect = state.useEffect(() => {
    if (closure_5 !== closure_0) {
      if (null != tmp) {
        if (null != videoURI) {
          if (closure_7 !== tmp3) {
            closure_1.seek(0);
            let tmp6 = state;
            if (!state) {
              tmp6 = stateFromStores;
            }
            closure_1.pause(tmp6);
            callback2(tmp6);
            const obj = closure_1;
          }
        }
      }
    }
  }, items1);
  [][0] = arg0;
  if (result) {
    obj = { style: null, controls: null, paused: null, setPaused: null, onPlayPress: null };
    obj[0] = tmp.slider;
    obj[1] = arg2;
    obj[2] = tmp5[0];
    obj[3] = tmp6;
    obj[4] = tmp13;
    return videoURI(tmp8(tmp3[12]), obj, videoURI);
  }
  const obj2 = state;
  tmp = callback2();
  tmp2 = _require;
};
export const useVideoStateStore = keys;
export const initVideoStateStore = function initVideoStateStore() {
  batchUpdates.batchUpdates(() => {
    state.setState({ controls: "Object", paused: true });
  });
};
export const setMuted = function setMuted(arg0) {
  const _require = arg0;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    const useMediaPlayerMutedStore = callback(closure_1_2[6]).useMediaPlayerMutedStore;
    useMediaPlayerMutedStore.setState({ isMuted: callback });
  });
};
export const toggleMuted = function toggleMuted() {
  batchUpdates.batchUpdates(() => {
    const useMediaPlayerMutedStore = callback(table[6]).useMediaPlayerMutedStore;
    useMediaPlayerMutedStore.setState((isMuted) => ({ isMuted: !isMuted.isMuted }));
  });
};
export const setVideoStateControls = function setVideoStateControls(videoControls) {
  const _require = videoControls;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => closure_1_7.setState({ controls: closure_0 }));
};
export const setPausedState = function setPausedState(arg0) {
  const _require = arg0;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => closure_1_7.setState({ paused: closure_0 }));
};
export const tryPauseCurrentVideo = function tryPauseCurrentVideo() {
  const controls = keys.getState().controls;
  if (controls != null) {
    controls.pause(true);
  }
};
export const unpauseCurrentVideoIfNeeded = function unpauseCurrentVideoIfNeeded() {
  if (!keys.getState().paused) {
    const controls = keys.getState().controls;
    if (controls != null) {
      controls.pause(false);
    }
  }
};