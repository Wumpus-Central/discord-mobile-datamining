// discord_app/modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx
import c from "../../../../_runtime/00576_c.js";
import canReviewGuildMemberApplications from "../../guild_member_verification/canReviewGuildMemberApplications.tsx";
import GuildSettingsModalMembersWithTabsDefault from "GuildSettingsModalMembersWithTabs.tsx";
import GuildSettingsModalMembersDefault from "GuildSettingsModalMembers.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GuildSettingsModalMembersWrapper(guildId) {
        let tmp = dependencyMap;
        const cResult = c.c(4);
        guildId = guildId.guildId;
        if (obj2.useCanReviewGuildMemberApplications(guildId)) {
          if (cResult[0] !== guildId) {
            const obj3 = { guildId };
            tmp = jsx(GuildSettingsModalMembersWithTabsDefault, { guildId });
            cResult[0] = guildId;
            cResult[1] = tmp;
          }
        } else {
          if (cResult[2] !== guildId) {
            const obj4 = { guildId };
            const tmp6 = jsx(GuildSettingsModalMembersDefault, { guildId });
            cResult[2] = guildId;
            cResult[3] = tmp6;
            let tmp3 = tmp6;
          } else {
            tmp3 = cResult[3];
          }
          return tmp3;
        }
        obj2 = canReviewGuildMemberApplications;
      }
    : function GuildSettingsModalMembersWrapper(guildId) {
        guildId = guildId.guildId;
        return jsx(
          importDefault(canReviewGuildMemberApplications.useCanReviewGuildMemberApplications(guildId) ? 16944 : 16946),
          { guildId },
        );
      },
);
