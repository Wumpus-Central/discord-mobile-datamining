// discord_app/modules/voice_panel/native/utils/useIsVoicePanelParticipantFocusable.tsx
import participantFromServer from "participantFromServer";
import getParticipants from "getParticipants";
import reset from "reset";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import ParticipantTypes from "ParticipantTypes";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
function isVoicePanelParticipantFocusable(sharedValue1, closure_1, id2, arg3, outer1_4) {
  let obj = arg3;
  if (arg3 === undefined) {
    obj = getParticipants;
  }
  let tmp = outer1_4;
  if (outer1_4 === undefined) {
    tmp = _detectH265HardwareDecode;
  }
  let obj2 = arg5;
  if (arg5 === undefined) {
    obj2 = participantFromServer;
  }
  let obj3 = arg6;
  if (arg6 === undefined) {
    obj3 = reset;
  }
  if (null == id2) {
    return false;
  } else {
    const participant = obj.getParticipant(closure_1, id2);
    if (null == participant) {
      return false;
    } else if (callback(participant)) {
      const currentEmbeddedActivity = obj2.getCurrentEmbeddedActivity();
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      return null != applicationId && participant.applicationId === currentEmbeddedActivity.applicationId;
    } else {
      if (callback2(participant)) {
        let result = null != obj3.getActiveStreamForUser(participant.user.id, sharedValue1);
      } else if (callback3(participant)) {
        let tmp4Result = tmp4(10590);
        result = tmp4Result.canRenderParticipantVideo(participant, tmp);
      } else {
        tmp4Result = tmp4(1351);
        tmp4Result.assertNever(participant);
      }
      return result;
    }
  }
}
({ isActivityParticipant: closure_6, isStreamParticipant: error, isUserParticipant: metroImportAll } = ParticipantTypes);
let result = require("reset").fileFinishedImporting("modules/voice_panel/native/utils/useIsVoicePanelParticipantFocusable.tsx");

export default function useIsVoicePanelParticipantFocusable(arg0, arg1, arg2) {
  const _require = arg0;
  const dependencyMap = arg1;
  let participantFromServer = arg2;
  const items = [getParticipants, _detectH265HardwareDecode, participantFromServer, reset];
  return _initialize.useStateFromStores(items, () => outer1_9(closure_0, closure_1, participantFromServer, outer1_3, outer1_5, participantFromServer, outer1_4));
};
export { isVoicePanelParticipantFocusable };