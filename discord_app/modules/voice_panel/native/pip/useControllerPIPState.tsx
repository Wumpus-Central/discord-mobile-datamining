// discord_app/modules/voice_panel/native/pip/useControllerPIPState.tsx
import embeddedActivityLocationUtils from "../../../activities/utils/embeddedActivityLocationUtils.tsx";
import ActivitiesInTextUtils from "../../../activities/ActivitiesInTextUtils.tsx";
import VoicePanelPIPUtils from "VoicePanelPIPUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import FramesStore from "../../../frames/FramesStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import PIPSpeakerStore from "PIPSpeakerStore.tsx";

require = fn;
const VoicePanelModes = fn(10898).VoicePanelModes;
const ActivityPanelModes = fn(5609).ActivityPanelModes;
const asLaunched = fn(6776).asLaunched;
const ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShowSecondaryPIP(channelId) {
      const cResult = channelId(576).c(6);
      channelId = channelId.channelId;
      const mode = channelId.mode;
      let tmp4 = mode(18477)(channelId);
      dependencyMap = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [EmbeddedActivitiesStore, FramesStore, ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        if (cResult[2] === tmp4) {
          if (cResult[3] === mode) {
            let tmp9 = cResult[4];
            let tmp10 = cResult[5];
          }
          return tmp(504).useStateFromStores(first, tmp9, tmp10);
        }
      }
      const fn = function l() {
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
          const embeddedActivityLocationChannelId =
            embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
          const channel1 = ChannelStore.getChannel(embeddedActivityLocationChannelId);
          let result = null != channel1;
          const activityPanelMode = EmbeddedActivitiesStore.getActivityPanelMode();
          if (result) {
            result = ActivitiesInTextUtils.isActivityInTextSupportedForChannel(channel1);
            const tmp14Result = ActivitiesInTextUtils;
          }
          if (result) {
            result = embeddedActivityLocationChannelId !== channelId;
          }
          let tmp10 = activityPanelMode === ActivityPanelModes.PIP;
          if (tmp10) {
            tmp10 = mode === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== channelId;
            const tmp13 = mode === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== channelId;
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
      const obj = channelId(576);
      tmp = channelId;
    }
  : function useShowSecondaryPIP(channelId) {
      channelId = channelId.channelId;
      const mode = channelId.mode;
      const tmp = mode(18477)(channelId);
      dependencyMap = tmp;
      const items = [EmbeddedActivitiesStore, FramesStore, ChannelStore];
      const items1 = [channelId, tmp, mode];
      return channelId(504).useStateFromStores(
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
            const embeddedActivityLocationChannelId =
              embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
            const channel1 = ChannelStore.getChannel(embeddedActivityLocationChannelId);
            let result = null != channel1;
            const activityPanelMode = EmbeddedActivitiesStore.getActivityPanelMode();
            if (result) {
              result = ActivitiesInTextUtils.isActivityInTextSupportedForChannel(channel1);
              const tmp14Result = ActivitiesInTextUtils;
            }
            if (result) {
              result = embeddedActivityLocationChannelId !== channelId;
            }
            let tmp10 = activityPanelMode === ActivityPanelModes.PIP;
            if (tmp10) {
              tmp10 = mode === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== channelId;
              const tmp13 = mode === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== channelId;
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/useControllerPIPState.tsx");

export const useControllerPIPState = function useControllerPIPState(channelId) {
  channelId = channelId.channelId;
  ({ connected, focusedId } = channelId);
  const layoutManager = channelId.layoutManager;
  dependencyMap = layoutManager;
  ({ mode, windowDimensions } = channelId);
  const pipAvoidanceSpecs = channelId.pipAvoidanceSpecs;
  const safeArea = channelId.safeArea;
  c7 = undefined;
  let obj7;
  let obj = obj7(5052);
  const sharedValue = obj.useSharedValue(obj7(18595).getVoicePanelPIPScaleCached());
  const ref = pipAvoidanceSpecs.useRef({
    id: "enabled",
    mode: "toCharArray$esjava$1",
    width: false,
    height: null,
    containerHeight: "box-none",
    showSecondaryPIP: null,
    scale: sharedValue,
  });
  let obj2 = obj7(18595);
  const items = [obj7];
  const stateFromStores = obj7(504).useStateFromStores(items, () => PIPSpeakerStore.getSpeakerId(obj7));
  const tmp6 = closure_12({ channelId, mode });
  const tmp8 = ref(18658)(channelId);
  const obj4 = obj7(504);
  const tmp7 = ref;
  [tmp10, c7] = windowDimensions(
    pipAvoidanceSpecs.useState(() => closure_2.getTargetDimensions(ref)),
    2,
  );
  const tmp9 = windowDimensions(
    pipAvoidanceSpecs.useState(() => closure_2.getTargetDimensions(ref)),
    2,
  );
  const pIPMode = obj7(18446).getPIPMode({
    channelId,
    connected,
    manuallyFocusedId: focusedId,
    mode,
    selfHasVideo: tmp8,
  });
  const obj5 = obj7(18446);
  const obj6 = {
    connected,
    mode,
    focusedId,
    participantTargetDimensions: tmp10,
    selfHasVideo: tmp8,
    showSecondaryPIP: tmp6,
  };
  ({ participant, dimensions } = ref(18659)(channelId, layoutManager, focusedId, stateFromStores, {
    connected,
    mode,
    focusedId,
    participantTargetDimensions: tmp10,
    selfHasVideo: tmp8,
    showSecondaryPIP: tmp6,
  }));
  obj7 = {};
  const merged = Object.assign(ref.current);
  const merged1 = Object.assign(dimensions);
  let id;
  if (participant != null) {
    id = participant.id;
  }
  obj7.id = id;
  obj7.showSecondaryPIP = tmp6;
  obj7.mode = pIPMode;
  const tmp12 = ref(18659)(channelId, layoutManager, focusedId, stateFromStores, {
    connected,
    mode,
    focusedId,
    participantTargetDimensions: tmp10,
    selfHasVideo: tmp8,
    showSecondaryPIP: tmp6,
  });
  let result = obj7(9976).cheapWorkletShallowEqual(obj7, ref.current);
  dependencyMap = !result;
  const effect = obj3.useEffect(() => {
    if (closure_2) {
      ref.current = obj7;
    }
  });
  if (result) {
    obj7 = ref.current;
  }
  const tmpResult = obj7(9976);
  class C {
    constructor() {
      obj = {
        scale: closure_6.get(),
        pipAvoidanceSpecs: pipAvoidanceSpecs.get(),
        windowDimensions: windowDimensions.get(),
        safeArea: safeArea.get(),
      };
      return obj;
    }
  }
  C.__closure = { scale: sharedValue, pipAvoidanceSpecs, windowDimensions, safeArea };
  C.__workletHash = 16878800414836;
  C.__initData = __initData;
  const fn = function _(scale) {
    const clampPIPScaleResult = VoicePanelPIPUtils.clampPIPScale({
      scale: scale.scale,
      width: obj7.width,
      containerHeight: obj7.containerHeight,
      showSecondaryPIP: obj7.showSecondaryPIP,
      windowDimensions: scale.windowDimensions,
      safeArea: scale.safeArea,
      pipAvoidanceSpecs: scale.pipAvoidanceSpecs,
    });
    if (scale.scale !== clampPIPScaleResult) {
      const result = sharedValue.set(clampPIPScaleResult);
    }
    const obj2 = {
      scale: scale.scale,
      width: obj7.width,
      containerHeight: obj7.containerHeight,
      showSecondaryPIP: obj7.showSecondaryPIP,
      windowDimensions: scale.windowDimensions,
      safeArea: scale.safeArea,
      pipAvoidanceSpecs: scale.pipAvoidanceSpecs,
    };
  };
  const tmpResult2 = obj7(5052);
  fn.__closure = { clampPIPScale: obj7(18446).clampPIPScale, pipState: obj7, scale: sharedValue };
  fn.__workletHash = 9660590378927;
  fn.__initData = __initData2;
  const animatedReaction = tmpResult2.useAnimatedReaction(C, fn);
  const items1 = [focusedId, layoutManager, tmp10];
  const effect1 = obj3.useEffect(() => {
    _undefined((safeAreaState) => {
      targetDimensions = targetDimensions.getTargetDimensions(closure_1_1);
      if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
        targetDimensions = safeAreaState;
      }
      return targetDimensions;
    });
    return closure_2.subscribeFromItem(function updateParticipantDimensions() {
      _undefined((safeAreaState) => {
        targetDimensions = targetDimensions.getTargetDimensions(closure_1_1);
        if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
          targetDimensions = safeAreaState;
        }
        return targetDimensions;
      });
    });
  }, items1);
  tmp7(18660)(channelId, layoutManager, pIPMode);
  return obj7;
};
