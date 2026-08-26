// === Module 10818: useShouldForcePipOrientation ===

// Module 10818 (useShouldForcePipOrientation)
import usePipVideoOrStreamDefault from "usePipVideoOrStream" /* 10819 */;
import closure_3 from "participantFromServer" /* 1390 */;
import closure_4 from "getParticipants" /* 4460 */;
import closure_5 from "fetchFingerprint" /* 1218 */;
import { OrientationLockState } from "items3" /* 4472 */;
import ParticipantTypes from "ParticipantTypes" /* 4465 */;

const require = arg1;
({ isStreamParticipant: error, ParticipantTypes: closure_8 } = ParticipantTypes);
const result = require("set").fileFinishedImporting("modules/video_calls/native/components/useShouldForcePipOrientation.tsx");

export const useShouldForcePipOrientation = function useShouldForcePipOrientation(channel) {
  channel = channel.channel;
  let OrientationType = dependencyMap;
  const tmp = usePipVideoOrStreamDefault(channel.id);
  const items = [closure_4, closure_5];
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
  let obj2 = closure_5;
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
      obj2 = channel(closure_1_2[7]);
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
    if (tmp.user.id !== obj2.getId()) {
      tmp5 = tmp;
    }
  }
  if (focusedEmbeddedActivityParticipant == null) {
    focusedEmbeddedActivityParticipant = tmp5;
  }
  if (null != focusedEmbeddedActivityParticipant) {
    if (callback(focusedEmbeddedActivityParticipant)) {
      if (null == stateFromStores) {
        return tmp2(9110).OrientationType.LANDSCAPE;
      }
    }
  }
  if (activityLockOrientation === OrientationLockState.LANDSCAPE) {
    OrientationType = tmp2(9110).OrientationType;
    let LANDSCAPE = OrientationType.LANDSCAPE;
  } else {
    LANDSCAPE = null;
    if (activityLockOrientation === tmp8.PORTRAIT) {
      LANDSCAPE = tmp2(9110).OrientationType.PORTRAIT;
    }
  }
};