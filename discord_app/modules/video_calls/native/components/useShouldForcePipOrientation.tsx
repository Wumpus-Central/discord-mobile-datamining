// discord_app/modules/video_calls/native/components/useShouldForcePipOrientation.tsx
import participantFromServer from "participantFromServer";
import getParticipants from "getParticipants";
import fetchFingerprint from "fetchFingerprint";
import { OrientationLockState } from "items3";
import ParticipantTypes from "ParticipantTypes";
import { usePipVideoOrStream } from "../usePipVideoOrStream.tsx";

let error;
let metroImportAll;
const require = arg1;
({ isStreamParticipant: error, ParticipantTypes: metroImportAll } = ParticipantTypes);
const result = require("fetchFingerprint").fileFinishedImporting("modules/video_calls/native/components/useShouldForcePipOrientation.tsx");

export const useShouldForcePipOrientation = function useShouldForcePipOrientation(channel) {
  let activityLockOrientation;
  let focusedEmbeddedActivityParticipant;
  channel = channel.channel;
  let OrientationType = dependencyMap;
  const tmp = usePipVideoOrStream(channel.id);
  const items = [getParticipants, fetchFingerprint];
  const stateFromStores = channel(589).useStateFromStores(items, () => {
    const participant = outer1_4.getParticipant(channel.id, outer1_5.getId());
    let tmp2 = null;
    if (null != participant) {
      tmp2 = null;
      if (participant.type === outer1_8.USER) {
        tmp2 = null;
        if (null != participant.streamId) {
          tmp2 = participant;
        }
      }
    }
    return tmp2;
  });
  let obj = channel(589);
  let obj2 = fetchFingerprint;
  const items1 = [participantFromServer, getParticipants];
  const stateFromStoresObject = channel(589).useStateFromStoresObject(items1, () => {
    let obj = outer1_3;
    const currentEmbeddedActivity = outer1_3.getCurrentEmbeddedActivity();
    const selectedParticipant = outer1_4.getSelectedParticipant(channel.id);
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
      obj2 = channel(outer1_2[7]);
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
        return tmp2(8901).OrientationType.LANDSCAPE;
      }
    }
  }
  if (activityLockOrientation === OrientationLockState.LANDSCAPE) {
    OrientationType = tmp2(8901).OrientationType;
    let LANDSCAPE = OrientationType.LANDSCAPE;
  } else {
    LANDSCAPE = null;
    if (activityLockOrientation === tmp8.PORTRAIT) {
      LANDSCAPE = tmp2(8901).OrientationType.PORTRAIT;
    }
  }
};