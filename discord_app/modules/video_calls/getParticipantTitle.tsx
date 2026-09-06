// === Module 10048: getParticipantTitle ===

// Module 10048 (getParticipantTitle)
import util from "util" /* 1114 */;
import CallConstants from "CallConstants" /* 4581 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4712 */;
import useIsGuestOrLurker from "useIsGuestOrLurker" /* 10049 */;
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
    if (user != null) {
      id = user.id;
    }
    const result = useIsGuestOrLurker.isGuestOrLurkerInGuild(guild_id.guild_id, id);
    let str = "";
    const name1 = NicknameUtilsDefault.getName(guild_id.getGuildId(), guild_id.id, type.user);
    if (result) {
      const intl = util.intl;
      const _HermesInternal = HermesInternal;
      str = " " + intl.string(util.t["pFO/Ph"]);
    }
    return name1 + str;
  }
};