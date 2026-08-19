// === Module 16300: isVoicePanelParticipantFocusable ===

// Module 16300 (isVoicePanelParticipantFocusable)
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import canRenderParticipantVideo from "canRenderParticipantVideo" /* 11444 */;
import participantFromServer from "participantFromServer" /* 1390 */;
import getParticipants from "getParticipants" /* 4773 */;
import reset from "reset" /* 4652 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import ParticipantTypes from "ParticipantTypes" /* 4544 */;

require = fn;
function isVoicePanelParticipantFocusable(sharedValue1, closure_1, id2, closure_1_3, closure_1_4, closure_22, closure_1_4) {
  let obj = closure_1_3;
  if (closure_1_3 === undefined) {
    obj = closure_3;
  }
  let tmp = closure_1_4;
  if (closure_1_4 === undefined) {
    tmp = closure_5;
  }
  let obj2 = closure_22;
  if (closure_22 === undefined) {
    obj2 = closure_2;
  }
  let obj3 = closure_1_4;
  if (closure_1_4 === undefined) {
    obj3 = closure_4;
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
        let tmp4Result = canRenderParticipantVideo;
        result = tmp4Result.canRenderParticipantVideo(participant, tmp);
      } else {
        tmp4Result = isDiscordFrontendDevelopment;
        tmp4Result.assertNever(participant);
      }
      return result;
    }
  }
}
({ isActivityParticipant: closure_6, isStreamParticipant: error, isUserParticipant: closure_8 } = ParticipantTypes);
let result = require("obj132").fileFinishedImporting("modules/voice_panel/native/utils/useIsVoicePanelParticipantFocusable.tsx");

export default function useIsVoicePanelParticipantFocusable(arg0, arg1, arg2) {
  const _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  const items = [closure_3, closure_5, closure_2, closure_4];
  return _require(589).useStateFromStores(items, () => isVoicePanelParticipantFocusable(closure_0, closure_1, closure_2, closure_1_3, closure_1_5, closure_2, closure_1_4));
};
export { isVoicePanelParticipantFocusable };