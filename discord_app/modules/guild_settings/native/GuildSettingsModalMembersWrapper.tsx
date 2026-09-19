// === Module 18074: GuildSettingsModalMembersWrapper ===

// Module 18074 (GuildSettingsModalMembersWrapper)
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 7504 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default noop.memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(canReviewGuildMemberApplications.useCanReviewGuildMemberApplications(guildId) ? 16912 : 16914), { guildId });
});