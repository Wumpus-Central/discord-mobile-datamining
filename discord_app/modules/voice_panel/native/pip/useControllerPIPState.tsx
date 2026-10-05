// discord_app/modules/voice_panel/native/pip/useControllerPIPState.tsx
import embeddedActivityLocationUtils from "../../../activities/utils/embeddedActivityLocationUtils.tsx";
import FramesConstants from "../../../frames/FramesConstants.tsx";
import ActivityPanelConstants from "../../../activities/panel/ActivityPanelConstants.tsx";
import ActivitiesInTextUtils from "../../../activities/ActivitiesInTextUtils.tsx";
import VoicePanelConstants from "../../VoicePanelConstants.tsx";
import VoicePanelPIPUtils from "VoicePanelPIPUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import FramesStore from "../../../frames/FramesStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import SpeakingStore from "../../../../stores/SpeakingStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, targetDimensions;

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const asLaunched = FramesConstants.asLaunched;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let closure_2;
      let first;
      const obj = channelId(576);
      const cResult = obj.c(6);
      const tmp = channelId;
      channelId = channelId.channelId;
      const mode = channelId.mode;
      let tmp4 = mode(17190)(channelId);
      dependencyMap = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [EmbeddedActivitiesStore, FramesStore, ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        if (cResult[2] === tmp4) {
          let tmp9;
          let tmp10;
          if (cResult[3] === mode) {
            tmp9 = cResult[4];
            tmp10 = cResult[5];
          }
          const tmpResult = tmp(504);
          return tmpResult.useStateFromStores(first, tmp9, tmp10);
        }
      }
      const fn = function o() {
        const channel = ChannelStore.getChannel(channelId);
        let isVocalResult;
        if (channel != null) {
          isVocalResult = channel.isVocal();
        }
        if (isVocalResult) {
          if (!closure_2) {
            return false;
          }
        }
        const tmp4 = asLaunched(FramesStore.getMainFrame());
        if (null != tmp4) {
          if (tmp4.data.activityPanelMode === ActivityPanelModes.PIP) {
            return true;
          }
        }
        const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
        if (null == connectedActivityLocation) {
          return false;
        } else {
          const obj5 = embeddedActivityLocationUtils;
          const embeddedActivityLocationChannelId =
            obj5.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
          const channel1 = ChannelStore.getChannel(embeddedActivityLocationChannelId);
          let result = null != channel1;
          const activityPanelMode = EmbeddedActivitiesStore.getActivityPanelMode();
          if (result) {
            const tmp14Result = ActivitiesInTextUtils;
            result = tmp14Result.isActivityInTextSupportedForChannel(channel1);
          }
          if (result) {
            result = embeddedActivityLocationChannelId !== channelId;
          }
          let tmp10 = activityPanelMode === ActivityPanelModes.PIP;
          if (tmp10) {
            tmp10 = mode === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== channelId;
          }
          if (result) {
            result = tmp10;
          }
          return result;
        }
      };
      const items1 = [channelId, tmp4, mode];
      cResult[1] = channelId;
      cResult[2] = tmp4;
      cResult[3] = mode;
      cResult[4] = fn;
      cResult[5] = items1;
      tmp10 = items1;
      tmp9 = fn;
    }
  : (channelId) => {
      let closure_2;
      channelId = channelId.channelId;
      const mode = channelId.mode;
      const tmp = mode(17190)(channelId);
      dependencyMap = tmp;
      const items = [EmbeddedActivitiesStore, FramesStore, ChannelStore];
      const items1 = [channelId, tmp, mode];
      const obj = channelId(504);
      return obj.useStateFromStores(
        items,
        () => {
          const channel = ChannelStore.getChannel(channelId);
          let isVocalResult;
          if (channel != null) {
            isVocalResult = channel.isVocal();
          }
          if (isVocalResult) {
            if (!closure_2) {
              return false;
            }
          }
          const tmp4 = asLaunched(FramesStore.getMainFrame());
          if (null != tmp4) {
            if (tmp4.data.activityPanelMode === ActivityPanelModes.PIP) {
              return true;
            }
          }
          const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
          if (null == connectedActivityLocation) {
            return false;
          } else {
            const obj5 = embeddedActivityLocationUtils;
            const embeddedActivityLocationChannelId =
              obj5.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
            const channel1 = ChannelStore.getChannel(embeddedActivityLocationChannelId);
            let result = null != channel1;
            const activityPanelMode = EmbeddedActivitiesStore.getActivityPanelMode();
            if (result) {
              const tmp14Result = ActivitiesInTextUtils;
              result = tmp14Result.isActivityInTextSupportedForChannel(channel1);
            }
            if (result) {
              result = embeddedActivityLocationChannelId !== channelId;
            }
            let tmp10 = activityPanelMode === ActivityPanelModes.PIP;
            if (tmp10) {
              tmp10 = mode === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== channelId;
            }
            if (result) {
              result = tmp10;
            }
            return result;
          }
        },
        items1,
      );
    };
const __initData = {
  code: "function useControllerPIPStateTsx1(){const{scale,pipAvoidanceSpecs,windowDimensions,safeArea}=this.__closure;return{scale:scale.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get(),windowDimensions:windowDimensions.get(),safeArea:safeArea.get()};}",
};
const __initData2 = {
  code: "function useControllerPIPStateTsx2(current){const{clampPIPScale,pipState,scale}=this.__closure;const newScale=clampPIPScale({scale:current.scale,width:pipState.width,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,windowDimensions:current.windowDimensions,safeArea:current.safeArea,pipAvoidanceSpecs:current.pipAvoidanceSpecs});if(current.scale!==newScale){scale.set(newScale);}}",
};
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/useControllerPIPState.tsx");

export const useControllerPIPState = function useControllerPIPState(channelId) {
  let _undefined;
  let c11;
  let connected;
  let dimensions;
  let focusedId;
  let id;
  let mode;
  let participant;
  let tmp15;
  let tmpResult;
  let windowDimensions;
  const f130302 = () => layoutManager.getTargetDimensions(focusedId);
  channelId = channelId.channelId;
  ({ connected, focusedId } = channelId);
  const layoutManager = channelId.layoutManager;
  ({ mode, windowDimensions } = channelId);
  const pipAvoidanceSpecs = channelId.pipAvoidanceSpecs;
  const safeArea = channelId.safeArea;
  c11 = undefined;
  let tmp = channelId;
  let tmp3 = channelId(layoutManager[17]);
  const useSharedValue = tmp3.useSharedValue;
  let obj = channelId(layoutManager[18]);
  const sharedValue = useSharedValue(obj.getVoicePanelPIPScaleCached());
  let obj2 = pipAvoidanceSpecs;
  const ref = pipAvoidanceSpecs.useRef({
    id: "enabled",
    mode: "toCharArray$esjava$1",
    width: false,
    height: null,
    containerHeight: "slide_from_bottom",
    showSecondaryPIP: "_createExtraStyles",
    scale: sharedValue,
  });
  let tmp6 = windowDimensions(pipAvoidanceSpecs.useState(undefined), 2);
  const current = tmp6[0];
  let closure_8 = tmp6[1];
  let closure_9 = pipAvoidanceSpecs.useRef(current);
  const insertionEffect = pipAvoidanceSpecs.useInsertionEffect(() => {
    closure_9.current = current;
  });
  const tmp9 = closure_13({ channelId, mode });
  const tmp11 = focusedId(layoutManager[19])(channelId);
  const first1 = windowDimensions(
    pipAvoidanceSpecs.useState(() => focusedId(layoutManager[20])((fn) => fn(), 1000, { leading: true })),
    1,
  )[0];
  let items = [first1];
  const layoutEffect = pipAvoidanceSpecs.useLayoutEffect(() => () => first1.cancel(), items);
  [tmp15, c11] = windowDimensions(pipAvoidanceSpecs.useState(f130302), 2);
  const obj3 = {
    connected,
    mode,
    focusedId,
    participantTargetDimensions: tmp15,
    selfHasVideo: tmp11,
    showSecondaryPIP: tmp9,
  };
  windowDimensions(pipAvoidanceSpecs.useState(f130302), 2);
  ({ participant, dimensions } = focusedId(layoutManager[21])(channelId, layoutManager, focusedId, current, obj3));
  let obj4 = {
    id,
    showSecondaryPIP: tmp9,
    mode: tmpResult.getPIPMode({ channelId, connected, manuallyFocusedId: focusedId, mode, selfHasVideo: tmp11 }),
  };
  focusedId(layoutManager[21])(channelId, layoutManager, focusedId, current, obj3);
  const merged = Object.assign(ref.current);
  const merged1 = Object.assign(dimensions);
  id = undefined;
  const tmp10 = focusedId;
  if (participant != null) {
    id = participant.id;
  }
  tmpResult = tmp(layoutManager[22]);
  const tmpResult3 = tmp(layoutManager[16]);
  let result = tmpResult3.cheapWorkletShallowEqual(obj4, ref.current);
  let closure_2 = !result;
  const effect = obj2.useEffect(() => {
    if (closure_2) {
      ref.current = obj4;
    }
  });
  if (result) {
    obj4 = ref.current;
  }
  const tmpResult4 = tmp(layoutManager[17]);
  class R {
    constructor() {
      const obj = {
        scale: sharedValue.get(),
        pipAvoidanceSpecs: pipAvoidanceSpecs.get(),
        windowDimensions: windowDimensions.get(),
        safeArea: safeArea.get(),
      };
      return obj;
    }
  }
  R.__closure = { scale: sharedValue, pipAvoidanceSpecs, windowDimensions, safeArea };
  R.__workletHash = 16878800414836;
  R.__initData = __initData;
  const fn = function k(scale) {
    const obj = VoicePanelPIPUtils;
    const obj2 = {
      scale: scale.scale,
      width: obj4.width,
      containerHeight: obj4.containerHeight,
      showSecondaryPIP: obj4.showSecondaryPIP,
      windowDimensions: scale.windowDimensions,
      safeArea: scale.safeArea,
      pipAvoidanceSpecs: scale.pipAvoidanceSpecs,
    };
    const clampPIPScaleResult = obj.clampPIPScale(obj2);
    if (scale.scale !== clampPIPScaleResult) {
      const result = sharedValue.set(clampPIPScaleResult);
    }
  };
  fn.__closure = { clampPIPScale: tmp(layoutManager[22]).clampPIPScale, pipState: obj4, scale: sharedValue };
  fn.__workletHash = 9660590378927;
  fn.__initData = __initData2;
  ({ clampPIPScale: tmp(layoutManager[22]).clampPIPScale, pipState: obj4, scale: sharedValue });
  const animatedReaction = tmpResult4.useAnimatedReaction(R, fn);
  const items1 = [channelId, first1];
  const effect1 = obj2.useEffect(() => {
    let participant;
    const items = [ref, sharedValue];
    const batchedStoreListener = new channelId(layoutManager[15]).BatchedStoreListener(items, () => {
      const tmp = (() => {
        const speakers = ref.getSpeakers();
        const iter = speakers[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if (null != participant.getParticipant(closure_0, nextResult)) {
            iter.return();
            return nextResult;
          }
        }
      })();
      let closure_0 = tmp;
      let tmp3 = tmp !== ref.current && null != tmp;
      if (tmp3) {
        if (null == ref.current) {
          closure_8(tmp);
        } else {
          closure_10(() => closure_2_8(closure_0));
        }
      }
    });
    batchedStoreListener.attach("pipstate-change-listeners-" + batchedStoreListener);
    return () => batchedStoreListener.detach();
  }, items1);
  const items2 = [focusedId, layoutManager, tmp15];
  const effect2 = obj2.useEffect(() => {
    const f153680 = (safeAreaState) => {
      targetDimensions = targetDimensions.getTargetDimensions(closure_1_1);
      const obj = channelId(layoutManager[16]);
      if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
        targetDimensions = safeAreaState;
      }
      return targetDimensions;
    };
    _undefined(f153680);
    return layoutManager.subscribeFromItem(function updateParticipantDimensions() {
      _undefined(f153680);
    });
  }, items2);
  tmp10(layoutManager[23])(channelId, layoutManager, focusedId);
  return obj4;
};
