// discord_app/modules/guild/GuildUtils.tsx
import GuildActionCreatorsDefault from "../../actions/GuildActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(guildId) {
  importDefault = guildId;
  if (null != guildId) {
    GuildActionCreatorsDefault.joinGuild(guildId).then(() => {
      const result = GuildActionCreatorsDefault.transitionToGuildSync(closure_0);
    });
    const joinGuildResult = GuildActionCreatorsDefault.joinGuild(guildId);
  }
};
