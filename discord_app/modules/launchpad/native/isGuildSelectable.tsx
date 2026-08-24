// === Module 16291: isGuildSelectable ===

// Module 16291 (isGuildSelectable)
import closure_0 from "handleStageInstanceCreateOrUpdate" /* 1396 */;
import closure_1 from "reset" /* 4658 */;
import closure_2 from "updateGuildUnreadSentinel" /* 5388 */;
import closure_3 from "updateUserGuildSettingsInternal" /* 5048 */;

const result = require("set").fileFinishedImporting("modules/launchpad/native/isGuildSelectable.tsx");

export default function isGuildSelectable(id) {
  const stageInstancesByGuild = id;
  const isMutedResult = muted.isMuted(id);
  let tmp2 = !isMutedResult;
  if (!isMutedResult) {
    let hasUnreadResult = closure_2.hasUnread(id);
    if (!hasUnreadResult) {
      const _Object = Object;
      let someResult = Object.keys(stageInstancesByGuild.getStageInstancesByGuild(id)).length > 0;
      if (!someResult) {
        allApplicationStreams = allApplicationStreams.getAllApplicationStreams();
        someResult = allApplicationStreams.some((guildId) => guildId.guildId === closure_0);
      }
      hasUnreadResult = someResult;
    }
    tmp2 = hasUnreadResult;
  }
  return tmp2;
};