import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate";
import reset from "reset";
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";

const result = require("updateGuildUnreadSentinel").fileFinishedImporting("modules/launchpad/native/isGuildSelectable.tsx");

export default function isGuildSelectable(id) {
  const stageInstancesByGuild = id;
  const isMutedResult = muted.isMuted(id);
  let tmp2 = !isMutedResult;
  if (!isMutedResult) {
    let hasUnreadResult = updateGuildUnreadSentinel.hasUnread(id);
    if (!hasUnreadResult) {
      const _Object = Object;
      let someResult = Object.keys(stageInstancesByGuild.getStageInstancesByGuild(id)).length > 0;
      if (!someResult) {
        allApplicationStreams = allApplicationStreams.getAllApplicationStreams();
        someResult = allApplicationStreams.some((guildId) => guildId.guildId === handleStageInstanceCreateOrUpdate);
      }
      hasUnreadResult = someResult;
    }
    tmp2 = hasUnreadResult;
  }
  return tmp2;
};