// discord_app/modules/video_calls/native/components/useShouldForcePipOrientation.tsx
import usePipVideoOrStreamDefault from "../usePipVideoOrStream.tsx";
import participantFromServer from "../../../activities/EmbeddedActivitiesStore.tsx";
import getParticipants from "../../../calls/ChannelRTCStore.tsx";
import fetchFingerprint from "../../../../stores/AuthenticationStore.tsx";
import { OrientationLockState } from "../../../activities/Constants.tsx";
import ParticipantTypes from "../../../calls/CallConstants.tsx";

const require = fn;
({ isStreamParticipant: error, ParticipantTypes: closure_8 } = ParticipantTypes);
const result = require("obj132").fileFinishedImporting("modules/video_calls/native/components/useShouldForcePipOrientation.tsx");

export const useShouldForcePipOrientation = function useShouldForcePipOrientation(channel) {
  channel = channel.channel;
  let OrientationType = dependencyMap;
  const tmp = usePipVideoOrStreamDefault(channel.id);
  const items = [closure_4, id];
  const stateFromStores = channel(589).useStateFromStores(items, () => {
    const participant = closure_1_4.getParticipant(channel.id, closure_1_5.getId());
    let tmp2 = null;
    if (null != participant) {
      tmp2 = null;
      if (participant.type === closure_1_8.USER) {
        tmp2 = null;
        if (null != participant.streamId) {
          tmp2 = participant;
        }
      }
    }
    return tmp2;
  });
  let obj = channel(589);
  const items1 = [closure_3, closure_4];
  const stateFromStoresObject = channel(589).useStateFromStoresObject(items1, () => {
    let obj = closure_1_3;
    const currentEmbeddedActivity = closure_1_3.getCurrentEmbeddedActivity();
    const selectedParticipant = closure_1_4.getSelectedParticipant(channel.id);
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
      ({ applicationId: obj3[0], compositeInstanceId: obj3[1] } = currentEmbeddedActivity);
      tmp4 = null;
      if (id === obj2.getEmbeddedActivityParticipantId(obj)) {
        tmp4 = selectedParticipant;
      }
      obj2 = channel(dependencyMap[7]);
    }
    obj = { focusedEmbeddedActivityParticipant: tmp4, activityLockOrientation: null };
    let pipOrientationLockStateForApp = null;
    if (null != currentEmbeddedActivity) {
      pipOrientationLockStateForApp = obj.getPipOrientationLockStateForApp(currentEmbeddedActivity.applicationId);
    }
    obj[1] = pipOrientationLockStateForApp;
    return obj;
  });
  ({ focusedEmbeddedActivityParticipant, activityLockOrientation } = stateFromStoresObject);
  let tmp5 = null;
  if (null != tmp) {
    tmp5 = null;
    if (tmp.user.id !== id.getId()) {
      tmp5 = tmp;
    }
  }
  if (focusedEmbeddedActivityParticipant == null) {
    focusedEmbeddedActivityParticipant = tmp5;
  }
  if (null != focusedEmbeddedActivityParticipant) {
    if (callback(focusedEmbeddedActivityParticipant)) {
      if (null == stateFromStores) {
        return tmp2(8671).OrientationType.LANDSCAPE;
      }
    }
  }
  if (activityLockOrientation === OrientationLockState.LANDSCAPE) {
    OrientationType = tmp2(8671).OrientationType;
    let LANDSCAPE = OrientationType.LANDSCAPE;
  } else {
    LANDSCAPE = null;
    if (activityLockOrientation === tmp8.PORTRAIT) {
      LANDSCAPE = tmp2(8671).OrientationType.PORTRAIT;
    }
  }
  const obj3 = channel(589);
};