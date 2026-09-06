// discord_app/modules/video_calls/native/components/useShouldForcePipOrientation.tsx
import ChannelRTCParticipants from "../../../calls/ChannelRTCParticipants.tsx";
import usePipVideoOrStreamDefault from "../usePipVideoOrStream.tsx";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";

require = fn;
const OrientationLockState = fn(1920).OrientationLockState;
const CallConstants = fn(4581);
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
  let obj = channel(504);
  let obj2 = AuthenticationStore;
  const items1 = [EmbeddedActivitiesStore, ChannelRTCStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items1, () => {
    let obj = EmbeddedActivitiesStore;
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
      obj = { applicationId: null, instanceId: null };
      ({ applicationId: obj3.applicationId, compositeInstanceId: obj3.instanceId } = currentEmbeddedActivity);
      tmp4 = null;
      if (id === obj2.getEmbeddedActivityParticipantId(obj)) {
        tmp4 = selectedParticipant;
      }
      obj2 = ChannelRTCParticipants;
    }
    obj = { focusedEmbeddedActivityParticipant: tmp4, activityLockOrientation: null };
    let pipOrientationLockStateForApp = null;
    if (null != currentEmbeddedActivity) {
      pipOrientationLockStateForApp = obj.getPipOrientationLockStateForApp(currentEmbeddedActivity.applicationId);
    }
    obj.activityLockOrientation = pipOrientationLockStateForApp;
    return obj;
  });
  ({ focusedEmbeddedActivityParticipant, activityLockOrientation } = stateFromStoresObject);
  let tmp5 = null;
  if (null != tmp) {
    tmp5 = null;
    if (tmp.user.id !== obj2.getId()) {
      tmp5 = tmp;
    }
  }
  if (focusedEmbeddedActivityParticipant == null) {
    focusedEmbeddedActivityParticipant = tmp5;
  }
  if (null != focusedEmbeddedActivityParticipant) {
    if (closure_7(focusedEmbeddedActivityParticipant)) {
      if (null == stateFromStores) {
        return tmp2(8332).OrientationType.LANDSCAPE;
      }
    }
  }
  if (activityLockOrientation === OrientationLockState.LANDSCAPE) {
    OrientationType = tmp2(8332).OrientationType;
    let LANDSCAPE = OrientationType.LANDSCAPE;
  } else {
    LANDSCAPE = null;
    if (activityLockOrientation === tmp8.PORTRAIT) {
      LANDSCAPE = tmp2(8332).OrientationType.PORTRAIT;
    }
  }
};
