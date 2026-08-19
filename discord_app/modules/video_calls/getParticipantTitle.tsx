// discord_app/modules/video_calls/getParticipantTitle.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../intl/index.native.tsx";
import ParticipantTypes2 from "../calls/CallConstants.tsx";
import getNicknameDefault from "../../utils/NicknameUtils.tsx";
import useIsGuestOrLurker from "../guild_member/useIsGuestOrLurker.tsx";

const ParticipantTypes = ParticipantTypes2.ParticipantTypes;
let result = obj132.fileFinishedImporting("modules/video_calls/getParticipantTitle.tsx");

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
    const name1 = getNicknameDefault.getName(guild_id.getGuildId(), guild_id.id, type.user);
    if (result) {
      const intl = getSystemLocale.intl;
      const _HermesInternal = HermesInternal;
      str = " " + intl.string(getSystemLocale.t["pFO/Ph"]);
    }
    return name1 + str;
  }
};