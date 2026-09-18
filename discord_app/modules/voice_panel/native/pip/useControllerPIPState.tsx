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
const VoicePanelModes = fn(12515).VoicePanelModes;
const ActivityPanelModes = fn(9743).ActivityPanelModes;
const asLaunched = fn(9749).asLaunched;
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
  let obj6;
  let obj = obj6(4458);
  const sharedValue = obj.useSharedValue(obj6(17461).getVoicePanelPIPScaleCached());
  const ref = pipAvoidanceSpecs.useRef({
    id: "sa",
    mode: "isArray",
    width: false,
    height: null,
    containerHeight: "\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}",
    showSecondaryPIP: true,
    scale: sharedValue,
  });
  const tmp5 = windowDimensions(pipAvoidanceSpecs.useState(undefined), 2);
  const current = tmp5[0];
  closure_8 = tmp5[1];
  closure_9 = pipAvoidanceSpecs.useRef(current);
  const insertionEffect = pipAvoidanceSpecs.useInsertionEffect(() => {
    closure_9.current = current;
  });
  closure_129_0 = channelId;
  closure_129_1 = mode;
  const tmp9 = ref(17412)(channelId);
  closure_129_2 = tmp9;
  let obj2 = obj6(17461);
  const tmp8 = ref;
  let items = [safeArea, current, closure_8];
  const items1 = [channelId, tmp9, mode];
  const stateFromStores = obj6(504).useStateFromStores(
    items,
    () => {
      const channel = ChannelStore.getChannel(obj6);
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
          result = embeddedActivityLocationChannelId !== obj6;
        }
        let tmp10 = activityPanelMode === ActivityPanelModes.PIP;
        if (tmp10) {
          tmp10 = ref === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== obj6;
          const tmp13 = ref === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== obj6;
        }
        if (result) {
          result = tmp10;
        }
        return result;
      }
    },
    items1,
  );
  const tmp11 = ref(17462)(channelId);
  const first1 = windowDimensions(
    pipAvoidanceSpecs.useState(() => ref(closure_2[18])((fn) => fn(), 1000, { leading: true })),
    1,
  )[0];
  const items2 = [first1];
  const layoutEffect = pipAvoidanceSpecs.useLayoutEffect(() => () => first1.cancel(), items2);
  const obj4 = obj6(504);
  [tmp15, c11] = windowDimensions(
    pipAvoidanceSpecs.useState(() => closure_2.getTargetDimensions(ref)),
    2,
  );
  const obj5 = {
    connected,
    mode,
    focusedId,
    participantTargetDimensions: tmp15,
    selfHasVideo: tmp11,
    showSecondaryPIP: stateFromStores,
  };
  const tmp14 = windowDimensions(
    pipAvoidanceSpecs.useState(() => closure_2.getTargetDimensions(ref)),
    2,
  );
  ({ participant, dimensions } = ref(17463)(channelId, layoutManager, focusedId, current, {
    connected,
    mode,
    focusedId,
    participantTargetDimensions: tmp15,
    selfHasVideo: tmp11,
    showSecondaryPIP: stateFromStores,
  }));
  obj6 = {};
  const merged = Object.assign(ref.current);
  const merged1 = Object.assign(dimensions);
  let id;
  if (participant != null) {
    id = participant.id;
  }
  obj6.id = id;
  obj6.showSecondaryPIP = stateFromStores;
  const tmp16 = ref(17463)(channelId, layoutManager, focusedId, current, {
    connected,
    mode,
    focusedId,
    participantTargetDimensions: tmp15,
    selfHasVideo: tmp11,
    showSecondaryPIP: stateFromStores,
  });
  obj6.mode = obj6(17464).getPIPMode({ channelId, connected, manuallyFocusedId: focusedId, mode, selfHasVideo: tmp11 });
  const tmpResult = obj6(17464);
  let result = obj6(9733).cheapWorkletShallowEqual(obj6, ref.current);
  dependencyMap = !result;
  const effect = obj3.useEffect(() => {
    if (closure_2) {
      ref.current = obj6;
    }
  });
  if (result) {
    obj6 = ref.current;
  }
  const tmpResult3 = obj6(9733);
  class N {
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
  N.__closure = { scale: sharedValue, pipAvoidanceSpecs, windowDimensions, safeArea };
  N.__workletHash = 16878800414836;
  N.__initData = __initData;
  class B {
    constructor(arg0) {
      obj = closure_0(closure_2[20]);
      obj1 = {
        scale: channelId.scale,
        width: current.width,
        containerHeight: current.containerHeight,
        showSecondaryPIP: current.showSecondaryPIP,
        windowDimensions: channelId.windowDimensions,
        safeArea: channelId.safeArea,
        pipAvoidanceSpecs: channelId.pipAvoidanceSpecs,
      };
      clampPIPScaleResult = obj.clampPIPScale(obj1);
      if (channelId.scale !== clampPIPScaleResult) {
        tmp2 = closure_6;
        result = closure_6.set(clampPIPScaleResult);
      }
      return;
    }
  }
  const tmpResult4 = obj6(4458);
  B.__closure = { clampPIPScale: obj6(17464).clampPIPScale, pipState: obj6, scale: sharedValue };
  B.__workletHash = 9660590378927;
  B.__initData = __initData2;
  const animatedReaction = tmpResult4.useAnimatedReaction(N, B);
  const items3 = [channelId, first1];
  const effect1 = obj3.useEffect(() => {
    const items = [ref, sharedValue];
    const batchedStoreListener = new obj6(closure_2[11]).BatchedStoreListener(items, () => {
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
  }, items3);
  const items4 = [focusedId, layoutManager, tmp15];
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
  }, items4);
  tmp8(17466)(channelId, layoutManager, focusedId);
  return obj6;
};
