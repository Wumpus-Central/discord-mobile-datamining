// === Module 17233: useControllerPIPState ===

// Module 17233 (useControllerPIPState)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4268 */;
import ActivitiesInTextUtils from "ActivitiesInTextUtils" /* 9678 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1957 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4655 */;
import FramesStore from "FramesStore" /* 9642 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import SpeakingStore from "SpeakingStore" /* 5504 */;

require = fn;
const VoicePanelModes = fn(12407).VoicePanelModes;
const ActivityPanelModes = fn(9637).ActivityPanelModes;
const asLaunched = fn(9643).asLaunched;
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/useControllerPIPState.tsx");

export const useControllerPIPState = function useControllerPIPState(channelId) {
  channelId = channelId.channelId;
  let obj4 = channelId;
  ({ connected, focusedId } = channelId);
  const layoutManager = channelId.layoutManager;
  dependencyMap = layoutManager;
  const mode = channelId.mode;
  let current;
  noop = undefined;
  c7 = undefined;
  const ref = noop.useRef({ id: "sa", mode: "isArray", width: false, height: "PC_SEAT_1", containerHeight: null, showSecondaryPIP: null });
  const tmp2 = current(noop.useState(undefined), 2);
  current = tmp2[0];
  noop = tmp2[1];
  closure_5 = noop.useRef(current);
  const insertionEffect = noop.useInsertionEffect(() => {
    closure_5.current = current;
  });
  closure_129_0 = channelId;
  closure_129_1 = mode;
  const tmp7 = ref(17186)(channelId);
  closure_129_2 = tmp7;
  let items = [closure_5, c7, ChannelStore];
  const items1 = [channelId, tmp7, mode];
  const stateFromStores = obj4(504).useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(obj4);
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
        result = embeddedActivityLocationChannelId !== obj4;
      }
      let tmp10 = activityPanelMode === ActivityPanelModes.PIP;
      if (tmp10) {
        tmp10 = ref === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== obj4;
        const tmp13 = ref === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== obj4;
      }
      if (result) {
        result = tmp10;
      }
      return result;
    }
  }, items1);
  let tmp10 = ref(17234)(channelId);
  const first1 = current(noop.useState(() => ref(closure_2[16])((fn) => fn(), 1000, { leading: true })), 1)[0];
  const items2 = [first1];
  const layoutEffect = noop.useLayoutEffect(() => () => first1.cancel(), items2);
  const obj2 = obj4(504);
  const tmp5 = ref;
  [tmp14, c7] = current(noop.useState(() => closure_2.getTargetDimensions(ref)), 2);
  const obj3 = { connected, mode, focusedId, participantTargetDimensions: tmp14, selfHasVideo: tmp10, showSecondaryPIP: stateFromStores };
  let tmp13 = current(noop.useState(() => closure_2.getTargetDimensions(ref)), 2);
  ({ participant, dimensions } = ref(17235)(channelId, layoutManager, focusedId, current, { connected, mode, focusedId, participantTargetDimensions: tmp14, selfHasVideo: tmp10, showSecondaryPIP: stateFromStores }));
  obj4 = {};
  const merged = Object.assign(ref.current);
  const merged1 = Object.assign(dimensions);
  let id;
  if (participant != null) {
    id = participant.id;
  }
  obj4.id = id;
  obj4.showSecondaryPIP = stateFromStores;
  const tmp15 = ref(17235)(channelId, layoutManager, focusedId, current, { connected, mode, focusedId, participantTargetDimensions: tmp14, selfHasVideo: tmp10, showSecondaryPIP: stateFromStores });
  obj4.mode = obj4(17236).getPIPMode({ channelId, connected, manuallyFocusedId: focusedId, mode, selfHasVideo: tmp10 });
  const tmp8Result = obj4(17236);
  let result = obj4(9627).cheapWorkletShallowEqual(obj4, ref.current);
  dependencyMap = !result;
  const effect = obj.useEffect(() => {
    if (closure_2) {
      ref.current = obj4;
    }
  });
  if (result) {
    obj4 = ref.current;
  }
  const items3 = [channelId, first1];
  const effect1 = obj.useEffect(() => {
    const items = [SpeakingStore, first1];
    const batchedStoreListener = new obj4(closure_2[11]).BatchedStoreListener(items, () => {
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
  const effect2 = obj.useEffect(() => {
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
  tmp5(17238)(channelId, layoutManager, focusedId);
  return obj4;
};