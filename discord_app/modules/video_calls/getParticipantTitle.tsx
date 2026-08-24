// === Module 12660: getParticipantTitle ===

// Module 12660 (getParticipantTitle)
import set from "set" /* 2 */;
import ParticipantTypes2 from "ParticipantTypes" /* 4549 */;
import getNicknameDefault from "getNickname" /* 4801 */;
import useIsGuestOrLurker from "useIsGuestOrLurker" /* 12661 */;

const ParticipantTypes = ParticipantTypes2.ParticipantTypes;
let result = set.fileFinishedImporting("modules/video_calls/getParticipantTitle.tsx");

export default function getParticipantTitle(guild_id, type, name) {
  if (type.type === ParticipantTypes.ACTIVITY) {
    name = undefined;
    if (name != null) {
      name = name.name;
    }
    if (name == null) {
      name = null;
    }
    return name;
  } else {
    const user = type.user;
    let id;
    if (user != null) {
      id = user.id;
    }
    const result = useIsGuestOrLurker.isGuestOrLurkerInGuild(guild_id.guild_id, id);
    const obj2 = useIsGuestOrLurker;
    let str = "";
    const name1 = getNicknameDefault.getName(guild_id.getGuildId(), guild_id.id, type.user);
    if (result) {
      const intl = tmp10(1236).intl;
      const _HermesInternal = HermesInternal;
      str = " " + intl.string(tmp10(1236).t["pFO/Ph"]);
    }
    return name1 + str;
  }
};