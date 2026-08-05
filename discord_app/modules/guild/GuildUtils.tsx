// discord_app/modules/guild/GuildUtils.tsx
let result = require("set").fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(closure_0) {
  const importDefault = closure_0;
  if (null != closure_0) {
    const obj = require("../../actions/GuildActionCreators.tsx");
    require("../../actions/GuildActionCreators.tsx").joinGuild(closure_0).then(() => {
      const result = callback(outer1_1[0]).transitionToGuildSync(callback);
    });
    const joinGuildResult = require("../../actions/GuildActionCreators.tsx").joinGuild(closure_0);
  }
};