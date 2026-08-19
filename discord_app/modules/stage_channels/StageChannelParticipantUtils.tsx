// discord_app/modules/stage_channels/StageChannelParticipantUtils.tsx
import obj132Default from "../../utils/Durations.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import nameFromUser from "../../utils/UserUtils.tsx";

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