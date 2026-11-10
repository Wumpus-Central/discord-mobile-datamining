// discord_app/modules/voice_panel/native/pip/useControllerPIPState.tsx
import embeddedActivityLocationUtils from "../../../activities/utils/embeddedActivityLocationUtils.tsx";
import ActivitiesInTextUtils from "../../../activities/ActivitiesInTextUtils.tsx";
import useIsConnectedToVoiceChannelDefault from "../hooks/useIsConnectedToVoiceChannel.tsx";
import useSelfHasVideoDefault from "../utils/useSelfHasVideo.tsx";
import calculatePIPStateDefault from "../utils/calculatePIPState.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import FramesStore from "../../../frames/FramesStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import PIPSpeakerStore from "PIPSpeakerStore.tsx";

const require = globalThis.__r;

const useExternalPipSelectedTileDefault = tmp6(19601);
require = fn;
const VoicePanelModes = fn(11372).VoicePanelModes;
const ActivityPanelModes = fn(5783).ActivityPanelModes;
const asLaunched = fn(6905).asLaunched;
let closure_12 = {
  code: "(function useControllerPIPStateTsx1(){let[scale,pipAvoidanceSpecs,windowDimensions,safeArea]=this.__closure;return{scale:scale.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get(),windowDimensions:windowDimensions.get(),safeArea:safeArea.get()};})",
};
let closure_13 = {
  code: "(function useControllerPIPStateTsx2(current){let[clampPIPScale,pipState,scale]=this.__closure;const newScale=clampPIPScale({scale:current.scale,width:pipState.width,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,windowDimensions:current.windowDimensions,safeArea:current.safeArea,pipAvoidanceSpecs:current.pipAvoidanceSpecs});if(current.scale!==newScale){scale.set(newScale);}})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/useControllerPIPState.tsx");

export function useControllerPIPState(channelId) {
  channelId = channelId.channelId;
  _require = channelId;
  ({ connected, focusedId } = channelId);
  importDefault = focusedId;
  const layoutManager = channelId.layoutManager;
  dependencyMap = layoutManager;
  const mode = channelId.mode;
  _slicedToArray = undefined;
  ({ windowDimensions, pipAvoidanceSpecs, safeArea } = channelId);
  let obj = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue = obj.useSharedValue(require("VoicePanelPIPScaleCache").getVoicePanelPIPScaleCached());
  const ref = noop.useRef({
    id: "disabled",
    mode: "isArray",
    width: false,
    height: null,
    containerHeight: "box-none",
    showSecondaryPIP: null,
    scale: sharedValue,
  });
  const obj2 = require("VoicePanelPIPScaleCache");
  items = [PIPSpeakerStore];
  closure_129_0 = channelId;
  closure_129_1 = mode;
  const stateFromStores = require("initialize").useStateFromStores(items, () => PIPSpeakerStore.getSpeakerId(c0));
  const tmp7 = useIsConnectedToVoiceChannelDefault(channelId);
  closure_129_2 = tmp7;
  const obj4 = require("initialize");
  const items1 = [EmbeddedActivitiesStore, FramesStore, ChannelStore];
  const items2 = [channelId, tmp7, mode];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items1,
    () => {
      const channel = ChannelStore.getChannel(c0);
      let isVocalResult;
      if (channel != null) {
        isVocalResult = channel.isVocal();
      }
      if (isVocalResult) {
        if (!c2) {
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
          result = embeddedActivityLocationChannelId !== c0;
        }
        let tmp10 = activityPanelMode === ActivityPanelModes.PIP;
        if (tmp10) {
          tmp10 = c1 === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== c0;
          const tmp13 = c1 === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== c0;
        }
        if (result) {
          result = tmp10;
        }
        return result;
      }
    },
    items2,
  );
  const tmp9 = useSelfHasVideoDefault(channelId);
  const obj5 = require("initialize");
  [tmp11, c3] = noop.useState(() => _undefined2.getTargetDimensions(c1));
  let tmp10 = _slicedToArray(
    noop.useState(() => _undefined2.getTargetDimensions(c1)),
    2,
  );
  const pIPMode = require("VoicePanelPIPUtils").getPIPMode({
    channelId,
    connected,
    manuallyFocusedId: focusedId,
    mode,
    selfHasVideo: tmp9,
  });
  const obj6 = require("VoicePanelPIPUtils");
  const obj7 = {
    connected,
    mode,
    focusedId,
    participantTargetDimensions: tmp11,
    selfHasVideo: tmp9,
    showSecondaryPIP: stateFromStores1,
  };
  ({ participant, dimensions } = calculatePIPStateDefault(channelId, layoutManager, focusedId, stateFromStores, {
    connected,
    mode,
    focusedId,
    participantTargetDimensions: tmp11,
    selfHasVideo: tmp9,
    showSecondaryPIP: stateFromStores1,
  }));
  let obj8 = {};
  const merged = Object.assign(ref.current);
  const merged1 = Object.assign(dimensions);
  let id;
  if (participant != null) {
    id = participant.id;
  }
  obj8.id = id;
  obj8.showSecondaryPIP = stateFromStores1;
  obj8.mode = pIPMode;
  _require = obj8;
  importDefault = ref;
  let tmp13 = calculatePIPStateDefault(channelId, layoutManager, focusedId, stateFromStores, {
    connected,
    mode,
    focusedId,
    participantTargetDimensions: tmp11,
    selfHasVideo: tmp9,
    showSecondaryPIP: stateFromStores1,
  });
  let result = require("cheapWorkletShallowEqual").cheapWorkletShallowEqual(obj8, ref.current);
  dependencyMap = !result;
  const effect = noop.useEffect(() => {
    if (c2) {
      c1.current = current;
    }
  });
  if (result) {
    obj8 = ref.current;
  }
  const tmpResult = require("cheapWorkletShallowEqual");
  const items3 = [closure_12, sharedValue, pipAvoidanceSpecs, windowDimensions, safeArea];
  _require = undefined;
  _slicedToArray = undefined;
  [tmp19, tmp20, tmp21, tmp22, tmp23] = items3;
  function useControllerPIPStateTsx1() {
    return {
      scale: current.get(),
      pipAvoidanceSpecs: _undefined.get(),
      windowDimensions: _undefined2.get(),
      safeArea: _undefined3.get(),
    };
  }
  const items4 = [tmp20, tmp21, tmp22, tmp23];
  useControllerPIPStateTsx1.__closure = items4;
  useControllerPIPStateTsx1.__workletHash = 9801015138445;
  useControllerPIPStateTsx1.__initData = tmp19;
  const items5 = [closure_13, require("VoicePanelPIPUtils").clampPIPScale, obj8, sharedValue];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp24, tmp25, tmp26, tmp27] = items5;
  function useControllerPIPStateTsx2(scale) {
    const tmp = current({
      scale: scale.scale,
      width: _undefined.width,
      containerHeight: _undefined.containerHeight,
      showSecondaryPIP: _undefined.showSecondaryPIP,
      windowDimensions: scale.windowDimensions,
      safeArea: scale.safeArea,
      pipAvoidanceSpecs: scale.pipAvoidanceSpecs,
    });
    if (scale.scale !== tmp) {
      const result = _undefined2.set(tmp);
    }
    const obj = {
      scale: scale.scale,
      width: _undefined.width,
      containerHeight: _undefined.containerHeight,
      showSecondaryPIP: _undefined.showSecondaryPIP,
      windowDimensions: scale.windowDimensions,
      safeArea: scale.safeArea,
      pipAvoidanceSpecs: scale.pipAvoidanceSpecs,
    };
  }
  const items6 = [tmp25, tmp26, tmp27];
  useControllerPIPStateTsx2.__closure = items6;
  useControllerPIPStateTsx2.__workletHash = 16873305114518;
  useControllerPIPStateTsx2.__initData = tmp24;
  const animatedReaction = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    useControllerPIPStateTsx1,
    useControllerPIPStateTsx2,
  );
  const items7 = [focusedId, layoutManager, tmp11];
  const effect1 = noop.useEffect(() => {
    _undefined3((safeAreaState) => {
      targetDimensions = targetDimensions.getTargetDimensions(closure_1_1);
      if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
        targetDimensions = safeAreaState;
      }
      return targetDimensions;
    });
    return _undefined2.subscribeFromItem(function updateParticipantDimensions() {
      _undefined3((safeAreaState) => {
        targetDimensions = targetDimensions.getTargetDimensions(closure_1_1);
        if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
          targetDimensions = safeAreaState;
        }
        return targetDimensions;
      });
    });
  }, items7);
  useExternalPipSelectedTileDefault(channelId, layoutManager, pIPMode);
  return obj8;
}
