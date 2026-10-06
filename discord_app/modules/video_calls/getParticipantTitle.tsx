// === Module 9745: getParticipantTitle ===

// Module 9745 (getParticipantTitle)
import intl2 from "intl" /* 1126 */;
import CallConstants from "CallConstants" /* 4917 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5048 */;
import useIsGuestOrLurker from "useIsGuestOrLurker" /* 9746 */;
import size from "module_2" /* 2 */;

const ParticipantTypes = CallConstants.ParticipantTypes;
let result = size.fileFinishedImporting("modules/video_calls/getParticipantTitle.tsx");

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
    const isGuestOrLurkerInGuild = useIsGuestOrLurker.isGuestOrLurkerInGuild;
    guild_id = guild_id.guild_id;
    useIsGuestOrLurker;
    if (user != null) {
      id = user.id;
    }
    const result = isGuestOrLurkerInGuild(guild_id, id);
    let str = "";
    const obj = NicknameUtilsDefault;
    const name1 = obj.getName(guild_id.getGuildId(), guild_id.id, type.user);
    if (result) {
      const intl = intl2.intl;
      const _HermesInternal = HermesInternal;
      str = " " + intl.string(intl2.t["pFO/Ph"]);
    }
    return name1 + str;
  }
};