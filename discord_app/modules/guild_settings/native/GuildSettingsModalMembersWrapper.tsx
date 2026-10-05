// === Module 17823: GuildSettingsModalMembersWrapper ===

// Module 17823 (GuildSettingsModalMembersWrapper)
import c from "c" /* 576 */;
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 6767 */;
import GuildSettingsModalMembersWithTabsDefault from "GuildSettingsModalMembersWithTabs" /* 16525 */;
import GuildSettingsModalMembersDefault from "GuildSettingsModalMembers" /* 16527 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
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
}) : ((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(canReviewGuildMemberApplications.useCanReviewGuildMemberApplications(guildId) ? 16525 : 16527), { guildId });
}));