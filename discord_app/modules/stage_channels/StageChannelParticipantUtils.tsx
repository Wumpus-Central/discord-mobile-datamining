// === Module 9934: participantMemberInfo ===

// Module 9934 (participantMemberInfo)
import setDefault from "set" /* 687 */;
import nameFromUser from "nameFromUser" /* 4289 */;

require = arg1;
const DAY = setDefault.Millis.DAY;
const result = require("set").fileFinishedImporting("modules/stage_channels/StageChannelParticipantUtils.tsx");

export const participantMemberInfo = function participantMemberInfo(participant) {
  if (obj.isNewUser(participant.user)) {
    const intl5 = tmp(1236).intl;
    return intl5.string(tmp(1236).t.VaCdhQ);
  } else {
    const member = participant.member;
    let joinedAt;
    if (member != null) {
      joinedAt = member.joinedAt;
    }
    if (null == joinedAt) {
      const intl4 = tmp(1236).intl;
      let stringResult = intl4.string(tmp(1236).t.CQmzib);
    } else {
      if (null != participant.member) {
        if (participant.member.roles.length > 0) {
          const role = participant.role;
          let name;
          if (role != null) {
            name = role.name;
          }
          if (name == null) {
            const intl3 = tmp(1236).intl;
            name = intl3.string(tmp(1236).t["97/NdO"]);
          }
          stringResult = name;
        }
      }
      const _Date = Date;
      const date = new Date();
      const _Date2 = Date;
      const time = date.getTime();
      if (time - Date.parse(joinedAt) < DAY) {
        const intl2 = tmp(1236).intl;
        stringResult = intl2.string(tmp(1236).t.IKE48n);
      } else {
        const intl = tmp(1236).intl;
        stringResult = intl.string(tmp(1236).t.u0gUWt);
      }
    }
    return stringResult;
  }
  obj = nameFromUser;
};