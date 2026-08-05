// discord_app/modules/media_viewer/native/useVideoControls.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { jsx } from "jsxProd";
import keys from "keys";
import createCacheKey from "createCacheKey";
import { batchUpdates } from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";

const require = arg1;
keys = keys.create(() => ({ controls: "PX_8", paused: "Array" }));
let closure_8 = createCacheKey.createStyles({ slider: { marginBottom: 8 } });
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/media_viewer/native/useVideoControls.tsx");

export default function useVideoControls(arg0, portal) {
  const _require = arg0;
  const importDefault = arg2;
  let obj = _require(stateFromStores[8]);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  stateFromStores = obj.useStateFromStores(items, () => tmp9.useReducedMotion);
  const tmp5 = callback(state.useState(false), 2);
  callback = tmp6;
  const MediaViewerSourcesStore = _require(stateFromStores[9]).MediaViewerSourcesStore;
  state = MediaViewerSourcesStore.useState((spoilerIndexes) => {
    spoilerIndexes = spoilerIndexes.spoilerIndexes;
    return spoilerIndexes.has(closure_0);
  });
  const tmp9 = importDefault(stateFromStores[10])(arg0);
  maybeApplyNoTextColorForLightCustomTheme = tmp9;
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
  const keys = tmp11;
  const items1 = [arg2, videoURI, stateFromStores, tmp11, state, tmp9, arg0];
  const effect = state.useEffect(() => {
    if (maybeApplyNoTextColorForLightCustomTheme !== closure_0) {
      if (null != tmp) {
        if (null != videoURI) {
          if (closure_7 !== tmp3) {
            closure_1.seek(0);
            let tmp6 = state;
            if (!state) {
              tmp6 = stateFromStores;
            }
            closure_1.pause(tmp6);
            tmp6(tmp6);
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
    state.setState({ controls: "PX_8", paused: "Array" });
  });
};
export const setMuted = function setMuted(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => {
    const useMediaPlayerMutedStore = callback(outer1_2[6]).useMediaPlayerMutedStore;
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
  _batchUpdates.batchUpdates(() => outer1_7.setState({ controls: closure_0 }));
};
export const setPausedState = function setPausedState(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => outer1_7.setState({ paused: closure_0 }));
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