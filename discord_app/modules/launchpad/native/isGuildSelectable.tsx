// discord_app/modules/launchpad/native/isGuildSelectable.tsx
import handleStageInstanceCreateOrUpdate from "../../stage_channels/StageInstanceStore.tsx";
import reset from "../../../stores/ApplicationStreamingStore.tsx";
import updateGuildUnreadSentinel from "../../../stores/GuildReadStateStore.tsx";
import updateUserGuildSettingsInternal from "../../../stores/UserGuildSettingsStore.tsx";

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