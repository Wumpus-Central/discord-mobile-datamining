// discord_app/modules/guild/GuildUtils.tsx
import { showTooManyUserGuildsAlert } from "../../actions/GuildActionCreators.tsx";
let result = require("set").fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(closure_0) {
  const importDefault = closure_0;
  if (null != closure_0) {
    const obj = showTooManyUserGuildsAlert;
    showTooManyUserGuildsAlert.joinGuild(closure_0).then(() => {
      const result = callback(outer1_1[0]).transitionToGuildSync(callback);
    });
    const joinGuildResult = showTooManyUserGuildsAlert.joinGuild(closure_0);
  }
};