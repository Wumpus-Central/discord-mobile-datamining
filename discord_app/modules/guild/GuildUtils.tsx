// discord_app/modules/guild/GuildUtils.tsx
import set from "../../../_runtime/00002_set.js";
import showTooManyUserGuildsAlertDefault from "../../actions/GuildActionCreators.tsx";

let result = set.fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(closure_0) {
  importDefault = closure_0;
  if (null != closure_0) {
    const obj = showTooManyUserGuildsAlertDefault;
    showTooManyUserGuildsAlertDefault.joinGuild(closure_0).then(() => {
      const result = callback(closure_1_1[0]).transitionToGuildSync(callback);
    });
    const joinGuildResult = showTooManyUserGuildsAlertDefault.joinGuild(closure_0);
  }
};
