// discord_app/modules/guild/GuildUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import showTooManyUserGuildsAlertDefault from "../../actions/GuildActionCreators.tsx";

let result = obj132.fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(closure_0) {
  importDefault = closure_0;
  if (null != closure_0) {
    showTooManyUserGuildsAlertDefault.joinGuild(closure_0).then((result) => {
      result = callback(dependencyMap[0]).transitionToGuildSync(callback);
    });
    const joinGuildResult = showTooManyUserGuildsAlertDefault.joinGuild(closure_0);
  }
};