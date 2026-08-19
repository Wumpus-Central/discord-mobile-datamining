// === Module 9417: handleJoinGuild ===

// Module 9417 (handleJoinGuild)
import obj132 from "obj132" /* 2 */;
import showTooManyUserGuildsAlertDefault from "showTooManyUserGuildsAlert" /* 6778 */;

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