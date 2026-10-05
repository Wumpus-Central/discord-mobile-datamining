// discord_app/modules/video_calls/getParticipantTitle.tsx
import intl2 from "../../intl/index.native.tsx";
import CallConstants from "../calls/CallConstants.tsx";
import NicknameUtilsDefault from "../../utils/NicknameUtils.tsx";
import useIsGuestOrLurker from "../guild_member/useIsGuestOrLurker.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
}
