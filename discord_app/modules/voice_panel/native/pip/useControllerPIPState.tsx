// discord_app/modules/voice_panel/native/pip/useControllerPIPState.tsx
import embeddedActivityLocationUtils from "../../../activities/utils/embeddedActivityLocationUtils.tsx";
import ActivitiesInTextUtils from "../../../activities/ActivitiesInTextUtils.tsx";
import VoicePanelPIPUtils from "VoicePanelPIPUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import FramesStore from "../../../frames/FramesStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import SpeakingStore from "../../../../stores/SpeakingStore.tsx";

require = fn;
const VoicePanelModes = fn(11926).VoicePanelModes;
const ActivityPanelModes = fn(6074).ActivityPanelModes;
const asLaunched = fn(10767).asLaunched;
const ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShowSecondaryPIP(channelId) {
      const cResult = channelId(576).c(6);
      channelId = channelId.channelId;
      const mode = channelId.mode;
      let tmp4 = mode(17652)(channelId);
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
      const tmp = mode(17652)(channelId);
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
  c11 = undefined;
  let obj5;
  let obj = obj5(4811);
  const sharedValue = obj.useSharedValue(obj5(17768).getVoicePanelPIPScaleCached());
  const ref = pipAvoidanceSpecs.useRef({
    id: "end",
    mode: "toCharArray$esjava$1",
    width: false,
    height: null,
    containerHeight: 0,
    showSecondaryPIP: null,
    scale: sharedValue,
  });
  const tmp5 = windowDimensions(pipAvoidanceSpecs.useState(undefined), 2);
  const current = tmp5[0];
  closure_8 = tmp5[1];
  closure_9 = pipAvoidanceSpecs.useRef(current);
  const insertionEffect = pipAvoidanceSpecs.useInsertionEffect(() => {
    closure_9.current = current;
  });
  const tmp8 = closure_13({ channelId, mode });
  const tmp10 = ref(17831)(channelId);
  const first1 = windowDimensions(
    pipAvoidanceSpecs.useState(() => ref(closure_2[20])((fn) => fn(), 1000, { leading: true })),
    1,
  )[0];
  let items = [first1];
  const layoutEffect = pipAvoidanceSpecs.useLayoutEffect(() => () => first1.cancel(), items);
  let obj2 = obj5(17768);
  const tmp9 = ref;
  [tmp14, c11] = windowDimensions(
    pipAvoidanceSpecs.useState(() => closure_2.getTargetDimensions(ref)),
    2,
  );
  const obj4 = {
    connected,
    mode,
    focusedId,
    participantTargetDimensions: tmp14,
    selfHasVideo: tmp10,
    showSecondaryPIP: tmp8,
  };
  const tmp13 = windowDimensions(
    pipAvoidanceSpecs.useState(() => closure_2.getTargetDimensions(ref)),
    2,
  );
  ({ participant, dimensions } = ref(17832)(channelId, layoutManager, focusedId, current, {
    connected,
    mode,
    focusedId,
    participantTargetDimensions: tmp14,
    selfHasVideo: tmp10,
    showSecondaryPIP: tmp8,
  }));
  obj5 = {};
  const merged = Object.assign(ref.current);
  const merged1 = Object.assign(dimensions);
  let id;
  if (participant != null) {
    id = participant.id;
  }
  obj5.id = id;
  obj5.showSecondaryPIP = tmp8;
  const tmp15 = ref(17832)(channelId, layoutManager, focusedId, current, {
    connected,
    mode,
    focusedId,
    participantTargetDimensions: tmp14,
    selfHasVideo: tmp10,
    showSecondaryPIP: tmp8,
  });
  obj5.mode = obj5(17667).getPIPMode({ channelId, connected, manuallyFocusedId: focusedId, mode, selfHasVideo: tmp10 });
  const tmpResult = obj5(17667);
  let result = obj5(9550).cheapWorkletShallowEqual(obj5, ref.current);
  dependencyMap = !result;
  const effect = obj3.useEffect(() => {
    if (closure_2) {
      ref.current = obj5;
    }
  });
  if (result) {
    obj5 = ref.current;
  }
  const tmpResult3 = obj5(9550);
  class R {
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
  R.__closure = { scale: sharedValue, pipAvoidanceSpecs, windowDimensions, safeArea };
  R.__workletHash = 16878800414836;
  R.__initData = __initData;
  const fn = function k(scale) {
    const clampPIPScaleResult = VoicePanelPIPUtils.clampPIPScale({
      scale: scale.scale,
      width: obj5.width,
      containerHeight: obj5.containerHeight,
      showSecondaryPIP: obj5.showSecondaryPIP,
      windowDimensions: scale.windowDimensions,
      safeArea: scale.safeArea,
      pipAvoidanceSpecs: scale.pipAvoidanceSpecs,
    });
    if (scale.scale !== clampPIPScaleResult) {
      const result = sharedValue.set(clampPIPScaleResult);
    }
    const obj2 = {
      scale: scale.scale,
      width: obj5.width,
      containerHeight: obj5.containerHeight,
      showSecondaryPIP: obj5.showSecondaryPIP,
      windowDimensions: scale.windowDimensions,
      safeArea: scale.safeArea,
      pipAvoidanceSpecs: scale.pipAvoidanceSpecs,
    };
  };
  const tmpResult4 = obj5(4811);
  fn.__closure = { clampPIPScale: obj5(17667).clampPIPScale, pipState: obj5, scale: sharedValue };
  fn.__workletHash = 9660590378927;
  fn.__initData = __initData2;
  const animatedReaction = tmpResult4.useAnimatedReaction(R, fn);
  const items1 = [channelId, first1];
  const effect1 = obj3.useEffect(() => {
    const items = [ref, sharedValue];
    const batchedStoreListener = new obj5(closure_2[15]).BatchedStoreListener(items, () => {
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
      closure_0 = tmp;
      let tmp3 = tmp !== ref.current;
      if (tmp3) {
        tmp3 = null != tmp;
      }
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
  const items2 = [focusedId, layoutManager, tmp14];
  const effect2 = obj3.useEffect(() => {
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
  }, items2);
  tmp9(17833)(channelId, layoutManager, focusedId);
  return obj5;
};
