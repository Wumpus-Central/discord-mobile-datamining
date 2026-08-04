// discord_app/modules/video_calls/getParticipantTitle.tsx
import { ParticipantTypes } from "ParticipantTypes";

let result = require("getNickname").fileFinishedImporting("modules/video_calls/getParticipantTitle.tsx");

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
    const result = require(10855) /* useIsGuestOrLurker */.isGuestOrLurkerInGuild(guild_id.guild_id, id);
    const obj2 = require(10855) /* useIsGuestOrLurker */;
    let str = "";
    const name1 = importDefault(4383).getName(guild_id.getGuildId(), guild_id.id, type.user);
    if (result) {
      const intl = tmp10(1236).intl;
      const _HermesInternal = HermesInternal;
      str = " " + intl.string(tmp10(1236).t["pFO/Ph"]);
    }
    return name1 + str;
  }
};