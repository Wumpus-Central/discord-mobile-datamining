// discord_app/modules/voice_panel/native/pip/useControllerPIPState.tsx
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import closure_5 from "../../../activities/EmbeddedActivitiesStore.tsx";
import closure_6 from "../../../calls/ChannelRTCStore.tsx";
import closure_7 from "../../../frames/FramesStore.tsx";
import closure_8 from "../../../../stores/ChannelStore.tsx";
import closure_9 from "../../../../stores/SpeakingStore.tsx";
import { VoicePanelModes } from "../../VoicePanelConstants.tsx";
import { ActivityPanelModes } from "../../../activities/panel/ActivityPanelConstants.tsx";
import { asLaunched } from "../../../frames/FramesConstants.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/useControllerPIPState.tsx");

export const useControllerPIPState = function useControllerPIPState(channelId) {
  channelId = channelId.channelId;
  let obj = channelId;
  ({ connected, focusedId } = channelId);
  let ref = focusedId;
  const layoutManager = channelId.layoutManager;
  dependencyMap = layoutManager;
  const mode = channelId.mode;
  let first;
  let React;
  closure_5 = undefined;
  let first1;
  c7 = undefined;
  obj = React;
  ref = React.useRef({ id: "dispatch", mode: "isArray", width: false, height: "blond_haired_person_tone3", containerHeight: "person_with_blond_hair_tone3", showSecondaryPIP: "blond_haired_person_tone4" });
  const tmp2 = first(React.useState(undefined), 2);
  first = tmp2[0];
  React = tmp2[1];
  closure_5 = React.useRef(first);
  const insertionEffect = React.useInsertionEffect(() => {
    closure_5.current = first;
  });
  obj = channelId;
  ref = mode;
  dependencyMap = undefined;
  const tmp7 = ref(16466)(channelId);
  dependencyMap = tmp7;
  let items = [closure_5, c7, closure_8];
  const items1 = [channelId, tmp7, mode];
  const stateFromStores = obj(589).useStateFromStores(items, () => {
    const channel = closure_1_8.getChannel(obj);
    let isVocalResult;
    if (channel != null) {
      isVocalResult = channel.isVocal();
    }
    if (isVocalResult) {
      if (!closure_2) {
        return false;
      }
    }
    const tmp4 = closure_1_12(_undefined.getMainFrame());
    if (null != tmp4) {
      if (tmp4.data.activityPanelMode === closure_1_11.PIP) {
        return true;
      }
    }
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    if (null == connectedActivityLocation) {
      return false;
    } else {
      const embeddedActivityLocationChannelId = obj(closure_2[12]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      const channel1 = obj.getChannel(embeddedActivityLocationChannelId);
      let result = null != channel1;
      const activityPanelMode = obj3.getActivityPanelMode();
      if (result) {
        result = obj(closure_2[13]).isActivityInTextSupportedForChannel(channel1);
        const tmp14Result = obj(closure_2[13]);
      }
      if (result) {
        result = embeddedActivityLocationChannelId !== tmp;
      }
      let tmp10 = activityPanelMode === closure_1_11.PIP;
      if (tmp10) {
        tmp10 = ref === closure_1_10.PIP || embeddedActivityLocationChannelId !== tmp;
        const tmp13 = ref === closure_1_10.PIP || embeddedActivityLocationChannelId !== tmp;
      }
      if (result) {
        result = tmp10;
      }
      return result;
    }
    obj3 = connectedActivityLocation;
  }, items1);
  let tmp10 = ref(16513)(channelId);
  first1 = first(React.useState(() => ref(closure_2[16])((arg0) => arg0(), 1000, { leading: true })), 1)[0];
  const items2 = [first1];
  const layoutEffect = React.useLayoutEffect(() => () => closure_6.cancel(), items2);
  const obj2 = obj(589);
  let tmp5 = ref;
  [tmp14, c7] = first(React.useState(() => closure_2.getTargetDimensions(ref)), 2);
  obj = { connected, mode, focusedId, participantTargetDimensions: tmp14, selfHasVideo: tmp10, showSecondaryPIP: stateFromStores };
  let tmp13 = first(React.useState(() => closure_2.getTargetDimensions(ref)), 2);
  ({ participant, dimensions } = ref(16514)(channelId, layoutManager, focusedId, first, obj));
  obj = {};
  const merged = Object.assign(ref.current);
  const merged1 = Object.assign(dimensions);
  let id;
  if (participant != null) {
    id = participant.id;
  }
  obj.id = id;
  obj.showSecondaryPIP = stateFromStores;
  let tmp8Result = tmp8(16515);
  obj.mode = tmp8Result.getPIPMode({ channelId, connected, manuallyFocusedId: focusedId, mode, selfHasVideo: tmp10 });
  dependencyMap = undefined;
  tmp8Result = tmp8(8991);
  let result = tmp8Result.cheapWorkletShallowEqual(obj, ref.current);
  dependencyMap = !result;
  const effect = obj.useEffect(() => {
    if (closure_2) {
      ref.current = obj;
    }
  });
  if (result) {
    obj = ref.current;
  }
  const items3 = [channelId, first1];
  const effect1 = obj.useEffect(() => {
    const items = [closure_1_9, first1];
    const batchedStoreListener = new obj(closure_2[11]).BatchedStoreListener(items, () => {
      const tmp = (() => {
        const speakers = closure_1_9.getSpeakers();
        const iter = speakers[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let tmp4 = closure_1_6;
          let tmp5 = closure_0;
          if (null != closure_1_6.getParticipant(closure_0, nextResult)) {
            let tmp6 = iter;
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
          callback(tmp);
        } else {
          callback2(() => closure_1_4(closure_0));
        }
      }
    });
    batchedStoreListener.attach("pipstate-change-listeners-" + batchedStoreListener);
    return () => batchedStoreListener.detach();
  }, items3);
  const items4 = [focusedId, layoutManager, tmp14];
  const effect2 = obj.useEffect(() => {
    _undefined((safeAreaState) => {
      targetDimensions = targetDimensions.getTargetDimensions(closure_1);
      if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
        targetDimensions = safeAreaState;
      }
      return targetDimensions;
    });
    return closure_2.subscribeFromItem(function updateParticipantDimensions() {
      callback((safeAreaState) => {
        targetDimensions = targetDimensions.getTargetDimensions(closure_1);
        if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
          targetDimensions = safeAreaState;
        }
        return targetDimensions;
      });
    });
  }, items4);
  tmp5(16517)(channelId, layoutManager, focusedId);
  return obj;
};