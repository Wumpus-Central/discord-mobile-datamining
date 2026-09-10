// === Module 17744: GuildSettingsModalMembersWrapper ===

// Module 17744 (GuildSettingsModalMembersWrapper)
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 7316 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default noop.memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(canReviewGuildMemberApplications.useCanReviewGuildMemberApplications(guildId) ? 16658 : 16660), { guildId });
});