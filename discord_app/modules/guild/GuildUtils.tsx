// discord_app/modules/guild/GuildUtils.tsx
import GuildActionCreatorsDefault from "../../actions/GuildActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

let importDefault;

let result = size.fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(guildId) {
  importDefault = guildId;
  if (null != guildId) {
    let obj = GuildActionCreatorsDefault;
    const joinGuildResult = obj.joinGuild(guildId);
    joinGuildResult.then(() => {
      const obj = GuildActionCreatorsDefault;
      const result = obj.transitionToGuildSync(guildId);
    });
  }
};
