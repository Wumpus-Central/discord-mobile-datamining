// discord_app/modules/video_calls/getParticipantTitle.tsx
import set from "../../../_runtime/00002_set.js";
import ParticipantTypes2 from "../calls/CallConstants.tsx";
import getNicknameDefault from "../../utils/NicknameUtils.tsx";
import useIsGuestOrLurker from "../guild_member/useIsGuestOrLurker.tsx";

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