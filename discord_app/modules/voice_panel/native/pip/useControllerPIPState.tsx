// === Module 16303: useControllerPIPState ===

// Module 16303 (useControllerPIPState)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import participantFromServer from "participantFromServer" /* 1390 */;
import getParticipants from "getParticipants" /* 4773 */;
import map from "map" /* 8708 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import anyoneHasFlagInContext from "anyoneHasFlagInContext" /* 4774 */;
import { VoicePanelModes } from "VoicePanelModes" /* 11440 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 8703 */;
import { asLaunched } from "FrameLayoutModes" /* 8709 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/voice_panel/native/pip/useControllerPIPState.tsx");

export const useControllerPIPState = function useControllerPIPState(channelId) {
  channelId = channelId.channelId;
  ({ connected, focusedId } = channelId);
  const layoutManager = channelId.layoutManager;
  const mode = channelId.mode;
  let first;
  let React;
  c7 = undefined;
  React.useRef({ id: "dispatch", mode: "isArray", width: false, height: "money_mouth", containerHeight: "money_mouth_face", showSecondaryPIP: "none" });
  const tmp2 = first(React.useState(undefined), 2);
  first = tmp2[0];
  React = tmp2[1];
  closure_5 = React.useRef(first);
  const insertionEffect = React.useInsertionEffect(() => {
    closure_5.current = first;
  });
  let obj = channelId;
  const ref = mode;
  const tmp7 = ref(16256)(channelId);
  dependencyMap = tmp7;
  let items = [closure_5, c7, closure_8];
  const items1 = [channelId, tmp7, mode];
  const stateFromStores = obj(589).useStateFromStores(items, () => {
    const channel = closure_1_8.getChannel(closure_1_8);
    let isVocalResult;
    if (channel != null) {
      isVocalResult = channel.isVocal();
    }
    if (isVocalResult) {
      if (!closure_2) {
        return false;
      }
    }
    const tmp4 = asLaunched(_undefined.getMainFrame());
    if (null != tmp4) {
      if (tmp4.data.activityPanelMode === ActivityPanelModes.PIP) {
        return true;
      }
    }
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    if (null == connectedActivityLocation) {
      return false;
    } else {
      const embeddedActivityLocationChannelId = closure_1_8(closure_2[12]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      const channel1 = closure_1_8.getChannel(embeddedActivityLocationChannelId);
      let result = null != channel1;
      const activityPanelMode = obj3.getActivityPanelMode();
      if (result) {
        result = closure_1_8(closure_2[13]).isActivityInTextSupportedForChannel(channel1);
        const tmp14Result = closure_1_8(closure_2[13]);
      }
      if (result) {
        result = embeddedActivityLocationChannelId !== closure_1_8;
      }
      let tmp10 = activityPanelMode === ActivityPanelModes.PIP;
      if (tmp10) {
        tmp10 = ref === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== closure_1_8;
      }
      if (result) {
        result = tmp10;
      }
      return result;
    }
    obj3 = connectedActivityLocation;
  }, items1);
  let tmp10 = ref(16304)(channelId);
  const first1 = first(React.useState(() => ref(closure_2[16])((fn) => fn(), 1000, { leading: true })), 1)[0];
  const items2 = [first1];
  const layoutEffect = React.useLayoutEffect(() => () => closure_6.cancel(), items2);
  const obj2 = obj(589);
  const tmp5 = ref;
  [tmp14, c7] = first(React.useState(() => closure_2.getTargetDimensions(ref)), 2);
  obj = { connected, mode, focusedId, participantTargetDimensions: tmp14, selfHasVideo: tmp10, showSecondaryPIP: stateFromStores };
  let tmp13 = first(React.useState(() => closure_2.getTargetDimensions(ref)), 2);
  ({ participant, dimensions } = ref(16305)(channelId, layoutManager, focusedId, first, obj));
  obj = {};
  const merged = Object.assign(ref.current);
  const merged1 = Object.assign(dimensions);
  let id;
  if (participant != null) {
    id = participant.id;
  }
  obj.id = id;
  obj.showSecondaryPIP = stateFromStores;
  let tmp8Result = tmp8(16306);
  obj.mode = tmp8Result.getPIPMode({ channelId, connected, manuallyFocusedId: focusedId, mode, selfHasVideo: tmp10 });
  tmp8Result = tmp8(8692);
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
          if (null != closure_1_6.getParticipant(closure_0, nextResult)) {
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
  tmp5(16308)(channelId, layoutManager, focusedId);
  return obj;
};