// === Module 19140: useControllerPIPState ===

// Module 19140 (useControllerPIPState)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4930 */;
import ActivitiesInTextUtils from "ActivitiesInTextUtils" /* 8952 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 19058 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
import FramesStore from "FramesStore" /* 6840 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import PIPSpeakerStore from "PIPSpeakerStore" /* 15586 */;

require = fn;
const VoicePanelModes = fn(11204).VoicePanelModes;
const ActivityPanelModes = fn(5652).ActivityPanelModes;
const asLaunched = fn(6841).asLaunched;
const __initData = { code: "function useControllerPIPStateTsx1(){const{scale,pipAvoidanceSpecs,windowDimensions,safeArea}=this.__closure;return{scale:scale.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get(),windowDimensions:windowDimensions.get(),safeArea:safeArea.get()};}" };
const __initData2 = { code: "function useControllerPIPStateTsx2(current){const{clampPIPScale,pipState,scale}=this.__closure;const newScale=clampPIPScale({scale:current.scale,width:pipState.width,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,windowDimensions:current.windowDimensions,safeArea:current.safeArea,pipAvoidanceSpecs:current.pipAvoidanceSpecs});if(current.scale!==newScale){scale.set(newScale);}}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/useControllerPIPState.tsx");

export function useControllerPIPState(channelId) {
  channelId = channelId.channelId;
  ({ connected, focusedId } = channelId);
  const layoutManager = channelId.layoutManager;
  dependencyMap = layoutManager;
  ({ mode, windowDimensions } = channelId);
  const pipAvoidanceSpecs = channelId.pipAvoidanceSpecs;
  const safeArea = channelId.safeArea;
  c7 = undefined;
  let obj8;
  let obj = obj8(5090);
  const sharedValue = obj.useSharedValue(obj8(19141).getVoicePanelPIPScaleCached());
  const ref = pipAvoidanceSpecs.useRef({ id: "displayName", mode: "isArray", width: false, height: null, containerHeight: "box-none", showSecondaryPIP: null, scale: sharedValue });
  let obj2 = obj8(19141);
  const items = [obj8];
  closure_129_0 = channelId;
  closure_129_1 = mode;
  const stateFromStores = obj8(504).useStateFromStores(items, () => PIPSpeakerStore.getSpeakerId(obj8));
  const tmp7 = ref(19095)(channelId);
  closure_129_2 = tmp7;
  const obj4 = obj8(504);
  const tmp6 = ref;
  const items1 = [safeArea, sharedValue, c7];
  const items2 = [channelId, tmp7, mode];
  const stateFromStores1 = obj8(504).useStateFromStores(items1, () => {
    const channel = ChannelStore.getChannel(obj8);
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
      const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      const channel1 = ChannelStore.getChannel(embeddedActivityLocationChannelId);
      let result = null != channel1;
      const activityPanelMode = EmbeddedActivitiesStore.getActivityPanelMode();
      if (result) {
        result = ActivitiesInTextUtils.isActivityInTextSupportedForChannel(channel1);
        const tmp14Result = ActivitiesInTextUtils;
      }
      if (result) {
        result = embeddedActivityLocationChannelId !== obj8;
      }
      let tmp10 = activityPanelMode === ActivityPanelModes.PIP;
      if (tmp10) {
        tmp10 = ref === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== obj8;
        const tmp13 = ref === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== obj8;
      }
      if (result) {
        result = tmp10;
      }
      return result;
    }
  }, items2);
  const tmp9 = ref(19142)(channelId);
  const obj5 = obj8(504);
  [tmp11, c7] = windowDimensions(pipAvoidanceSpecs.useState(() => closure_2.getTargetDimensions(ref)), 2);
  let tmp10 = windowDimensions(pipAvoidanceSpecs.useState(() => closure_2.getTargetDimensions(ref)), 2);
  const pIPMode = obj8(19058).getPIPMode({ channelId, connected, manuallyFocusedId: focusedId, mode, selfHasVideo: tmp9 });
  const obj6 = obj8(19058);
  const obj7 = { connected, mode, focusedId, participantTargetDimensions: tmp11, selfHasVideo: tmp9, showSecondaryPIP: stateFromStores1 };
  ({ participant, dimensions } = ref(19143)(channelId, layoutManager, focusedId, stateFromStores, { connected, mode, focusedId, participantTargetDimensions: tmp11, selfHasVideo: tmp9, showSecondaryPIP: stateFromStores1 }));
  obj8 = {};
  const merged = Object.assign(ref.current);
  const merged1 = Object.assign(dimensions);
  let id;
  if (participant != null) {
    id = participant.id;
  }
  obj8.id = id;
  obj8.showSecondaryPIP = stateFromStores1;
  obj8.mode = pIPMode;
  let tmp13 = ref(19143)(channelId, layoutManager, focusedId, stateFromStores, { connected, mode, focusedId, participantTargetDimensions: tmp11, selfHasVideo: tmp9, showSecondaryPIP: stateFromStores1 });
  let result = obj8(10069).cheapWorkletShallowEqual(obj8, ref.current);
  dependencyMap = !result;
  const effect = obj3.useEffect(() => {
    if (closure_2) {
      ref.current = obj8;
    }
  });
  if (result) {
    obj8 = ref.current;
  }
  const tmpResult = obj8(10069);
  class E {
    constructor() {
      obj = { scale: closure_6.get(), pipAvoidanceSpecs: pipAvoidanceSpecs.get(), windowDimensions: windowDimensions.get(), safeArea: safeArea.get() };
      return obj;
    }
  }
  E.__closure = { scale: sharedValue, pipAvoidanceSpecs, windowDimensions, safeArea };
  E.__workletHash = 16878800414836;
  E.__initData = __initData;
  class F {
    constructor(arg0) {
      obj = closure_0(closure_2[17]);
      obj1 = { scale: channelId.scale, width: current.width, containerHeight: current.containerHeight, showSecondaryPIP: current.showSecondaryPIP, windowDimensions: channelId.windowDimensions, safeArea: channelId.safeArea, pipAvoidanceSpecs: channelId.pipAvoidanceSpecs };
      clampPIPScaleResult = obj.clampPIPScale(obj1);
      if (channelId.scale !== clampPIPScaleResult) {
        tmp2 = closure_6;
        result = closure_6.set(clampPIPScaleResult);
      }
      return;
    }
  }
  const tmpResult2 = obj8(5090);
  F.__closure = { clampPIPScale: obj8(19058).clampPIPScale, pipState: obj8, scale: sharedValue };
  F.__workletHash = 9660590378927;
  F.__initData = __initData2;
  const animatedReaction = tmpResult2.useAnimatedReaction(E, F);
  const items3 = [focusedId, layoutManager, tmp11];
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
  }, items3);
  tmp6(19144)(channelId, layoutManager, pIPMode);
  return obj8;
}