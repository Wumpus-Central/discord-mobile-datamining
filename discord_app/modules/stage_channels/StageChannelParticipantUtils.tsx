// === Module 12521: participantMemberInfo ===

// Module 12521 (participantMemberInfo)
import obj132Default from "obj132" /* 687 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import nameFromUser from "nameFromUser" /* 4219 */;

require = fn;
const DAY = obj132Default.Millis.DAY;
const result = require("obj132").fileFinishedImporting("modules/stage_channels/StageChannelParticipantUtils.tsx");

export const participantMemberInfo = function participantMemberInfo(participant) {
  if (obj.isNewUser(participant.user)) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.VaCdhQ);
  } else {
    const member = participant.member;
    let joinedAt;
    if (member != null) {
      joinedAt = member.joinedAt;
    }
    if (null == joinedAt) {
      const intl4 = getSystemLocale.intl;
      let stringResult = intl4.string(getSystemLocale.t.CQmzib);
    } else {
      if (null != participant.member) {
        if (participant.member.roles.length > 0) {
          const role = participant.role;
          let name;
          if (role != null) {
            name = role.name;
          }
          if (name == null) {
            const intl3 = getSystemLocale.intl;
            name = intl3.string(getSystemLocale.t["97/NdO"]);
          }
          stringResult = name;
        }
      }
      const _Date = Date;
      const date = new Date();
      const _Date2 = Date;
      const time = date.getTime();
      if (time - Date.parse(joinedAt) < DAY) {
        const intl2 = getSystemLocale.intl;
        stringResult = intl2.string(getSystemLocale.t.IKE48n);
      } else {
        const intl = getSystemLocale.intl;
        stringResult = intl.string(getSystemLocale.t.u0gUWt);
      }
    }
    return stringResult;
  }
  obj = nameFromUser;
};