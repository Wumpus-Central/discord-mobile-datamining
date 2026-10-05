// discord_app/modules/stage_channels/StageChannelParticipantUtils.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import intl6 from "../../intl/index.native.tsx";
import UserUtils from "../../utils/UserUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const DAY = DurationsDefault.Millis.DAY;
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelParticipantUtils.tsx");

export const participantMemberInfo = function participantMemberInfo(participant) {
  const obj = UserUtils;
  if (obj.isNewUser(participant.user)) {
    const intl5 = intl6.intl;
    return intl5.string(intl6.t.VaCdhQ);
  } else {
    let stringResult;
    const member = participant.member;
    let joinedAt;
    if (member != null) {
      joinedAt = member.joinedAt;
    }
    if (null == joinedAt) {
      const intl4 = intl6.intl;
      stringResult = intl4.string(intl6.t.CQmzib);
    } else {
      if (null != participant.member) {
        if (participant.member.roles.length > 0) {
          const role = participant.role;
          let name;
          if (role != null) {
            name = role.name;
          }
          if (name == null) {
            const intl3 = intl6.intl;
            name = intl3.string(intl6.t["97/NdO"]);
          }
          stringResult = name;
        }
      }
      const _Date = Date;
      const self = this;
      const self2 = this;
      const _Date2 = Date;
      const date = new Date();
      const time = date.getTime();
      if (time - Date.parse(joinedAt) < DAY) {
        const intl2 = intl6.intl;
        stringResult = intl2.string(intl6.t.IKE48n);
      } else {
        const intl = intl6.intl;
        stringResult = intl.string(intl6.t.u0gUWt);
      }
    }
    return stringResult;
  }
};
