// === Module 16194: isGuildSelectable ===

// Module 16194 (isGuildSelectable)
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate" /* 1396 */;
import reset from "reset" /* 4652 */;
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel" /* 5383 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;

const result = require("obj132").fileFinishedImporting("modules/launchpad/native/isGuildSelectable.tsx");

export default function isGuildSelectable(closure_0) {
  const stageInstancesByGuild = closure_0;
  const isMutedResult = muted.isMuted(closure_0);
  let tmp2 = !isMutedResult;
  if (!isMutedResult) {
    let hasUnreadResult = closure_2.hasUnread(closure_0);
    if (!hasUnreadResult) {
      const _Object = Object;
      let someResult = Object.keys(stageInstancesByGuild.getStageInstancesByGuild(closure_0)).length > 0;
      if (!someResult) {
        allApplicationStreams = allApplicationStreams.getAllApplicationStreams();
        someResult = allApplicationStreams.some((item, index) => item.guildId === closure_0);
      }
      hasUnreadResult = someResult;
    }
    tmp2 = hasUnreadResult;
  }
  return tmp2;
};