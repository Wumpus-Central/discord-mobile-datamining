// discord_app/modules/stage_channels/StageChannelParticipantUtils.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import util from "../../intl/index.native.tsx";
import UserUtils from "../../utils/UserUtils.tsx";

require = fn;
const DAY = DurationsDefault.Millis.DAY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelParticipantUtils.tsx");

export const participantMemberInfo = function participantMemberInfo(participant) {
  if (obj.isNewUser(participant.user)) {
    const intl5 = util.intl;
    return intl5.string(util.t.VaCdhQ);
  } else {
    const member = participant.member;
    let joinedAt;
    if (member != null) {
      joinedAt = member.joinedAt;
    }
    if (null == joinedAt) {
      const intl4 = util.intl;
      let stringResult = intl4.string(util.t.CQmzib);
    } else {
      if (null != participant.member) {
        if (participant.member.roles.length > 0) {
          const role = participant.role;
          let name;
          if (role != null) {
            name = role.name;
          }
          if (name == null) {
            const intl3 = util.intl;
            name = intl3.string(util.t["97/NdO"]);
          }
          stringResult = name;
        }
      }
      const _Date = Date;
      const date = new Date();
      const _Date2 = Date;
      const time = date.getTime();
      if (time - Date.parse(joinedAt) < DAY) {
        const intl2 = util.intl;
        stringResult = intl2.string(util.t.IKE48n);
      } else {
        const intl = util.intl;
        stringResult = intl.string(util.t.u0gUWt);
      }
    }
    return stringResult;
  }
  obj = UserUtils;
};
