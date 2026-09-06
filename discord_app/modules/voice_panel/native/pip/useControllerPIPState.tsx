// === Module 17084: useControllerPIPState ===

// Module 17084 (useControllerPIPState)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4189 */;
import ActivitiesInTextUtils from "ActivitiesInTextUtils" /* 9546 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import FramesStore from "FramesStore" /* 9510 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SpeakingStore from "SpeakingStore" /* 5419 */;

require = fn;
const VoicePanelModes = fn(12273).VoicePanelModes;
const ActivityPanelModes = fn(9505).ActivityPanelModes;
const asLaunched = fn(9511).asLaunched;
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/useControllerPIPState.tsx");

export const useControllerPIPState = function useControllerPIPState(channelId) {
  channelId = channelId.channelId;
  ({ connected, focusedId } = channelId);
  const layoutManager = channelId.layoutManager;
  dependencyMap = layoutManager;
  const mode = channelId.mode;
  noop = undefined;
  c7 = undefined;
  let current = noop;
  const ref = noop.useRef({ id: "sa", mode: "isArray", width: false, height: "comp_0", containerHeight: "DIS_Nitro_Gifcard_004", showSecondaryPIP: 24 });
  const tmp2 = current(noop.useState(undefined), 2);
  current = tmp2[0];
  noop = tmp2[1];
  closure_5 = noop.useRef(current);
  const insertionEffect = noop.useInsertionEffect(() => {
    closure_5.current = current;
  });
  closure_129_0 = channelId;
  closure_129_1 = mode;
  const tmp7 = ref(17037)(channelId);
  closure_129_2 = tmp7;
  let items = [closure_5, c7, ChannelStore];
  const items1 = [channelId, tmp7, mode];
  const stateFromStores = current(504).useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(obj);
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
      const channel1 = obj.getChannel(embeddedActivityLocationChannelId);
      let result = null != channel1;
      const activityPanelMode = obj3.getActivityPanelMode();
      if (result) {
        result = ActivitiesInTextUtils.isActivityInTextSupportedForChannel(channel1);
        const tmp14Result = ActivitiesInTextUtils;
      }
      if (result) {
        result = embeddedActivityLocationChannelId !== tmp;
      }
      let tmp10 = activityPanelMode === ActivityPanelModes.PIP;
      if (tmp10) {
        tmp10 = ref === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== tmp;
        const tmp13 = ref === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== tmp;
      }
      if (result) {
        result = tmp10;
      }
      return result;
    }
    obj3 = EmbeddedActivitiesStore;
  }, items1);
  let tmp10 = ref(17085)(channelId);
  const first1 = current(noop.useState(() => ref(closure_2[16])((fn) => fn(), 1000, { leading: true })), 1)[0];
  const items2 = [first1];
  const layoutEffect = noop.useLayoutEffect(() => () => first1.cancel(), items2);
  const obj2 = current(504);
  let tmp5 = ref;
  [tmp14, c7] = current(noop.useState(() => closure_2.getTargetDimensions(ref)), 2);
  current = { connected, mode, focusedId, participantTargetDimensions: tmp14, selfHasVideo: tmp10, showSecondaryPIP: stateFromStores };
  let tmp13 = current(noop.useState(() => closure_2.getTargetDimensions(ref)), 2);
  ({ participant, dimensions } = ref(17086)(channelId, layoutManager, focusedId, current, current));
  current = {};
  const merged = Object.assign(ref.current);
  const merged1 = Object.assign(dimensions);
  let id;
  if (participant != null) {
    id = participant.id;
  }
  current.id = id;
  current.showSecondaryPIP = stateFromStores;
  let tmp8Result = tmp8(17087);
  current.mode = tmp8Result.getPIPMode({ channelId, connected, manuallyFocusedId: focusedId, mode, selfHasVideo: tmp10 });
  tmp8Result = tmp8(9495);
  let result = tmp8Result.cheapWorkletShallowEqual(current, ref.current);
  dependencyMap = !result;
  const effect = current.useEffect(() => {
    if (closure_2) {
      ref.current = current;
    }
  });
  if (result) {
    current = ref.current;
  }
  const items3 = [channelId, first1];
  const effect1 = current.useEffect(() => {
    const items = [SpeakingStore, first1];
    const batchedStoreListener = new obj(closure_2[11]).BatchedStoreListener(items, () => {
      const tmp = (() => {
        speakers = speakers.getSpeakers();
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
          closure_4(tmp);
        } else {
          participant(() => closure_2_4(closure_0));
        }
      }
    });
    batchedStoreListener.attach("pipstate-change-listeners-" + batchedStoreListener);
    return () => batchedStoreListener.detach();
  }, items3);
  const items4 = [focusedId, layoutManager, tmp14];
  const effect2 = current.useEffect(() => {
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
  tmp5(17089)(channelId, layoutManager, focusedId);
  return current;
};