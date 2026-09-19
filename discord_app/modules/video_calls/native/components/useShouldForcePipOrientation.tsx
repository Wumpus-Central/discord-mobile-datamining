// === Module 9657: useShouldForcePipOrientation ===

// Module 9657 (useShouldForcePipOrientation)
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 9615 */;
import usePipVideoOrStreamDefault from "usePipVideoOrStream" /* 9658 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2040 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4772 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const OrientationLockState = fn(2004).OrientationLockState;
const CallConstants = fn(4777);
({ isStreamParticipant: closure_7, ParticipantTypes: closure_8 } = CallConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/useShouldForcePipOrientation.tsx");

export const useShouldForcePipOrientation = function useShouldForcePipOrientation(channel) {
  channel = channel.channel;
  let OrientationType = dependencyMap;
  const tmp = usePipVideoOrStreamDefault(channel.id);
  const items = [ChannelRTCStore, AuthenticationStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => {
    const participant = ChannelRTCStore.getParticipant(channel.id, AuthenticationStore.getId());
    let tmp2 = null;
    if (null != participant) {
      tmp2 = null;
      if (participant.type === constants.USER) {
        tmp2 = null;
        if (null != participant.streamId) {
          tmp2 = participant;
        }
      }
    }
    return tmp2;
  });
  const obj = channel(504);
  const items1 = [EmbeddedActivitiesStore, ChannelRTCStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items1, () => {
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
    let applicationId;
    if (currentEmbeddedActivity != null) {
      applicationId = currentEmbeddedActivity.applicationId;
    }
    let tmp4 = null;
    if (null != applicationId) {
      let id;
      if (selectedParticipant != null) {
        id = selectedParticipant.id;
      }
      ({ applicationId: obj3.applicationId, compositeInstanceId: obj3.instanceId } = currentEmbeddedActivity);
      tmp4 = null;
      if (id === obj2.getEmbeddedActivityParticipantId(obj4)) {
        tmp4 = selectedParticipant;
      }
      obj2 = ChannelRTCParticipants;
      obj4 = { applicationId: null, instanceId: null };
    }
    const obj6 = { focusedEmbeddedActivityParticipant: tmp4, activityLockOrientation: null };
    let pipOrientationLockStateForApp = null;
    if (null != currentEmbeddedActivity) {
      pipOrientationLockStateForApp = EmbeddedActivitiesStore.getPipOrientationLockStateForApp(currentEmbeddedActivity.applicationId);
    }
    obj6.activityLockOrientation = pipOrientationLockStateForApp;
    return obj6;
  });
  ({ focusedEmbeddedActivityParticipant, activityLockOrientation } = stateFromStoresObject);
  let tmp5 = null;
  if (null != tmp) {
    tmp5 = null;
    if (tmp.user.id !== AuthenticationStore.getId()) {
      tmp5 = tmp;
    }
  }
  if (focusedEmbeddedActivityParticipant == null) {
    focusedEmbeddedActivityParticipant = tmp5;
  }
  if (null != focusedEmbeddedActivityParticipant) {
    if (closure_7(focusedEmbeddedActivityParticipant)) {
      if (null == stateFromStores) {
        return tmp2(8602).OrientationType.LANDSCAPE;
      }
    }
  }
  if (activityLockOrientation === OrientationLockState.LANDSCAPE) {
    OrientationType = tmp2(8602).OrientationType;
    let LANDSCAPE = OrientationType.LANDSCAPE;
  } else {
    LANDSCAPE = null;
    if (activityLockOrientation === tmp8.PORTRAIT) {
      LANDSCAPE = tmp2(8602).OrientationType.PORTRAIT;
    }
  }
  const obj3 = channel(504);
};